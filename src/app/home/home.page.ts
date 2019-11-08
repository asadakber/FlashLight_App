import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOn: boolean = true
  constructor(private flashlight: Flashlight) {}

  async isAvailable(): Promise<boolean> {
    try {
     return await this.flashlight.available();
    }
    catch(e) {
      console.log(e)
    }
  }

  async toggleFlash():Promise<void> {
    try {
      let available = await this.isAvailable()
      if(available) {
        await this.flashlight.toggle();
        this.isOn = !this.isOn
      } else {
        console.log("Isn't available")
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  async turnOnFlash(): Promise<void> {
    await this.flashlight.switchOn()
  }

  async turnOffFlash(): Promise<void> {
    await this.flashlight.switchOff()
  }

  async isFlashOn(): Promise<boolean> {
    return await this.flashlight.isSwitchedOn();
  }
}
