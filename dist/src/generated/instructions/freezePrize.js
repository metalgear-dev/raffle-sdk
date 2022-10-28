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
exports.createFreezePrizeInstruction = exports.freezePrizeInstructionDiscriminator = exports.freezePrizeStruct = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
exports.freezePrizeStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tokenManagerKind', beet.u8],
], 'FreezePrizeInstructionArgs');
exports.freezePrizeInstructionDiscriminator = [
    49, 29, 45, 99, 33, 114, 152, 80,
];
function createFreezePrizeInstruction(accounts, args, programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')) {
    var _a, _b;
    const [data] = exports.freezePrizeStruct.serialize({
        instructionDiscriminator: exports.freezePrizeInstructionDiscriminator,
        ...args,
    });
    const keys = [
        {
            pubkey: accounts.creator,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.prizeTokenAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.prizeMint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.tokenManager,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.tokenManagerTokenAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.mintCounter,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.tokenManagerProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.systemProgram) !== null && _b !== void 0 ? _b : web3.SystemProgram.programId,
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
exports.createFreezePrizeInstruction = createFreezePrizeInstruction;
//# sourceMappingURL=freezePrize.js.map