"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[2945,8737,1118],{81754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(74848),o=t(28453),r=t(11470),i=t(19365),s=t(14252);const l={title:"Disconnect from a dApp"},c=void 0,d={id:"wallet/getting-started/android/disconnect-from-dapp",title:"Disconnect from a dApp",description:"This guide is a continuation of Connect to a dApp and may assume that certain code components have been defined.",source:"@site/docs/wallet/getting-started/android/disconnect-from-dapp.mdx",sourceDirName:"wallet/getting-started/android",slug:"/wallet/getting-started/android/disconnect-from-dapp",permalink:"/wallet/getting-started/android/disconnect-from-dapp",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/wallet/getting-started/android/disconnect-from-dapp.mdx",tags:[],version:"current",frontMatter:{title:"Disconnect from a dApp"},sidebar:"wallet",previous:{title:"Connect to a dApp",permalink:"/wallet/getting-started/android/connect-to-dapp"},next:{title:"Installation",permalink:"/wallet/getting-started/ios/installation"}},u={},p=[{value:"Disconnect from a dApp",id:"disconnect-from-a-dapp",level:2},{value:"Disconnect from all dApps",id:"disconnect-from-all-dapps",level:2},{value:"Example Code",id:"example-code",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{toc:p}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This guide is a continuation of ",(0,a.jsx)(n.a,{href:"connect-to-dapp",children:"Connect to a dApp"})," and may assume that certain code components have been defined."]})}),"\n",(0,a.jsx)(n.h2,{id:"disconnect-from-a-dapp",children:"Disconnect from a dApp"}),"\n",(0,a.jsx)(n.p,{children:"To disconnect form a subscribed dApp remove its peer entry from the client."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'myCoroutineScope.launch {\n    try {\n        val peers = beaconWallet.getPeers() // get subscribed peers\n        val dApp = peers.find { it.name == "MyApp" }\n        // highlight-start\n        beaconWallet.removePeers(dApp)\n        // highlight-end\n    } catch (e: Exception) {\n        e.printStackTrace()\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"disconnect-from-all-dapps",children:"Disconnect from all dApps"}),"\n",(0,a.jsx)(n.p,{children:"To disconnect from all subscribed dApps remove all peers that were previously registered in the client."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"myCoroutineScope.launch {\n    try {\n        // highlight-start\n        beaconWallet.removeAllPeers()\n        // highlight-end\n    } catch (e: Exception) {\n        e.printStackTrace()\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-code",children:"Example Code"}),"\n",(0,a.jsxs)(n.p,{children:["The following example extends the code presented in the ",(0,a.jsx)(n.a,{href:"connect-to-dapp#ExampleCode",children:"Connect to a dApp"})," guide. The ",(0,a.jsx)(n.code,{children:"Activity"})," listens for incoming requests from a dApp, waits 1s and cancels connection."]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",defaultValue:"kotlin",values:[{label:"Groovy",value:"groovy"},{label:"Kotlin",value:"kotlin"}],children:[(0,a.jsx)(i.A,{value:"groovy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"allprojects {\n    repositories {\n        maven { url 'https://jitpack.io' }\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'allprojects {\n    repositories {\n        maven("https://jitpack.io")\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/airgap-it/beacon-android-sdk",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/airgap-it/beacon-android-sdk?label=stable&sort=semver",alt:"stable"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/airgap-it/beacon-android-sdk",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/airgap-it/beacon-android-sdk?color=orange&include_prereleases&label=latest",alt:"latest"})})]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",defaultValue:"kotlin",values:[{label:"Groovy",value:"groovy"},{label:"Kotlin",value:"kotlin"}],children:[(0,a.jsx)(i.A,{value:"groovy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",metastring:'title="app/build.gradle"',children:'dependencies {\n    // Beacon\n    def beacon_version = "x.y.z"\n\n    implementation "com.github.airgap-it.beacon-android-sdk:core:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:client-wallet:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:blockchain-substrate:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:blockchain-tezos:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:transport-p2p-matrix:$beacon_version"\n\n    // Android\n    def android_activity_version = "x.y.z"\n    implementation "androidx.activity:activity-ktx:$android_activity_version"\n\n    def android_lifecycle_version = "x.y.z"\n    implementation "androidx.lifecycle:lifecycle-livedata-ktx:$android_lifecycle_version"\n}\n'})})}),(0,a.jsx)(i.A,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="app/build.gradle.kts"',children:'dependencies {\n    // Beacon\n    val beaconVersion = "x.y.z"\n\n    implementation("com.github.airgap-it.beacon-android-sdk:core:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:client-wallet:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:blockchain-substrate:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:blockchain-tezos:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:transport-p2p-matrix:$beaconVersion")\n\n    // Android\n    val androidActivityVersion = "x.y.z"\n    implementation("androidx.activity:activity-ktx:$androidActivityVersion")\n\n    val androidLifecycleVersion = "x.y.z"\n    implementation("androidx.lifecycle:lifecycle-livedata-ktx:$androidLifecycleVersion")\n}\n'})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="app/src/main/java/com/example/MainActivity.kt"',children:'package com.example\n\nimport android.os.Bundle\nimport androidx.appcompat.app.AppCompatActivity\nimport androidx.lifecycle.asLiveData\nimport androidx.lifecycle.lifecycleScope\nimport it.airgap.beaconsdk.blockchain.substrate.data.SubstrateAccount\nimport it.airgap.beaconsdk.blockchain.substrate.data.SubstrateNetwork\nimport it.airgap.beaconsdk.blockchain.substrate.message.request.PermissionSubstrateRequest\nimport it.airgap.beaconsdk.blockchain.substrate.message.response.PermissionSubstrateResponse\nimport it.airgap.beaconsdk.blockchain.substrate.substrate\nimport it.airgap.beaconsdk.blockchain.tezos.data.TezosAccount\nimport it.airgap.beaconsdk.blockchain.tezos.data.TezosNetwork\nimport it.airgap.beaconsdk.blockchain.tezos.message.request.PermissionTezosRequest\nimport it.airgap.beaconsdk.blockchain.tezos.message.response.PermissionTezosResponse\nimport it.airgap.beaconsdk.blockchain.tezos.tezos\nimport it.airgap.beaconsdk.client.wallet.BeaconWalletClient\nimport it.airgap.beaconsdk.core.data.BeaconError\nimport it.airgap.beaconsdk.core.data.P2pPeer\nimport it.airgap.beaconsdk.core.message.BeaconRequest\nimport it.airgap.beaconsdk.core.message.ErrorBeaconResponse\nimport it.airgap.beaconsdk.transport.p2p.matrix.p2pMatrix\nimport kotlinx.coroutines.delay\nimport kotlinx.coroutines.launch\n\nclass MainActivity : AppCompatActivity() {\n    lateinit var beaconWallet: BeaconWalletClient\n\n    val dApp = P2pPeer(\n        "0b02d44c-de33-b5ab-7730-ff8e62f61869" /* TODO: change me */,\n        "My dApp",\n        "6c7870aa1e42477fd7c2baaf4763bd826971e470772f71a0a388c1763de3ea1e" /* TODO: change me */,\n        "beacon-node-1.sky.papers.tech" /* TODO: change me */,\n        "2" /* TODO: change me */,\n    )\n\n    fun substrateAccount(network: SubstrateNetwork) = SubstrateAccount(\n        "f4c6095213a2f6d09464ed882b12d6024d20f7170c3b8bd5c1b071e4b00ced72" /* TODO: change me */,\n        "16XwWkdUqFXFY1tJNf1Q6fGgxQnGYUS6M95wPcrbp2sjjuoC" /* TODO: change me */,\n        network,\n    )\n\n    fun tezosAccount(network: TezosNetwork) = TezosAccount(\n        "9ae0875d510904b0b15d251d8def1f5f3353e9799841c0ed6d7ac718f04459a0" /* TODO: change me */,\n        "tz1SkbBZg15BXPRkYCrSzhY6rq4tKGtpUSWv" /* TODO: change me */,\n        network,\n    )\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        lifecycleScope.launch {\n            createWalletClient()\n            subscribeToRequests()\n            connectToDApp()\n        }\n    }\n\n    suspend fun createWalletClient() {\n        beaconWallet = BeaconWalletClient("My App") {\n            support(substrate(), tezos())\n            use(p2pMatrix())\n        }\n    }\n\n    fun subscribeToRequests() {\n        beaconWallet.connect().asLiveData().observe(this) { result ->\n            result.getOrNull()?.let { onBeaconRequest(it) }\n            result.exceptionOrNull()?.let { onError(it) }\n        }\n    }\n\n    suspend fun connectToDApp() {\n        try {\n            beaconWallet.addPeers(dApp)\n        } catch (e: Exception) {\n            onError(e)\n        }\n    }\n\n    fun onBeaconRequest(request: BeaconRequest) {\n        val response = when (request) {\n            is PermissionSubstrateRequest -> PermissionSubstrateResponse.from(request, request.networks.map { substrateAccount(it) })\n            is PermissionTezosRequest -> PermissionTezosResponse.from(request, tezosAccount(request.network))\n            else -> ErrorBeaconResponse.from(request, BeaconError.Aborted)\n        }\n\n        lifecycleScope.launch {\n            try {\n                beaconWallet.respond(response)\n                delay(1000)\n                // highlight-start\n                beaconWallet.removePeers(dApp)\n                // highlight-end\n            } catch (e: Exception) {\n                onError(e)\n            }\n        }\n    }\n\n    fun onError(e: Throwable) {\n        e.printStackTrace()\n    }\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},14252:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(65195);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};var r=t(74848);function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,r.jsx)("div",{className:o.tableOfContentsInline,children:(0,r.jsx)(a.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null})})}},65195:(e,n,t)=>{t.d(n,{A:()=>h});var a=t(96540),o=t(6342);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):a.push(o)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let o=n;o<=t;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=l(s,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var u=t(28774),p=t(74848);function m(e){let{toc:n,className:t,linkClassName:a,isChild:o}=e;return n.length?(0,p.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,p.jsxs)("li",{children:[(0,p.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,p.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const b=a.memo(m);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...m}=e;const h=(0,o.p)(),g=c??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>i({toc:r(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:g,maxHeadingLevel:f});return d((0,a.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:f}}),[s,l,g,f])),(0,p.jsx)(b,{toc:v,className:t,linkClassName:s,...m})}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const o={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(96540),o=t(34164),r=t(23104),i=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=b({queryString:t,groupId:o}),[h,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),f=(()=>{const e=c??h;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(c(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);