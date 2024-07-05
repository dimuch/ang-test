import {getStrengthIndicatorParams} from "../utils/app.utils";

type StrengthItem = {
  [key: string]: string,
  id: string,
  color: string,
}

type Errors = 'required' | 'minlength';

type ValidatorErrors<StrengthItem> = {
  [Property in  keyof Errors]:
    (newValue: Errors[Property]) => StrengthItem[]
}

const STRENGTH_COLORS: string[] = ['red', 'yellow', 'green']

const STRENGTH_INDICATOR_DEFAULT = getStrengthIndicatorParams('grey');
const STRENGTH_INDICATOR_MINLENGTH = getStrengthIndicatorParams('red');

const VALIDATION_ERRORS_MAP = {
  required: STRENGTH_INDICATOR_DEFAULT,
  minlength: STRENGTH_INDICATOR_MINLENGTH,
};

export {
  StrengthItem,
  Errors,
  ValidatorErrors,
  STRENGTH_INDICATOR_DEFAULT,
  STRENGTH_INDICATOR_MINLENGTH,
  VALIDATION_ERRORS_MAP,
  STRENGTH_COLORS
}
