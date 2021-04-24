import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { RestService } from '../../src/app/Services/rest.service';
import { Register } from './Models/class';
import firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user:any={};

  firebaseconfig :any =
  {
    apiKey: "AIzaSyBFcC6ytRxzLBHfQOKjgtbQYWsirhH6Xec",
    authDomain :"startup-7944e.firebase.com",
    projectId:"startup-7944e"
  };

  // public appPages = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Start Business',
      url: '/business',
      img: '/assets/startbusiness.png',
     
    },
    {
      title: 'Protect Business',
      url: '/prtct-business',
      img: '/assets/protectbusiness.png',
      
    },
    {
      title: 'Manage Business',
      url: '/manage-business',
      img: '/assets/managebusiness.png'
    
    },
    {
      title: 'Grow Business',
      url: '/grow-business',
      img: '/assets/growbusiness.png'
    
    },
    {
      title: 'Get 21 Free Agreements',
      url: '/free-agree',
      img: '/assets/agreement.png'
    },
    {
      title: 'Payment',
      url: '/payment',
      img: '/assets/payment.png'
    }
  ];

  valid: boolean = false;
  errmsg: boolean = false;

  public data:Register = new Register();

  userid;
  arr;
  ar;
  role;
  
  name;
  fullname;
  profilephoto;

  constructor(private alertCtrl:AlertController,
    private platform: Platform, private menu: MenuController,
    private rest:RestService,private route: Router,private authservice: AuthService) {
    this.initializeApp();
  }
  async ngOnInit() {
    this.authservice.user$.subscribe(user => {
      console.log(user);
      this.user= user;
    })
       }
  ionViewWillEnter()
  {
    
  } 
  
  
  menuclose(){
    this.menu.close();
  }
  toggleMenu() {
    this.menu.toggle();
  }
  initializeApp() {
    this.platform.ready().then(() => {
    });
   
   
  }
  async showalert(message){
    const alert = await this.alertCtrl.create({
     mode:'ios',
 
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },{
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  logoutfromsession(){
    firebase.auth().signOut().then((val)=> {
      this.showalert('Are u sure want to logout');
      alert(JSON.stringify(val));
 
    }, (err)=> {
      alert(JSON.stringify(err));
    })
  }
}
