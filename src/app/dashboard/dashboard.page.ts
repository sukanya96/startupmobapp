import { Component, OnInit } from '@angular/core';
import { AlertController, IonSlides, MenuController } from '@ionic/angular';
import { DataService } from '../Services/data.service'
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { ChatPage } from '../chat/chat.page';
import { ProfilePage } from '../UserProfile/profile/profile.page';
import firebase from 'firebase';
import { EditprofilePage } from '../UserProfile/editprofile/editprofile.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  firebaseconfig :any =
  {
    apiKey: "AIzaSyBFcC6ytRxzLBHfQOKjgtbQYWsirhH6Xec",
    authDomain :"startup-7944e.firebase.com",
    projectId:"startup-7944e"
  };


  public slides=[];
  public categories=[];
  public categories1 = [];
  public categories2 = [];
  public categories3 = [];

    slideOptions = {
    initialSlide: 1,
    speed: 2000
  };

  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 2000
    
  };

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500
  };


  dataReturned: any;

  ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  constructor(private menu: MenuController,
    public data:DataService,private alertCtrl:AlertController,private router:Router,
    public modalController: ModalController) { }
  

  ngOnInit() {
    this.slides = this.data.getSlides();
    this.categories = this.data.getCategories();
    this.categories1 = this.data.getCategories1();
    this.categories2 = this.data.getCategories2();
    this.categories3 = this.data.getCategories3();
    if(firebase.apps.length == 0) {
      firebase.initializeApp(this.firebaseconfig);
    }
  }

  Update(){
    this.router.navigate(['/profile/edit']);

    //this.route.navigate(['/UserProfile/editprofile']);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      
    });

    return await modal.present();
  }

  async openModal1() {
    const modal = await this.modalController.create({
      component: ChatPage,
      
    });

    return await modal.present();
  }

  async openModal2() {
    const modal = await this.modalController.create({
      component: ProfilePage,
      
    });

    return await modal.present();
  }
 

}

