import * as beet from '@metaplex-foundation/beet';
export declare type CreateRaffleArgs = {
    category: number;
    endedAt: beet.bignum;
    ticketPrice: beet.bignum;
    maxSize: number;
    prizeAmount: beet.bignum;
    title: string;
};
export declare const createRaffleArgsBeet: beet.FixableBeetArgsStruct<CreateRaffleArgs>;
