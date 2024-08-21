import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, RouterLink, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';

}
