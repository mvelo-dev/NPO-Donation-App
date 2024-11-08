import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-choose-admin',
  templateUrl: './choose-admin.page.html',
  styleUrls: ['./choose-admin.page.scss'],
})
export class ChooseAdminPage implements OnInit {

  constructor( private location: Location,private router: Router) { }

  ngOnInit() {
  }
    goBack(): void {
    this.location.back();
  }

}
