/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type CreateRaffleArgs = {
  category: number
  endedAt: beet.bignum
  ticketPrice: beet.bignum
  maxSize: number
  prizeAmount: beet.bignum
  title: string
}

/**
 * @category userTypes
 * @category generated
 */
export const createRaffleArgsBeet =
  new beet.FixableBeetArgsStruct<CreateRaffleArgs>(
    [
      ['category', beet.u8],
      ['endedAt', beet.i64],
      ['ticketPrice', beet.u64],
      ['maxSize', beet.u32],
      ['prizeAmount', beet.u64],
      ['title', beet.utf8String],
    ],
    'CreateRaffleArgs'
  )
