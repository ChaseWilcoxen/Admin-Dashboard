import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data = []
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  Highcharts = Highcharts;
  chartOptions ={}
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
       chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2,2,2,2],
          height: 60
      },
      title: {
          text: null,
      },
      subtitle: {
          text: null,
      },
      credits: {
        enabled:false,
      },
      exporting: {
        enabled: false,
      },
      tooltip: {
          split: true,
          outside: true,
      },
      legend:{
        enabled: false,
      },
      xAxis:{
        labels: {
          enabled: false
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTicket: false,
        tickOptions: []
      },
      yAxis:{
        labels: {
          enabled: false
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTicket: false,
        tickOptions: []
      },
      series: [{
        data: this.data,
      }]
    };
    HC_exporting(Highcharts)

    setTimeout(()=> {
      window.dispatchEvent(
        new Event('resize')
      )
     }, 300)
  }

}
