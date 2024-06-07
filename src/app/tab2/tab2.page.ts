import { Component } from '@angular/core';
import { Task } from '../models/task.model'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tasks: Task[] = [
    {
      id: '1',
      title:'Ahorro',
      description:'video minuto 1:40:00',
      items: [
      { name: 'actividad 1', complete: true },
      { name: 'actividad 2', complete: true },
      { name: 'actividad 3', complete: false },
    ]
    },
  ]

  constructor() {}
  ngOnInit() {
  }
}
