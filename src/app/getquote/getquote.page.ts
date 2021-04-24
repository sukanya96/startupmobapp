import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation, Geoposition ,GeolocationOptions } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-getquote',
  templateUrl: './getquote.page.html',
  styleUrls: ['./getquote.page.scss'],
})
export class GetquotePage implements OnInit {

  user:any = {};
  
  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  
  latitude: number;
  longitude: number;
  address:string;
  countryList;
  
  
  constructor(public fb: FormBuilder,
    private modalCtrl: ModalController, private myRoute: Router,private geolocation: Geolocation,
    private loadingCtrl: LoadingController,private menu: MenuController,
    private toastController:ToastController,
    private afDB:AngularFireDatabase,
    private afs:AngularFirestore,
    private auth: AngularFireAuth,
    private router:Router,
    public alertController: AlertController) {
      
      this.menu.enable(false, "custom");                  

    this.formcontrol = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
      
      phone: ['', [Validators.required,Validators.minLength(10),
      Validators.maxLength(10),Validators.pattern(("(0/91)?[7-9][0-9]{9}"))]],
      
      email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      city: ['', [Validators.required]],

   });
  }
  
  ngOnInit() {
    // this.valid=false;
    // this.errmsg=false;
    // this.isSubmitted = false;
    this.maplocation();
    // this.httpClient.get<any>('https://restcountries.eu/rest/v2/all')
    //   .subscribe((res) => {
    //     this.countryList = res;
    //   });
    if(firebase.apps.length ==0) {
      firebase.initializeApp(environment.firebaseConfig);
    }
  }
  
  async showtoast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
     position:'bottom'
    });
    toast.present();
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
  
  get errorControl() {
    return this.formcontrol.controls;
  }

  async grab() {
    {
     this.isSubmitted = true;
     console.log('click')
      if(this.user.name && this.user.phone && this.user.email && this.user.city ) {
        const loading = await this.loadingCtrl.create({
         message:"processing",
         spinner:"bubbles",
         duration:2000,
         showBackdrop:true
      }).then((ele)=>{
   
    ele.present();
     if (this.formcontrol.invalid) {
       return false;
     } 
     this.auth.createUserWithEmailAndPassword(this.user.email,this.user.name).then((data)=>{
       // data.user.sendEmailVerification();
       this.afs.collection('getquote').doc(data.user.uid).set({
         'userId':data.user.uid,
         'userName':this.user.name,
         'userMob':this.user.phone,
         'userEmail':this.user.email,
         'userCity':this.user.city,
         'createdAt':Date.now()  
         }).then((ele)=>{
          //ele.dismiss();
           this.showtoast('information Successfully updated');
         // this.afs.codebase('')          
         })
         
         
         .catch((error:firebase.FirebaseError)=> {
          
           this.showalert(error);
           console.error(error);
          
         })
     })
 
   })
 
      }
    }
 
 
 }


//   grab(){
//     this.isSubmitted = true;
//     console.log('clicked');

//     if (this.formcontrol.invalid) {
//      return false;
//     } 
//   this.loadingCtrl.create({
//     message:"pleasewait...",
//     mode:'ios',
//     cssClass:'register-loader',
//     duration: 4000,
//     spinner: 'dots',
//   }).then((ele)=>{
//     ele.present();  
//     Object.assign(this.data, this.formcontrol.value);
//     console.log(this.data);
//     this.rest.addQuote(this.data).subscribe((result)=>{
//     console.log(result);
//     this.showAlert('Information added Successfully...');
//     ele.dismiss();
//    // this.myRoute.navigate(['/login']);
//     },(error)=>{
//       if(error.status==0){
//         this.showtoast('Server is low, Please try again later');
//         console.log(error);
//       }else{
//         if(error.status==400){ 
//           this.showtoast('status 400');
//           console.log(error);
//           //this.registerForm.reset();  
//         }
//       }
//     })
//   })

// }

maplocation(){

  let options:GeolocationOptions = {
  enableHighAccuracy:true
  }
  this.geolocation.getCurrentPosition(options).then((resp:Geoposition) => {
  this.latitude = resp.coords.latitude;
  this.longitude = resp.coords.longitude;
  console.log();
  console.log();
  this.getaddress();
  }, (err) => {
    alert(JSON.stringify(err));
    console.log('Error getting location', err);
  })
  }
    
  
  getaddress(){
  let geocoder = new google.maps.Geocoder;
  let address= '';
  let ref= this;
  var latlng = {lat:this.latitude, lng:this.longitude};
  geocoder.geocode({'location':latlng }, function (results, status) {
    console.log(results);
    console.log(status);
    if(status === 'OK') {
      if(results[0]) {
        address = results[0].formatted_address;
        ref.address = address;
      }
    }
  });
  }

}
