import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/TIME-MIM.svg";
import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xF6EE167024716bE70369CdDbBbC3Ec58A54996ac ",
            reserveAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
        },
    },
    tokensInStrategy: "60500000000000000000000000",
});

export const wavax = new CustomBond({
    name: "wBNB",
    displayName: "wBNB",
    bondToken: "BINANCE",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x9e374Cd5422bBc5827D68c12E33e43Caa68bb9b4",
            reserveAddress: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        },
    },
    tokensInStrategy: "756916000000000000000000",
});

export const mimTime = new LPBond({
    name: "mim_time_lp",
    displayName: "TIME-MIM LP",
    bondToken: "MIM",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x9623A77AF9A954C0431DE89B56771f08924Dd6dC",
            reserveAddress: "0xce9A3Da975Ad8c6a40d1DBc1a3Cb124F60B0dDf4",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export const avaxTime = new CustomLPBond({
    name: "avax_time_lp",
    displayName: "TIME-AVAX LP",
    bondToken: "AVAX",
    bondIconSvg: AvaxTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x7512Aa4c94ef3542179C4b2320f0aA6Ec19fCD2c",
            reserveAddress: "0xb8a5d105d4f695b460bfbe5a4d94f10c3156a2d6",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export default [mim, wavax, mimTime, avaxTime];
