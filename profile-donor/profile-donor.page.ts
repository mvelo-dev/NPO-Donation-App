import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { LoadingController, ToastController,NavController, AlertController} from '@ionic/angular';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Pic } from '../model/pic.mode';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { Activity, signupNpo1, singupVolunteer } from '../model/user.mode';
import { Bio} from '../model/user.mode';

@Component({
  selector: 'app-profile-donor',
  templateUrl: './profile-donor.page.html',
  styleUrls: ['./profile-donor.page.scss'],
})
export class ProfileDonorPage implements OnInit {

  selectedImage:any;
  photo:any;
  id:any;
  bio ={}as Bio;

  pic={} as Pic;
  pics:any;

  isDataFetched: boolean = false;
  isDataFetched2: boolean = false;
  don:any;
  bioInfo:any;

  constructor(
    private alertController: AlertController,
    private router:Router,
    private navCtrl:NavController,
    private toast:ToastController,
    private actRoute:ActivatedRoute,
    private loadingController:LoadingController,
    private firestore:AngularFirestore,
    
    ) 
    
   { 
      this.id=this.actRoute.snapshot.paramMap.get("id") 
   }

  ngOnInit() {
    this.getUrl()
    this.getInfo();
    this.Bio();
  }

  
 async Bio() {
    try {
      const loader = await this.loadingController.create({
        message: 'Please wait',
      });
      await loader.present();

      this.firestore
        .doc<Bio>('bio' + '/' + this.id)
        .snapshotChanges()
        .subscribe((data: Action<DocumentSnapshot<Bio>>) => {
          if (data.payload.exists) {
            const npoData = data.payload.data() as Bio;
            this.bioInfo = {
              id: data.payload.id,
              bio: npoData.bio,
            };
          } else {
            loader.dismiss();
            this.bioInfo = 'bio'; // Document does not exist, set the data to null
          }

          loader.dismiss();
          this.isDataFetched2 = true;
        });
    } catch (error) {
      console.error(error);
    }
  }

  async getPic(pic:Pic)
  {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      width:600,
      resultType:this.checkPlatformForWeb()? CameraResultType.DataUrl: CameraResultType.Uri
    });
    console.log('image:',image);

    this.selectedImage=image;
    this.photo=image.dataUrl;
    this.pic.picUrl=this.photo;
    if(this.checkPlatformForWeb()) this.selectedImage.webPath=image.dataUrl;

    if(this.selectedImage)
    {

      const customId = this.id; // Specify your custom ID here

      await this.firestore.collection("picUrlColl").doc(customId).set(pic);
      
    }
  }
  async getUrl(){
    const loader = await this.loadingController.create({
      message: 'Please wait',
    });
    await loader.present();
    const cityRef = this.firestore.collection('picUrlColl').doc(this.id);
    cityRef.get().subscribe(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        loader.dismiss();
      } else {
        loader.dismiss(); 
        this.photo=doc.get("picUrl");
        //console.log('Document data:', doc.get("picUrl"));
      }
    }, error => {
      console.log('Error getting document:', error);
    });

}
  
  checkPlatformForWeb()
  {
    if(Capacitor.getPlatform()=="web") return true;
    return false;

  }

  async getInfo() {
    try {
      const loader = await this.loadingController.create({
        message: 'Please wait',
      });
      await loader.present();
  
      this.firestore
        .doc<singupVolunteer>('donors' + '/' + this.id)
        .snapshotChanges()
        .subscribe((data: Action<DocumentSnapshot<singupVolunteer>>) => {
          const npoData = data.payload.data() as singupVolunteer;
          this.don = {
            id: data.payload.id,
            name: npoData.name,
            surname: npoData.surname,
            email: npoData.email,
            phoneNo: npoData.phoneNo,
            gender: npoData.gender,
            province: npoData.province,
            town: npoData.town,
            

          };
  
          loader.dismiss();
   
          this.isDataFetched = true;
         
          // Dismiss the loading controller
        });
    } catch (error) {
      console.error(error);
    }
  }
}
