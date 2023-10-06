---
title: Introduction
slug: /blockchains/introduction
---

Since the release of `beacon-sdk` version 3.0, Beacon supports multiple blockchains.

Currently, 3 separate blockchain packages are available:

- Substrate (@airgap/beacon-blockchain-substrate)
- Tezos (@airgap/beacon-blockchain-tezos)
- Tezos Sapling (@airgap/beacon-blockchain-tezos-sapling)

### Structure

Every blockchain can define their own messages. Those messages are then wrapped in a message with additional metadata from the beacon protocol.

See the docs about the individual packages for more information about the messages specific to certain blockchains.

#### Wrapper

In the Beacon protocol, every message is wrapped in the following wrapper.

```ts
export interface BeaconMessageWrapper<T extends BeaconBaseMessage> {
  id: string; // ID of the message. The same ID is used in the request and response
  version: string;
  senderId: string; // ID of the sender. This is used to identify the
  message: T;
}
```

#### Blockchain Message

The layout for the basic message is the same for all blockchains.

```ts
export interface BlockchainMessage<T extends string = string> {
  blockchainIdentifier: T;
  type: unknown;
  blockchainData: unknown;
}
```

#### Permission Message

One core concept of Beacon is that as a first step (after establishing the connection), the dApp needs to request permissions to receive information about accounts and execute certain actions.

For this reason, there are two messages, `PermissionRequest` and `PermissionResponse`, that are used to do the permission management.

Those messages are handled differently from the generic `BlockchainRequest` and `BlockchainResponse` messages because they have to be completed first before any other action can take place.

```ts
export interface PermissionRequestV3<T extends string = string>
  extends BlockchainMessage<T> {
  blockchainIdentifier: T;
  type: BeaconMessageType.PermissionRequest;
  blockchainData: {
    appMetadata: AppMetadata; // Some additional information about the DApp
    scopes: string[];

}
```

```ts
export interface PermissionResponseV3<T extends string = string>
  extends BlockchainMessage<T> {
  blockchainIdentifier: T;
  type: BeaconMessageType.PermissionResponse;
  blockchainData: {
    appMetadata: AppMetadata; // Some additional information about the Wallet
    scopes: string[]; // Permissions that have been granted for this specific address / account

}
```

#### Request / Response

Following are the generic messages of the Beacon Protocol. They can be extended by every blockchain to add blockchain specific data and behaviour.

Please see the docs about the specific blockchain messages for examples.

```ts
export interface BlockchainRequestV3<T extends string = string>
  extends BlockchainMessage<T> {
  blockchainIdentifier: T;
  type: BeaconMessageType.BlockchainRequest;
  accountId: string;
  blockchainData: {
    type: string;
    scope: string;

}
```

```ts
export interface BlockchainResponseV3<T extends string = string>
  extends BlockchainMessage<T> {
  blockchainIdentifier: T;
  type: BeaconMessageType.BlockchainResponse;
  // accountId is not present, because it can be fetched from the request
  blockchainData: unknown;
}
```
