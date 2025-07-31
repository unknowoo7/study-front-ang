import { Component } from '@angular/core';
import {Actor} from '../actor';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.html',
  styleUrl: './actor-form.scss',
  imports: [FormsModule, JsonPipe]
})
export class ActorForm {

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newActor() {
    this.model = new Actor(42, '', '');
  }

  heroine(): Actor {
    const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
    return myActress;
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }

}
