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
exports.bidsBeet = exports.Bids = exports.bidsDiscriminator = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
const beetSolana = __importStar(require("@metaplex-foundation/beet-solana"));
exports.bidsDiscriminator = [30, 218, 18, 49, 39, 51, 67, 2];
class Bids {
    constructor(currentSize, maxSize) {
        this.currentSize = currentSize;
        this.maxSize = maxSize;
    }
    static fromArgs(args) {
        return new Bids(args.currentSize, args.maxSize);
    }
    static fromAccountInfo(accountInfo, offset = 0) {
        return Bids.deserialize(accountInfo.data, offset);
    }
    static async fromAccountAddress(connection, address, commitmentOrConfig) {
        const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
        if (accountInfo == null) {
            throw new Error(`Unable to find Bids account at ${address}`);
        }
        return Bids.fromAccountInfo(accountInfo, 0)[0];
    }
    static gpaBuilder(programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')) {
        return beetSolana.GpaBuilder.fromStruct(programId, exports.bidsBeet);
    }
    static deserialize(buf, offset = 0) {
        return exports.bidsBeet.deserialize(buf, offset);
    }
    serialize() {
        return exports.bidsBeet.serialize({
            accountDiscriminator: exports.bidsDiscriminator,
            ...this,
        });
    }
    static get byteSize() {
        return exports.bidsBeet.byteSize;
    }
    static async getMinimumBalanceForRentExemption(connection, commitment) {
        return connection.getMinimumBalanceForRentExemption(Bids.byteSize, commitment);
    }
    static hasCorrectByteSize(buf, offset = 0) {
        return buf.byteLength - offset === Bids.byteSize;
    }
    pretty() {
        return {
            currentSize: this.currentSize,
            maxSize: this.maxSize,
        };
    }
}
exports.Bids = Bids;
exports.bidsBeet = new beet.BeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['currentSize', beet.u32],
    ['maxSize', beet.u32],
], Bids.fromArgs, 'Bids');
//# sourceMappingURL=Bids.js.map