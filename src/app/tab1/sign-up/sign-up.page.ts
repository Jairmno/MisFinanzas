import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service'
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {
    
  
  // Campos del Formulario
  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email ]),
    password: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required, Validators.minLength (4)]),
  })
  //conecta el servicio 
   firebaseSvc = inject(FirebaseService);
   utilsSvc = inject (UtilsService)
  
  ngOnInit(){  
  }

    //funcion para enviar los datos ingresados a la consola y cargar el lolading
    async submit() {
      if(this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();
  
        this.firebaseSvc.signUp(this.form.value as User).then(async res => {

          await this.firebaseSvc.updateUser(this.form.value.name);
          let uid = res.user.uid;
          this.form.controls.uid.setValue(uid);

          this.setUserInfo(uid);
  
        }).catch(error => {
          console.log(error);
  
          this.utilsSvc.presentToast({
            message: error.message,
            duration: 2000,
            color: 'primary',
            position:'middle',
            icon:'alert-circle-outline'
          })
  
  
        }).finally(() => {
          loading.dismiss();
        })
      }
      
    }

    //funcion para guardar los datos del usuario 
    async setUserInfo(uid: string) {
      if(this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

        let path = `users/${uid}`;
        delete this.form.value.password;

        this.firebaseSvc.setDocument(path, this.form.value).then(async res => {
          
          this.utilsSvc.saveInLocalStorage('user', this.form.value)
          this.utilsSvc.routerLink("tabs/tab2");
          this.form.reset();
            
        }).catch(error => {
          console.log(error);
  
          this.utilsSvc.presentToast({
            message: error.message,
            duration: 2000,
            color: 'primary',
            position:'middle',
            icon:'alert-circle-outline'
          })
  
  
        }).finally(() => {
          loading.dismiss();
        })
      }
      
    }

  }
  