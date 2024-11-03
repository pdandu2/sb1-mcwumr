import { Component,  OnInit, ViewChild } from '@angular/core';

import { ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { VisualisationsService } from './visualisations.service';

@Component({
	selector: 'app-visualisations',
	templateUrl: './visualisations.component.html',
	styleUrls: ['./visualisations.component.scss']
})
export class VisualisationsComponent implements OnInit {

	@ViewChild(BaseChartDirective) chart: BaseChartDirective;

	segment: string;

	chartType: ChartType = 'line';
    chartLegend = true;
	chartOptions = { responsive: true, maintainAspectRatio: false,
		elements: { line: { tension: 0.5 }, point: { radius: 7.5 } },
	   	scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 }, offset: true } }
	};

    whoChartLabels: string[] = [];
	whoChartData: any[] = [];

	generalChartLabels: string[] = [];
	generalChartData: any[] = [];


	constructor(private visualisationsService: VisualisationsService) { }

	ngOnInit() {
		this.segment = 'general';
		this.segmentChanged();
	}

	segmentChanged() {
		if (this.segment === 'general') {
			this.getGeneralData();
		} else if (this.segment === 'who') {
			this.getWhoData();
		}
	}

	getGeneralData() {
		this.generalChartLabels = [];
		this.generalChartData = [];
        this.visualisationsService.getGeneralData().subscribe(response => {
			let index = 0;
			for (let [key, value] of Object.entries(response)) {
				this.generalChartData.push({ data: [], label: key });
				value.forEach((data: any[]) => {
					if (index === 0) {
						this.generalChartLabels.push(data[0]);
					}
					this.generalChartData[index].data.push(data[1]);
				});
				index++;
			}
			this.chart.update();
		});
	}

	getWhoData() {
		this.whoChartLabels = [];
		this.whoChartData = [];
        this.visualisationsService.getWhoData().subscribe(response => {
			let index = 0;
			for (let [key, value] of Object.entries(response)) {
				this.whoChartData.push({ data: [], label: key });
				value.forEach((data: any[]) => {
					if (index === 0) {
						this.whoChartLabels.push(data[0]);
					}
					this.whoChartData[index].data.push(data[1]);
				});
				index++;
			}
			this.chart.update();
		});
	}
}
