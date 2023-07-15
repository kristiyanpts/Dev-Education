import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainsStrings = domains.join('|');
  const emailRegex = new RegExp(`[^@]{6,}@gmail\.(${domainsStrings})$`);

  return (control) => {
    if (control.value == '' || emailRegex.test(control.value)) {
      return null;
    }

    return { emailValidator: true };
  };
}
