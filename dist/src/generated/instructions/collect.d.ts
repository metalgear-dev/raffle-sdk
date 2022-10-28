import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const collectStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type CollectInstructionAccounts = {
    raffle: web3.PublicKey;
    creator: web3.PublicKey;
    escrow: web3.PublicKey;
    rafflePayAccount: web3.PublicKey;
    creatorPayAccount: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const collectInstructionDiscriminator: number[];
export declare function createCollectInstruction(accounts: CollectInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
