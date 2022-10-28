import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare type BidInstructionArgs = {
    amount: number;
};
export declare const bidStruct: beet.BeetArgsStruct<BidInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type BidInstructionAccounts = {
    raffle: web3.PublicKey;
    bids: web3.PublicKey;
    escrow: web3.PublicKey;
    bidder: web3.PublicKey;
    rafflePayAccount: web3.PublicKey;
    bidderPayAccount: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const bidInstructionDiscriminator: number[];
export declare function createBidInstruction(accounts: BidInstructionAccounts, args: BidInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
