"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6821],{40774:(t,r,e)=>{e.d(r,{C:()=>l,G:()=>d,a:()=>h,b:()=>u,d:()=>i,h:()=>p});var a=e(64572),s=e(99816),o=e(24115),n=e(6222),c=e(18281);function i(t,r){return(0,s.ai)(t.abi,r,t.extensions)}function p(t,r){return t in r.readContract.functions}class l{constructor(t,r,e){(0,a.Z)(this,"featureName",s.c_.name),(0,a.Z)(this,"set",(0,o.d)((async t=>{const r=await this._parseAndUploadMetadata(t),e=this.contractWrapper;if(this.supportsContractMetadata(e))return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:t=>({receipt:t,data:this.get})});throw new s.x(s.c_)}))),(0,a.Z)(this,"update",(0,o.d)((async t=>await this.set.prepare({...await this.get(),...t})))),this.contractWrapper=t,this.schema=r,this.storage=e}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){const r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{var r,e;let o,n,c;try{p("name",this.contractWrapper)&&(o=await this.contractWrapper.read("name",[]))}catch(a){}try{p("symbol",this.contractWrapper)&&(n=await this.contractWrapper.read("symbol",[]))}catch(a){}try{c=await(0,s.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch(a){}t={name:o||(null===(r=c)||void 0===r?void 0:r.name),symbol:n,description:null===(e=c)||void 0===e?void 0:e.info.title}}catch(o){throw new Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}async _parseAndUploadMetadata(t){const r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return i(t,"ContractMetadata")}}class h{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(s.aZ.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(s.aZ.Transaction,t)}addEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t),a={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(e)]},s=t=>{const e=this.contractWrapper.readContract.interface.parseLog(t);r(this.toContractEvent(e.eventFragment,e.args,t))};return this.contractWrapper.getProvider().on(a,s),()=>{this.contractWrapper.getProvider().off(a,s)}}listenToAllEvents(t){const r={address:this.contractWrapper.address},e=r=>{try{const e=this.contractWrapper.readContract.interface.parseLog(r);t(this.toContractEvent(e.eventFragment,e.args,r))}catch(e){console.error("Could not parse event:",r,e)}};return this.contractWrapper.getProvider().on(r,e),()=>{this.contractWrapper.getProvider().off(r,e)}}removeEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(e.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();const t={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(t)}async getAllEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"};const r=(await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock)).sort(((r,e)=>"desc"===t.order?e.blockNumber-r.blockNumber:r.blockNumber-e.blockNumber));return this.parseEvents(r)}async getEvents(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"};const e=this.contractWrapper.readContract.interface.getEvent(t),a=r.filters?e.inputs.map((t=>r.filters[t.name])):[],s=this.contractWrapper.readContract.filters[e.name](...a),o=(await this.contractWrapper.readContract.queryFilter(s,r.fromBlock,r.toBlock)).sort(((t,e)=>"desc"===r.order?e.blockNumber-t.blockNumber:t.blockNumber-e.blockNumber));return this.parseEvents(o)}parseEvents(t){return t.map((t=>{const r=Object.fromEntries(Object.entries(t).filter((t=>"function"!==typeof t[1]&&"args"!==t[0])));if(t.args){const e=Object.entries(t.args),a=e.slice(e.length/2,e.length),s={};for(const[t,r]of a)s[t]=r;return{eventName:t.event||"",data:s,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}}))}toContractEvent(t,r,e){const a=Object.fromEntries(Object.entries(e).filter((t=>"function"!==typeof t[1]&&"args"!==t[0]))),s={};return t.inputs.forEach(((t,e)=>{if(Array.isArray(r[e])){const a=t.components;if(a){const o=r[e];if("tuple[]"===t.type){const r=[];for(let t=0;t<o.length;t++){const e=o[t],s={};for(let t=0;t<a.length;t++){s[a[t].name]=e[t]}r.push(s)}s[t.name]=r}else{const r={};for(let t=0;t<a.length;t++){r[a[t].name]=o[t]}s[t.name]=r}}}else s[t.name]=r[e]})),{eventName:t.name,data:s,transaction:a}}}class d{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){const[e,a]=await Promise.all([this.contractWrapper.getProvider().getGasPrice(),this.contractWrapper.estimateGas(t,r)]);return n.formatEther(a.mul(e))}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){const t=await this.contractWrapper.getProvider().getGasPrice();return n.formatUnits(t,"gwei")}}class u{constructor(t,r,e){(0,a.Z)(this,"featureName",s.c$.name),(0,a.Z)(this,"set",(0,o.d)((async t=>i(this.contractWrapper,"AppURI")?o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t})))),this.contractWrapper=t,this.metadata=r,this.storage=e}async get(){return i(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):(0,c.ov)((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}}},66821:(t,r,e)=>{e.d(r,{C:()=>p});var a=e(64572),s=e(44554),o=e(99816),n=e(40774),c=e(24115),i=e(34243);class p{constructor(t,r){(0,a.Z)(this,"featureName",o.d0.name),(0,a.Z)(this,"setAll",(0,c.d)((async(t,r)=>{const e=r||await this.contractWrapper.getSignerAddress(),a=new i.C(this.contractWrapper),n=Object.keys(t);(0,s.Z)(n.length,"you must provide at least one role to set"),(0,s.Z)(n.every((t=>this.roles.includes(t))),"this contract does not support the given role");const p=await this.getAll(),l=[],h=n.sort((t=>"admin"===t?1:-1));for(let s=0;s<h.length;s++){var d,u;const r=h[s],[n,c]=await Promise.all([Promise.all((null===(d=t[r])||void 0===d?void 0:d.map((t=>(0,o.aL)(t))))||[]),Promise.all((null===(u=p[r])||void 0===u?void 0:u.map((t=>(0,o.aL)(t))))||[])]),i=n.filter((t=>!c.includes(t))),m=c.filter((t=>!n.includes(t)));if(m.length>1){const t=m.indexOf(e);t>-1&&(m.splice(t,1),m.push(e))}if(i.length&&i.forEach((t=>{l.push(a.encode("grantRole",[(0,o.H)(r),t]))})),m.length){(await Promise.all(m.map((t=>this.getRevokeRoleFunctionName(t))))).forEach(((t,e)=>l.push(a.encode(t,[(0,o.H)(r),m[e]]))))}}return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[l]})}))),(0,a.Z)(this,"grant",(0,c.d)((async(t,r)=>{(0,s.Z)(this.roles.includes(t),'this contract does not support the "'.concat(t,'" role'));const e=await(0,o.aL)(r);return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[(0,o.H)(t),e]})}))),(0,a.Z)(this,"revoke",(0,c.d)((async(t,r)=>{(0,s.Z)(this.roles.includes(t),'this contract does not support the "'.concat(t,'" role'));const e=await(0,o.aL)(r),a=await this.getRevokeRoleFunctionName(e);return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:[(0,o.H)(t),e]})}))),this.contractWrapper=t,this.roles=r}async getAll(){(0,s.Z)(this.roles.length,"this contract has no support for roles");const t={},r=Object.entries(this.roles);return(await Promise.all(r.map((t=>{let[,r]=t;return this.get(r)})))).forEach(((e,a)=>t[r[a][1]]=e)),t}async get(t){(0,s.Z)(this.roles.includes(t),'this contract does not support the "'.concat(t,'" role'));const r=this.contractWrapper;if((0,n.h)("getRoleMemberCount",r)&&(0,n.h)("getRoleMember",r)){const e=(0,o.H)(t),a=(await r.read("getRoleMemberCount",[e])).toNumber();return await Promise.all(Array.from(Array(a).keys()).map((t=>r.read("getRoleMember",[e,t]))))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(t,r){await Promise.all(t.map((async t=>{const[e,a]=await Promise.all([this.get(t),(0,o.aL)(r)]);if(!e.map((t=>t.toLowerCase())).includes(a.toLowerCase()))throw new o.o(a,t)})))}async getRevokeRoleFunctionName(t){const[r,e]=await Promise.all([(0,o.aL)(t),this.contractWrapper.getSignerAddress()]);return e.toLowerCase()===r.toLowerCase()?"renounceRole":"revokeRole"}}}}]);
//# sourceMappingURL=6821.b8ef4823.chunk.js.map