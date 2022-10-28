declare type ErrorWithCode = Error & {
    code: number;
};
declare type MaybeErrorWithCode = ErrorWithCode | null | undefined;
export declare class NoTicketsAvailableError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class BidderSizeInvalidError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleEndedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class CalculationOverflowError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleRunningError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleWinnerNotFoundError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidAccountDiscriminantError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class WinnerAlreadySetError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidRemainingAccountError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidFreezeAuthorityError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class InvalidClaimerError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleNotClaimedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleAlreadyClaimedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleNotFinishedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class RaffleAlreadyFinishedError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare class ImpossibleToCloseError extends Error {
    readonly code: number;
    readonly name: string;
    constructor();
}
export declare function errorFromCode(code: number): MaybeErrorWithCode;
export declare function errorFromName(name: string): MaybeErrorWithCode;
export {};
