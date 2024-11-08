import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { LoadingController, ToastController,NavController, AlertController} from '@ionic/angular';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Pic } from '../model/pic.mode';
import { Donations } from '../model/applications.mode';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { Activity, signupNpo1, signupNpoExtra,textArea } from '../model/user.mode';
import { signupNpo } from '../model/user.mode';
import { Location } from '@angular/common';



@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.page.html',
  styleUrls: ['./donation-history.page.scss'],
})
export class DonationHistoryPage implements OnInit {

  id:any;
  app:any;
  status:any;
  apps:any;
npoId:any;
volId:any;
actId:any;
actName:any

date:any;

constructor(private location: Location,private alertController: AlertController,private router:Router,private navCtrl:NavController,private  toast:ToastController,private actRoute:ActivatedRoute,
    private loadingController:LoadingController,private firestore:AngularFirestore,) { 
       
  this.id=this.actRoute.snapshot.paramMap.get("id") 
  
   }

  ngOnInit() {
    this.Donations()
  }

  
 async Donations() {
    try {
      const loader = await this.loadingController.create({
        message: 'Please wait',
      });
      await loader.present();

      this.firestore
        .collection<Donations>('donations', ref => ref.where('npoId', '==', this.id).where('status', '==', 'approved'))
        .snapshotChanges()
        .subscribe((data: DocumentChangeAction<Donations>[]) => {
          this.app = data.map((e) => {
            return {
              id: e.payload.doc.id,
              donId: e.payload.doc.data().donId,
              fundingId: e.payload.doc.data().fundingId,
              amount: e.payload.doc.data().amount,
              status: e.payload.doc.data().status,
              date: e.payload.doc.data().date,
             
              
            };
            loader.dismiss();
          });

          loader.dismiss(); // Dismiss the loading controller
        });
    } catch (error) {
      
      console.error(error);
    }
  }
  goBack(): void {
    this.location.back();
  }
}
