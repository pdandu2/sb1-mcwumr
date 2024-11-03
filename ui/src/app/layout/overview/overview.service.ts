import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OverviewService {

    constructor(private httpClient: HttpClient) { }

    getPatientOverview() {
        
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.get('./assets/data/patient_details.json', { headers });
    }
}
