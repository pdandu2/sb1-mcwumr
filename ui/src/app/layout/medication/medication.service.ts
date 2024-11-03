import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MedicationService {

    constructor(private httpClient: HttpClient) { }

    getMedicines() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.get('./assets/data/medicines.json', { headers });
    }
}
