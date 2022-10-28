import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { CreateRaffleArgs } from '../types/CreateRaffleArgs';
export declare type CreateRaffleInstructionArgs = {
    args: CreateRaffleArgs;
};
export declare const createRaffleStruct: beet.FixableBeetArgsStruct<CreateRaffleInstructionArgs & {
    instructionDiscriminator: number[];
}>;
export declare type CreateRaffleInstructionAccounts = {
    raffle: web3.PublicKey;
    bids: web3.PublicKey;
    creator: web3.PublicKey;
    escrow: web3.PublicKey;
    creatorPrizeAccount: web3.PublicKey;
    prizeMint: web3.PublicKey;
    rafflePrizeAccount: web3.PublicKey;
    rafflePayAccount: web3.PublicKey;
    payMint: web3.PublicKey;
    rent?: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const createRaffleInstructionDiscriminator: number[];
export declare function createCreateRaffleInstruction(accounts: CreateRaffleInstructionAccounts, args: CreateRaffleInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
