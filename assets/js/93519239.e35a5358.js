"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[764],{27267:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(74848),i=n(28453);const a={title:"Tezos Sapling",slug:"/blockchains/tezos-sapling"},o=void 0,r={id:"blockchains/blockchain-tezos-sapling",title:"Tezos Sapling",description:"The Tezos Sapling package enables messages related to the Sapling implementation on the Tezos blockchain. Sapling adds support for private transactions.",source:"@site/docs/blockchains/blockchain-tezos-sapling.md",sourceDirName:"blockchains",slug:"/blockchains/tezos-sapling",permalink:"/blockchains/tezos-sapling",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/blockchains/blockchain-tezos-sapling.md",tags:[],version:"current",frontMatter:{title:"Tezos Sapling",slug:"/blockchains/tezos-sapling"},sidebar:"docs",previous:{title:"Tezos",permalink:"/blockchains/tezos"},next:{title:"Postmortem Incident 1",permalink:"/post-mortem"}},c={},l=[{value:"Permission Scopes",id:"permission-scopes",level:2},{value:"Message Types",id:"message-types",level:2},{value:"Messages",id:"messages",level:2},{value:"Permission Request",id:"permission-request",level:3},{value:"Permission Response",id:"permission-response",level:3},{value:"Transfer Request",id:"transfer-request",level:3},{value:"Transfer Response",id:"transfer-response",level:3}];function p(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Tezos Sapling"})," package enables messages related to the Sapling implementation on the Tezos blockchain. Sapling adds support for private transactions."]}),"\n",(0,t.jsx)(s.h2,{id:"permission-scopes",children:"Permission Scopes"}),"\n",(0,t.jsx)(s.p,{children:"The following permission scopes are available in the Tezos Sapling package."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'export enum TezosSaplingPermissionScope {\n  /**\n   * The "viewing_key" permission is used to signal to the wallet that a dApp requests access to the viewing key. Sharing the viewing key will give up ALL privacy advantages of sapling, so this permission should only be granted in very specific cases.\n   */\n  "viewing_key" = "viewing_key",\n  /**\n   * This permission allows wallets to do normal transfers from one sapling account to another.\n   */\n  "transfer" = "transfer",\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"message-types",children:"Message Types"}),"\n",(0,t.jsx)(s.p,{children:"At the moment, only simple transfers are supported. At a later stage, this package will be extended to include shield and unshield operations, as well as shielded contract calls."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'export enum TezosSaplingMessageType {\n  /**\n   * This message type is used for transfers from one sapling address to another.\n   */\n  "transfer_request" = "transfer_request",\n  // In a later version, support for shield and unshield operations will most likely be added.\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"messages",children:"Messages"}),"\n",(0,t.jsx)(s.h3,{id:"permission-request",children:"Permission Request"}),"\n",(0,t.jsx)(s.p,{children:"This message is used to request permissions to use an account."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'export interface TezosSaplingPermissionRequest\n  extends PermissionRequestV3<"tezos-sapling"> {\n  blockchainData: {\n    scopes: TezosSaplingPermissionScope[]; // enum\n    appMetadata: AppMetadata;\n    network: {\n      contract: string; // sapling contract\n      type: NetworkType;\n      name?: string;\n      rpcUrl?: string;\n    }\n'})}),"\n",(0,t.jsx)(s.h3,{id:"permission-response",children:"Permission Response"}),"\n",(0,t.jsx)(s.p,{children:"This message is used to share information about an account with a dApp."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'export interface TezosSaplingPermissionResponse\n  extends PermissionResponseV3<"tezos-sapling"> {\n  blockchainData: {\n    appMetadata: AppMetadata;\n    scopes: TezosSaplingPermissionScope[]; // enum\n    accounts: {\n      accountId: string;\n      address: string;\n      viewingKey?: string; // If the "viewing key" scope is not set, this value has to be removed by the SDK\n      network: {\n        contract: string; // sapling contract\n        type: NetworkType;\n        name?: string;\n        rpcUrl?: string;\n\n    }[];\n\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"transfer-request",children:"Transfer Request"}),"\n",(0,t.jsx)(s.p,{children:"This message is used to initiate a transfer between two accounts."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'export interface TezosSaplingTransferRequest\n  extends BlockchainMessage<"tezos-sapling"> {\n  blockchainData: {\n    type: TezosSaplingMessageType.transfer_request;\n    scope: TezosSaplingPermissionScope.transfer;\n    sourceAddress: string;\n    amount: string;\n    recipient: string;\n    // No network required because we can get it from account id\n    mode: "submit" | "submit-and-return" | "return"; // TODO: Wording\n\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"transfer-response",children:"Transfer Response"}),"\n",(0,t.jsx)(s.p,{children:"This message is used to share information about a requested operation with the dApp."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type TezosSaplingTransferResponse =\n  | {\n      transactionHash: string;\n    }\n  | {\n      transactionHash: string;\n      signature: string;\n      payload?: string;\n    }\n  | {\n      signature: string;\n      payload?: string;\n\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(96540);const i={},a=t.createContext(i);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);