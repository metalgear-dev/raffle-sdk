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
 * @category ClaimPrize
 * @category generated
 */
export const claimPrizeStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ClaimPrizeInstructionArgs'
)
/**
 * Accounts required by the _claimPrize_ instruction
 *
 * @property [_writable_, **signer**] claimer
 * @property [_writable_] raffle
 * @property [] bids
 * @property [] escrow
 * @property [_writable_] rafflePrizeAccount
 * @property [_writable_] claimerPrizeAccount
 * @category Instructions
 * @category ClaimPrize
 * @category generated
 */
export type ClaimPrizeInstructionAccounts = {
  claimer: web3.PublicKey
  raffle: web3.PublicKey
  bids: web3.PublicKey
  escrow: web3.PublicKey
  rafflePrizeAccount: web3.PublicKey
  claimerPrizeAccount: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const claimPrizeInstructionDiscriminator = [
  157, 233, 139, 121, 246, 62, 234, 235,
]

/**
 * Creates a _ClaimPrize_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ClaimPrize
 * @category generated
 */
export function createClaimPrizeInstruction(
  accounts: ClaimPrizeInstructionAccounts,
  programId = new web3.PublicKey('HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp')
) {
  const [data] = claimPrizeStruct.serialize({
    instructionDiscriminator: claimPrizeInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.claimer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.raffle,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.bids,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.escrow,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rafflePrizeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.claimerPrizeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
