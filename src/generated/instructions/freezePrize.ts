/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category FreezePrize
 * @category generated
 */
export type FreezePrizeInstructionArgs = {
  tokenManagerKind: number
}
/**
 * @category Instructions
 * @category FreezePrize
 * @category generated
 */
export const freezePrizeStruct = new beet.BeetArgsStruct<
  FreezePrizeInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tokenManagerKind', beet.u8],
  ],
  'FreezePrizeInstructionArgs'
)
/**
 * Accounts required by the _freezePrize_ instruction
 *
 * @property [_writable_, **signer**] creator
 * @property [_writable_] prizeTokenAccount
 * @property [_writable_] prizeMint
 * @property [_writable_] tokenManager
 * @property [_writable_] tokenManagerTokenAccount
 * @property [_writable_] mintCounter
 * @property [] tokenManagerProgram
 * @category Instructions
 * @category FreezePrize
 * @category generated
 */
export type FreezePrizeInstructionAccounts = {
  creator: web3.PublicKey
  prizeTokenAccount: web3.PublicKey
  prizeMint: web3.PublicKey
  tokenManager: web3.PublicKey
  tokenManagerTokenAccount: web3.PublicKey
  mintCounter: web3.PublicKey
  tokenManagerProgram: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const freezePrizeInstructionDiscriminator = [
  49, 29, 45, 99, 33, 114, 152, 80,
]

/**
 * Creates a _FreezePrize_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category FreezePrize
 * @category generated
 */
export function createFreezePrizeInstruction(
  accounts: FreezePrizeInstructionAccounts,
  args: FreezePrizeInstructionArgs,
  programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')
) {
  const [data] = freezePrizeStruct.serialize({
    instructionDiscriminator: freezePrizeInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.creator,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.prizeTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.prizeMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenManager,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenManagerTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintCounter,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenManagerProgram,
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
