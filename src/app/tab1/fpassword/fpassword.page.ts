import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service'
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.page.html',
  styleUrls: ['./fpassword.page.scss'],
})
export class FpasswordPage implements OnInit {
 
// Campos del Formulario
form = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
 })
//conecta el servicio 
 firebaseSvc = inject(FirebaseService);
 utilsSvc = inject (UtilsService)

ngOnInit() {

}
  //funcion para enviar los datos ingresados a la consola y cargar el loading
  async submit() {
    if (this.form.valid) {

    const loading = await this.utilsSvc.loading();
    await loading.present();

      //Pasar email para recuperar password
      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {

        //Mensaje de envio para recuperar password    

        this.utilsSvc.presentToast({
          message: 'Correo de recuperacion enviado',
          duration: 1500,
          color: 'primary',
          position:'middle',
          icon:'mail-outline'
        });

        //Retorna al inicio de sesion
        this.utilsSvc.routerLink("tabs/tab1");

        //Limpiar formulario
        this.form.reset();

      }).catch(error => {
        console.log(error);

        //Mensaje de error 
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2000,
          color: 'primary',
          position:'middle',
          icon:'alert-circle-outline'
        })
        //Finaliza la conexion
      }).finally(() => {
        loading.dismiss();
      })
    }
    
  }
}
