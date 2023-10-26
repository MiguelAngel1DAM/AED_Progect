import { Component } from '@angular/core';
import { HeadsetsService } from '../services/headsets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headsets-form',
  templateUrl: './headsets-form.page.html',
  styleUrls: ['./headsets-form.page.scss'],
})
export class HeadsetsFormPage {
  constructor(private headsetService: HeadsetsService, private router: Router) {}

  gotoHeadsets() {
    this.router.navigateByUrl("/headsets");
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;

    if (nameInput) {
      const name = nameInput.value;

      const newHeadset = {
        name: name
      };

      this.headsetService.addHeadset(newHeadset).subscribe(
        (response) => {
          console.log('Auricular añadido exitosamente', response);
          form.reset();
        },
        (error) => {
          console.error('Error al añadir auricular', error);
        }
      );
    }
  }
}
