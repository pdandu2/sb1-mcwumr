import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class VisualisationsService {

    constructor(private httpClient: HttpClient) { }

    getWhoData() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.get('./assets/data/visualisations_who.json', { headers });
    }
    
    getGeneralData() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.get('./assets/data/visualisations_general.json', { headers });
    }
}
