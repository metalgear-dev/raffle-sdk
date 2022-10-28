"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCloseRaffleInstruction = exports.closeRaffleInstructionDiscriminator = exports.closeRaffleStruct = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
exports.closeRaffleStruct = new beet.BeetArgsStruct([['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]], 'CloseRaffleInstructionArgs');
exports.closeRaffleInstructionDiscriminator = [
    220, 129, 128, 51, 70, 66, 209, 124,
];
function createCloseRaffleInstruction(accounts, programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')) {
    var _a;
    const [data] = exports.closeRaffleStruct.serialize({
        instructionDiscriminator: exports.closeRaffleInstructionDiscriminator,
    });
    const keys = [
        {
            pubkey: accounts.creator,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.raffle,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.escrow,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.rafflePayAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.rafflePrizeAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.bids,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
    ];
    if (accounts.anchorRemainingAccounts != null) {
        for (const acc of accounts.anchorRemainingAccounts) {
            keys.push(acc);
        }
    }
    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}
exports.createCloseRaffleInstruction = createCloseRaffleInstruction;
//# sourceMappingURL=closeRaffle.js.map