import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login';
import { AuthService } from './services/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  constructor(public authService: AuthService) {}

}