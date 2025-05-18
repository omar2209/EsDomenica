import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotazioni } from '../models/prenotazioni.model';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto';

  vettPrenotazioni : Prenotazioni[] = []
}
