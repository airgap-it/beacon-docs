"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[9908],{28919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(74848),o=n(28453),r=n(11470),l=n(19365);const i={title:"Network"},s=void 0,c={id:"guides/network",title:"Network",description:"The Network configuration in Beacon SDK allows developers to specify the blockchain network their application will interact with.",source:"@site/docs/guides/network.mdx",sourceDirName:"guides",slug:"/guides/network",permalink:"/guides/network",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/guides/network.mdx",tags:[],version:"current",frontMatter:{title:"Network"},sidebar:"docs",previous:{title:"Disconnecting from a Wallet",permalink:"/guides/disconnecting-a-wallet"},next:{title:"Firewalls",permalink:"/guides/networking"}},u={},p=[{value:"Mainnet With Custom RPC",id:"mainnet-with-custom-rpc",level:2},{value:"Testnet",id:"testnet",level:2},{value:"Testnet With Custom RPC",id:"testnet-with-custom-rpc",level:2},{value:"Custom Network",id:"custom-network",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The Network configuration in Beacon SDK allows developers to specify the blockchain network their application will interact with.\nThis includes using predefined networks like Mainnet or Testnet, as well as defining custom networks and RPC endpoints."}),"\n","\n",(0,a.jsx)(t.h2,{id:"mainnet-with-custom-rpc",children:"Mainnet With Custom RPC"}),"\n",(0,a.jsxs)(r.A,{groupId:"beaconOrTaquitoN1",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,a.jsx)(l.A,{value:"beacon",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon mainnet network\nimport { DAppClient, NetworkType } from "@airgap/beacon-sdk";\n\nconst dAppClient = new DAppClient({ name: "Beacon Docs" });\n\n// Mainnet with different rpcUrl\nconst result = await dAppClient.requestPermissions({\n  network: {\n    type: NetworkType.MAINNET,\n    rpcUrl: "https://mainnet.api.tez.ie",\n  },\n});\n'})})}),(0,a.jsx)(l.A,{value:"taquito",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito mainnet network\nimport { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\nimport { NetworkType } from "@airgap/beacon-sdk";\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });\n\nTezos.setWalletProvider(wallet);\n\n// Mainnet with different rpcUrl\nconst result = await wallet.client.requestPermissions({\n  network: {\n    type: NetworkType.MAINNET,\n    rpcUrl: "https://mainnet.api.tez.ie",\n  },\n});\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"testnet",children:"Testnet"}),"\n",(0,a.jsxs)(r.A,{groupId:"beaconOrTaquitoN2",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,a.jsx)(l.A,{value:"beacon",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon edonet network\nimport { DAppClient, NetworkType } from "@airgap/beacon-sdk";\n\nconst dAppClient = new DAppClient({\n  name: "Beacon Docs",\n  preferredNetwork: NetworkType.EDONET,\n});\n\n// Edonet with default rpcUrl\nconst result = await dAppClient.requestPermissions({\n  network: {\n    type: NetworkType.EDONET,\n  },\n});\n'})})}),(0,a.jsx)(l.A,{value:"taquito",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito edonet network\nimport { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\nimport { NetworkType } from "@airgap/beacon-sdk";\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({\n  name: "Beacon Docs",\n  preferredNetwork: NetworkType.EDONET,\n});\n\nTezos.setWalletProvider(wallet);\n\n// Edonet with default rpcUrl\nconst result = await wallet.client.requestPermissions({\n  network: {\n    type: NetworkType.EDONET,\n  },\n});\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"testnet-with-custom-rpc",children:"Testnet With Custom RPC"}),"\n",(0,a.jsxs)(r.A,{groupId:"beaconOrTaquitoN3",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,a.jsx)(l.A,{value:"beacon",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon edonet network with RPC\nimport { DAppClient, NetworkType } from "@airgap/beacon-sdk";\n\nconst dAppClient = new DAppClient({\n  name: "Beacon Docs",\n  preferredNetwork: NetworkType.EDONET,\n});\n\n// Edonet with different rpcUrl\nconst result = await dAppClient.requestPermissions({\n  network: {\n    type: NetworkType.EDONET,\n    rpcUrl: "https://testnet-tezos.giganode.io/",\n  },\n});\n'})})}),(0,a.jsx)(l.A,{value:"taquito",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito edonet network with RPC\nimport { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\nimport { NetworkType } from "@airgap/beacon-sdk";\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({\n  name: "Beacon Docs",\n  preferredNetwork: NetworkType.EDONET,\n});\n\nTezos.setWalletProvider(wallet);\n\n// Edonet with different rpcUrl\nconst result = await wallet.client.requestPermissions({\n  network: {\n    type: NetworkType.EDONET,\n    rpcUrl: "https://testnet-tezos.giganode.io/",\n  },\n});\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"custom-network",children:"Custom Network"}),"\n",(0,a.jsxs)(r.A,{groupId:"beaconOrTaquitoN4",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,a.jsx)(l.A,{value:"beacon",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// beacon custom network\nimport { DAppClient, NetworkType } from "@airgap/beacon-sdk";\n\nconst dAppClient = new DAppClient({\n  name: "Beacon Docs",\n  preferredNetwork: NetworkType.CUSTOM,\n});\n\n// Custom network (eg. local development or latest testnet)\nconst result = await dAppClient.requestPermissions({\n  network: {\n    type: NetworkType.CUSTOM,\n    name: "Local Node",\n    rpcUrl: "http://localhost:8732/",\n  },\n});\n'})})}),(0,a.jsx)(l.A,{value:"taquito",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"live",live:!0,children:'// taquito custom network\nimport { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\nimport { NetworkType } from "@airgap/beacon-sdk";\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({\n  name: "Beacon Docs Taquito",\n  preferredNetwork: NetworkType.CUSTOM,\n});\n\nTezos.setWalletProvider(wallet);\n\n// Custom network (eg. local development or latest testnet)\nconst result = await wallet.client.requestPermissions({\n  network: {\n    type: NetworkType.CUSTOM,\n    name: "Local Node",\n    rpcUrl: "http://localhost:8732/",\n  },\n});\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(34164);const o={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(96540),o=n(34164),r=n(23104),l=n(56347),i=n(205),s=n(57485),c=n(31682),u=n(70679);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function w(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,p]=w({queryString:n,groupId:o}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),b=(()=>{const e=c??h;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),o=i[n].value;o!==a&&(c(t),l(o))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:p,onClick:u,...r,className:(0,o.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function T(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=h(e);return(0,k.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(T,{...t,...e})]})}function N(e){const t=(0,f.A)();return(0,k.jsx)(g,{...e,children:p(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const o={},r=a.createContext(o);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);