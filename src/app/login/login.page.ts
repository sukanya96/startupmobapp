import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public formValid = true;
  isSubmitted = false;
  user: any = {};
// email:string;
// password:string;
  constructor(private toastController:ToastController,private alertController:AlertController,
  public fb: FormBuilder,private auth:AuthService,
  private router: Router,public loadingCtrl:LoadingController) {
    this.loginForm = this.fb.group({
      
      email: ['', [Validators.required]],
     password:['', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  async showtoast(message,status) {
    const toast = await this.toastController.create({
      message: message,
      cssClass:'toastclass',
      color:status,
      duration: 4000,
     position:'middle'

    });
    toast.present();
  }
    // // set user to storage
  // localStorage.setItem("The present user loggedIn", JSON.stringify(res));
  async showalert(message) {
    const alert = await this.alertController.create({
      cssClass:'alertclass',
      header:'Notification',
      message: message,
      keyboardClose:false,
      mode:'md',
      backdropDismiss:false,
      buttons: ['OK']
    });
    await alert.present();
   
  }


  login() {
    this.isSubmitted = true;
    this.loadingCtrl.create({
      message:"Please wait...",
      mode:'ios',
      cssClass:'register-loader',
      duration: 2000,
      spinner: 'crescent',
      backdropDismiss:true
    }).then((ele)=>{
  
      ele.present();
    
if (this.user.email && this.user.password) 

  this.auth.signIn(this.user.email, this.user.password ).then((res) => {

  console.log(res);

  this.showtoast('Login Successfully','success');

   this.router.navigate(['/dashboard']);
    }).catch((error:firebase.FirebaseError)=> {
      this.showalert(error);
      console.error(error);
      let errorCode = error.code // THIS CAN'T BE READ
    })

  })
  //   {
  //     this.auth.signIn(this.email, this.password )
      
  
  //   }else{
  //   this.showtoast('Please enter your email and password','warning');
  // } 
  
}

// login() {
//   this.isSubmitted = true;
 
//   this.loadingCtrl.create({
//     message:"Please wait...",
//     mode:'ios',
//     cssClass:'register-loader',
//     duration: 2000,
//     spinner: 'crescent',
//     backdropDismiss:true
//   }).then((ele)=>{
//     if (this.loginForm.invalid) {
//       return false;
//     } 
//     ele.present();  
//   if (this.user.email && this.user.password) {
//   this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then((res) => {
//   console.log(res);
//    this.showtoast("logged in Sucessfully");
//    this.router.navigate(['/dashboard']);
//     }).catch((error:firebase.FirebaseError)=> {
//       this.showalert(error);
//       console.error(error);
//       let errorCode = error.code // THIS CAN'T BE READ
//     })
    
//   }
// })
// }
  
}
