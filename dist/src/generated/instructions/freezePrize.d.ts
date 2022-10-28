import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare type FreezePrizeInstructionArgs = {
    tokenManagerKind: number;
};
export declare const freezePrizeStruct: beet.BeetArgsStruct<FreezePrizeInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type FreezePrizeInstructionAccounts = {
    creator: web3.PublicKey;
    prizeTokenAccount: web3.PublicKey;
    prizeMint: web3.PublicKey;
    tokenManager: web3.PublicKey;
    tokenManagerTokenAccount: web3.PublicKey;
    mintCounter: web3.PublicKey;
    tokenManagerProgram: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const freezePrizeInstructionDiscriminator: number[];
export declare function createFreezePrizeInstruction(accounts: FreezePrizeInstructionAccounts, args: FreezePrizeInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
