import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController, ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Forgot } from '../Models/class';
import { RestService } from '../Services/rest.service';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  email: any;

 

  public forgetForm : FormGroup;
    //public formcontrol : FormGroup;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  flag: any;
  errmsg: any;
  public data: Forgot = new Forgot();
  valid: boolean = false;
  constructor(public loadingController:LoadingController,private router: Router,private toast:ToastController,
    private auth: AngularFireAuth,private alertCtrl:AlertController,private menuCtrl:MenuController
  ) { 

    //   this.forgetForm = this.fb.group({
    
    // email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
    // });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
    // this.valid=false;
    // this.errmsg=false;
    this.isSubmitted = false;
    if(firebase.apps.length == 0) {
      firebase.initializeApp(environment.firebaseConfig);
    }
  }
  async showtoast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000,
     position:'bottom'
    });
    toast.present();
  }
  
  async showalert(message){
    const alert = await this.alertCtrl.create({
      cssClass:'alertclass',
      header:'Notification',
      message: message,
      mode:'md',
    
      buttons: ['OK']
    });

    await alert.present();
  }
  
    
    reset() {
      this.loadingController.create({
        message:"Processing...",
        mode:'ios',
        cssClass:'register-loader',
        duration: 1000,
        spinner: 'crescent',
        backdropDismiss:true
      }).then((ele)=>{
        ele.present();  
      if (this.email) {
        this.auth.sendPasswordResetEmail(this.email).then((r) => {
          console.log("Email Reset");
          this.showalert("Email send successfully");
          this.router.navigate(['/login']);
        }).catch((error:firebase.FirebaseError) => {
          this.showalert(error);
          console.log(error);
          let errorCode = error.code // THIS CAN'T BE READ
        })
      }
     })
  
  }

     
      
      
  // resetlink() {
  //   this.loadingController.create({
  //     message:'please wait..',
  //     mode:'ios',
  //     duration: 4000,
  //     spinner: 'dots',
  //      }).then((ele)=> {
  //      Object.assign(this.data, this.formcontrol.value);
  //       console.log(this.data);
  //       if (this.formcontrol.valid) {
  //         this.rest.forgot(this.data).subscribe((result) => {
  //           if (result == undefined) {
  //             console.log(result)
  //           }
  //           else {
  //         this.sendlink('The Link has been send to your registered email');
         
  //           }
  //           // {
  //           //   this.formcontrol.reset();
  //           //   this.formcontrol = this.fb.group({
  //           //    email: ['', [Validators.required,
  //           //      Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
  //           //    // number: ["", [Validators.required]],
  //           //      roles: this.fb.array(['USER']),
  //           //          });
  //           //   this.createLoader();
  //           //   this.myRoute.navigate(['/login']);
  //           // }
  //          },
  //          // (err) => {
  //         //   console.log(err);
  //         // }

  //         (err)=>{
  //           if(err.status==0){
  //             this.showtoast('Server is low, Please try again later');
  //             console.log(err);
  //           }else{
  //             if(err.status==404){ 
  //               this.showtoast('status 400');
  //               alert('This was not registered email...!');
  //               console.log(err);
  //               //this.registerForm.reset();  
  //             }
  //           }
  //         });
        
  //       }
       
  //       ele.present();
  //      })
  // }

//   updatepass(){
 
//   this.formcontrol.get("email").setValidators(Validators.required);
//   this.formcontrol.get("email").updateValueAndValidity();
//   Object.assign(this.data, this.formcontrol.value);
//   console.log(this.data);
 
//     if (this.formcontrol.valid) {
//        this.rest.forgot(this.data).subscribe((result) => {   
//         if(result === undefined)
//            {
//              console.log(result);
//              this.errmsg=true;
           
//            }
           
//           else
//            {
//              this.formcontrol.reset();
//              this.formcontrol = this.fb.group({
//               email: ['', [Validators.required,
//                 Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
//               // number: ["", [Validators.required]],
//                 roles: this.fb.array(['USER']),
//                     });
//              this.createLoader();
//              this.myRoute.navigate(['/login']);
//            }
           
//          }, (err) => {
//            err.status(200).send("Error -> " + err);
//           //this.server=true;
           
//            console.log(err);
         
//          });
//        }
//        else{
//          this.valid=true;
//        }

// }
    
}
