import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  Users: any = [];

  constructor(private router : Router, private userService: UsersService) { }

  gotoHeadsets(){
    this.router.navigateByUrl("/headsets");
  }

  gotoHome(){
    this.router.navigateByUrl("/home");
  }

  gotousersForm(){
    this.router.navigateByUrl("/users-form");
  }

  gotoSales(){
    this.router.navigateByUrl("/form-sales");
  }

ngOnInit() {
  this.getAllUsers();
}


  getAllUsers(){
    this.userService.getUser().subscribe(response=>{
      this.Users = response;
    })
  }
 
  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('Usuario eliminado exitosamente');
        this.getAllUsers();
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
  
}
