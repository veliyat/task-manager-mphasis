import { FormGroup, FormControl } from '@angular/forms';

export function passwordWithSymbol(el: FormControl) {

    if (el.hasError('required') || el.hasError('minlength')) return null;
    // if (el.errors && typeof el.errors.minlength !== 'undefined') return null;

    if (el.value.indexOf('#') === -1) {
        return {
            symbol: true
        }
    } else {
        return null;
    }
}

export function passwordMatch(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMatch: true });
    } else {
        confirmPassword.setErrors(null);
    }

    return null;
}