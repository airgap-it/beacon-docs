"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[841],{11865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=t(74848),s=t(28453);const c={title:"Usage",slug:"/blockchains/usage"},o=void 0,i={id:"blockchains/usage",title:"Usage",description:"Let's look at an example how a dApp can be initialized with support for a substrate based blockchain.",source:"@site/docs/blockchains/usage.md",sourceDirName:"blockchains",slug:"/blockchains/usage",permalink:"/blockchains/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/blockchains/usage.md",tags:[],version:"current",frontMatter:{title:"Usage",slug:"/blockchains/usage"},sidebar:"docs",previous:{title:"Introduction",permalink:"/blockchains/introduction"},next:{title:"Substrate",permalink:"/blockchains/substrate"}},r={},l=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Let's look at an example how a dApp can be initialized with support for a ",(0,a.jsx)(n.code,{children:"substrate"})," based blockchain."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { DAppClient } from "@airgap/beacon-dapp";\nimport { SubstrateBlockchain } from "@airgap/beacon-blockchain-substrate";\n\nconst client = new DAppClient({\n  name: "Example dApp",\n});\n\nconst substrateBlockchain = new SubstrateBlockchain();\nclient.addBlockchain(substrateBlockchain);\n\nclient.getActiveAccount().then((activeAccount) => {\n  client\n    .request({\n      blockchainIdentifier: "substrate",\n      type: "blockchain_request",\n      blockchainData: {\n        type: "transfer_request",\n        scope: "transfer",\n        sourceAddress: activeAccount.address,\n        amount: "1",\n        recipient: activeAccount.address, // Send to self\n        network: {\n          genesisHash:\n            "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",\n        },\n        mode: "return",\n      },\n    })\n    .then((response) => {\n      console.log("response", response);\n    });\n});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["On the wallet side, the blockchain doesn't explicitly have to be registered, it can be filtered by the ",(0,a.jsx)(n.code,{children:"blockchainIdentifier"})," property."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { WalletClient } from "@airgap/beacon-wallet";\nimport { BeaconMessageType } from "@airgap/beacon-types";\n\nconst client = new WalletClient({\n  name: "Example Wallet", // Name of the Wallet\n});\n\nawait client.init();\n\nclient.connect(async (message) => {\n  if (message.version === "3") {\n    // Example: Handle PermissionRequest. A wallet should handle all request types\n    if (message.message.type === beacon.BeaconMessageType.PermissionRequest) {\n      if (message.message.blockchainIdentifier !== "substrate") {\n        throw new Error("Only KSM supported");\n      }\n      console.log("SUBSTRATE MESSAGE");\n      // Show a UI to the user where he can confirm sharing an account with the dApp\n\n      const response = {\n        id: message.id,\n        type: BeaconMessageType.PermissionResponse,\n        blockchainData: {\n          appMetadata: { name: "Example Wallet" },\n          scopes: [0],\n          accounts: [\n            {\n              network: {\n                genesisHash:\n                  "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",\n              },\n              addressPrefix: 0,\n              publicKey:\n                "3b92229274683b338cf8b040cf91ac0f8e19e410f06eda5537ef077e718e0024",\n            },\n          ],\n        },      // Send response back to dApp\n      client.respond(response);\n    }\n  }\n});\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},c=a.createContext(s);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);