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
exports.raffleBeet = exports.Raffle = exports.raffleDiscriminator = void 0;
const web3 = __importStar(require("@solana/web3.js"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
exports.raffleDiscriminator = [143, 133, 63, 173, 138, 10, 142, 200];
class Raffle {
    constructor(version, category, escrowBump, creator, bids, payMint, prizeMint, prizeAmount, endedAt, ticketPrice, isClaimed, isFinished, random, title) {
        this.version = version;
        this.category = category;
        this.escrowBump = escrowBump;
        this.creator = creator;
        this.bids = bids;
        this.payMint = payMint;
        this.prizeMint = prizeMint;
        this.prizeAmount = prizeAmount;
        this.endedAt = endedAt;
        this.ticketPrice = ticketPrice;
        this.isClaimed = isClaimed;
        this.isFinished = isFinished;
        this.random = random;
        this.title = title;
    }
    static fromArgs(args) {
        return new Raffle(args.version, args.category, args.escrowBump, args.creator, args.bids, args.payMint, args.prizeMint, args.prizeAmount, args.endedAt, args.ticketPrice, args.isClaimed, args.isFinished, args.random, args.title);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return Raffle.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address, commitmentOrConfig) {
        const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
        if (accountInfo == null) {
            throw new Error(`Unable to find Raffle account at ${address}`);
        }
        return Raffle.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.raffleBeet);
    }
    static deserialize(buf, offset = 0) {
        return exports.raffleBeet.deserialize(buf, offset);
    }
    serialize() {
        return exports.raffleBeet.serialize({
            accountDiscriminator: exports.raffleDiscriminator,
            ...this,
        });
    }
    static byteSize(args) {
        const instance = Raffle.fromArgs(args);
        return exports.raffleBeet.toFixedFromValue({
            accountDiscriminator: exports.raffleDiscriminator,
            ...instance,
        }).byteSize;
    }
    static async getMinimumBalanceForRentExemption(args, connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(Raffle.byteSize(args), commitment);
    }
    pretty() {
        return {
            version: this.version,
            category: this.category,
            escrowBump: this.escrowBump,
            creator: this.creator.toBase58(),
            bids: this.bids.toBase58(),
            payMint: this.payMint.toBase58(),
            prizeMint: this.prizeMint.toBase58(),
            prizeAmount: (() => {
                const x = this.prizeAmount;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            endedAt: (() => {
                const x = this.endedAt;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            ticketPrice: (() => {
                const x = this.ticketPrice;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            isClaimed: this.isClaimed,
            isFinished: this.isFinished,
            random: this.random,
            title: this.title,
        };
    }
}
exports.Raffle = Raffle;
exports.raffleBeet = new beet.FixableBeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['version', beet.u8],
    ['category', beet.u8],
    ['escrowBump', beet.u8],
    ['creator', beetSolana.publicKey],
    ['bids', beetSolana.publicKey],
    ['payMint', beetSolana.publicKey],
    ['prizeMint', beetSolana.publicKey],
    ['prizeAmount', beet.u64],
    ['endedAt', beet.i64],
    ['ticketPrice', beet.u64],
    ['isClaimed', beet.u8],
    ['isFinished', beet.u8],
    ['random', beet.coption(beet.u32)],
    ['title', beet.utf8String],
], Raffle.fromArgs, 'Raffle');
//# sourceMappingURL=Raffle.js.map