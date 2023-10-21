import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showAlert = false;
  alertMessage = 'Loggin successful!';
  alertColour = 'green';

  credentials = {
    email: '',
    password: '',
  };

  login(): void {
    this.showAlert = true;
    this.alertMessage = 'Loggin successful!';
    this.alertColour = 'green';
  }
}
