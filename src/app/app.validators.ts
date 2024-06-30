import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

enum StrengthLevel {
  easy = 0,
  middle = 1,
  good = 2,
}

const STRINGS = /[a-zA-Z]+/i;
const NUMBERS = /[0-9]+/i;
const OTHER_SYMBOLS = /\W|_/i; ///^[^a-zA-Z0-9]+$/i;

export function patternValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isString = STRINGS.test(control.value);
    const isNumbers = NUMBERS.test(control.value);
    const isOtherSymbols = OTHER_SYMBOLS.test(control.value);

    if (isString && isNumbers && isOtherSymbols) {
      return {level: StrengthLevel.good};
    }

    const isStringsNumbers = isString && isNumbers;
    const isNumbersOthers = isNumbers && isOtherSymbols;
    const isOthersStrings = isOtherSymbols && isString;
    if (isStringsNumbers || isNumbersOthers || isOthersStrings) {
      return {level: StrengthLevel.middle};
    }

    return {level: StrengthLevel.easy};
  }
}
