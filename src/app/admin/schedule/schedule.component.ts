import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  // Default options
  /*options: IGanttOptions = {
    scale: {
      start: new Date(2017, 0, 1),
      end: new Date(2017, 1, 1)
    },
    zooming: Zooming[Zooming.days]
  };

  project: Project = {
    'id': 'dd10f0b6-b8a4-4b2d-a7df-b2c3d63b4a01',
    'name': 'Angular2 Gantt',
    'startDate': new Date('2017-02-27T08:32:09.6972999Z'),
    'tasks': [
      {
        'id': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'treePath': 'parent 1',
        'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
        'name': 'parent 1',
        'resource': 'res1',
        'start': new Date('2017-01-01T00:00:00.0Z'),
        'end': new Date('2017-01-03T00:00:00.0Z'),
        'percentComplete': 100,
        'status': 'Completed'
      },
      {
        'id': 'dd755f20-360a-451f-b200-b83b89a35ad1',
        'treePath': 'Cras sollicitudin egestas velit sit amet aliquam',
        'parentId': 'dd755f20-360a-451f-b200-b83b89a35ad1',
        'name': 'Cras sollicitudin egestas velit sit amet aliquam',
        'resource': 'res2',
        'start': new Date('2017-01-05T00:00:00.0Z'),
        'end': new Date('2017-01-06T00:00:00.0Z'),
        'percentComplete': 0
      },
      {
        'id': 'j1b997ef-bb89-4ca2-b134-62a08a19aef6',
        'treePath': 'Donec ac augue est',
        'parentId': 'j1b997ef-bb89-4ca2-b134-62a08a19aef6',
        'name': 'Donec ac augue est',
        'resource': 'res2',
        'start': new Date('2017-01-06T00:00:00.0Z'),
        'end': new Date('2017-01-07T00:00:00.0Z'),
        'percentComplete': 0
      },
      {
        'id': 'ub12f674-d5cb-408f-a941-ec76af2ec47e',
        'treePath': 'Lorem ipsum dolor sit amet',
        'parentId': 'ub12f674-d5cb-408f-a941-ec76af2ec47e',
        'name': 'Lorem ipsum dolor sit amet',
        'resource': 'res1',
        'start': new Date('2017-01-07T00:00:00.0Z'),
        'end': new Date('2017-01-22T00:00:00.0Z'),
        'percentComplete': 0,
        'status': 'Error'
      },
      {
        'id': 'xafa430b-d4da-4d7d-90ed-69056a042d7a',
        'treePath': 'Praesent molestie lobortis mi non tempor',
        'parentId': 'xafa430b-d4da-4d7d-90ed-69056a042d7a',
        'name': 'Praesent molestie lobortis mi non tempor',
        'resource': 'res1',
        'start': new Date('2017-01-22T00:00:00.0Z'),
        'end': new Date('2017-01-23T00:00:00.0Z')
      },
      {
        'id': 'mc9d8d41-1995-4b38-9256-bcc0da171146',
        'treePath': 'Cras sollicitudin egestas velit sit amet aliquam',
        'parentId': 'mc9d8d41-1995-4b38-9256-bcc0da171146',
        'name': 'Cras sollicitudin egestas velit sit amet aliquam',
        'resource': 'res2',
        'start': new Date('2017-01-23T00:00:00.0Z'),
        'end': new Date('2017-01-24T00:00:00.0Z')
      },
      {
        'id': 'b5c071a5-430c-4d61-acf4-799cbdf61c49',
        'treePath': 'Donec ac augue est',
        'parentId': 'b5c071a5-430c-4d61-acf4-799cbdf61c49',
        'name': 'Donec ac augue est',
        'resource': 'res2',
        'start': new Date('2017-01-24T00:00:00.0Z'),
        'end': new Date('2017-01-24T00:34:00.0Z')
      },
      {
        'id': 't9ba762e-bde7-47bf-b628-75f99fdd5bef',
        'treePath': 'Lorem Ipsum',
        'parentId': 't9ba762e-bde7-47bf-b628-75f99fdd5bef',
        'name': 'Lorem Ipsum',
        'resource': 'res2',
        'start': new Date('2017-01-24T00:00:00.0Z'),
        'end': new Date('2017-01-24T00:00:36.0Z')
      }
    ]
  };*/


  constructor() {
  }

  ngOnInit() {
  }

  groupData(array: any[], f: any): any[] {
    const groups = {};
    array.forEach((o: any) => {
      const group = JSON.stringify(f(o));

      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map((group: any) => {
      return groups[group];
    });
  }

  /*createTask(element: any) {
    const selectedStatus = element.options[element.selectedIndex].value;

    const parentTask = {
      'id': 'parent_task_' + Math.random(),
      'parentId': 'parent_task',
      'treePath': 'parent_task',
      'name': 'parent_task',
      'percentComplete': 0,
      'start': new Date('2017-01-01T03:30:00.0Z'),
      'end': new Date('2017-01-01T12:45:00.0Z'),
      'status': selectedStatus
    };
    this.project.tasks.push(parentTask);

    const childTask = {
      'id': 'child_task_' + Math.random(),
      'parentId': 'ea2a8d86-1d4b-4807-844d-d5417fcf618d',
      'treePath': 'parent 1/child3',
      'name': 'child3',
      'percentComplete': 0,
      'start': new Date('2017-01-01T03:30:00.0Z'),
      'end': new Date('2017-01-01T12:45:00.0Z'),
      'status': selectedStatus
    };
    this.project.tasks.push(childTask);

  }

  updateTasks() {
    for (let i = 0; i < this.project.tasks.length; i++) {
      const task = this.project.tasks[i];

      const progress = setInterval(function () {
        if (task.percentComplete === 100) {
          task.status = 'Completed';
          clearInterval(progress);
        } else {
          if (task.percentComplete === 25) {
            task.status = 'Warning';
          } else if (task.percentComplete === 50) {
            task.status = 'Error';
          } else if (task.percentComplete === 75) {
            task.status = 'Information';
          }

          task.percentComplete += 1;
        }
      }, 200);
    }
  }

  loadBigDataSet() {
    const tasks = [];

    for (let i = 11; i < 1000; i++) {
      const task = {
        id: `parent${i}`,
        name: 'task testing',
        percentComplete: 0,
        start: new Date(),
        end: new Date(),
        status: ''
      };

      tasks.push(task);
    }

    this.project.tasks.push(...tasks);
  }

  gridRowClicked(event) {
    console.log(event);
  }*/

}
