import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConnectoProtocol
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const connectoProtocolAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
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
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'idol',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Donated',
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
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'claimableAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'idol', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'donate',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeCollector',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feePercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'defaultOwner_', internalType: 'address', type: 'address' },
      { name: 'feeCollector_', internalType: 'address', type: 'address' },
      { name: 'feePercentage_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoProtocolAbi}__
 */
export const useReadConnectoProtocol = /*#__PURE__*/ createUseReadContract({
  abi: connectoProtocolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"claimableAmount"`
 */
export const useReadConnectoProtocolClaimableAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoProtocolAbi,
    functionName: 'claimableAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"feeCollector"`
 */
export const useReadConnectoProtocolFeeCollector =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoProtocolAbi,
    functionName: 'feeCollector',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"feePercentage"`
 */
export const useReadConnectoProtocolFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoProtocolAbi,
    functionName: 'feePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"owner"`
 */
export const useReadConnectoProtocolOwner = /*#__PURE__*/ createUseReadContract(
  { abi: connectoProtocolAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoProtocolAbi}__
 */
export const useWriteConnectoProtocol = /*#__PURE__*/ createUseWriteContract({
  abi: connectoProtocolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteConnectoProtocolClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoProtocolAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"donate"`
 */
export const useWriteConnectoProtocolDonate =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoProtocolAbi,
    functionName: 'donate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteConnectoProtocolInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoProtocolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteConnectoProtocolRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoProtocolAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteConnectoProtocolTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoProtocolAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoProtocolAbi}__
 */
export const useSimulateConnectoProtocol =
  /*#__PURE__*/ createUseSimulateContract({ abi: connectoProtocolAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateConnectoProtocolClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoProtocolAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"donate"`
 */
export const useSimulateConnectoProtocolDonate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoProtocolAbi,
    functionName: 'donate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateConnectoProtocolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoProtocolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateConnectoProtocolRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoProtocolAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoProtocolAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateConnectoProtocolTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoProtocolAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoProtocolAbi}__
 */
export const useWatchConnectoProtocolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: connectoProtocolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoProtocolAbi}__ and `eventName` set to `"Donated"`
 */
export const useWatchConnectoProtocolDonatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoProtocolAbi,
    eventName: 'Donated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoProtocolAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchConnectoProtocolInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoProtocolAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoProtocolAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchConnectoProtocolOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoProtocolAbi,
    eventName: 'OwnershipTransferred',
  })
