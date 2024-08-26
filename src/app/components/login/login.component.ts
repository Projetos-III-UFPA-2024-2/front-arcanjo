import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simulação de autenticação, redirecionar para a página de entrada
    if (this.email && this.password) {
      // Você pode adicionar lógica de autenticação aqui
      this.router.navigate(['/entrada']); // Redireciona para a página de entrada
    } else {
      alert('Por favor, preencha o email e a senha.');
    }
  }

  navigateToForgotPassword() {
    // Implementar a navegação para a página de recuperação de senha
    console.log('Navigate to forgot password');
  }

  navigateToRegister() {
    // Implementar a navegação para a página de registro
    console.log('Navigate to register');
  }
}
