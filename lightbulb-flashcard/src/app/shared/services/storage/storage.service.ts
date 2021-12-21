import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage,
    ) { }

    async getStorageData(): Promise<any> {
      return await this.getValue('data');
      // let reorderCheck = await this.getValue('customSort');
      // if( reorderCheck == null ) routineSort(await this.storageData);
    }






    async create() {
      await this.storage.create();
    }
  
    async set(key: string, value: object) {
      await this.storage?.remove(key);
      await this.storage?.set(key, value);
    }
  
    async getKeys() {
      await this.storage.keys();
    }
  
    async getValue(key: string) {
      return await this.storage.get(key);
    }
  
    async remove(key: string) {
      await this.storage.remove(key);
    }
  
    async clear() {
      await this.storage.clear();
    }
}