import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConnectoMarketplace
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const connectoMarketplaceAbi = [
  {
    type: 'error',
    inputs: [{ name: 'reason', internalType: 'string', type: 'string' }],
    name: 'Forbidden',
  },
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'ListingNotFound',
  },
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
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'TransferFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'timeBuffer',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bidBufferBps',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AuctionBuffersUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'closer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'cancelled', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'auctionCreator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'winningBidder',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AuctionClosed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'platformFeeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'flatFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FlatPlatformFeeUpdated',
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
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'lister',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listing',
        internalType: 'struct IConnectoMarketplace.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'reservePricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'buyoutPricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'listingType',
            internalType: 'enum IConnectoMarketplace.ListingType',
            type: 'uint8',
          },
        ],
        indexed: false,
      },
    ],
    name: 'ListingAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ListingRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ListingUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'offeror',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingType',
        internalType: 'enum IConnectoMarketplace.ListingType',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'totalOfferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'currency',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewOffer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'lister',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'totalPricePaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewSale',
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
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'platformFeeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'platformFeeBps',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PlatformFeeInfoUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'feeType',
        internalType: 'enum IPlatformFee.PlatformFeeType',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'PlatformFeeTypeUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_BPS',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'targetListing_',
        internalType: 'struct IConnectoMarketplace.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'reservePricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'buyoutPricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'listingType',
            internalType: 'enum IConnectoMarketplace.ListingType',
            type: 'uint8',
          },
        ],
      },
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_offeror', internalType: 'address', type: 'address' },
    ],
    name: 'acceptOffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bidBufferBps',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'targetListing_',
        internalType: 'struct IConnectoMarketplace.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'reservePricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'buyoutPricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'listingType',
            internalType: 'enum IConnectoMarketplace.ListingType',
            type: 'uint8',
          },
        ],
      },
      { name: 'buyFor_', internalType: 'address', type: 'address' },
      { name: 'signature_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to_', internalType: 'address', type: 'address' },
      { name: 'token_', internalType: 'address', type: 'address' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'targetListing_',
        internalType: 'struct IConnectoMarketplace.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'reservePricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'buyoutPricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'listingType',
            internalType: 'enum IConnectoMarketplace.ListingType',
            type: 'uint8',
          },
        ],
      },
      { name: 'closeFor_', internalType: 'address', type: 'address' },
    ],
    name: 'closeAuction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPlatformFeeInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'defaultOwner_', internalType: 'address', type: 'address' },
      {
        name: 'platformFeeRecipient_',
        internalType: 'address',
        type: 'address',
      },
      { name: 'platformFeeBps_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'targetListing_',
        internalType: 'struct IConnectoMarketplace.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          {
            name: 'reservePricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'buyoutPricePerToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'listingType',
            internalType: 'enum IConnectoMarketplace.ListingType',
            type: 'uint8',
          },
        ],
      },
      { name: 'pricePerToken_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'expirationTimestamp_',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'offer',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'offers',
    outputs: [
      { name: 'listingId', internalType: 'uint256', type: 'uint256' },
      { name: 'offeror', internalType: 'address', type: 'address' },
      { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
      { name: 'expirationTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
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
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'returnBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_timeBuffer', internalType: 'uint256', type: 'uint256' },
      { name: '_bidBufferBps', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAuctionBuffers',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_platformFeeRecipient',
        internalType: 'address',
        type: 'address',
      },
      { name: '_platformFeeBps', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPlatformFeeInfo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'timeBuffer',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalListings',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'winningBid',
    outputs: [
      { name: 'listingId', internalType: 'uint256', type: 'uint256' },
      { name: 'offeror', internalType: 'address', type: 'address' },
      { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
      { name: 'expirationTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__
 */
export const useReadConnectoMarketplace = /*#__PURE__*/ createUseReadContract({
  abi: connectoMarketplaceAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"MAX_BPS"`
 */
export const useReadConnectoMarketplaceMaxBps =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'MAX_BPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"bidBufferBps"`
 */
export const useReadConnectoMarketplaceBidBufferBps =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'bidBufferBps',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadConnectoMarketplaceContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"getPlatformFeeInfo"`
 */
export const useReadConnectoMarketplaceGetPlatformFeeInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'getPlatformFeeInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"offers"`
 */
export const useReadConnectoMarketplaceOffers =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'offers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"owner"`
 */
export const useReadConnectoMarketplaceOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"returnBalance"`
 */
export const useReadConnectoMarketplaceReturnBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'returnBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"timeBuffer"`
 */
export const useReadConnectoMarketplaceTimeBuffer =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'timeBuffer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"totalListings"`
 */
export const useReadConnectoMarketplaceTotalListings =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'totalListings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"winningBid"`
 */
export const useReadConnectoMarketplaceWinningBid =
  /*#__PURE__*/ createUseReadContract({
    abi: connectoMarketplaceAbi,
    functionName: 'winningBid',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__
 */
export const useWriteConnectoMarketplace = /*#__PURE__*/ createUseWriteContract(
  { abi: connectoMarketplaceAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"acceptOffer"`
 */
export const useWriteConnectoMarketplaceAcceptOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'acceptOffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"buy"`
 */
export const useWriteConnectoMarketplaceBuy =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'buy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteConnectoMarketplaceClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"closeAuction"`
 */
export const useWriteConnectoMarketplaceCloseAuction =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'closeAuction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteConnectoMarketplaceInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"offer"`
 */
export const useWriteConnectoMarketplaceOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'offer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteConnectoMarketplaceRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"setAuctionBuffers"`
 */
export const useWriteConnectoMarketplaceSetAuctionBuffers =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'setAuctionBuffers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"setPlatformFeeInfo"`
 */
export const useWriteConnectoMarketplaceSetPlatformFeeInfo =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'setPlatformFeeInfo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteConnectoMarketplaceTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: connectoMarketplaceAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__
 */
export const useSimulateConnectoMarketplace =
  /*#__PURE__*/ createUseSimulateContract({ abi: connectoMarketplaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"acceptOffer"`
 */
export const useSimulateConnectoMarketplaceAcceptOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'acceptOffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"buy"`
 */
export const useSimulateConnectoMarketplaceBuy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'buy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateConnectoMarketplaceClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"closeAuction"`
 */
export const useSimulateConnectoMarketplaceCloseAuction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'closeAuction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateConnectoMarketplaceInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"offer"`
 */
export const useSimulateConnectoMarketplaceOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'offer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateConnectoMarketplaceRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"setAuctionBuffers"`
 */
export const useSimulateConnectoMarketplaceSetAuctionBuffers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'setAuctionBuffers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"setPlatformFeeInfo"`
 */
export const useSimulateConnectoMarketplaceSetPlatformFeeInfo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'setPlatformFeeInfo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateConnectoMarketplaceTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: connectoMarketplaceAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__
 */
export const useWatchConnectoMarketplaceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: connectoMarketplaceAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"AuctionBuffersUpdated"`
 */
export const useWatchConnectoMarketplaceAuctionBuffersUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'AuctionBuffersUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"AuctionClosed"`
 */
export const useWatchConnectoMarketplaceAuctionClosedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'AuctionClosed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"FlatPlatformFeeUpdated"`
 */
export const useWatchConnectoMarketplaceFlatPlatformFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'FlatPlatformFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchConnectoMarketplaceInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"ListingAdded"`
 */
export const useWatchConnectoMarketplaceListingAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'ListingAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"ListingRemoved"`
 */
export const useWatchConnectoMarketplaceListingRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'ListingRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"ListingUpdated"`
 */
export const useWatchConnectoMarketplaceListingUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'ListingUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"NewOffer"`
 */
export const useWatchConnectoMarketplaceNewOfferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'NewOffer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"NewSale"`
 */
export const useWatchConnectoMarketplaceNewSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'NewSale',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchConnectoMarketplaceOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"PlatformFeeInfoUpdated"`
 */
export const useWatchConnectoMarketplacePlatformFeeInfoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'PlatformFeeInfoUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link connectoMarketplaceAbi}__ and `eventName` set to `"PlatformFeeTypeUpdated"`
 */
export const useWatchConnectoMarketplacePlatformFeeTypeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: connectoMarketplaceAbi,
    eventName: 'PlatformFeeTypeUpdated',
  })
