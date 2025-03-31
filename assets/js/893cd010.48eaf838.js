"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[2447],{67967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(74848),a=t(28453),l=t(11470),r=t(19365);const s={title:"Client Info"},c=void 0,i={id:"advanced/sdk-info",title:"Client Info",description:"The following page lists all the different options in Beacon to retrieve and display information about the SDK.",source:"@site/docs/advanced/sdk-info.mdx",sourceDirName:"advanced",slug:"/advanced/sdk-info",permalink:"/advanced/sdk-info",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/advanced/sdk-info.mdx",tags:[],version:"current",frontMatter:{title:"Client Info"},sidebar:"docs",previous:{title:"Debug Wallet",permalink:"/advanced/debug-wallet"},next:{title:"Connection",permalink:"/advanced/flows/connection"}},u={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The following page lists all the different options in Beacon to retrieve and display information about the SDK."}),"\n",(0,o.jsxs)(l.A,{groupId:"beaconOrTaquitoSI1",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,o.jsx)(r.A,{value:"beacon",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon sdk version\nimport { BEACON_VERSION, SDK_VERSION } from "@airgap/beacon-sdk";\n\nconsole.log("SDK Version", SDK_VERSION);\nconsole.log("Beacon Version", BEACON_VERSION);\n'})})}),(0,o.jsx)(r.A,{value:"taquito",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito sdk version\nimport { BEACON_VERSION, SDK_VERSION } from "@airgap/beacon-sdk";\n\nconsole.log("SDK Version", SDK_VERSION);\nconsole.log("Beacon Version", BEACON_VERSION);\n'})})})]}),"\n",(0,o.jsxs)(l.A,{groupId:"beaconOrTaquitoSI2",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,o.jsx)(r.A,{value:"beacon",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon sdk client\nimport { DAppClient } from "@airgap/beacon-sdk";\n\nconst dAppClient = new DAppClient({ name: "Beacon Docs" });\n\nconsole.log(`Connected Accounts:`, await dAppClient.getAccounts());\nconsole.log(`Connected Peers:`, await dAppClient.getPeers());\n'})})}),(0,o.jsx)(r.A,{value:"taquito",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito sdk client\nimport { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });\n\nTezos.setWalletProvider(wallet);\n\nconsole.log(`Connected Accounts:`, await wallet.client.getAccounts());\nconsole.log(`Connected Peers:`, await wallet.client.getPeers());\n'})})})]}),"\n",(0,o.jsxs)(l.A,{groupId:"beaconOrTaquitoSI3",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,o.jsx)(r.A,{value:"beacon",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon sdk connection\nimport { DAppClient, NetworkType } from "@airgap/beacon-sdk";\n\nconst dAppClient = new DAppClient({ name: "Beacon Docs" });\n\nconst addressLink = await dAppClient.blockExplorer.getAddressLink(\n  "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ",\n  { type: NetworkType.MAINNET },\n);\nconsole.log("Address Link", addressLink);\n\nconst txLink = await dAppClient.blockExplorer.getTransactionLink(\n  "onzCRJhQ9zPC38TLGhBTghCW7WAJpfUJ2NpwbbQKbW6LeEL8RfK",\n  { type: NetworkType.MAINNET },\n);\nconsole.log("Transaction Link", txLink);\n\nconsole.log("\\n\\nConnection Info:\\n");\nconsole.log("Status:", dAppClient.connectionStatus);\nconst accounts = await dAppClient.getAccounts();\nconsole.log("Accounts:", accounts);\nconst peers = await dAppClient.getPeers();\nconsole.log("Peers:", peers);\n\nconsole.log("\\n\\nDebug:\\n");\nconsole.log("Local Beacon ID:", await dAppClient.beaconId);\nconst colorMode = await dAppClient.getColorMode();\nconsole.log("Color Mode:", colorMode);\nconst ownMetadata = await dAppClient.getOwnAppMetadata();\nconsole.log("Own Metadata:", ownMetadata);\n'})})}),(0,o.jsx)(r.A,{value:"taquito",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito sdk connection\nimport { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\nimport { DAppClient, NetworkType } from "@airgap/beacon-sdk";\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });\n\nTezos.setWalletProvider(wallet);\n\nconst addressLink = await wallet.client.blockExplorer.getAddressLink(\n  "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ",\n  { type: NetworkType.MAINNET },\n);\nconsole.log("Address Link", addressLink);\n\nconst txLink = await wallet.client.blockExplorer.getTransactionLink(\n  "onzCRJhQ9zPC38TLGhBTghCW7WAJpfUJ2NpwbbQKbW6LeEL8RfK",\n  { type: NetworkType.MAINNET },\n);\nconsole.log("Transaction Link", txLink);\n\nconsole.log("\\n\\nConnection Info:\\n");\nconsole.log("Status:", wallet.client.connectionStatus);\nconst accounts = await wallet.client.getAccounts();\nconsole.log("Accounts:", accounts);\nconst peers = await wallet.client.getPeers();\nconsole.log("Peers:", peers);\n\nconsole.log("\\n\\nDebug:\\n");\nconsole.log("Local Beacon ID:", await wallet.client.beaconId);\nconst colorMode = await wallet.client.getColorMode();\nconsole.log("Color Mode:", colorMode);\nconst ownMetadata = await wallet.client.getOwnAppMetadata();\nconsole.log("Own Metadata:", ownMetadata);\n'})})})]})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(96540),a=t(34164),l=t(23104),r=t(56347),s=t(205),c=t(57485),i=t(31682),u=t(70679);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[r,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:l}))),[i,d]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),h=(()=>{const e=i??f;return b({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{h&&c(h)}),[h]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function w(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==o&&(i(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function k(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",h.tabList),children:[(0,v.jsx)(w,{...n,...e}),(0,v.jsx)(A,{...n,...e})]})}function x(e){const n=(0,m.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const a={},l=o.createContext(a);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);