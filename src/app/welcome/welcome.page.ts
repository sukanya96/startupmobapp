import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  private animation :AnimationItem;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  swipeNext(){
    this.slides.slideNext();
  }
  slidePrev() {
    this.slides.slidePrev();
  }
  options:AnimationOptions={
    path:'assets/man.json'
  }
  
  constructor() { }

  created(animation:AnimationItem){
    console.log(animation);
  }
 
  ngOnInit() {
  }

}
