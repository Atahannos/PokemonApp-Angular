import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  template: ` <router-outlet></router-outlet> `,
  styleUrl: './app.component.scss',
  providers: [PokeService],
})
export class AppComponent {
  title = 'PokeApp';
}
