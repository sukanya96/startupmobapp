import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:any={};
  imageURL: any;
   myprofile;
   base64temp:string;
  valid: boolean = false;
  
  arr;
 errmsg: boolean = false;
  ar;
  role;
  number;
  
  name;
  fullname;
  profilephoto;
  
  public defaultimageshow: string = '../../assets/avatar.png';
  
  constructor(
    private auth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private afDB: AngularFireDatabase,
    public camera: Camera,
    private filePath:FilePath,
    private fileChooser: FileChooser,
    public file:File,private route:Router,
    public actionSheetController: ActionSheetController,
   public toastController:ToastController,
   public loadingController:LoadingController,
   private modalController: ModalController,
   private authservice: AuthService
  ) { }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
  async ngOnInit() {
  this.authservice.user$.subscribe(user => {
    console.log(user);
    this.user= user;
  })
     }

     
  ProfileLibrary(){
    this.fileChooser.open().then((val) => {
      this.filePath.resolveNativePath(val).then((nativepath)=>{
        var filename = nativepath.substring(nativepath.lastIndexOf('/')+1);
        var folderpath = nativepath.substring(0,nativepath.lastIndexOf('/')+1);
        this.file.readAsDataURL(folderpath,filename).then((base64data) => {
          this.myprofile= base64data;
          //this.galleryToast();
       }, (err) => {
       alert(JSON.stringify(err));
       });
       },(err)=>{
      alert(JSON.stringify(err));
      });
     });
    }

    Update(){
      this.route.navigate(['/profile/edit']);

      //this.route.navigate(['/UserProfile/editprofile']);
    }
    fileChanged(event) {
      const files = event.target.files;
      console.log(files);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  
    async cameraToast() {
      const toast = await this.toastController.create({
        message: 'Camera photo updated Successfully..!',
        duration: 2000
      });
      toast.present();
    }
    async galleryToast() {
      const toast = await this.toastController.create({
        message: 'Gallery updated Successfully..!',
        duration: 2000
      });
      toast.present();
    }

    
  ProfileCamera(){
    var options: CameraOptions = {
      quality:100,
      mediaType:this.camera.MediaType.PICTURE,
      destinationType:this.camera.DestinationType.FILE_URI,
      encodingType:this.camera.EncodingType.JPEG
    }
    this.camera.getPicture(options).then((imagedata) => {
    let filename = imagedata.substring(imagedata.lastIndexOf('/')+1);
      let path = imagedata.substring(0,imagedata.lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.myprofile= base64data;
        //this.cameraToast();
      })
    })
  }

  async PresentActionsheet() {
    let  actionSheet = await this.actionSheetController.create({
     header: 'Upload Photo',
     mode:'md',
    cssClass :'my-action-class',
     buttons : [
      {
        text: 'Use Library',
        icon:"folder",
        handler: () => {
         setTimeout(() => {
           this.ProfileLibrary();
         }, 400)
        }
      },

      {
         text: " Use Camera",
         icon: "camera",
        handler : () =>{
          setTimeout(() => {
       this.ProfileCamera();
         },400)
        }
       }
      
      ]
    });
    await actionSheet.present();
  }

  logout(){
    alert('Are u sure wanted to logout from the session');
    this.auth.signOut();
  }

}
