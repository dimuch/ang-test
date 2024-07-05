import {FormControl, ValidationErrors, Validators} from "@angular/forms";
import {
  STRENGTH_COLORS,
  STRENGTH_INDICATOR_DEFAULT,
  StrengthItem,
  VALIDATION_ERRORS_MAP,
} from "../../constants/app.constants";
import {patternValidator} from "../../forms/validators/password.indicator.validator";

type ValidationResult = {
  isValid: ValidationErrors | null,
  strength: StrengthItem[],
}

const getStrength = (strengthLevel: number) => {
  return STRENGTH_INDICATOR_DEFAULT
    .map((item: StrengthItem, index: number) => {
      if (index <= strengthLevel) {
        return {
          ...item,
          color: STRENGTH_COLORS[strengthLevel],
        }
      }
      return item;
    });
}

const getStrengthLevel = (passwordControl: FormControl): ValidationResult => {
  let result: ValidationResult = {
    isValid: null,
    strength: STRENGTH_INDICATOR_DEFAULT,
  }

  const isRequired = Validators.required(passwordControl);
  if(isRequired) {
    return {
      isValid: isRequired,
      strength: VALIDATION_ERRORS_MAP['required'],
    }
  }
  const isMinLength = Validators.minLength(8)(passwordControl);
  if(isMinLength) {
    return {
      isValid: isMinLength,
      strength: VALIDATION_ERRORS_MAP['minlength'],
    }
  }
  const isPattern = patternValidator()(passwordControl);
  if(isPattern){
    const strengthLevel = isPattern['level'];
    const strength = getStrength(strengthLevel);

    return {
      isValid: isPattern,
      strength: strength,
    }
  }

  return result;
}

export {
  getStrengthLevel,
}
