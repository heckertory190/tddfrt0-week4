"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,896];
exports.modules = {

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nftCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Home = ()=>{
    const { 0: wallet , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: collection , 1: setCollectionAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: NFTs , 1: setNFTs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: fetchForCollection , 1: setFetchForCollection  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const fetchNFTs = async ()=>{
        let nfts;
        console.log("fetching nfts");
        const api_key = "4vcCSxw6bQOnieSO7DYsv24tyhN-lZX7";
        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
        var requestOptions = {
            method: "GET"
        };
        if (!collection.length) {
            const fetchURL = `${baseURL}?owner=${wallet}`;
            nfts = await fetch(fetchURL, requestOptions).then((data)=>data.json());
        } else {
            console.log("fetching nfts for collection owned by address");
            const fetchURL1 = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
            nfts = await fetch(fetchURL1, requestOptions).then((data)=>data.json());
        }
        if (nfts) {
            console.log("nfts:", nfts);
            setNFTs(nfts.ownedNfts);
        }
    };
    const fetchNFTsForCollection = async ()=>{
        if (collection.length) {
            var requestOptions = {
                method: "GET"
            };
            const api_key = "4vcCSxw6bQOnieSO7DYsv24tyhN-lZX7";
            const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
            const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
            const nfts = await fetch(fetchURL, requestOptions).then((data)=>data.json());
            if (nfts) {
                console.log("NFTs in collection:", nfts);
                setNFTs(nfts.nfts);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-center py-8 gap-y-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full justify-center items-center gap-y-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        disabled: fetchForCollection,
                        type: "text",
                        placeholder: "Add your wallet address",
                        onChange: (e)=>setWalletAddress(e.target.value),
                        value: wallet
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Add the collection address"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "text-gray-600 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: (e)=>{
                                    setFetchForCollection(e.target.checked);
                                },
                                type: "checkbox",
                                className: "mr-2"
                            }),
                            "Fetch for collection"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5",
                        onClick: ()=>{
                            if (fetchForCollection) {
                                fetchNFTsForCollection();
                            } else fetchNFTs();
                        },
                        children: "Let's go! "
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center",
                children: NFTs.length && NFTs.map((nft)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nftCard__WEBPACK_IMPORTED_MODULE_1__.NFTCard, {
                        nft: nft
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [958], () => (__webpack_exec__(878)));
module.exports = __webpack_exports__;

})();