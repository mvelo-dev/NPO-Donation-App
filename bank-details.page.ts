import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { LoadingController, ToastController,NavController} from '@ionic/angular';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Pic } from '../model/pic.mode';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { Activity } from '../model/user.mode';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {


  id:any;
  actId:any;
  act ={} as Activity;
  constructor(private location: Location,private router: Router, private loadingController: LoadingController,private afAuth: AngularFireAuth, private load: LoadingController,
    private toast: ToastController,private firestore: AngularFirestore,private navCtrl:NavController,private actRoute:ActivatedRoute) 
 {
  this.id=this.actRoute.snapshot.paramMap.get("id") 
  this.actId=this.actRoute.snapshot.paramMap.get("actId") 
 }


 Activity: FormGroup = new FormGroup({
  actName: new FormControl('', [Validators.required]),
  actDetails:new FormControl('', [Validators.required]),

});
  ngOnInit() {
    this.getPostById();

  }
  goBack(): void {
    this.location.back();
  }
  async getPostById() {
    const loader = await this.loadingController.create({
      message: "Please wait",
    });
    await loader.present();
  
    this.firestore
      .doc<Activity>('bankdetails/' + this.id)
      .valueChanges()
      .subscribe((data) => {
        if (data) {
          this.act.actName = data.actName;
          this.act.actDetails = data.actDetails;
     
        }
      });

      await loader.dismiss();
  }



  async editTask()
  {
    const loader = await this.loadingController.create({
      message: 'Please wait',
    });
    await loader.present();
    await this.firestore.doc('bankdetails'+'/'+this.id).set(this.act);
  
  
  
    loader.dismiss();
  
    this.showToast("Updated");
   
  }
  back()
  {
    this.router.navigate(['/profile-npo',this.id]);
  
  }

  showToast ( message : string ){
    this.toast.create ({
    message: message ,
   duration: 2000
   }). then ( toastData => toastData.present ());
  }
}
