import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  gotoHeadsets(){
    this.router.navigateByUrl("/headsets");
  }

  gotoUsers(){
    this.router.navigateByUrl("/users");
  }
  gotoSales(){
    this.router.navigateByUrl("/form-sales");
  }
}
