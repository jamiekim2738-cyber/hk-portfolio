const fs=require('fs');
for(const n of ['index','article','image','video','final']){
 const h=fs.readFileSync(n+'.html','utf8');
 for(const m of h.matchAll(/(?:href|src)="([^"]+)"/g))if(!/^(https?:|#)/.test(m[1])&&!fs.existsSync(m[1]))throw Error(m[1]);
 if(!h.includes('<html lang="ko">'))throw Error(n);
 for(const page of ['article','image','video','final'])if(!h.includes('href="'+page+'.html"'))throw Error('Missing navigation');
 console.log(n+': links and navigation OK');
}
