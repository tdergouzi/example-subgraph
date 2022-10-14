// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IAssetContractShared {
    event TransferSingle(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256 id,
        uint256 value
    );
}