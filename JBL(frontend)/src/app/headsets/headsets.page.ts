import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadsetsService } from '../services/headsets.service';

@Component({
  selector: 'app-headsets',
  templateUrl: './headsets.page.html',
  styleUrls: ['./headsets.page.scss'],
})
export class HeadsetsPage implements OnInit {

  Headsets: any = [];
  
  constructor(private router: Router, private headsetService: HeadsetsService) { }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoUsers() {
    this.router.navigateByUrl("/users");
  }
  
  gotoSales(){
    this.router.navigateByUrl("/form-sales");
  }

  updateHeadset(headsetId: number) {
    console.log('headsetId:', headsetId);
    this.router.navigate(['/update-form', headsetId]);
  }

  gotoHeadsetsForm() {
    this.router.navigateByUrl("/headsets-form");
  }

  ngOnInit() {
    this.getAllHeadsets();
  }

  ionViewWillEnter() {
    this.getAllHeadsets();
  }

  getAllHeadsets() {
    this.headsetService.getHeadset().subscribe(response => {
      this.Headsets = response;
    });
  }

  deleteHeadset(headsetId: number) {
    this.headsetService.deleteHeadset(headsetId).subscribe(
      () => {
        console.log('Auricular eliminado exitosamente');
        this.getAllHeadsets();
      },
      (error) => {
        console.error('Error al eliminar el Auricular:', error);
      }
    );
  }
}
