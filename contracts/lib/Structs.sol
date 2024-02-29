// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

enum AssetType { ERC721, ERC1155 }

struct Order {
    address seller;
    AssetType assetType;
    address collection;
    uint256 tokenId;
    uint256 amount; // for erc1155
    address paymentToken;
    uint256 price;
    uint256 listingTime;
    uint256 expirationTime;
    uint256 salt;
}

struct Input {
    Order order;
    bytes signatureBuyer;
    bytes signatureSeller;
}

struct Execution {
  Input sell;
  Input buy;
}