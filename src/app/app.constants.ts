import {getStrengthIndicatorParams} from "./app.utils";

type StrengthItem = {
  [key: string]: any,
  id: string,
  color: string,
}

const STRENGTH_COLORS: string[] = ['red', 'yellow', 'green']

const STRENGTH_INDICATOR_DEFAULT = getStrengthIndicatorParams('grey');
const STRENGTH_INDICATOR_MINLENGTH = getStrengthIndicatorParams('red');

type ValidationError = 'required' | 'minlength' | 'default' | any;

interface IStringIndex extends Record<ValidationError, any> {
}

const VALIDATION_ERRORS_MAP: IStringIndex = {
  required: STRENGTH_INDICATOR_DEFAULT,
  minlength: STRENGTH_INDICATOR_MINLENGTH,
}

export {
  StrengthItem,
  STRENGTH_INDICATOR_DEFAULT,
  STRENGTH_INDICATOR_MINLENGTH,
  VALIDATION_ERRORS_MAP,
  STRENGTH_COLORS
}
