import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare type InitCodeHashes = {
    [chainId in ChainId]: string;
};
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC_MAINNET = 56,
    BSC_TESTNET = 97,
    HECO_MAINNET = 128,
    HECO_TESTNET = 256,
    MATIC_MAINNET = 137
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x952C3c89Dcda253FD9d90F823e5f536864b8F3bc";
export declare const INIT_CODE_HASH_BSC = "0x16e7f647599d706c69c1bcf05770fcb7e67cbbad84506f26195a2671df112512";
export declare const INIT_CODE_HASH_ETH = "0xf72b1bfa0de188ad1a4b71bb308a2c57e71c358a10cbbac6e7a820f3e4ba004d";
export declare const INIT_CODE_HASH_HECO = "0x0fa78881436cb121aa18ae75c7bd50d9e517bb3f3cf4aa724fc948791f45b56e";
export declare const INIT_CODE_HASH_MATIC = "0xf72b1bfa0de188ad1a4b71bb308a2c57e71c358a10cbbac6e7a820f3e4ba004d";
export declare const INIT_CODE_HASHES: InitCodeHashes;
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
