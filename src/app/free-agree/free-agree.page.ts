import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ModalController, ToastController, } from '@ionic/angular';
import { Getquote } from '../Models/class';
import { RestService } from '../Services/rest.service';
import { Geolocation, Geoposition ,GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';

declare var google;

@Component({
  selector: 'app-free-agree',
  templateUrl: './free-agree.page.html',
  styleUrls: ['./free-agree.page.scss'],
})
export class FreeAgreePage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  public data: Getquote = new Getquote();
  latitude: number;
  longitude: number;
  address:string;
  countryList;



  constructor(private httpClient: HttpClient,public fb: FormBuilder, private toastController:ToastController,public alertController:AlertController,
    private modalCtrl: ModalController, private myRoute: Router,private geolocation: Geolocation,
    private loadingCtrl: LoadingController,private rest:RestService,private menu: MenuController) {
      
      this.menu.enable(false, "custom");                  

    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), 
      (Validators.minLength(5))]], 
      
      phone: ['', [Validators.required,Validators.minLength(10),
      Validators.maxLength(10),Validators.pattern(("(0/91)?[7-9][0-9]{9}"))]],
      
      email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      city: ['', [Validators.required]],

    roles: this.fb.array(['USER']),
   });
  }
  
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.maplocation();
    this.httpClient.get<any>('https://restcountries.eu/rest/v2/all')
      .subscribe((res) => {
        this.countryList = res;
      });

  }
  
  async showtoast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
     position:'bottom'
    });
    toast.present();
  }
  
  
  async showAlert(message) {
    const alert = await this.alertController.create({
     // mode: 'ios',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
   
  }
  get errorControl() {
    return this.formcontrol.controls;
  }

  grab(){
    this.isSubmitted = true;
    console.log('clicked');

    if (this.formcontrol.invalid) {
     return false;
    } 
  this.loadingCtrl.create({
    message:"pleasewait...",
    mode:'ios',
    cssClass:'register-loader',
    duration: 4000,
    spinner: 'dots',
  }).then((ele)=>{
    ele.present();  
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.data);
    this.rest.addQuote(this.data).subscribe((result)=>{
    console.log(result);
    this.showAlert('Information added Successfully...');
    ele.dismiss();
   // this.myRoute.navigate(['/login']);
    },(error)=>{
      if(error.status==0){
        this.showtoast('Server is low, Please try again later');
        console.log(error);
      }else{
        if(error.status==400){ 
          this.showtoast('status 400');
          console.log(error);
          //this.registerForm.reset();  
        }
      }
    })
  })

}

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
