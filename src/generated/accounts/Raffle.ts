/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Raffle}
 * @category Accounts
 * @category generated
 */
export type RaffleArgs = {
  version: number
  category: number
  escrowBump: number
  creator: web3.PublicKey
  bids: web3.PublicKey
  payMint: web3.PublicKey
  prizeMint: web3.PublicKey
  prizeAmount: beet.bignum
  endedAt: beet.bignum
  ticketPrice: beet.bignum
  isClaimed: number
  isFinished: number
  random: beet.COption<number>
  title: string
}

export const raffleDiscriminator = [143, 133, 63, 173, 138, 10, 142, 200]
/**
 * Holds the data for the {@link Raffle} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Raffle implements RaffleArgs {
  private constructor(
    readonly version: number,
    readonly category: number,
    readonly escrowBump: number,
    readonly creator: web3.PublicKey,
    readonly bids: web3.PublicKey,
    readonly payMint: web3.PublicKey,
    readonly prizeMint: web3.PublicKey,
    readonly prizeAmount: beet.bignum,
    readonly endedAt: beet.bignum,
    readonly ticketPrice: beet.bignum,
    readonly isClaimed: number,
    readonly isFinished: number,
    readonly random: beet.COption<number>,
    readonly title: string
  ) {}

  /**
   * Creates a {@link Raffle} instance from the provided args.
   */
  static fromArgs(args: RaffleArgs) {
    return new Raffle(
      args.version,
      args.category,
      args.escrowBump,
      args.creator,
      args.bids,
      args.payMint,
      args.prizeMint,
      args.prizeAmount,
      args.endedAt,
      args.ticketPrice,
      args.isClaimed,
      args.isFinished,
      args.random,
      args.title
    )
  }

  /**
   * Deserializes the {@link Raffle} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Raffle, number] {
    return Raffle.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Raffle} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Raffle> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Raffle account at ${address}`)
    }
    return Raffle.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, raffleBeet)
  }

  /**
   * Deserializes the {@link Raffle} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Raffle, number] {
    return raffleBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Raffle} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return raffleBeet.serialize({
      accountDiscriminator: raffleDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Raffle} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: RaffleArgs) {
    const instance = Raffle.fromArgs(args)
    return raffleBeet.toFixedFromValue({
      accountDiscriminator: raffleDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Raffle} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: RaffleArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Raffle.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Raffle} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      version: this.version,
      category: this.category,
      escrowBump: this.escrowBump,
      creator: this.creator.toBase58(),
      bids: this.bids.toBase58(),
      payMint: this.payMint.toBase58(),
      prizeMint: this.prizeMint.toBase58(),
      prizeAmount: (() => {
        const x = <{ toNumber: () => number }>this.prizeAmount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      endedAt: (() => {
        const x = <{ toNumber: () => number }>this.endedAt
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      ticketPrice: (() => {
        const x = <{ toNumber: () => number }>this.ticketPrice
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      isClaimed: this.isClaimed,
      isFinished: this.isFinished,
      random: this.random,
      title: this.title,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const raffleBeet = new beet.FixableBeetStruct<
  Raffle,
  RaffleArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['version', beet.u8],
    ['category', beet.u8],
    ['escrowBump', beet.u8],
    ['creator', beetSolana.publicKey],
    ['bids', beetSolana.publicKey],
    ['payMint', beetSolana.publicKey],
    ['prizeMint', beetSolana.publicKey],
    ['prizeAmount', beet.u64],
    ['endedAt', beet.i64],
    ['ticketPrice', beet.u64],
    ['isClaimed', beet.u8],
    ['isFinished', beet.u8],
    ['random', beet.coption(beet.u32)],
    ['title', beet.utf8String],
  ],
  Raffle.fromArgs,
  'Raffle'
)