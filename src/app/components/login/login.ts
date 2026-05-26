import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    console.log('CLICK');

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('LOGIN OK', res);
      },
      error: (err) => {
        console.log('ERROR', err);
      }
    });
  }
}