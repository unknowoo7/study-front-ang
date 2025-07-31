import {Component} from '@angular/core';
import {ReactiveFavoriteColor} from './reactive-favorite-color/reactive-favorite-color';
import {ProfileEditor} from './profile-editor/profile-editor';
import {ActorForm} from './actor-form/actor-form';

@Component({
  selector: 'app-root',
  imports: [ReactiveFavoriteColor, ProfileEditor, ActorForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'front';
}
