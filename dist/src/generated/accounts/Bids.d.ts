/// <reference types="node" />
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
export declare type BidsArgs = {
    currentSize: number;
    maxSize: number;
};
export declare const bidsDiscriminator: number[];
export declare class Bids implements BidsArgs {
    readonly currentSize: number;
    readonly maxSize: number;
    private constructor();
    static fromArgs(args: BidsArgs): Bids;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [Bids, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<Bids>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        currentSize: any;
        maxSize: any;
        accountDiscriminator: any;
    }>;
    static deserialize(buf: Buffer, offset?: number): [Bids, number];
    serialize(): [Buffer, number];
    static get byteSize(): number;
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    pretty(): {
        currentSize: number;
        maxSize: number;
    };
}
export declare const bidsBeet: beet.BeetStruct<Bids, BidsArgs & {
    accountDiscriminator: number[];
}>;
