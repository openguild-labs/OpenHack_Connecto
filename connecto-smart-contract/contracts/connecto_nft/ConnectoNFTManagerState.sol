// SPDX-License-Identifier: Apache 2
pragma solidity ^0.8.20;

import {IConnecto} from "../interface/IConnecto.sol";
import {CollectionHelpers} from "@unique-nft/solidity-interfaces/contracts/CollectionHelpers.sol";

abstract contract ConnectoNFTManagerState is IConnecto {
    mapping(bytes => bool) executedSig;
    struct ConnectoNFTManagerStateStorage {
        CollectionHelpers helpers;
        address connectoToken;
        address treasuryWallet;
        address signatureVerifier;
    }

    ConnectoNFTManagerStateStorage _states;

    function setTreasury(address treasury) public virtual {
        if (treasury == address(0) || _states.treasuryWallet == treasury) {
            revert InvalidValue();
        }
        _states.treasuryWallet = treasury;
    }

    function setSignatureVerifier(address verifier) public virtual {
        if (verifier == address(0) || _states.signatureVerifier == verifier) {
            revert InvalidValue();
        }
        _states.signatureVerifier = verifier;
    }

    function setExecutedSig(bytes memory sig) internal {
        if (executedSig[sig] == true) {
            revert InvalidValue();
        }
        executedSig[sig] = true;
    }

    function states()
        internal
        view
        returns (ConnectoNFTManagerStateStorage memory)
    {
        return _states;
    }
}
