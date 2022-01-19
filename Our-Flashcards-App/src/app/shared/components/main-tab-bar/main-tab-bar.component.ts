import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-main-tab-bar',
  templateUrl: './main-tab-bar.component.html',
  styleUrls: ['./main-tab-bar.component.scss'],
})
export class MainTabBarComponent {

  localLength: number;

  constructor(
    private storageService: StorageService,
  ) {
    this.storageService.create();
    this.getData();
  }

  async getData(data?: number) {
    if (data) {
      this.localLength = data;
    }
    else {
      let length = (await this.storageService.getStorageData())?.length;
      this.localLength = length ? length : 0;
    }
  }
}