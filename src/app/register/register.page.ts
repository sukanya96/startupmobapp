  
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  public formValid = true;
  isSubmitted = false;
  user:any = {};
  // name:string;
  // email:string;
  // password:string;
  constructor(private toastController:ToastController,
    private afDB:AngularFireDatabase,
    private afs:AngularFirestore,
    private auth: AngularFireAuth,
    private router:Router,
    public alertController: AlertController,
    private loadingCtrl:LoadingController,public fb: FormBuilder,
    ) { 
      this.registerForm = this.fb.group({
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*') ]],
        email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
       password:['', [Validators.required]]
      });
     
    }

  ngOnInit() {
    if(firebase.apps.length ==0) {
      firebase.initializeApp(environment.firebaseConfig);
    }
  }
 
  async showalert(message) {
    const alert = await this.alertController.create({
      cssClass:'alertclass',
      header:'Notification',
      message: message,
      mode:'md',
      buttons: ['OK']
    });
    await alert.present();

   
  }
  

  async showtoast(message, status) {
    const toast = await this.toastController.create({
      cssClass:'toastclass',
      message:message,
      color:status,
      position:'middle',
      duration:2000
    });
    toast.present();
  }

  async register() {
   {
    this.isSubmitted = true;
    console.log('click')
     if(this.user.name && this.user.email && this.user.password) {
       const loading = await this.loadingCtrl.create({
         message:"processing",
        spinner:"bubbles",
        duration:2000,
        showBackdrop:true
}).then((ele)=>{
   ele.present();
    if (this.registerForm.invalid) {
      return false;
    } 
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((data)=> {
      //  data.user.sendEmailVerification();
      this.afs.collection('user').doc(data.user.uid).set({
        'userId':data.user.uid,
        'userName':this.user.name,
        'userEmail':this.user.email,
        'createdAt':Date.now()  
        }).then((ele)=>{
         //ele.dismiss();
          this.showtoast('Registered Successfully','success');
          this.router.navigate(['/login']);
        })
        
        
        .catch((error)=> 
        {
          this.showalert(error);
          this.showtoast('email already registered','error');

          console.error(error);
         
        })
    })

  })

     }
   }


}
}


    // firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((user)=>{
    //   if(user) {
    //     user.user.updateProfile({
    //       displayName:this.username,
    //       photoURL:"",
    //     }).then((val)=> {
    //       this.showtoast("Registered Sucessfully");
    //     }).catch(err => {
    //       this.showtoast(err);
    //       console.log(`login failed ${err}`);
    //      this.error = err.message;
    //     })
    //   }
    // })
   
   
        
 
