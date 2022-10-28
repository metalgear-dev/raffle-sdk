/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
export declare type RaffleArgs = {
    version: number;
    category: number;
    escrowBump: number;
    creator: web3.PublicKey;
    bids: web3.PublicKey;
    payMint: web3.PublicKey;
    prizeMint: web3.PublicKey;
    prizeAmount: beet.bignum;
    endedAt: beet.bignum;
    ticketPrice: beet.bignum;
    isClaimed: number;
    isFinished: number;
    random: beet.COption<number>;
    title: string;
};
export declare const raffleDiscriminator: number[];
export declare class Raffle implements RaffleArgs {
    readonly version: number;
    readonly category: number;
    readonly escrowBump: number;
    readonly creator: web3.PublicKey;
    readonly bids: web3.PublicKey;
    readonly payMint: web3.PublicKey;
    readonly prizeMint: web3.PublicKey;
    readonly prizeAmount: beet.bignum;
    readonly endedAt: beet.bignum;
    readonly ticketPrice: beet.bignum;
    readonly isClaimed: number;
    readonly isFinished: number;
    readonly random: beet.COption<number>;
    readonly title: string;
    private constructor();
    static fromArgs(args: RaffleArgs): Raffle;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [Raffle, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<Raffle>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<RaffleArgs & {
        accountDiscriminator: number[];
    }>;
    static deserialize(buf: Buffer, offset?: number): [Raffle, number];
    serialize(): [Buffer, number];
    static byteSize(args: RaffleArgs): number;
    static getMinimumBalanceForRentExemption(args: RaffleArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    pretty(): {
        version: number;
        category: number;
        escrowBump: number;
        creator: string;
        bids: string;
        payMint: string;
        prizeMint: string;
        prizeAmount: number | {
            toNumber: () => number;
        };
        endedAt: number | {
            toNumber: () => number;
        };
        ticketPrice: number | {
            toNumber: () => number;
        };
        isClaimed: number;
        isFinished: number;
        random: beet.COption<number>;
        title: string;
    };
}
export declare const raffleBeet: beet.FixableBeetStruct<Raffle, RaffleArgs & {
    accountDiscriminator: number[];
}>;
