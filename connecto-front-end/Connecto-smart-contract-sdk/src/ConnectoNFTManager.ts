import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConnectoNFTManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const connectoNftManagerAbi = [
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  {
    type: 'error',
    inputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientAmount',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'InvalidValue' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'TransferFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'collectionAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'ExchangeToGift',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'collectionAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewCollection',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collectionOwner', internalType: 'address', type: 'address' },
      { name: 'connectoFeeAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'baseURI', internalType: 'string', type: 'string' },
      { name: 'orderId', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createNFTCollection',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collectionAddr_', internalType: 'address', type: 'address' },
      { name: 'tokenIds_', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'orderId', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'exchangeToGift',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collection_', internalType: 'address', type: 'address' },
      { name: 'wallet_', internalType: 'address', type: 'address' },
    ],
    name: 'getAllTokenOfUser',
    outputs: [{ name: 'nftIds', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collectionHelper_', internalType: 'address', type: 'address' },
      { name: 'connectoToken_', internalType: 'address', type: 'address' },
      { name: 'treasuryWallet_', internalType: 'address', type: 'address' },
      { name: 'signatureVerifier_', internalType: 'address', type: 'address' },
      { name: 'defaultOwner_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collectionAddr', internalType: 'address', type: 'address' },
      {
        name: 'data',
        internalType: 'struct MintTokenData[]',
        type: 'tuple[]',
        components: [
          {
            name: 'owner',
            internalType: 'struct CrossAddress',
            type: 'tuple',
            components: [
              { name: 'eth', internalType: 'address', type: 'address' },
              { name: 'sub', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'properties',
            internalType: 'struct Property[]',
            type: 'tuple[]',
            components: [
              { name: 'key', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'bytes', type: 'bytes' },
            ],
          },
        ],
      },
      { name: 'orderId', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintBulkCrossToCollection',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collectionAddr', internalType: 'address', type: 'address' },
      {
        name: 'to',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'properties',
        internalType: 'struct Property[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'orderId', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCrossToCollection',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collectionAddr', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'orderId', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintToCollection',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'verifier', internalType: 'address', type: 'address' }],
    name: 'setSignatureVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'treasury', internalType: 'address', type: 'address' }],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoNftManagerAbi}__
 */
export const useReadConnectoNftManager = /*#__PURE__*/ createUseReadContract({
  abi: connectoNftManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"getAllTokenOfUser"`
 */
export const useReadConnectoNftManagerGetAllTokenOfUser =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoNftManagerAbi,
    functionName: 'getAllTokenOfUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadConnectoNftManagerOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoNftManagerAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__
 */
export const useWriteConnectoNftManager = /*#__PURE__*/ createUseWriteContract({
  abi: connectoNftManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"createNFTCollection"`
 */
export const useWriteConnectoNftManagerCreateNftCollection =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'createNFTCollection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"exchangeToGift"`
 */
export const useWriteConnectoNftManagerExchangeToGift =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'exchangeToGift',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteConnectoNftManagerInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"mintBulkCrossToCollection"`
 */
export const useWriteConnectoNftManagerMintBulkCrossToCollection =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'mintBulkCrossToCollection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"mintCrossToCollection"`
 */
export const useWriteConnectoNftManagerMintCrossToCollection =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'mintCrossToCollection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"mintToCollection"`
 */
export const useWriteConnectoNftManagerMintToCollection =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'mintToCollection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteConnectoNftManagerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"setSignatureVerifier"`
 */
export const useWriteConnectoNftManagerSetSignatureVerifier =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'setSignatureVerifier',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useWriteConnectoNftManagerSetTreasury =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteConnectoNftManagerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoNftManagerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__
 */
export const useSimulateConnectoNftManager =
  /*#__PURE__*/ createUseSimulateContract({ abi: connectoNftManagerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"createNFTCollection"`
 */
export const useSimulateConnectoNftManagerCreateNftCollection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'createNFTCollection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"exchangeToGift"`
 */
export const useSimulateConnectoNftManagerExchangeToGift =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'exchangeToGift',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateConnectoNftManagerInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"mintBulkCrossToCollection"`
 */
export const useSimulateConnectoNftManagerMintBulkCrossToCollection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'mintBulkCrossToCollection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"mintCrossToCollection"`
 */
export const useSimulateConnectoNftManagerMintCrossToCollection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'mintCrossToCollection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"mintToCollection"`
 */
export const useSimulateConnectoNftManagerMintToCollection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'mintToCollection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateConnectoNftManagerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"setSignatureVerifier"`
 */
export const useSimulateConnectoNftManagerSetSignatureVerifier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'setSignatureVerifier',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useSimulateConnectoNftManagerSetTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateConnectoNftManagerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoNftManagerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoNftManagerAbi}__
 */
export const useWatchConnectoNftManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: connectoNftManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `eventName` set to `"ExchangeToGift"`
 */
export const useWatchConnectoNftManagerExchangeToGiftEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoNftManagerAbi,
    eventName: 'ExchangeToGift',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchConnectoNftManagerInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoNftManagerAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `eventName` set to `"NewCollection"`
 */
export const useWatchConnectoNftManagerNewCollectionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoNftManagerAbi,
    eventName: 'NewCollection',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoNftManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchConnectoNftManagerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoNftManagerAbi,
    eventName: 'OwnershipTransferred',
  })
