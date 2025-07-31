import {Component, inject} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormRecord,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-favorite-color.html',
  styleUrl: './reactive-favorite-color.scss'
})
export class ReactiveFavoriteColor {
  //
  // fb = inject(FormBuilder);
  // nonNullFB = inject(NonNullableFormBuilder);
  //
  // name = new FormControl<string | null>(null, {nonNullable: true});
  //
  // login = this.nonNullFB.group({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  //
  // record = new FormRecord<FormControl<string | nll>>();
  //
  // onSetValue(): void {
  //   this.login.removeControl('password');
  //   this.name.setValue('Andrey')
  // }
  //
  // addControl(): void {
  //   this.record.addControl('Andrey', new FormControl('340 Folsom St'))
  // }
  //
  // onReset(): void {
  //   this.name.reset();
  // }
}

interface LoginFormDto {
  email: FormControl<string>;
  password?: FormControl<string>;
}
