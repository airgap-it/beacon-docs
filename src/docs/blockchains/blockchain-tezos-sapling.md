---
title: Tezos Sapling
slug: /blockchains/tezos-sapling
---

The `Tezos Sapling` package enables messages related to the Sapling implementation on the Tezos blockchain. Sapling adds support for private transactions.

## Permission Scopes

The following permission scopes are available in the Tezos Sapling package.

```ts
export enum TezosSaplingPermissionScope {
  /**
   * The "viewing_key" permission is used to signal to the wallet that a dApp requests access to the viewing key. Sharing the viewing key will give up ALL privacy advantages of sapling, so this permission should only be granted in very specific cases.
   */
  "viewing_key" = "viewing_key",
  /**
   * This permission allows wallets to do normal transfers from one sapling account to another.
   */
  "transfer" = "transfer",
}
```

## Message Types

At the moment, only simple transfers are supported. At a later stage, this package will be extended to include shield and unshield operations, as well as shielded contract calls.

```ts
export enum TezosSaplingMessageType {
  /**
   * This message type is used for transfers from one sapling address to another.
   */
  "transfer_request" = "transfer_request",
  // In a later version, support for shield and unshield operations will most likely be added.
}
```

## Messages

### Permission Request

This message is used to request permissions to use an account.

```ts
export interface TezosSaplingPermissionRequest
  extends PermissionRequestV3<"tezos-sapling"> {
  blockchainData: {
    scopes: TezosSaplingPermissionScope[]; // enum
    appMetadata: AppMetadata;
    network: {
      contract: string; // sapling contract
      type: NetworkType;
      name?: string;
      rpcUrl?: string;
    }
```

### Permission Response

This message is used to share information about an account with a dApp.

```ts
export interface TezosSaplingPermissionResponse
  extends PermissionResponseV3<"tezos-sapling"> {
  blockchainData: {
    appMetadata: AppMetadata;
    scopes: TezosSaplingPermissionScope[]; // enum
    accounts: {
      accountId: string;
      address: string;
      viewingKey?: string; // If the "viewing key" scope is not set, this value has to be removed by the SDK
      network: {
        contract: string; // sapling contract
        type: NetworkType;
        name?: string;
        rpcUrl?: string;

    }[];

}
```

### Transfer Request

This message is used to initiate a transfer between two accounts.

```ts
export interface TezosSaplingTransferRequest
  extends BlockchainMessage<"tezos-sapling"> {
  blockchainData: {
    type: TezosSaplingMessageType.transfer_request;
    scope: TezosSaplingPermissionScope.transfer;
    sourceAddress: string;
    amount: string;
    recipient: string;
    // No network required because we can get it from account id
    mode: "submit" | "submit-and-return" | "return"; // TODO: Wording

}
```

### Transfer Response

This message is used to share information about a requested operation with the dApp.

```ts
export type TezosSaplingTransferResponse =
  | {
      transactionHash: string;
    }
  | {
      transactionHash: string;
      signature: string;
      payload?: string;
    }
  | {
      signature: string;
      payload?: string;

```
