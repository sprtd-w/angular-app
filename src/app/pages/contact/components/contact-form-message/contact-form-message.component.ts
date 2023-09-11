import { Component, forwardRef } from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";
import { noop } from "rxjs";

export function checkMessageLengthFn(maxLength = 5): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control?.value?.length >= maxLength ? null : { messageError: 'Message is too short' };
  }
}

@Component({
  selector: 'app-contact-form-message',
  templateUrl: './contact-form-message.component.html',
  styleUrls: ['./contact-form-message.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => ContactFormMessageComponent)
    }
  ]
})
export class ContactFormMessageComponent implements ControlValueAccessor {
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

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: any) {
    this.onTouch = onTouch;
  }
}
