import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service'
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  

// Campos del Formulario
form = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email ]),
  password: new FormControl('',[Validators.required])
})
//conecta el servicio 
 firebaseSvc = inject(FirebaseService);
 utilsSvc = inject (UtilsService)

ngOnInit(){

}
  //funcion para enviar los datos ingresados a la consola y cargar el loading
  async submit() {
    if(this.form.valid){
    const loading = await this.utilsSvc.loading();
    await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res =>{
        //console.log(res);
        
        this.getUserInfo(res.user.uid);

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
  //funcion para obtener datos usuario
  async getUserInfo(uid: string) {
    if(this.form.valid) {

    const loading = await this.utilsSvc.loading();
    await loading.present();

      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then((user: User) => {
        
        this.utilsSvc.saveInLocalStorage('user', user);
        this.utilsSvc.routerLink("tabs/tab2");
        this.form.reset();
          
        this.utilsSvc.presentToast({
          message: `Bienvenido ${user.name}`,
          duration: 1500,
          color: 'primary',
          position:'middle',
          icon:'person-circle-outline'
        })

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
