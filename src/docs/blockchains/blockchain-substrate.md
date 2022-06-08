---
title: Substrate
slug: /blockchains/substrate
---

## Permission Scopes

The following permission scopes are available in the Substrate package.

```typescript
export enum SubstratePermissionScope {
  "transfer" = "transfer",
  "sign_payload_json" = "sign_payload_json",
  "sign_payload_raw" = "sign_payload_raw",
}
```

## Message Types

The supported message types.

```typescript
export enum SubstrateMessageType {
  "transfer_request" = "transfer_request",
  "sign_payload_request" = "sign_payload_request",
}
```

## Messages

### Permission Request

This message is used to request permissions to use an account.

```typescript
export interface SubstratePermissionRequest
  extends PermissionRequestV3<"substrate"> {
  blockchainData: {
    scopes: SubstratePermissionScope[]; // enum
    appMetadata: AppMetadata;
    network?: {
      genesisHash: string; // Wallet shows only those accounts
      rpc?: string; // For development nodes?
    }[]; // Array to "whitelist" certain networks? (optional)
  };
}
```

### Permission Response

This message is used to share information about an account with a dApp.

```typescript
export interface SubstratePermissionResponse
  extends PermissionResponseV3<"substrate"> {
  blockchainData: {
    appMetadata: AppMetadata;
    scopes: SubstratePermissionScope[]; // enum
    accounts: {
      accountId: string;
      network?: {
        genesisHash: string;
        rpc?: string;
      };
      publicKey: string;
      address: string;
    }[];
  };
}
```

### Transfer Request

This message is used to initiate a transfer between two accounts.

```typescript
export interface SubstrateTransferRequest
  extends BlockchainMessage<"substrate"> {
  blockchainData: {
    type: SubstrateMessageType.transfer_request;
    scope: SubstratePermissionScope.transfer;
    sourceAddress: string;
    amount: string;
    recipient: string;
    network: {
      genesisHash: string;
      rpc?: string;
    };
    mode: "submit" | "submit-and-return" | "return"; // TODO: Wording
  };
}
```

### Transfer Response

This message is used to share information about a requested operation with the dApp.

```typescript
export type SubstrateTransferResponse =
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
    };
```

### Sign Payload Request

This message is used to request the signature for a payload.

```typescript
export interface SubstrateSignPayloadRequest
  extends BlockchainMessage<"substrate"> {
  blockchainData: {
    type: SubstrateMessageType.sign_payload_request;
    scope:
      | SubstratePermissionScope.sign_payload_json
      | SubstratePermissionScope.sign_payload_json;

    // This type is the same as the "SignerPayloadJSON" of polkadot.js https://github.com/polkadot-js/api/blob/f169ca08a80ea9c3865dc545e03e921c50f0d284/packages/types/src/types/extrinsic.ts#L32
    payload:
      | {
          type: "json";

          /**
           * @description The checkpoint hash of the block, in hex
           */
          blockHash: string;

          /**
           * @description The checkpoint block number, in hex
           */
          blockNumber: string;

          /**
           * @description The era for this transaction, in hex
           */
          era: string;

          /**
           * @description The genesis hash of the chain, in hex
           */
          genesisHash: string;

          /**
           * @description The encoded method (with arguments) in hex
           */
          method: string;

          /**
           * @description The nonce for this transaction, in hex
           */
          nonce: string;

          /**
           * @description The current spec version for the runtime
           */
          specVersion: string;

          /**
           * @description The tip for this transaction, in hex
           */
          tip: string;

          /**
           * @description The current transaction version for the runtime
           */
          transactionVersion: string;

          /**
           * @description The applicable signed extensions for this runtime
           */
          signedExtensions: string[];

          /**
           * @description The version of the extrinsic we are dealing with
           */
          version: number;
        }
      | {
          type: "raw";
          isMutable: boolean;
          dataType: "bytes" | "payload";
          data: string;
        };

    mode: "submit" | "submit-and-return" | "return";
  };
}
```

### Sign Payload Response

This message is used to share information about a requested signature with the dApp.

```typescript
export type SubstrateSignPayloadResponse =
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
    };
```
