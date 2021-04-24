import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/File/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import firebase from 'firebase';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    NgCircleProgressModule.forRoot({
      // set defaults here
      //"radius": 100,
      "radius":50,
      "outerStrokeWidth": 16,
      "innerStrokeWidth": 8,
      "outerStrokeColor": "#e62020",
      "innerStrokeColor": "#f2f22c",
      "subtitleColor":"green",
      "titleColor":"maroon",
      "animationDuration": 300,
      "title":"StartupwalaCA",
      "titleFontSize":"15",
      "subtitle":"",
      "imageSrc":"/assets/icon/startup.png",
      "showUnits":false,
      "clockwise":true,
      "startFromZero": false,
      "showBackground": false,
      
    }),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Camera,
    FileChooser,
    FilePath,
    File,
    Base64,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}

 


