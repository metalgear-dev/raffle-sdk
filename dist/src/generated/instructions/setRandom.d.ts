import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
export declare const setRandomStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
export declare type SetRandomInstructionAccounts = {
    raffle: web3.PublicKey;
    recentBlockhashes: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const setRandomInstructionDiscriminator: number[];
export declare function createSetRandomInstruction(accounts: SetRandomInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
