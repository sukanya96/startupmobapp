import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { ChatPage } from '../chat/chat.page';
import { ProfilePage } from '../UserProfile/profile/profile.page';

@Component({
  selector: 'app-prtct-business',
  templateUrl: './prtct-business.page.html',
  styleUrls: ['./prtct-business.page.scss'],
})
export class PrtctBusinessPage implements OnInit {

  constructor(private menu: MenuController,public modalController: ModalController) {
    //this.menu.enable(false, "custom");                   //

   }
   ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  ngOnInit() {
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
