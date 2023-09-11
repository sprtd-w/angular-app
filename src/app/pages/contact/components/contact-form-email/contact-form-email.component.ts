import { Component, forwardRef } from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validators
} from "@angular/forms";
import { noop } from "rxjs";

const EMAIL_PATTERN = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');


@Component({
  selector: 'app-contact-form-email',
  templateUrl: './contact-form-email.component.html',
  styleUrls: ['./contact-form-email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => ContactFormEmailComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi:true,
      useExisting: forwardRef(() => ContactFormEmailComponent)
    },
  ]
})
export class ContactFormEmailComponent implements ControlValueAccessor, Validators {
  private val = '';

  get value(): string {
    return this.val;
  }

  set value(val: string) {
    this.val = val;
  }


  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return EMAIL_PATTERN.test(control.value) ? null : { emailError: "E-mail should has '@' sign and '.' character" };
  }
}
