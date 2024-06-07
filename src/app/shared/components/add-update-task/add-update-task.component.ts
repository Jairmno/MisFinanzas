import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Task } from 'src/app/models/task.model'; 


@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.scss'],
})
export class AddUpdateTaskComponent  implements OnInit {

  @Input() task: Task;
  user = {} as User;


form = new FormGroup({
  id: new FormGroup(''),
  title: new FormControl('', [Validators.required, Validators.minLength(4)]),
  description: new FormControl('', [Validators.required, Validators.minLength(4)]),
  items: new FormControl([],  [Validators.required, Validators.minLength(1)]),
})

  constructor(
    private firebaseSvc : FirebaseService,
    private utilsSvc : UtilsService
  ) { }

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user')

    if(this.task){
      this.form.setValue(this.task);
      this.form.updateValueAndValidity()

    }

  }

}
