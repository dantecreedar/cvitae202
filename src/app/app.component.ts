import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './src/Components/home/home.component';
import { AboutComponent } from './src/Components/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HttpClientModule,
    HomeComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome to my Home';
  name = 'My Profile Application';
  lastname = 'Galli';
  jobs = 'System Engineer';
  experiece = 5;

}
