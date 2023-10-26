import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.page.html',
  styleUrls: ['./users-form.page.scss'],
})
export class UsersFormPage {

  constructor(private userService: UsersService, private router : Router) { }
  
  gotoUsers(){
    this.router.navigateByUrl("/users");
  }

  onSubmit(event: Event) {    
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
  
    if (nameInput && emailInput) {
      const name = nameInput.value;
      const email = emailInput.value;
  
      const newUser = {
        name: name,
        email: email
      };
  
      this.userService.addUser(newUser).subscribe(
        (response) => {
          console.log('Usuario añadido exitosamente', response);
          form.reset();
        },
        (error) => {
          console.error('Error al añadir usuario', error);
        }
      );
    }
  }  
}
