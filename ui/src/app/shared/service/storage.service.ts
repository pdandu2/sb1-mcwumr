import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

	private storage: Storage | null = null;

    constructor(private storageService: Storage) {
		this.init();
	}

    async init() {
		const storage = await this.storageService.create();
		this.storage = storage;
	}

    save(key: string, value: any) {
		this.storage.set(key, value);
    }

    get(key: string) {
        return this.storage.get(key);
    }

    remove(key: string) {
       this.storage.remove(key);
    }

	clear() {
       this.storage.clear();
    }
}
