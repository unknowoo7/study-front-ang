import {Component} from '@angular/core';
import {ActorForm} from './actor-form/actor-form';

@Component({
  selector: 'app-root',
  imports: [ActorForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'front';
}
