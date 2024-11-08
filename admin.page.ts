import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/user.mode';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  admin={}as Admin;

  constructor( private router: Router,private location: Location) { }

  ngOnInit() {
  }

  login()
  {
    const code ='1234';

    if(code==this.admin.code)
    { 
      this.router.navigate(['/choose-admin','admin']);


    }
  }

  goBack(): void {
    this.location.back();
  }

}

