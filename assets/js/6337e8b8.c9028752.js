"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[5845],{52336:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=a(74848),s=a(28453),r=a(11470),o=a(19365);const l={},c="Subscribe to ACTIVE_ACCOUNT_SET Advanced Example",i={id:"getting-started/subscribe-to-active-account",title:"Subscribe to ACTIVE_ACCOUNT_SET Advanced Example",description:"Beacon provides developers the ability to subscribe to its internal state, as shown on the dedicated page. Since version 4.2.0, subscribing to ACTIVEACCOUNTSET has become mandatory. This page provides a custom example with user validation by requesting the wallet to sign a payload.",source:"@site/docs/getting-started/subscribe-to-active-account.mdx",sourceDirName:"getting-started",slug:"/getting-started/subscribe-to-active-account",permalink:"/getting-started/subscribe-to-active-account",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/getting-started/subscribe-to-active-account.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Example",permalink:"/getting-started/advanced-example"},next:{title:"High Performance",permalink:"/getting-started/high-performance"}},d={},u=[{value:"Before Starting",id:"before-starting",level:2},{value:"Example",id:"example",level:2},{value:"Adding <code>requestSignPayload</code>",id:"adding-requestsignpayload",level:2},{value:"Multi-tab Synchronization",id:"multi-tab-synchronization",level:2},{value:"Step 1: Install <code>broadcast-channel</code>",id:"step-1-install-broadcast-channel",level:3},{value:"Step 2: Set Up the Channel",id:"step-2-set-up-the-channel",level:3},{value:"Step 3: Update the Handler",id:"step-3-update-the-handler",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"subscribe-to-active_account_set-advanced-example",children:["Subscribe to ",(0,t.jsx)(n.code,{children:"ACTIVE_ACCOUNT_SET"})," Advanced Example"]}),"\n",(0,t.jsxs)(n.p,{children:["Beacon provides developers the ability to subscribe to its internal state, as shown on the dedicated page. Since version 4.2.0, subscribing to ",(0,t.jsx)(n.code,{children:"ACTIVE_ACCOUNT_SET"})," has become mandatory. This page provides a custom example with user validation by requesting the wallet to sign a payload."]}),"\n",(0,t.jsx)(n.h2,{id:"before-starting",children:"Before Starting"}),"\n",(0,t.jsxs)(n.p,{children:["Be aware that calling one of the functions listed below will also trigger ",(0,t.jsx)(n.code,{children:"ACTIVE_ACCOUNT_SET"}),". ",(0,t.jsx)("mark",{children:"Be careful when calling such functions inside the handler to avoid causing your dApp to enter an endless loop."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"List of functions:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"requestPermissions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"setActiveAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clearActiveAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"disconnect"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"removeAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"removeAllAccounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"destroy"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["After initializing your ",(0,t.jsx)(n.code,{children:"dAppClient"})," instance, you need to subscribe to ",(0,t.jsx)(n.code,{children:"ACTIVE_ACCOUNT_SET"})," as shown below:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"beaconOrTaquitoSAAE1",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,t.jsx)(o.A,{value:"beacon",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const dAppClient = new DAppClient({\n  name: "Beacon Docs",\n});\n\ndAppClient.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, (account) => {\n  console.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);\n});\n'})})}),(0,t.jsx)(o.A,{value:"taquito",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({ name: "Beacon Docs" });\n\nwallet.client.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, (account) => {\n  console.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);\n});\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"The handler should be as concise as possible. Ideally, it should just globally update your active account on your dApp. However, in some cases, adding extra lines of code may be necessary."}),"\n",(0,t.jsxs)(n.h2,{id:"adding-requestsignpayload",children:["Adding ",(0,t.jsx)(n.code,{children:"requestSignPayload"})]}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes ",(0,t.jsx)(n.code,{children:"requestPermissions"})," may not be enough, and you want to ensure the user who has synced with the wallet is authorized. A common way to accomplish this is by sending a ",(0,t.jsx)(n.em,{children:"sign_payload"})," request to the wallet."]}),"\n",(0,t.jsxs)(r.A,{groupId:"beaconOrTaquitoSAAE2",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,t.jsx)(o.A,{value:"beacon",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'dAppClient.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, async (account) => {\n  console.log(\n    `${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `,\n    account?.address,\n  );\n\n  if (!account) {\n    return;\n  }\n\n  try {\n    await dAppClient.requestSignPayload({\n      payload:\n        "05010000004254657a6f73205369676e6564204d6573736167653a207465737455726c20323032332d30322d30385431303a33363a31382e3435345a2048656c6c6f20576f726c64",\n    });\n  } catch (err: any) {\n    // The request was rejected\n    // handle disconnection\n  }\n});\n'})})}),(0,t.jsx)(o.A,{value:"taquito",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'wallet.client.subscribeToEvent(\n  BeaconEvent.ACTIVE_ACCOUNT_SET,\n  async (account) => {\n    console.log(\n      `${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `,\n      account?.address,\n    );\n\n    if (!account) {\n      return;\n    }\n\n    try {\n      await wallet.client.requestSignPayload({\n        payload:\n          "05010000004254657a6f73205369676e6564204d6573736167653a207465737455726c20323032332d30322d30385431303a33363a31382e3435345a2048656c6c6f20576f726c64",\n      });\n    } catch (err: any) {\n      // The request was rejected\n      // handle disconnection\n    }\n  },\n);\n'})})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," ",(0,t.jsx)(n.code,{children:"ACTIVE_ACCOUNT_SET"})," gets triggered both when setting a new account and resetting the current one. Make sure not to send a ",(0,t.jsx)(n.strong,{children:"sign_payload"})," request without an account."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"multi-tab-synchronization",children:"Multi-tab Synchronization"}),"\n",(0,t.jsxs)(n.p,{children:["While the example above works for single-page dApps, it may become problematic in a multi-tab setup. Beacon emits an event to keep each tab synced with the internal state. Therefore, if your dApp needs multiple tabs support, the above approach may cause issues. Each tab will send a ",(0,t.jsx)(n.strong,{children:"sign_payload"})," request to the wallet, which is not intended and may lead to request rejection if a certain threshold is reached."]}),"\n",(0,t.jsxs)(n.p,{children:["To address this, we need to implement multi-tab synchronization. There are multiple ways to achieve this; for simplicity, we use ",(0,t.jsx)(n.code,{children:"broadcast-channel"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The following example is designed to be as simple as possible to help developers kickstart synchronization in their dApp. Please note that not all edge cases are covered."})}),"\n",(0,t.jsxs)(n.h3,{id:"step-1-install-broadcast-channel",children:["Step 1: Install ",(0,t.jsx)(n.code,{children:"broadcast-channel"})]}),"\n",(0,t.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,t.jsxs)(r.A,{groupId:"beaconOrTaquitoSAAE3",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],children:[(0,t.jsx)(o.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save broadcast-channel\n"})})}),(0,t.jsx)(o.A,{value:"yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add broadcast-channel\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-set-up-the-channel",children:"Step 2: Set Up the Channel"}),"\n",(0,t.jsx)(n.p,{children:"The main idea is to elect a tab as the Leader so that only this tab will send a request to the wallet. First, set up a channel."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const channel = new BroadcastChannel("beacon-channel"); // "beacon-channel" is an example, you can choose any name you want\nconst elector = createLeaderElection(channel);\n// Auxiliary variable needed for handling beforeUnload.\n// Closing a tab causes the elector to be killed immediately\nlet wasLeader: boolean = false;\n'})}),"\n",(0,t.jsx)(n.p,{children:"Check if a leader already exists, otherwise request leadership.\nWe also need to handle the case in which the Leader tab gets closed and therefore we need to transfer the leadership to another tab."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'elector.hasLeader().then(async (hasLeader) => {\n  if (!hasLeader) {\n    await elector.awaitLeadership();\n    wasLeader = elector.isLeader;\n  }\n});\n\n// NOTE: If you are using a JS framework, do not call window.onbeforeunload directly.\n// Refer to your framework\'s guidelines for handling this scenario.\nwindow.onbeforeunload = async () => {\n  if (wasLeader) {\n    await elector.die();\n    channel.postMessage("LEADER_DEAD");\n  }\n};\n\nchannel.onmessage = async (message: any) => {\n  if (message === "LEADER_DEAD") {\n    await elector.awaitLeadership();\n  }\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-update-the-handler",children:"Step 3: Update the Handler"}),"\n",(0,t.jsxs)(n.p,{children:["Now, inside the handler, check whether the current tab has the leadership. If not, do not send a ",(0,t.jsx)(n.code,{children:"sign_payload"})," request."]}),"\n",(0,t.jsxs)(r.A,{groupId:"beaconOrTaquitoSAAE4",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,t.jsx)(o.A,{value:"beacon",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'dAppClient.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, async (account) => {\n  console.log(\n    `${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `,\n    account?.address,\n  );\n\n  if (!account || !elector.isLeader) {\n    return;\n  }\n\n  try {\n    await dAppClient.requestSignPayload({\n      payload:\n        "05010000004254657a6f73205369676e6564204d6573736167653a207465737455726c20323032332d30322d30385431303a33363a31382e3435345a2048656c6c6f20576f726c64",\n    });\n  } catch (err: any) {\n    // The request was rejected\n    // handle disconnection\n  }\n});\n'})})}),(0,t.jsx)(o.A,{value:"taquito",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'wallet.client.subscribeToEvent(\n  BeaconEvent.ACTIVE_ACCOUNT_SET,\n  async (account) => {\n    console.log(\n      `${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `,\n      account?.address,\n    );\n\n    if (!account || !elector.isLeader) {\n      return;\n    }\n\n    try {\n      await wallet.client.requestSignPayload({\n        payload:\n          "05010000004254657a6f73205369676e6564204d6573736167653a207465737455726c20323032332d30322d30385431303a33363a31382e3435345a2048656c6c6f20576f726c64",\n      });\n    } catch (err: any) {\n      // The request was rejected\n      // handle disconnection\n    }\n  },\n);\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The end result should look like this:"}),"\n",(0,t.jsxs)(r.A,{groupId:"beaconOrTaquitoSAAE5",defaultValue:"beacon",values:[{label:"Beacon",value:"beacon"},{label:"Taquito",value:"taquito"}],children:[(0,t.jsx)(o.A,{value:"beacon",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { DAppClient, BeaconEvent } from "@airgap/beacon-dapp";\nimport { NetworkType } from "@airgap/beacon-types";\nimport { BroadcastChannel, createLeaderElection } from "broadcast-channel";\n\nconst channel = new BroadcastChannel("beacon-test");\nconst elector = createLeaderElection(channel);\nlet wasLeader: boolean = false;\n\nelector.hasLeader().then(async (hasLeader) => {\n  if (!hasLeader) {\n    await elector.awaitLeadership();\n    wasLeader = elector.isLeader;\n  }\n});\n\nwindow.onbeforeunload = async () => {\n  if (wasLeader) {\n    await elector.die();\n    channel.postMessage("LEADER_DEAD");\n  }\n};\n\nchannel.onmessage = async (message: any) => {\n  if (message === "LEADER_DEAD") {\n    await elector.awaitLeadership();\n  }\n};\n\nconst dAppClient = new DAppClient({\n  name: "Beacon Docs",\n  network: {\n    type: NetworkType.GHOSTNET,\n  },\n});\n\ndAppClient.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, async (account) => {\n  console.log(\n    `${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `,\n    account?.address,\n  );\n\n  if (!account || !elector.isLeader) {\n    return;\n  }\n\n  try {\n    await dAppClient.requestSignPayload({\n      payload:\n        "05010000004254657a6f73205369676e6564204d6573736167653a207465737455726c20323032332d30322d30385431303a33363a31382e3435345a2048656c6f20576f726c64",\n    });\n  } catch (err: any) {\n    // The request was rejected\n    // handle disconnection\n  }\n});\n\ndAppClient.requestPermissions();\n'})})}),(0,t.jsx)(o.A,{value:"taquito",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { TezosToolkit } from "@taquito/taquito";\nimport { BeaconWallet } from "@taquito/beacon-wallet";\nimport { BeaconEvent } from "@airgap/beacon-dapp";}\nimport { BroadcastChannel, createLeaderElection } from "broadcast-channel";\n\nconst channel = new BroadcastChannel("beacon-test");\nconst elector = createLeaderElection(channel);\nlet wasLeader: boolean = false;\n\nelector.hasLeader().then(async (hasLeader) => {\n  if (!hasLeader) {\n    await elector.awaitLeadership();\n    wasLeader = elector.isLeader;\n  }\n});\n\nwindow.onbeforeunload = async () => {\n  if (wasLeader) {\n    await elector.die();\n    channel.postMessage("LEADER_DEAD");\n  }\n};\n\nchannel.onmessage = async (message: any) => {\n  if (message === "LEADER_DEAD") {\n    await elector.awaitLeadership();\n  }\n};\n\nconst Tezos = new TezosToolkit("https://mainnet.api.tez.ie");\nconst wallet = new BeaconWallet({ name: "Beacon Docs" });\n\nTezos.setWalletProvider(wallet);\n\nwallet.client.subscribeToEvent(\n  BeaconEvent.ACTIVE_ACCOUNT_SET,\n  async (account) => {\n    console.log(\n      `${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `,\n      account?.address\n    );\n\n    if (!account || !elector.isLeader) {\n      return;\n    }\n\n    try {\n      await wallet.client.requestSignPayload({\n        payload:\n          "05010000004254657a6f73205369676e6564204d6573736167653a207465737455726c20323032332d30322d30385431303a33363a31382e3435345a2048656c6f20576f726c64",\n      });\n    } catch (err: any) {\n      // The request was rejected\n      // handle disconnection\n    }\n  }\n);\n\nwallet.client.requestPermissions();\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/pubkey/broadcast-channel?tab=readme-ov-file#readme",children:"BroadcastChannel"}),": Documentation and usage examples for the ",(0,t.jsx)(n.code,{children:"broadcast-channel"})," library."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(34164);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>T});var t=a(96540),s=a(34164),r=a(23104),o=a(56347),l=a(205),c=a(57485),i=a(31682),d=a(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=h(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[i,u]=b({queryString:a,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),f=(()=>{const e=i??g;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),s=l[a].value;s!==t&&(i(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function A(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(A,{...n,...e})]})}function T(e){const n=(0,m.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);