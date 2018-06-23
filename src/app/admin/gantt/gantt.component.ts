import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss']
})
export class GanttComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
    });
  }

  pieChartData: any;
  ganttChart: any;

  ngOnInit() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      options: {'title': 'Tasks'},
    };

    this.ganttChart = {
      chartType: 'Gantt',
      dataTable: [
        ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Dependencies'],
        ['1', 'Actividad 1', new Date(2016, 0, 1), new Date(2016, 0, 2), 200, 100, null],
        ['2', 'Actividad 2', new Date(2016, 0, 2), new Date(2016, 0, 3), null, 20, '1'],

      ],
      options: {
        title: 'Project',
        height: 'auto',
        titleTextStyle: {
          color: '#000',
          fontName: 'Montserrat, Helvetica Neue,  Arial, sans-serif'
        }
      }
    };
  }

  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }

}
