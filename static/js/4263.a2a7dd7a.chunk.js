"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[4263],{69822:(e,t,n)=>{n.d(t,{W:()=>r});var s=n(29278),i=n(65892);class r extends i.Z{constructor(e){let{chains:t=s.gL9,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){var t,n;const s=null!==(t=null===(n=e.explorers)||void 0===n?void 0:n.map((e=>e.url)))&&void 0!==t?t:[];return s.length>0?s:void 0}isChainUnsupported(e){return!this.chains.some((t=>t.chainId===e))}updateChains(e){this.chains=e}}},38690:(e,t,n)=>{n.d(t,{A:()=>o,C:()=>c,R:()=>h,S:()=>d,U:()=>u,a:()=>a});var s=n(2600);class i extends Error{constructor(e,t){const{cause:n,code:s,data:i}=t;if(!Number.isInteger(s))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');super("".concat(e,". Cause: ").concat(JSON.stringify(n))),this.cause=n,this.code=s,this.data=i}}class r extends i{constructor(e,t){const{cause:n,code:s,data:i}=t;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:s,data:i})}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class c extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super('Chain "'.concat(t,'" not configured for connector "').concat(n,'".')),(0,s._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends r{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},91609:(e,t,n)=>{function s(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:()=>s})},83506:(e,t,n)=>{n.d(t,{g:()=>r,i:()=>i});var s=n(29278);function i(e){const t=new URL(e).hostname;return t.endsWith(".thirdweb.com")||t.endsWith(".thirdweb-dev.com")||"localhost"===t||"0.0.0.0"===t}function r(e){return(0,s.OZ$)(e).map((e=>{try{const t=new URL(e);return t.hostname.endsWith(".thirdweb.com")&&(t.pathname="",t.search=""),t.toString()}catch(t){return e}}))}},4263:(e,t,n)=>{n.d(t,{FrameConnector:()=>l});var s=n(63700),i=n(2600),r=n(97419),o=n(60723),c=n(49716),a=n(69822),h=n(38690),d=n(83506),u=n(91609),m=(n(65892),new WeakMap);class l extends a.W{constructor(e){let{chains:t,options:n,connectorStorage:o}=e;super({chains:t,options:{shimDisconnect:!0,...n}}),(0,i._)(this,"id","frame"),(0,i._)(this,"name","Frame"),(0,i._)(this,"ready",!0),(0,i._)(this,"shimDisconnectKey","".concat(this.id,".shimDisconnect")),(0,s._)(this,m,{writable:!0,value:void 0}),(0,i._)(this,"onAccountsChanged",(e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:r.getAddress(e[0])})})),(0,i._)(this,"onChainChanged",(e=>{const t=(0,u.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})})),(0,i._)(this,"onDisconnect",(()=>{this.emit("disconnect"),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey)})),this.connectorStorage=o}async connect(e){try{const t=await this.getProvider();if(!t)throw new h.a;this.setupListeners(),this.emit("message",{type:"connecting"});const n=await t.request({method:"eth_requestAccounts"}),s=r.getAddress(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);if(null!==e&&void 0!==e&&e.chainId&&i!==(null===e||void 0===e?void 0:e.chainId)){i=(await this.switchChain(null===e||void 0===e?void 0:e.chainId)).chainId,o=this.isChainUnsupported(i)}return this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),{account:s,provider:t,chain:{id:i,unsupported:o}}}catch(t){if(this.isUserRejectedRequestError(t))throw new h.U(t);if(-32002===t.code)throw new h.R(t);throw t}}async disconnect(){const e=await this.getProvider();null!==e&&void 0!==e&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.isInjected()||e.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new h.a;const t=await e.request({method:"eth_accounts"});return r.getAddress(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new h.a;const t=await e.request({method:"eth_chainId"});return(0,u.n)(t)}async getProvider(){return(0,s.a)(this,m,this.isInjected()?this.injectedProvider():await this.createProvider()),(0,s.b)(this,m)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new o.Q(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new h.a;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider();if(!t)throw new h.a;const n=c.hexValue(e);try{var s;return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise((t=>this.on("change",(n=>{let{chain:s}=n;(null===s||void 0===s?void 0:s.id)===e&&t()}))))]),null!==(s=this.chains.find((t=>t.chainId===e)))&&void 0!==s?s:{chainId:e,name:"Chain ".concat(n),slug:"".concat(n),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(i){const s=this.chains.find((t=>t.chainId===e));if(!s)throw new h.C({chainId:e,connectorId:this.id});if(4902===i.code)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:(0,d.g)(s),blockExplorerUrls:this.getBlockExplorerUrls(s)}]});if(await this.getChainId()!==e)throw new h.U(new Error("User rejected switch after adding network."));return s}catch(r){if(this.isUserRejectedRequestError(r))throw new h.U(r);throw new h.A(r.message)}if(this.isUserRejectedRequestError(i))throw new h.U(i);throw new h.S(i)}}async watchAsset(e){let{address:t,decimals:n=18,image:s,symbol:i}=e;const r=await this.getProvider();if(!r)throw new h.a;return r.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:n,image:s,symbol:i}}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}injectedProvider(){var e;return null===(e=window)||void 0===e?void 0:e.ethereum}isInjected(){var e;return!(null===(e=this.injectedProvider())||void 0===e||!e.isFrame)}async createProvider(){return(0,(await n.e(549).then(n.t.bind(n,40549,23))).default)("frame")}}}}]);
//# sourceMappingURL=4263.a2a7dd7a.chunk.js.map