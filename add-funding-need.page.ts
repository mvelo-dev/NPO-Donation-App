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
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-funding-need',
  templateUrl: './add-funding-need.page.html',
  styleUrls: ['./add-funding-need.page.scss'],
})
export class AddFundingNeedPage implements OnInit {

  id:any;
  npoInfo:any;

  act ={} as Activity;

  constructor(
    private location: Location,
    private router:Router,
    private navCtrl:NavController,
    private  toast:ToastController,
    private actRoute:ActivatedRoute,
    private loadingController:LoadingController,
    private firestore:AngularFirestore,
    ) 
   { 
      this.id=this.actRoute.snapshot.paramMap.get("id") 
   }
   
 Activity: FormGroup = new FormGroup({
    actName: new FormControl('', [Validators.required]),
    actDetails:new FormControl('', [Validators.required]),

  });
  ngOnInit() {
  }
  async addTask(act:Activity)
  {

      let loader = this.loadingController.create({
        message: "please wait",
      });
    
      (await loader).present();
      try {
        await this.firestore.collection("fundingNeed-"+this.id).add(act);

        (await loader).dismiss();
        this.showToast('Fund Raising Created Successful');
        
      } catch (e) {
        this.showToast(String(e));
        
      }
  }
  

  showToast ( message : string ){
    this.toast.create ({
    message: message ,
    duration: 4000,
    position: "top",
    color:'warning',
   }). then ( toastData => toastData.present ());
  }
  goBack(): void {
    this.location.back();
  }
}
