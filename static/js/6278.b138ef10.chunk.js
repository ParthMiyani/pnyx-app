"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6278],{72106:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},73731:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(64572),s=e(24115),n=e(99816);class c{constructor(t){(0,a.Z)(this,"featureName",n.dp.name),(0,a.Z)(this,"set",(0,s.d)((async t=>{const r=await n.bF.parseAsync(t);return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bF.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},26640:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(64572),s=e(24115),n=e(99816);class c{constructor(t){(0,a.Z)(this,"featureName",n.d3.name),(0,a.Z)(this,"setRecipient",(0,s.d)((async t=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},14410:(t,r,e)=>{e.d(r,{S:()=>i});var a=e(64572),s=e(99816),n=e(24115),c=e(99367);class i{get chainId(){return this._chainId}constructor(t,r,e){(0,a.Z)(this,"transfer",(0,n.d)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,a.Z)(this,"setApprovalForAll",(0,n.d)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,a.Z)(this,"setApprovalForToken",(0,n.d)((async(t,r)=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,s.aL)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new c.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,s.aL)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,s.aL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},16278:(t,r,e)=>{e.r(r),e.d(r,{NFTCollection:()=>m});var a=e(64572),s=e(68624),n=e(99816),c=e(24115),i=e(40774),p=e(34243),o=e(72106),h=e(90188),d=e(73731),l=e(66821),u=e(26640),W=e(14410),g=e(99367);e(80518),e(66315),e(98528),e(78262);class m extends W.S{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},W=arguments.length>4?arguments[4]:void 0,w=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cq(t,r,W,s,e),e,w),(0,a.Z)(this,"mint",(0,c.d)((async t=>this.erc721.mint.prepare(t)))),(0,a.Z)(this,"mintTo",(0,c.d)((async(t,r)=>this.erc721.mintTo.prepare(t,r)))),(0,a.Z)(this,"mintBatch",(0,c.d)((async t=>this.erc721.mintBatch.prepare(t)))),(0,a.Z)(this,"mintBatchTo",(0,c.d)((async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)))),(0,a.Z)(this,"burn",(0,c.d)((t=>this.erc721.burn.prepare(t)))),this.abi=n.bj.parse(W||[]),this.metadata=new i.C(this.contractWrapper,n.cd,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new l.C(this.contractWrapper,m.contractRoles),this.royalties=new h.C(this.contractWrapper,this.metadata),this.sales=new u.C(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.platformFees=new d.C(this.contractWrapper),this.interceptor=new o.C(this.contractWrapper),this.signature=new g.a(this.contractWrapper,this.storage),this.owner=new h.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,n.H)("transfer"),s.d])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,e){return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.Z)(m,"contractRoles",n.dA)}}]);
//# sourceMappingURL=6278.b138ef10.chunk.js.map