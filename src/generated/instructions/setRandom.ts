/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category SetRandom
 * @category generated
 */
export const setRandomStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'SetRandomInstructionArgs'
)
/**
 * Accounts required by the _setRandom_ instruction
 *
 * @property [_writable_] raffle
 * @property [] recentBlockhashes
 * @category Instructions
 * @category SetRandom
 * @category generated
 */
export type SetRandomInstructionAccounts = {
  raffle: web3.PublicKey
  recentBlockhashes: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const setRandomInstructionDiscriminator = [
  38, 5, 185, 240, 148, 211, 253, 85,
]

/**
 * Creates a _SetRandom_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category SetRandom
 * @category generated
 */
export function createSetRandomInstruction(
  accounts: SetRandomInstructionAccounts,
  programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')
) {
  const [data] = setRandomStruct.serialize({
    instructionDiscriminator: setRandomInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.raffle,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.recentBlockhashes,
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