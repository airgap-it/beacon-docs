---
title: Wallets
slug: /supported-wallets
---

**[AirGap Wallet](https://airgap.it)**

AirGap Wallet is a mobile wallet for [Android](https://play.google.com/store/apps/details?id=it.airgap.wallet) and [iOS](https://apps.apple.com/us/app/airgap-wallet/id1420996542?l=de&ls=1) that works in conjunction with AirGap Vault.

**[Spire](https://spirewallet.com/)**

Spire is a browser extension and supports connection to mobile wallets like AirGap Wallet, Ledger hardware wallets as well as a local mnemonic option recommended for developers.

**[Kukai](https://wallet.kukai.app/)**

Kukai is a Tezos web wallet based on three principles: Security, Community and Reliability.

**[Temple](https://templewallet.com/)**

Temple is a web extension for your browser, easy-to-use browser extension wallet for interacting with the Tezos ecosystem.

**[Galleon](https://cryptonomic.tech/galleon.html)**

Galleon is a deployment of Tezori, an open-source wallet frame-work for Tezos, supporting both software and hardware wallets in eight languages on Mac, Windows, and Linux.

**[Umami](https://umamiwallet.com/)**

Umami is a Tezos desktop wallet that combines best-in-class features to deliver a smooth user experience for both beginner and advanced users.

**[Autnomy](https://autonomy.io/)**
Autonomy is the world’s first and only digital art wallet. It gives you one easy-to-use app to securely collect, view and discover digital art you love. Autonomy works with Tezos and is built to support all new chains as they emerge.

## Can I use all features of Beacon with all wallets?

Wallets are encouraged to support all features that Beacon offers. Please refer to the following matrix to check which features are supported in major wallets.

|                           | Temple | Kukai | Spire | AirGap | Galleon | Umami | Autonomy |
| ------------------------- | ------ | ----- | ----- | ------ | ------- | ----- | -------- |
| permissionRequest         | ✅     | ✅     | ✅    | ✅     | ✅      | ✅    | ✅        | 
| operationRequest          | ✅     | ✅     | ✅    | ✅     | ✅      | ✅    | ✅        | 
| signRequest (RAW)         | ✅     | ❌ *** | ✅    | ✅     | ❌      | ✅    | ✅        | 
| signRequest (MICHELINE)   | ✅     | ✅     | ✅    | ✅     | ❌      | ✅    | ✅        | 
| signRequest (TRANSACTION) | ✅     | ✅     | ✅    | ✅     | ❌      | ✅    | ✅        | 
| broadcastRequest          | ✅     | ❌     | ✅    | ✅     | ❓      | ❌    | ❌        | 

` *** 05 or 03 prefixed operations only`
