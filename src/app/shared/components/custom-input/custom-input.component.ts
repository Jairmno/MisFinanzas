import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {

  // Variables del formulario

@Input() control!: FormControl;
@Input() type!: string;
@Input() label!: string;
@Input() autocomplete!: string;
@Input() icon!: string;

//variable para identificar si es password
isPassword!: boolean;
//variable para ocualtar  password
hide: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.isPassword=true;
  }

//funcionan para ocultar password
showOrHidePassword() {

  this.hide = !this.hide;

  if (this.hide) this.type ='password';
  else this.type ='text';

}


}
