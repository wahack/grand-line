// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import '@openzeppelin/contracts/utils/Base64.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

library SvgHelper {
  function generateL0() internal pure returns (string memory) {
    bytes memory image = abi.encodePacked(
      'data:image/svg+xml;base64,',
      Base64.encode(
        bytes(
          abi.encodePacked(
            '<svg width="100px" height="100px" viewBox="0 0 36.00 36.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#404040" stroke="#404040" stroke-width="0.72" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.21600000000000003"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7c-.674-1.246-7.404 1.688-10 3.7c0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3C-1 4 2 13 2 13C1 15 .625 16.66.266 19.929C-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5c4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5c.343-.63 1.129-3.487.734-7.071z"> </path> <path fill="#353132" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3s-3-2-3-3s-.001-1.5 3-1.5z"> </path> <path fill="#383838" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2c0 0 4.64 3 5.64 6c0 0 2-5 1-8z"> </path> <path fill="#ffffff" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603s-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603s2.066-4 2.066-5z"> </path> <path fill="#383838" d="M.701 25a.5.5 0 0 1-.31-.892c.162-.127 4.02-3.12 10.648-2.605c.275.02.481.261.46.536c-.021.275-.257.501-.537.46c-6.233-.474-9.915 2.366-9.951 2.395a.51.51 0 0 1-.31.106zm8.868-4.663a.512.512 0 0 1-.149-.022c-4.79-1.497-8.737-.347-8.777-.336a.499.499 0 1 1-.288-.957c.173-.052 4.286-1.247 9.362.338a.5.5 0 0 1-.148.977zM35.299 25a.5.5 0 0 0 .31-.892c-.162-.127-4.02-3.12-10.648-2.605a.499.499 0 0 0-.46.536c.021.275.257.501.537.46c6.233-.474 9.915 2.366 9.951 2.395a.51.51 0 0 0 .31.106zm-8.868-4.663c.049 0 .1-.007.149-.022c4.79-1.497 8.737-.347 8.777-.336a.499.499 0 1 0 .288-.957c-.173-.052-4.286-1.247-9.362.338a.5.5 0 0 0 .148.977z"> </path> <path fill="#474747" d="M25.327 25.622a.5.5 0 0 0-.551-.069l-4 2c-1.871.935-6.727.947-6.776.947a.5.5 0 0 0-.25.933v.001h.001v.001c.071.04.153.063.24.065h7.008c2.658 0 4.089-2.186 4.475-3.342a.5.5 0 0 0-.147-.536z"> </path> <g fill="#474747"> <ellipse cx="12" cy="14.5" rx="2" ry="3.5"> </ellipse> <ellipse cx="24" cy="14.5" rx="2" ry="3.5"> </ellipse> ',
            '<path d="M21 12a.999.999 0 0 1-.707-1.707C24.537 6.049 28.819 6 29 6a1 1 0 0 1 .005 2c-.065.001-3.687.096-7.298 3.707A.997.997 0 0 1 21 12zm-6 0a.997.997 0 0 1-.707-.293C10.667 8.082 7.031 8 6.995 8a1.002 1.002 0 0 1-.992-1.005A.997.997 0 0 1 7 6c.18 0 4.463.049 8.707 4.293A.999.999 0 0 1 15 12z"> </path>',
            '</g> </g></svg>'
          )
        )
      )
    );
    return
      string(
        abi.encodePacked(
          'data:application/json;base64,',
          Base64.encode(
            bytes(abi.encodePacked('{"name":"SaiyaPet", "image":"', image, unicode'", "description": ""}'))
          )
        )
      );
  }

  function generateL1() internal pure returns (string memory) {
    bytes memory image = abi.encodePacked(
      'data:image/svg+xml;base64,',
      Base64.encode(
        bytes(
          abi.encodePacked(
            '<svg width="100px" height="100px" viewBox="0 0 36.00 36.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#404040" stroke="#404040" stroke-width="0.72" transform="matrix(1, 0, 0, 1, 0, 0)">',
            '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.21600000000000003"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7c-.674-1.246-7.404 1.688-10 3.7c0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3C-1 4 2 13 2 13C1 15 .625 16.66.266 19.929C-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5c4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5c.343-.63 1.129-3.487.734-7.071z"> </path> <path fill="#efe362" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3s-3-2-3-3s-.001-1.5 3-1.5z"> </path> <path fill="#efe362" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2c0 0 4.64 3 5.64 6c0 0 2-5 1-8z"> </path> <path fill="#ffffff" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603s-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603s2.066-4 2.066-5z"> </path> <path fill="#efe362" d="M.701 25a.5.5 0 0 1-.31-.892c.162-.127 4.02-3.12 10.648-2.605c.275.02.481.261.46.536c-.021.275-.257.501-.537.46c-6.233-.474-9.915 2.366-9.951 2.395a.51.51 0 0 1-.31.106zm8.868-4.663a.512.512 0 0 1-.149-.022c-4.79-1.497-8.737-.347-8.777-.336a.499.499 0 1 1-.288-.957c.173-.052 4.286-1.247 9.362.338a.5.5 0 0 1-.148.977zM35.299 25a.5.5 0 0 0 .31-.892c-.162-.127-4.02-3.12-10.648-2.605a.499.499 0 0 0-.46.536c.021.275.257.501.537.46c6.233-.474 9.915 2.366 9.951 2.395a.51.51 0 0 0 .31.106zm-8.868-4.663c.049 0 .1-.007.149-.022c4.79-1.497 8.737-.347 8.777-.336a.499.499 0 1 0 .288-.957c-.173-.052-4.286-1.247-9.362.338a.5.5 0 0 0 .148.977z"> </path> <path fill="#efe362" d="M25.327 25.622a.5.5 0 0 0-.551-.069l-4 2c-1.871.935-6.727.947-6.776.947a.5.5 0 0 0-.25.933v.001h.001v.001c.071.04.153.063.24.065h7.008c2.658 0 4.089-2.186 4.475-3.342a.5.5 0 0 0-.147-.536z"> </path> <g fill="#efe362"> <ellipse cx="12" cy="14.5" rx="2" ry="3.5"> </ellipse> <ellipse cx="24" cy="14.5" rx="2" ry="3.5"> </ellipse> <path d="M21 12a.999.999 0 0 1-.707-1.707C24.537 6.049 28.819 6 29 6a1 1 0 0 1 .005 2c-.065.001-3.687.096-7.298 3.707A.997.997 0 0 1 21 12zm-6 0a.997.997 0 0 1-.707-.293C10.667 8.082 7.031 8 6.995 8a1.002 1.002 0 0 1-.992-1.005A.997.997 0 0 1 7 6c.18 0 4.463.049 8.707 4.293A.999.999 0 0 1 15 12z"> </path> </g> </g></svg>',
            '<path d="M21 12a.999.999 0 0 1-.707-1.707C24.537 6.049 28.819 6 29 6a1 1 0 0 1 .005 2c-.065.001-3.687.096-7.298 3.707A.997.997 0 0 1 21 12zm-6 0a.997.997 0 0 1-.707-.293C10.667 8.082 7.031 8 6.995 8a1.002 1.002 0 0 1-.992-1.005A.997.997 0 0 1 7 6c.18 0 4.463.049 8.707 4.293A.999.999 0 0 1 15 12z"></path>',
            '</g> </g></svg>'
          )
        )
      )
    );
    return
      string(
        abi.encodePacked(
          'data:application/json;base64,',
          Base64.encode(
            bytes(abi.encodePacked('{"name":"SaiyaPet", "image":"', image, unicode'", "description": ""}'))
          )
        )
      );
  }

  function generateL2() internal pure returns (string memory) {
    bytes memory image = abi.encodePacked(
      'data:image/svg+xml;base64,',
      Base64.encode(
        bytes(
          abi.encodePacked(
            '<svg width="100px" height="100px" viewBox="0 0 36.00 36.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#404040" stroke="#404040" stroke-width="0.72" transform="matrix(1, 0, 0, 1, 0, 0)">',
            '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.21600000000000003"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7c-.674-1.246-7.404 1.688-10 3.7c0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3C-1 4 2 13 2 13C1 15 .625 16.66.266 19.929C-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5c4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5c.343-.63 1.129-3.487.734-7.071z"> </path> <path fill="#ff7070" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3s-3-2-3-3s-.001-1.5 3-1.5z"> </path> <path fill="#ff7070" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2c0 0 4.64 3 5.64 6c0 0 2-5 1-8z"> </path> <path fill="#ffffff" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603s-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603s2.066-4 2.066-5z"> </path> <path fill="#ff7070" d="M.701 25a.5.5 0 0 1-.31-.892c.162-.127 4.02-3.12 10.648-2.605c.275.02.481.261.46.536c-.021.275-.257.501-.537.46c-6.233-.474-9.915 2.366-9.951 2.395a.51.51 0 0 1-.31.106zm8.868-4.663a.512.512 0 0 1-.149-.022c-4.79-1.497-8.737-.347-8.777-.336a.499.499 0 1 1-.288-.957c.173-.052 4.286-1.247 9.362.338a.5.5 0 0 1-.148.977zM35.299 25a.5.5 0 0 0 .31-.892c-.162-.127-4.02-3.12-10.648-2.605a.499.499 0 0 0-.46.536c.021.275.257.501.537.46c6.233-.474 9.915 2.366 9.951 2.395a.51.51 0 0 0 .31.106zm-8.868-4.663c.049 0 .1-.007.149-.022c4.79-1.497 8.737-.347 8.777-.336a.499.499 0 1 0 .288-.957c-.173-.052-4.286-1.247-9.362.338a.5.5 0 0 0 .148.977z"> </path> <path fill="#ff7070" d="M25.327 25.622a.5.5 0 0 0-.551-.069l-4 2c-1.871.935-6.727.947-6.776.947a.5.5 0 0 0-.25.933v.001h.001v.001c.071.04.153.063.24.065h7.008c2.658 0 4.089-2.186 4.475-3.342a.5.5 0 0 0-.147-.536z"> </path> <g fill="#ff7070"> <ellipse cx="12" cy="14.5" rx="2" ry="3.5"> </ellipse> <ellipse cx="24" cy="14.5" rx="2" ry="3.5"> </ellipse> <path d="M21 12a.999.999 0 0 1-.707-1.707C24.537 6.049 28.819 6 29 6a1 1 0 0 1 .005 2c-.065.001-3.687.096-7.298 3.707A.997.997 0 0 1 21 12zm-6 0a.997.997 0 0 1-.707-.293C10.667 8.082 7.031 8 6.995 8a1.002 1.002 0 0 1-.992-1.005A.997.997 0 0 1 7 6c.18 0 4.463.049 8.707 4.293A.999.999 0 0 1 15 12z"> ',
            '</path> </g> </g></svg>'
          )
        )
      )
    );
    return
      string(
        abi.encodePacked(
          'data:application/json;base64,',
          Base64.encode(
            bytes(abi.encodePacked('{"name":"SaiyaPet", "image":"', image, unicode'", "description": ""}'))
          )
        )
      );
  }
}
