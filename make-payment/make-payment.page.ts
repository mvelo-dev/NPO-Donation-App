
import { Location } from '@angular/common';
import { render }from 'creditcardpayments/creditCardPayments';
import { FormControl, FormGroup, Validators,FormBuilder, EmailValidator } from '@angular/forms';

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


@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {

  id:any;
  email:any;

  constructor(private location: Location,private alertController: AlertController,private router:Router,private navCtrl:NavController,private  toast:ToastController,private actRoute:ActivatedRoute,
    private loadingController:LoadingController,private firestore:AngularFirestore,) { 
      this.id=this.actRoute.snapshot.paramMap.get("id") ;
      this.email=this.actRoute.snapshot.paramMap.get("email") ;
      
   }
  exchangeRate = 14.3641;
  
  paymentAmount=100;
  paymentAmountZAR:any;

 


  donate: FormGroup = new FormGroup({
    pay:new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.pay();
  
  }

  goBack(): void {
    this.location.back();
  }

  pay()
  {
    this.paymentAmountZAR = this.paymentAmount / this.exchangeRate;
    
    this.paymentAmount;
    render({
      id: "#myPaypalButtons",
      currency: "ZAR",
      value: this.paymentAmountZAR.toFixed(2), // Set initial value to 0.00
      onApprove: (details) => {
        alert("Transaction Successful");
        }
     });
     this.Payments();
    
      }

      async Payments() {
        const citiesRef = this.firestore.collection('fast-verify');
    
        await citiesRef.add({
          npoId: this.id,
          status: 'pending',
          amount: this.paymentAmount,
          date: new Date().toString(),
        });
      }

}

