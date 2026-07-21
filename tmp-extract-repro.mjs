import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { PDFDocument, rgb, StandardFonts } from '@cantoo/pdf-lib';

const OUT = resolve('out');
const MIME = {'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.png':'image/png','.wasm':'application/wasm','.json':'application/json','.txt':'text/plain','.svg':'image/svg+xml','.xml':'application/xml'};
const server = createServer(async (req,res)=>{ try{ let p=decodeURIComponent(new URL(req.url,'http://x').pathname); if(p.endsWith('/'))p+='index.html'; let f=join(OUT,p); if(!existsSync(f)&&!extname(p))f=join(OUT,p,'index.html'); const d=await readFile(f); res.writeHead(200,{'Content-Type':MIME[extname(f)]??'application/octet-stream'}); res.end(d);}catch{res.writeHead(404);res.end();} });
await new Promise(r=>server.listen(4893,r));

await mkdir('tmp-extract-repro', {recursive:true});
const doc = await PDFDocument.create();
const font = await doc.embedFont(StandardFonts.HelveticaBold);
for (let i=0;i<5;i++){ const pg = doc.addPage([595,842]); pg.drawText(`Test Page ${i+1}`, {x:60,y:700,size:28,font,color:rgb(0.2,0.2,0.5)}); }
await writeFile('tmp-extract-repro/sample.pdf', await doc.save());

const page = await (await chromium.launch()).newPage();
page.on('console', m=>{ if(m.type()==='error'||m.type()==='warning') console.log('[console]', m.type(), m.text().slice(0,300)); });
page.on('pageerror', e=>console.log('[pageerror]', String(e).slice(0,500)));
page.on('requestfailed', r=>console.log('[requestfailed]', r.url(), r.failure()?.errorText));
await page.goto('http://localhost:4893/extract-pages/', {waitUntil:'networkidle'});
await page.locator('input[type="file"]').first().setInputFiles('tmp-extract-repro/sample.pdf');
await page.locator('img[src^="data:image"]').first().waitFor({timeout:30000});
await page.waitForTimeout(1000);
// 选中第 1、3 页
await page.locator('img[src^="data:image"]').nth(0).click();
await page.locator('img[src^="data:image"]').nth(2).click();
await page.waitForTimeout(500);
await page.getByRole('button', {name: /^Extract selected pages$/}).click();
await page.waitForTimeout(6000);
const body = await page.locator('body').innerText();
console.log('ready card:', body.includes('Your file is ready'));
console.log('error shown:', /went wrong|error/i.test(body));
await page.context().browser().close(); server.close();
