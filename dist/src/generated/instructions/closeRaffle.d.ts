import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const closeRaffleStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type CloseRaffleInstructionAccounts = {
    creator: web3.PublicKey;
    raffle: web3.PublicKey;
    escrow: web3.PublicKey;
    rafflePayAccount: web3.PublicKey;
    rafflePrizeAccount: web3.PublicKey;
    bids: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const closeRaffleInstructionDiscriminator: number[];
export declare function createCloseRaffleInstruction(accounts: CloseRaffleInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
