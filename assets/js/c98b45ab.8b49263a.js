"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[5009],{7947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(74848),o=t(28453),i=t(11470),s=t(19365),r=t(14252);const c={title:"Connect to a dApp"},l=void 0,d={id:"wallet/getting-started/android/connect-to-dapp",title:"Connect to a dApp",description:"Requirements",source:"@site/docs/wallet/getting-started/android/connect-to-dapp.mdx",sourceDirName:"wallet/getting-started/android",slug:"/wallet/getting-started/android/connect-to-dapp",permalink:"/wallet/getting-started/android/connect-to-dapp",draft:!1,unlisted:!1,editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/wallet/getting-started/android/connect-to-dapp.mdx",tags:[],version:"current",frontMatter:{title:"Connect to a dApp"},sidebar:"wallet",previous:{title:"Installation",permalink:"/wallet/getting-started/android/installation"},next:{title:"Disconnect from a dApp",permalink:"/wallet/getting-started/android/disconnect-from-dapp"}},p={},h=[{value:"Requirements",id:"requirements",level:2},{value:"How to listen for messages and respond",id:"how-to-listen-for-messages-and-respond",level:2},{value:"Create a wallet client",id:"create-a-wallet-client",level:3},{value:"Subscribe to incoming requests",id:"subscribe-to-incoming-requests",level:3},{value:"Connect to a dApp",id:"connect-to-a-dapp",level:3},{value:"Handle requests from the dApp",id:"handle-requests-from-the-dapp",level:3},{value:"Example Code",id:"example-code",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{toc:h}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.p,{children:"Make sure you have added the following modules as your dependencies:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:":core\n:client-wallet\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You should have also decided which blockchains will be supported in your application and what transport layers to use to establish the communication. Make sure you have added the appropriate ",(0,a.jsx)(n.a,{href:"installation#blockchain",children:"Blockchain"})," and ",(0,a.jsx)(n.a,{href:"installation#transport",children:"Transport"})," modules as your dependencies as well."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"installation",children:"Installation"})," page for more information about the modules and how to install them."]})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Beacon Android SDK by default uses ",(0,a.jsx)(n.a,{href:"https://kotlinlang.org/docs/coroutines-overview.html",children:"Coroutines"})," to handle asynchronous code. If you don't want to use ",(0,a.jsx)(n.a,{href:"https://kotlinlang.org/docs/coroutines-overview.html",children:"Coroutines"})," in your application, see the ",(0,a.jsx)(n.a,{href:"/wallet/advanced/android/coroutines-alternatives",children:"Coroutines Alternatives"})," to learn other approaches."]})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-listen-for-messages-and-respond",children:"How to listen for messages and respond"}),"\n",(0,a.jsx)(n.p,{children:"Follow the steps below to learn how to interact with a dApp. The guide assumes all blockchains and transport layers are supported."}),"\n",(0,a.jsx)(n.h3,{id:"create-a-wallet-client",children:"Create a wallet client"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:"BeaconWalletClient"})," instance by providing your app's name, registering supported blockchains and transport layers that will be used for communication."]}),"\n",(0,a.jsxs)(n.p,{children:["The example below creates a new ",(0,a.jsx)(n.code,{children:"BeaconWalletClient"})," instance with default settings. See the ",(0,a.jsx)(n.a,{href:"/wallet/advanced/android/configuration",children:"Configuration"})," guide to learn about more advanced setups."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import it.airgap.beaconsdk.blockchain.substrate.substrate\nimport it.airgap.beaconsdk.blockchain.tezos.tezos\nimport it.airgap.beaconsdk.client.wallet.BeaconWalletClient\nimport it.airgap.beaconsdk.transport.p2p.matrix.p2pMatrix\n\nmyCoroutineScope.launch {\n    // highlight-start\n    val beaconWallet = BeaconWalletClient("My App") {\n        support(substrate(), tezos()) // set support for Substrate and Tezos blockchains\n        use(p2pMatrix()) // use Matrix to communicate with the Beacon network\n    }\n    // highlight-end\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Currently only one instance of ",(0,a.jsx)(n.code,{children:"BeaconWalletClient"})," should be created per application."]})}),"\n",(0,a.jsx)(n.h3,{id:"subscribe-to-incoming-requests",children:"Subscribe to incoming requests"}),"\n",(0,a.jsxs)(n.p,{children:["Listen to requests from the dApp by collecting the ",(0,a.jsx)(n.a,{href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow/index.html",children:(0,a.jsx)(n.code,{children:"Flow"})})," returned from the ",(0,a.jsx)(n.code,{children:"BeaconWalletClient#connect"})," method. The ",(0,a.jsx)(n.a,{href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-flow/index.html",children:(0,a.jsx)(n.code,{children:"Flow"})})," emits ",(0,a.jsx)(n.code,{children:"BeaconRequest"})," packed in a ",(0,a.jsx)(n.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/",children:(0,a.jsx)(n.code,{children:"Result"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import it.airgap.beaconsdk.core.message.BeaconRequest\n\nmyCoroutineScope.launch {\n    // highlight-start\n    // connect to the network and collect the messages\n    beaconWallet.connect().collect { result -> //: Result<BeaconRequest>\n    // highlight-end\n        result.getOrNull()?.let { onBeaconRequest(it) } // if success\n        result.exceptionOrNull()?.let { onError(it) } // if failure\n    }\n}\n\nfun onBeaconRequest(request: BeaconRequest) {\n    TODO("Not yet implemented")\n}\n\nfun onError(e: Throwable) {\n    e.printStackTrace()\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"connect-to-a-dapp",children:"Connect to a dApp"}),"\n",(0,a.jsxs)(n.p,{children:["To connect to a new dApp take the pairing request (obtained from, for example, a paring QR code) and transform it to ",(0,a.jsx)(n.code,{children:"P2pPeer"}),". Next, register the new instance of ",(0,a.jsx)(n.code,{children:"P2pPeer"})," in your wallet client."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import it.airgap.beaconsdk.core.data.P2pPeer\n\n// highlight-start\n// replace placeholder values with data provided in the dApp\'s pairing request\nval dApp = P2pPeer(\n    id = "id",\n    name = "name",\n    publicKey = "publicKey",\n    relayServer = "relayServer",\n    version = "version",\n)\n// highlight-end\n\nmyCoroutineScope.launch {\n    try {\n        // highlight-start\n        // connect to a new peer\n        beaconWallet.addPeers(dApp)\n        // highlight-end\n    } catch (e: Exception) {\n        e.printStackTrace()\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"handle-requests-from-the-dapp",children:"Handle requests from the dApp"}),"\n",(0,a.jsxs)(n.p,{children:["Having received a request, you can create a response and send it back to the dApp. The response should ",(0,a.jsx)(n.em,{children:"always"})," be created from an incoming request. Attempting to send a response that was not created from a request awaiting answer will result in an error."]}),"\n",(0,a.jsx)(n.p,{children:"The first request your app receives from a dApp is a permission request. The example below shows how to respond to it in the most basic way. To get more information about other kinds of requests or learn more advanced use cases see the Blockchain  guides."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import it.airgap.beaconsdk.blockchain.substrate.data.SubstrateAccount\nimport it.airgap.beaconsdk.blockchain.substrate.data.SubstrateNetwork\nimport it.airgap.beaconsdk.blockchain.substrate.message.request.PermissionSubstrateRequest\nimport it.airgap.beaconsdk.blockchain.substrate.message.response.PermissionSubstrateResponse\nimport it.airgap.beaconsdk.blockchain.tezos.message.request.PermissionTezosRequest\nimport it.airgap.beaconsdk.blockchain.tezos.message.response.PermissionTezosResponse\nimport it.airgap.beaconsdk.core.data.BeaconError\nimport it.airgap.beaconsdk.core.message.BeaconRequest\nimport it.airgap.beaconsdk.core.message.ErrorBeaconResponse\n\nfun onBeaconRequest(request: BeaconRequest) {\n    // highlight-start\n    // create a response based on the request\n    val response = when (request) {\n        is PermissionSubstrateRequest -> PermissionSubstrateResponse.from(request, request.networks.map { substrateAccount(it) })\n        is PermissionTezosRequest -> PermissionTezosResponse.from(request, tezosAccount(request.network))\n        else -> ErrorBeaconResponse.from(request, BeaconError.Aborted)\n    }\n    // highlight-end\n\n    myCoroutineScope.launch {\n        try {\n            // highlight-start\n            // send the response\n            beaconWallet.respond(response)\n            // highlight-end\n        } catch (e: Exception) {\n            e.printStackTrace()\n        }\n    }\n}\n\n// replace placeholder values with valid data\nfun substrateAccount(network: SubstrateNetwork) = SubstrateAccount(\n    "substratePublicKey",\n    "substrateAddress",\n    network,\n)\n\nfun tezosAccount(network: TezosNetwork) = TezosAccount(\n    "tezosPublicKey",\n    "tezosAddress",\n    network,\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"example-code",children:"Example Code"}),"\n",(0,a.jsxs)(n.p,{children:["The following example shows how to create a simple ",(0,a.jsx)(n.code,{children:"Activity"})," which connects to a dApp using ",(0,a.jsx)(n.a,{href:"https://matrix.org/",children:"Matrix"})," and handles ",(0,a.jsx)(n.a,{href:"https://substrate.io/",children:"Substrate"})," and ",(0,a.jsx)(n.a,{href:"https://tezos.com/",children:"Tezos"})," messages based on the steps described earlier."]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",defaultValue:"kotlin",values:[{label:"Groovy",value:"groovy"},{label:"Kotlin",value:"kotlin"}],children:[(0,a.jsx)(s.A,{value:"groovy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"allprojects {\n    repositories {\n        maven { url 'https://jitpack.io' }\n    }\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'allprojects {\n    repositories {\n        maven("https://jitpack.io")\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/airgap-it/beacon-android-sdk",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/airgap-it/beacon-android-sdk?label=stable&sort=semver",alt:"stable"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/airgap-it/beacon-android-sdk",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/airgap-it/beacon-android-sdk?color=orange&include_prereleases&label=latest",alt:"latest"})})]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",defaultValue:"kotlin",values:[{label:"Groovy",value:"groovy"},{label:"Kotlin",value:"kotlin"}],children:[(0,a.jsx)(s.A,{value:"groovy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",metastring:'title="app/build.gradle"',children:'dependencies {\n    // Beacon\n    def beacon_version = "x.y.z"\n\n    implementation "com.github.airgap-it.beacon-android-sdk:core:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:client-wallet:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:blockchain-substrate:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:blockchain-tezos:$beacon_version"\n    implementation "com.github.airgap-it.beacon-android-sdk:transport-p2p-matrix:$beacon_version"\n\n    // Android\n    def android_activity_version = "x.y.z"\n    implementation "androidx.activity:activity-ktx:$android_activity_version"\n\n    def android_lifecycle_version = "x.y.z"\n    implementation "androidx.lifecycle:lifecycle-livedata-ktx:$android_lifecycle_version"\n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="app/build.gradle.kts"',children:'dependencies {\n    // Beacon\n    val beaconVersion = "x.y.z"\n\n    implementation("com.github.airgap-it.beacon-android-sdk:core:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:client-wallet:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:blockchain-substrate:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:blockchain-tezos:$beaconVersion")\n    implementation("com.github.airgap-it.beacon-android-sdk:transport-p2p-matrix:$beaconVersion")\n\n    // Android\n    val androidActivityVersion = "x.y.z"\n    implementation("androidx.activity:activity-ktx:$androidActivityVersion")\n\n    val androidLifecycleVersion = "x.y.z"\n    implementation("androidx.lifecycle:lifecycle-livedata-ktx:$androidLifecycleVersion")\n}\n'})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="app/src/main/java/com/example/MainActivity.kt"',children:'package com.example\n\nimport android.os.Bundle\nimport androidx.appcompat.app.AppCompatActivity\nimport androidx.lifecycle.asLiveData\nimport androidx.lifecycle.lifecycleScope\nimport it.airgap.beaconsdk.blockchain.substrate.data.SubstrateAccount\nimport it.airgap.beaconsdk.blockchain.substrate.data.SubstrateNetwork\nimport it.airgap.beaconsdk.blockchain.substrate.message.request.PermissionSubstrateRequest\nimport it.airgap.beaconsdk.blockchain.substrate.message.response.PermissionSubstrateResponse\nimport it.airgap.beaconsdk.blockchain.substrate.substrate\nimport it.airgap.beaconsdk.blockchain.tezos.data.TezosAccount\nimport it.airgap.beaconsdk.blockchain.tezos.data.TezosNetwork\nimport it.airgap.beaconsdk.blockchain.tezos.message.request.PermissionTezosRequest\nimport it.airgap.beaconsdk.blockchain.tezos.message.response.PermissionTezosResponse\nimport it.airgap.beaconsdk.blockchain.tezos.tezos\nimport it.airgap.beaconsdk.client.wallet.BeaconWalletClient\nimport it.airgap.beaconsdk.core.data.BeaconError\nimport it.airgap.beaconsdk.core.data.P2pPeer\nimport it.airgap.beaconsdk.core.message.BeaconRequest\nimport it.airgap.beaconsdk.core.message.ErrorBeaconResponse\nimport it.airgap.beaconsdk.transport.p2p.matrix.p2pMatrix\nimport kotlinx.coroutines.launch\n\nclass MainActivity : AppCompatActivity() {\n    lateinit var beaconWallet: BeaconWalletClient\n\n    val dApp = P2pPeer(\n        "0b02d44c-de33-b5ab-7730-ff8e62f61869" /* TODO: change me */,\n        "My dApp",\n        "6c7870aa1e42477fd7c2baaf4763bd826971e470772f71a0a388c1763de3ea1e" /* TODO: change me */,\n        "beacon-node-1.sky.papers.tech" /* TODO: change me */,\n        "2" /* TODO: change me */,\n    )\n\n    fun substrateAccount(network: SubstrateNetwork) = SubstrateAccount(\n        "f4c6095213a2f6d09464ed882b12d6024d20f7170c3b8bd5c1b071e4b00ced72" /* TODO: change me */,\n        "16XwWkdUqFXFY1tJNf1Q6fGgxQnGYUS6M95wPcrbp2sjjuoC" /* TODO: change me */,\n        network,\n    )\n\n    fun tezosAccount(network: TezosNetwork) = TezosAccount(\n        "9ae0875d510904b0b15d251d8def1f5f3353e9799841c0ed6d7ac718f04459a0" /* TODO: change me */,\n        "tz1SkbBZg15BXPRkYCrSzhY6rq4tKGtpUSWv" /* TODO: change me */,\n        network,\n    )\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        lifecycleScope.launch {\n            createWalletClient()\n            subscribeToRequests()\n            connectToDApp()\n        }\n    }\n\n    suspend fun createWalletClient() {\n        // highlight-start\n        beaconWallet = BeaconWalletClient("My App") {\n            support(substrate(), tezos())\n            use(p2pMatrix())\n        }\n        // highlight-end\n    }\n\n    fun subscribeToRequests() {\n        // highlight-start\n        beaconWallet.connect().asLiveData().observe(this) { result ->\n        // highlight-end\n            result.getOrNull()?.let { onBeaconRequest(it) }\n            result.exceptionOrNull()?.let { onError(it) }\n        }\n    }\n\n    suspend fun connectToDApp() {\n        try {\n            // highlight-start\n            beaconWallet.addPeers(dApp)\n            // highlight-end\n        } catch (e: Exception) {\n            onError(e)\n        }\n    }\n\n    fun onBeaconRequest(request: BeaconRequest) {\n        // highlight-start\n        val response = when (request) {\n            is PermissionSubstrateRequest -> PermissionSubstrateResponse.from(request, request.networks.map { substrateAccount(it) })\n            is PermissionTezosRequest -> PermissionTezosResponse.from(request, tezosAccount(request.network))\n            else -> ErrorBeaconResponse.from(request, BeaconError.Aborted)\n        }\n        // highlight-end\n\n        lifecycleScope.launch {\n            try {\n                // highlight-start\n                beaconWallet.respond(response)\n                // highlight-end\n            } catch (e: Exception) {\n                onError(e)\n            }\n        }\n    }\n\n    fun onError(e: Throwable) {\n        e.printStackTrace()\n    }\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);