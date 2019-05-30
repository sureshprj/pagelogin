import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function ageValidatior(MaxAge): ValidatorFn {
  return (ctr: AbstractControl): {[key: string]: any} | null => {
    if(!isNaN(ctr.value) && ctr.value >0 && ctr.value < MaxAge){
      return null;
    }
    return {'ageLimit':'Age Should be 0 to '+MaxAge};
  };
}

@Directive({
  selector: '[maxage]',
  providers: [{provide: NG_VALIDATORS, useExisting: ageValidatorDirective, multi: true}]
})
export class ageValidatorDirective implements Validator {
  @Input('maxage') max: string;

  validate(control: AbstractControl): any {
    return  ageValidatior(parseInt(this.max))(control)
  }
}