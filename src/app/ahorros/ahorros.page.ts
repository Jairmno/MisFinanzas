import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../models/task.model'; 
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { AddUpdateTaskComponent } from '../shared/components/add-update-task/add-update-task.component';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.page.html',
  styleUrls: ['./ahorros.page.scss'],
})
export class AhorrosPage implements OnInit {

  tasks: Task[] = [
    {
      id: '1',
      title:'Ahorro Para la Casa',
      description:' $ 200.000.000. /  $ 180.000.000',
      items: [
      { name: 'actividad 1', complete: true },
      { name: 'actividad 2', complete: true },
      { name: 'actividad 3', complete: false },
    ]
    },
    {
      id: '2',
      title:'Ahorro Para Automovil',
      description:' $ 90.000.000. /  $ 45.000.000',
      items: [
      { name: 'actividad 1', complete: true },
      { name: 'actividad 2', complete: true },
      { name: 'actividad 3', complete: false },
      { name: 'actividad 3', complete: false },
    ]
    },
    {
      id: '3',
      title:'Ahorro Viajes',
      description:' $ 10.000.000. /  $ 8.000.000',
      items: [
      { name: 'actividad 1', complete: true },
      { name: 'actividad 2', complete: true },
      { name: 'actividad 3', complete: true },
    ]
    },
  ]
 
//Base de datos
  constructor(
    private firebaseSvc : FirebaseService,
    private utilsSvc : UtilsService,
  ) { }

  ngOnInit() {  }

  getPercentage(task: Task){
    return this.utilsSvc.getPercentage(task)
  }
  //agregar tarea

  addOrUpdateTask(task?: Task){
    this.utilsSvc.presentModal({
      component: AddUpdateTaskComponent,
      componentProps: {task},
      cssClass: 'add-update-modal'
    })
  }

}
