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
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  id:any;
  app:any;
  status:any;
  apps:any;
npoId:any;
volId:any;
actId:any;
actName:any
status2:any;

date:any;

constructor(private location: Location,private alertController: AlertController,private router:Router,private navCtrl:NavController,private  toast:ToastController,private actRoute:ActivatedRoute,
    private loadingController:LoadingController,private firestore:AngularFirestore,) { 
       
  this.id=this.actRoute.snapshot.paramMap.get("id") 
  
   }
   

  ngOnInit() {
   
    this.Application();
  }
  onIonInfinite(ev:any) {
   
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  
  private async getApplication() {
    const loader = await this.loadingController.create({
      message: 'Please wait',
    });
    await loader.present();

    const collectionRef = this.firestore.collection('applications', ref => ref.where('npoId', '==', this.id)); // Filter documents where npoId == this.id
    collectionRef.get().subscribe(
      (querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('No matching documents.');
          loader.dismiss();
        } else {
          querySnapshot.forEach((doc) => {
            this.npoId = doc.get('npoId');
            this.volId = doc.get('volId');
            this.actId = doc.get('actId');
            this.actName = doc.get('actName');
            this.date = doc.get('date');
          });
          loader.dismiss();
        }
      },
      (error) => {
        console.log('Error getting documents:', error);
      }
    );
  }
  back()
  {
    this.router.navigate(['/profile-npo',this.id]);
  
  }
  async approve(id:string)
  {

    const alert = await this.alertController.create({
      header: 'Have you checked if the NPO is VALID?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: async () => {
            let loader = await this.loadingController.create({
              message: 'Please wait',
            });
            await loader.present();
           
            try {
              await this.firestore.doc('npos'+ '/' + id).update({ status: 'approved' });
            } catch (error) {
              
            }

            await loader.dismiss();
            this.showToast("NPO Approved");
          },
        },
      ],
    });
  
    await alert.present();
       
  }

  async deletePost(id: string) {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to Delete Application ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: async () => {
            let loader = await this.loadingController.create({
              message: 'Please wait',
            });
            await loader.present();
            await this.firestore.doc('applications' +  '/' + id).delete();
            await loader.dismiss();
            this.showToast("Application Deleted");
          },
        },
      ],
    });
  
    await alert.present();
  }
  private async Application() {
    try {
      const loader = await this.loadingController.create({
        message: 'Please wait',
      });
      await loader.present();

      this.firestore
        .collection<Applications>('applications', ref => ref.where('npoId', '==', this.id))
        .snapshotChanges()
        .subscribe((data: DocumentChangeAction<Applications>[]) => {
          this.app = data.map((e) => {
            return {
              id: e.payload.doc.id,
              npoId: e.payload.doc.data().npoId,
              volId: e.payload.doc.data().volId,
              actId: e.payload.doc.data().actId,
              actName: e.payload.doc.data().actName,
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
  async Status(id: string,email:string) {

    const task = this.app.find((app: Applications) => app.actId === id);
  
  
    if (task) {
      if(task.status=='pending')
      {
      this.status=task.status;
          await this.firestore.doc('applications' + '/' + email).update({ status: 'approved' });
          
          this.getApplication()
         
      }
    }
  

    
  }
  async History(npoId: string, volId: string, actId: string, actName: string, date: string) {
   
    const task = this.app.find((app: Applications) => app.actId === actId);
  

    if (task) {
      this.status2=task.status;
       if (task.status != 'approved') {
     
          
        const citiesRef = this.firestore.collection('history');

        await citiesRef.add({
          npoId: npoId,
          volId: volId,
          actId: actId,
          actName: actName,
          date: date,
        });
  
      }
    }
  
  }
  async Connection(npoId:string,volId:string,actId:string,actName:string,date:string)
  {
          
    const citiesRef = this.firestore.collection('connections');

    await citiesRef.doc(volId).set({
      npoId: npoId,
      volId: volId,
      actId:  actId,
      actName: actName,
      date:date,
    });
  }
  showToast ( message : string ){
    this.toast.create ({
    message: message ,
   duration: 2000
   }). then ( toastData => toastData.present ());
  }
  goBack(): void {
    this.location.back();
  }
}
