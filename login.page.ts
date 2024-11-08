import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoadingController, ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators,FormBuilder, EmailValidator } from '@angular/forms';
import{User} from '../model/user.mode';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={} as User;
  status:any;
  province:any;

  constructor(
    private router: Router,private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private toastController: ToastController,private  toast:ToastController
  ) {}


  ngOnInit() {
    this.getStatus();
   
  }

  
  signUp: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
   
    // other form controls...
  });

   
  async login(user:User)
  {
    
    if(this.validation())
    {
      let loader = this.loadingController.create({
        message: "please wait....",
      });
    
      (await loader).present();

      try {
        const signInMethods = await this.afAuth.fetchSignInMethodsForEmail(this.user.username);
      if (signInMethods.length > 0) {

        
       this.afAuth.signInWithEmailAndPassword(this.user.username, this.user.password)
      .then(async () => {

        const userCredential = await this.afAuth.signInWithEmailAndPassword(this.user.username, this.user.password);

        if(userCredential.user && userCredential.user.emailVerified){
          (await loader).dismiss();

         
                const userStat = this.firestore.collection('npos').doc(this.user.username);
               userStat.get().subscribe(doc => {
  
             const status = doc.get('status');
                   this.status=status;

           const userStat2 = this.firestore.collection('npos').doc(this.user.username);
           userStat2.get().subscribe(doc => {

              const province = doc.get('province');
              this.province=province;
           
              if(status=='approved' && province!="null")
              {
               
                this.router.navigate(['/profile-npo',this.user.username]);

              }
              else if(status=='approved' && province=="null"){
                
                this.router.navigate(['/finish-signup',this.user.username]);


              }
              else{
                this.router.navigate(['/verifying',this.user.username]);

              }
});
});
       }
          else{
            (await loader).dismiss();
    
            this.showToast('please verify your email first');
            this.router.navigate(['/login']);
          }
        // Successful login
      })
      .catch(async (error) => {
        (await loader).dismiss();
        // Handle login error
        if (error.code === 'auth/wrong-password') {
          this.showToast('Incorect password');
        } else {
          console.error(error);
        }
      });
   


      }
      else{
        (await loader).dismiss();
        
        this.showToast('User does not exits');
      }
        
      } catch (e) {
        (await loader).dismiss();
        this.showToast(String(e));
        
      }
      

    }

  }
  
  validation()
  {
    if(!this.user.username)
    {
      this.showToast("Enter username");
      return false;
  
    }
    if(!this.user.password)
    {
      this.showToast("Enter password");
      return false;
  
    }
    return true;
  }
  showToast ( message : string ){
    this.toast.create ({
    message: message ,
    duration: 4000,
    position: 'top',
    color:'warning',
   }). then ( toastData => toastData.present ());
  }

  async presentToast(message: string) 
  {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
    });
    toast.present();
  }

  signMe() {
    this.router.navigateByUrl('/welcome');
  }

  reset() {
    this.router.navigateByUrl('/forgot-password');
  }

  async getStatus()
  {


  }
test()
{

  
    console.log("Love "+this.status);
    console.log("Love "+this.province);
  



}


}
