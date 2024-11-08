import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { LoadingController, ToastController,NavController, AlertController} from '@ionic/angular';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Pic } from '../model/pic.mode';
import { Applications } from '../model/applications.mode';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { Activity, signupNpo1, signupNpoExtra,textArea } from '../model/user.mode';
import { signupNpo } from '../model/user.mode';
import { Location } from '@angular/common';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {


  app:any;
  id:any;
  constructor(private location: Location,private alertController: AlertController,private router:Router,private navCtrl:NavController,private  toast:ToastController,private actRoute:ActivatedRoute,
    private loadingController:LoadingController,private firestore:AngularFirestore,) { 
       
  this.id=this.actRoute.snapshot.paramMap.get("id") 
  
   }
   

  ngOnInit() {
    this.Connections();
  }
  onIonInfinite(ev:any) {
   
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  goBack(): void {
    this.location.back();
  }
  async Connections() {
    try {
      const loader = await this.loadingController.create({
        message: 'Please wait',
      });
      await loader.present();
  
      this.firestore
        .collection<Applications>('connections',ref => ref.where('npoId', '==', this.id))
        .snapshotChanges()
        .subscribe((data: DocumentChangeAction<Applications>[]) => {
          this.app = data.map((e) => {
            return {
              id: e.payload.doc.id,
              npoId: e.payload.doc.data().npoId,
              volId: e.payload.doc.data().volId,
              actId: e.payload.doc.data().actId,
              actName: e.payload.doc.data().actName,
              date: e.payload.doc.data().date,
            };
          });
  
          loader.dismiss(); // Dismiss the loading controller
        });
    } catch (error) {
      console.error(error);
    }
  }
}
