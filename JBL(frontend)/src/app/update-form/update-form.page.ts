import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadsetsService } from '../services/headsets.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.page.html',
  styleUrls: ['./update-form.page.scss'],
})
export class UpdateFormPage implements OnInit {
  headsetId: number = 0;
  headsetData: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private headsetService: HeadsetsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.headsetId = +params['id'];
      if (this.headsetId) {
        this.loadHeadsetData();
      } else {
        this.router.navigateByUrl("/not-found");
      }
    });
  }

  loadHeadsetData() {
    this.headsetService.getHeadsetById(this.headsetId).subscribe(response => {
      this.headsetData = response;
    });
  }

  onSubmit() {
    this.headsetService.updateHeadset(this.headsetId, this.headsetData).subscribe(
      () => {
        console.log('Auricular actualizado exitosamente');
        this.router.navigateByUrl("/headsets");
      },
      (error) => {
        console.error('Error al actualizar el Auricular:', error);
      }
    );
  }

  gotoHeadsets() {
    this.router.navigateByUrl("/headsets");
  }
}
