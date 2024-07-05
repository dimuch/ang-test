import {FormControl} from "@angular/forms";
import {
  STRENGTH_COLORS,
  STRENGTH_INDICATOR_DEFAULT,
  StrengthItem,
  VALIDATION_ERRORS_MAP,
} from "../../constants/app.constants";

const getStrengthLevel = (passwordControl: FormControl): StrengthItem[] => {
  const {errors} = passwordControl;
  let strength: StrengthItem[] = STRENGTH_INDICATOR_DEFAULT;

  if (errors) {
    const errorKeys = Object.keys(errors);
    const firstValidationError = errorKeys[0];

    // @ts-ignore
    strength = VALIDATION_ERRORS_MAP[firstValidationError];

    if (firstValidationError === 'level') {
      const strengthLevel = errors[firstValidationError];
      strength = STRENGTH_INDICATOR_DEFAULT
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
  }
  return strength;
}

export {
  getStrengthLevel,
}
