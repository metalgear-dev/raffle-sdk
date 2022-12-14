/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  CreateRaffleArgs,
  createRaffleArgsBeet,
} from '../types/CreateRaffleArgs'

/**
 * @category Instructions
 * @category CreateRaffle
 * @category generated
 */
export type CreateRaffleInstructionArgs = {
  args: CreateRaffleArgs
}
/**
 * @category Instructions
 * @category CreateRaffle
 * @category generated
 */
export const createRaffleStruct = new beet.FixableBeetArgsStruct<
  CreateRaffleInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', createRaffleArgsBeet],
  ],
  'CreateRaffleInstructionArgs'
)
/**
 * Accounts required by the _createRaffle_ instruction
 *
 * @property [_writable_, **signer**] raffle
 * @property [_writable_] bids
 * @property [_writable_, **signer**] creator
 * @property [] escrow
 * @property [_writable_] creatorPrizeAccount
 * @property [] prizeMint
 * @property [_writable_] rafflePrizeAccount
 * @property [_writable_] rafflePayAccount
 * @property [] payMint
 * @category Instructions
 * @category CreateRaffle
 * @category generated
 */
export type CreateRaffleInstructionAccounts = {
  raffle: web3.PublicKey
  bids: web3.PublicKey
  creator: web3.PublicKey
  escrow: web3.PublicKey
  creatorPrizeAccount: web3.PublicKey
  prizeMint: web3.PublicKey
  rafflePrizeAccount: web3.PublicKey
  rafflePayAccount: web3.PublicKey
  payMint: web3.PublicKey
  rent?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const createRaffleInstructionDiscriminator = [
  226, 206, 159, 34, 213, 207, 98, 126,
]

/**
 * Creates a _CreateRaffle_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateRaffle
 * @category generated
 */
export function createCreateRaffleInstruction(
  accounts: CreateRaffleInstructionAccounts,
  args: CreateRaffleInstructionArgs,
  programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')
) {
  const [data] = createRaffleStruct.serialize({
    instructionDiscriminator: createRaffleInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.raffle,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.bids,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.creator,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.escrow,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.creatorPrizeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.prizeMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rafflePrizeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rafflePayAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
