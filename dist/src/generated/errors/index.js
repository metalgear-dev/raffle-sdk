"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFromName = exports.errorFromCode = exports.ImpossibleToCloseError = exports.RaffleAlreadyFinishedError = exports.RaffleNotFinishedError = exports.RaffleAlreadyClaimedError = exports.RaffleNotClaimedError = exports.InvalidClaimerError = exports.InvalidFreezeAuthorityError = exports.InvalidRemainingAccountError = exports.WinnerAlreadySetError = exports.InvalidAccountDiscriminantError = exports.RaffleWinnerNotFoundError = exports.RaffleRunningError = exports.CalculationOverflowError = exports.RaffleEndedError = exports.BidderSizeInvalidError = exports.NoTicketsAvailableError = void 0;
const createErrorFromCodeLookup = new Map();
const createErrorFromNameLookup = new Map();
class NoTicketsAvailableError extends Error {
    constructor() {
        super('No tickets available');
        this.code = 0x1770;
        this.name = 'NoTicketsAvailable';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, NoTicketsAvailableError);
        }
    }
}
exports.NoTicketsAvailableError = NoTicketsAvailableError;
createErrorFromCodeLookup.set(0x1770, () => new NoTicketsAvailableError());
createErrorFromNameLookup.set('NoTicketsAvailable', () => new NoTicketsAvailableError());
class BidderSizeInvalidError extends Error {
    constructor() {
        super('Bids size does not match');
        this.code = 0x1771;
        this.name = 'BidderSizeInvalid';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, BidderSizeInvalidError);
        }
    }
}
exports.BidderSizeInvalidError = BidderSizeInvalidError;
createErrorFromCodeLookup.set(0x1771, () => new BidderSizeInvalidError());
createErrorFromNameLookup.set('BidderSizeInvalid', () => new BidderSizeInvalidError());
class RaffleEndedError extends Error {
    constructor() {
        super('Raffle has already ended');
        this.code = 0x1772;
        this.name = 'RaffleEnded';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleEndedError);
        }
    }
}
exports.RaffleEndedError = RaffleEndedError;
createErrorFromCodeLookup.set(0x1772, () => new RaffleEndedError());
createErrorFromNameLookup.set('RaffleEnded', () => new RaffleEndedError());
class CalculationOverflowError extends Error {
    constructor() {
        super('Overflow');
        this.code = 0x1773;
        this.name = 'CalculationOverflow';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, CalculationOverflowError);
        }
    }
}
exports.CalculationOverflowError = CalculationOverflowError;
createErrorFromCodeLookup.set(0x1773, () => new CalculationOverflowError());
createErrorFromNameLookup.set('CalculationOverflow', () => new CalculationOverflowError());
class RaffleRunningError extends Error {
    constructor() {
        super('Raffle has not ended yet');
        this.code = 0x1774;
        this.name = 'RaffleRunning';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleRunningError);
        }
    }
}
exports.RaffleRunningError = RaffleRunningError;
createErrorFromCodeLookup.set(0x1774, () => new RaffleRunningError());
createErrorFromNameLookup.set('RaffleRunning', () => new RaffleRunningError());
class RaffleWinnerNotFoundError extends Error {
    constructor() {
        super('Raffle winner has not been decided yet');
        this.code = 0x1775;
        this.name = 'RaffleWinnerNotFound';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleWinnerNotFoundError);
        }
    }
}
exports.RaffleWinnerNotFoundError = RaffleWinnerNotFoundError;
createErrorFromCodeLookup.set(0x1775, () => new RaffleWinnerNotFoundError());
createErrorFromNameLookup.set('RaffleWinnerNotFound', () => new RaffleWinnerNotFoundError());
class InvalidAccountDiscriminantError extends Error {
    constructor() {
        super('Account discriminant is invalid');
        this.code = 0x1776;
        this.name = 'InvalidAccountDiscriminant';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidAccountDiscriminantError);
        }
    }
}
exports.InvalidAccountDiscriminantError = InvalidAccountDiscriminantError;
createErrorFromCodeLookup.set(0x1776, () => new InvalidAccountDiscriminantError());
createErrorFromNameLookup.set('InvalidAccountDiscriminant', () => new InvalidAccountDiscriminantError());
class WinnerAlreadySetError extends Error {
    constructor() {
        super('Winner has already been set');
        this.code = 0x1777;
        this.name = 'WinnerAlreadySet';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, WinnerAlreadySetError);
        }
    }
}
exports.WinnerAlreadySetError = WinnerAlreadySetError;
createErrorFromCodeLookup.set(0x1777, () => new WinnerAlreadySetError());
createErrorFromNameLookup.set('WinnerAlreadySet', () => new WinnerAlreadySetError());
class InvalidRemainingAccountError extends Error {
    constructor() {
        super('Remaining account is invalid');
        this.code = 0x1778;
        this.name = 'InvalidRemainingAccount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidRemainingAccountError);
        }
    }
}
exports.InvalidRemainingAccountError = InvalidRemainingAccountError;
createErrorFromCodeLookup.set(0x1778, () => new InvalidRemainingAccountError());
createErrorFromNameLookup.set('InvalidRemainingAccount', () => new InvalidRemainingAccountError());
class InvalidFreezeAuthorityError extends Error {
    constructor() {
        super('Invalid freeze authority');
        this.code = 0x1779;
        this.name = 'InvalidFreezeAuthority';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidFreezeAuthorityError);
        }
    }
}
exports.InvalidFreezeAuthorityError = InvalidFreezeAuthorityError;
createErrorFromCodeLookup.set(0x1779, () => new InvalidFreezeAuthorityError());
createErrorFromNameLookup.set('InvalidFreezeAuthority', () => new InvalidFreezeAuthorityError());
class InvalidClaimerError extends Error {
    constructor() {
        super('Claimer is invalid');
        this.code = 0x177a;
        this.name = 'InvalidClaimer';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidClaimerError);
        }
    }
}
exports.InvalidClaimerError = InvalidClaimerError;
createErrorFromCodeLookup.set(0x177a, () => new InvalidClaimerError());
createErrorFromNameLookup.set('InvalidClaimer', () => new InvalidClaimerError());
class RaffleNotClaimedError extends Error {
    constructor() {
        super('Raffle has not been claimed yet');
        this.code = 0x177b;
        this.name = 'RaffleNotClaimed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleNotClaimedError);
        }
    }
}
exports.RaffleNotClaimedError = RaffleNotClaimedError;
createErrorFromCodeLookup.set(0x177b, () => new RaffleNotClaimedError());
createErrorFromNameLookup.set('RaffleNotClaimed', () => new RaffleNotClaimedError());
class RaffleAlreadyClaimedError extends Error {
    constructor() {
        super('Raffle has been claimed');
        this.code = 0x177c;
        this.name = 'RaffleAlreadyClaimed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleAlreadyClaimedError);
        }
    }
}
exports.RaffleAlreadyClaimedError = RaffleAlreadyClaimedError;
createErrorFromCodeLookup.set(0x177c, () => new RaffleAlreadyClaimedError());
createErrorFromNameLookup.set('RaffleAlreadyClaimed', () => new RaffleAlreadyClaimedError());
class RaffleNotFinishedError extends Error {
    constructor() {
        super('Raffle has not been finished yet');
        this.code = 0x177d;
        this.name = 'RaffleNotFinished';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleNotFinishedError);
        }
    }
}
exports.RaffleNotFinishedError = RaffleNotFinishedError;
createErrorFromCodeLookup.set(0x177d, () => new RaffleNotFinishedError());
createErrorFromNameLookup.set('RaffleNotFinished', () => new RaffleNotFinishedError());
class RaffleAlreadyFinishedError extends Error {
    constructor() {
        super('Raffle has already been finished');
        this.code = 0x177e;
        this.name = 'RaffleAlreadyFinished';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, RaffleAlreadyFinishedError);
        }
    }
}
exports.RaffleAlreadyFinishedError = RaffleAlreadyFinishedError;
createErrorFromCodeLookup.set(0x177e, () => new RaffleAlreadyFinishedError());
createErrorFromNameLookup.set('RaffleAlreadyFinished', () => new RaffleAlreadyFinishedError());
class ImpossibleToCloseError extends Error {
    constructor() {
        super('Raffle can not be closed');
        this.code = 0x177f;
        this.name = 'ImpossibleToClose';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ImpossibleToCloseError);
        }
    }
}
exports.ImpossibleToCloseError = ImpossibleToCloseError;
createErrorFromCodeLookup.set(0x177f, () => new ImpossibleToCloseError());
createErrorFromNameLookup.set('ImpossibleToClose', () => new ImpossibleToCloseError());
function errorFromCode(code) {
    const createError = createErrorFromCodeLookup.get(code);
    return createError != null ? createError() : null;
}
exports.errorFromCode = errorFromCode;
function errorFromName(name) {
    const createError = createErrorFromNameLookup.get(name);
    return createError != null ? createError() : null;
}
exports.errorFromName = errorFromName;
//# sourceMappingURL=index.js.map