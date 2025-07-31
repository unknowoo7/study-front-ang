import {Component, inject} from '@angular/core';
import {ReactiveFormsModule, FormArray, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.scss',
  imports: [ReactiveFormsModule]
})
export class ProfileEditor {

  // private formBuilder = inject(FormBuilder);
  //
  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }
  //
  // profileForm = this.formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zipCode: [''],
  //   }),
  //   aliases: this.formBuilder.array([this.formBuilder.control(''),])
  // })
  //
  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }
  //
  // updateProfile(): void {
  //   this.profileForm.patchValue({
  //     firstName: "Andrey",
  //     address: {
  //       street: "Chapaeva 18"
  //     }
  //   })
  // }
  //
  // addAlias(): void {
  //   this.aliases.push(this.formBuilder.control('added control'));
  // }

}
