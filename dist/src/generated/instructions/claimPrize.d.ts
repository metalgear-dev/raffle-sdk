import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const claimPrizeStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type ClaimPrizeInstructionAccounts = {
    claimer: web3.PublicKey;
    raffle: web3.PublicKey;
    bids: web3.PublicKey;
    escrow: web3.PublicKey;
    rafflePrizeAccount: web3.PublicKey;
    claimerPrizeAccount: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const claimPrizeInstructionDiscriminator: number[];
export declare function createClaimPrizeInstruction(accounts: ClaimPrizeInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
