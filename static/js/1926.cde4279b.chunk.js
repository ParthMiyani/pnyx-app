"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1926],{76061:(t,e,r)=>{r.d(e,{D:()=>g,F:()=>l,I:()=>s,a:()=>c,b:()=>u,c:()=>d,f:()=>p,g:()=>f,u:()=>h});var a=r(94808),n=r(49716),i=r(2257),o=r(34029);const s=(()=>n.arrayify("0x80ac58cd"))(),c=(()=>n.arrayify("0xd9b67a26"))(),l={name:"Failed to load NFT metadata"};async function p(t,e,r){if(e.startsWith("data:application/json;base64")&&"undefined"!==typeof Buffer){const r=e.split(",")[1],n=JSON.parse(Buffer.from(r,"base64").toString("utf-8"));return a.C.parse({...n,id:i.O$.from(t).toString(),uri:e})}const o=e.replace("{id}",n.hexZeroPad(i.O$.from(t).toHexString(),32).slice(2));let s;try{s=await r.downloadJSON(o)}catch(c){const a=e.replace("{id}",i.O$.from(t).toString());try{s=await r.downloadJSON(a)}catch(p){console.warn("failed to get token metadata: ".concat(JSON.stringify({tokenId:t.toString(),tokenUri:e})," -- falling back to default metadata")),s=l}}return a.C.parse({...s,id:i.O$.from(t).toString(),uri:e})}async function d(t,e,n,d){let u;const h=(await r.e(5025).then(r.t.bind(r,25025,19))).default,f=new o.CH(t,h,e),[g,w]=await Promise.all([f.supportsInterface(s),f.supportsInterface(c)]);if(g){const a=(await Promise.resolve().then(r.t.bind(r,34161,19))).default,i=new o.CH(t,a,e);u=await i.tokenURI(n)}else{if(!w)throw Error("Contract must implement ERC 1155 or ERC 721.");{const a=(await Promise.resolve().then(r.t.bind(r,50266,19))).default,i=new o.CH(t,a,e);u=await i.uri(n)}}return u?p(n,u,d):a.C.parse({...l,id:i.O$.from(n).toString(),uri:""})}async function u(t,e){return"string"===typeof t?t:await e.upload(a.a.parse(t))}async function h(t,e,r,n){if(function(t){return void 0===t.find((t=>"string"!==typeof t))}(t))return t;if(function(t){return void 0===t.find((t=>"object"!==typeof t))}(t)){return await e.uploadBatch(t.map((t=>a.a.parse(t))),{rewriteFileNames:{fileStartNumber:r||0},onProgress:null===n||void 0===n?void 0:n.onProgress})}throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function f(t){const e=t[0].substring(0,t[0].lastIndexOf("/"));for(let r=0;r<t.length;r++){const a=t[r].substring(0,t[r].lastIndexOf("/"));if(e!==a)throw new Error("Can only create batches with the same base URI for every entry in the batch. Expected '".concat(e,"' but got '").concat(a,"'"))}return e.replace(/\/$/,"")+"/"}const g=100},69516:(t,e,r)=>{r.d(e,{E:()=>c,R:()=>o,S:()=>s,a:()=>l});var a=r(2257),n=r(60874),i=r(99816);const o=(()=>n.z.union([n.z.date().transform((t=>a.O$.from(Math.floor(t.getTime()/1e3)))),n.z.number().transform((t=>a.O$.from(t)))]))(),s=(()=>o.default(new Date(0)))(),c=(()=>o.default(new Date(Date.now()+31536e7)))();function l(t,e){if(!t)throw new i.x(e);return t}},72106:(t,e,r)=>{r.d(e,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},28314:(t,e,r)=>{r.r(e),r.d(e,{MarketplaceV3:()=>h});var a=r(64572),n=r(69516),i=r(40774),o=r(99816),s=r(34243),c=r(72106),l=r(73731),p=r(66821),d=r(4425),u=r(24115);r(80518),r(66315),r(98528);class h{get directListings(){return(0,n.a)(this.detectDirectListings(),o.dv)}get englishAuctions(){return(0,n.a)(this.detectEnglishAuctions(),o.dw)}get offers(){return(0,n.a)(this.detectOffers(),o.dx)}get chainId(){return this._chainId}constructor(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.cq(t,e,n,a,r);this._chainId=d,this.abi=o.bj.parse(n||[]),this.contractWrapper=u,this.storage=r,this.metadata=new i.C(this.contractWrapper,o.bZ,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new p.C(this.contractWrapper,h.contractRoles),this.encoder=new s.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.platformFees=new l.C(this.contractWrapper),this.interceptor=new c.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,e,r){return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectDirectListings(){if((0,i.d)(this.contractWrapper,"DirectListings"))return new d.M(this.contractWrapper,this.storage)}detectEnglishAuctions(){if((0,i.d)(this.contractWrapper,"EnglishAuctions"))return new d.a(this.contractWrapper,this.storage)}detectOffers(){if((0,i.d)(this.contractWrapper,"Offers"))return new d.b(this.contractWrapper,this.storage)}}(0,a.Z)(h,"contractRoles",o.dB)},94808:(t,e,r)=>{r.d(e,{B:()=>c,C:()=>d,N:()=>p,a:()=>l,s:()=>u});var a=r(99816),n=r(60874),i=r(34243);const o=(()=>n.z.object({}).catchall(n.z.union([a.cw,n.z.unknown()])))(),s=(()=>n.z.union([n.z.array(o),o]).optional().nullable())(),c=(()=>n.z.object({name:n.z.union([n.z.string(),n.z.number()]).optional().nullable(),description:n.z.string().nullable().optional().nullable(),image:a.cx.nullable().optional(),animation_url:a.cx.optional().nullable()}))(),l=(()=>c.extend({external_url:a.cx.nullable().optional(),background_color:a.cy.optional().nullable(),properties:s,attributes:s}).catchall(n.z.union([a.cw,n.z.unknown()])))(),p=(()=>n.z.union([l,n.z.string()]))(),d=(()=>l.extend({id:n.z.string(),uri:n.z.string(),image:n.z.string().nullable().optional(),external_url:n.z.string().nullable().optional(),animation_url:n.z.string().nullable().optional()}))();async function u(t,e,n,o){if(!(0,i.i)(n)){const i=(await Promise.resolve().then(r.t.bind(r,49242,19))).default,s=t.getSigner(),c=t.getProvider(),l=new a.cq(s||c,n,i,t.options,t.storage),p=await t.getSignerAddress(),d=t.address;return(await l.read("allowance",[p,d])).lt(e)&&await l.sendTransaction("approve",[d,e]),o}o.value=e}}}]);
//# sourceMappingURL=1926.cde4279b.chunk.js.map