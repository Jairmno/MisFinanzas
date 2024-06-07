import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task.model'; 
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor( 
   private modalController: ModalController )
    {}

loadingCtrl = inject(LoadingController);
toastCtrl = inject(ToastController);
router = inject(Router)
// Loading
loading(){
  return this.loadingCtrl.create({spinner: 'crescent'})
}

//Toas
async presentToast(opts?: ToastOptions) {
  const toast = await this.toastCtrl.create(opts);
  toast.present();
}

//Enruta a cualquier pagina
routerLink(url: string){
  return this.router.navigateByUrl(url);
}
//Guardar elementos en localstorage
saveInLocalStorage(key: string, value: any) {
return localStorage.setItem(key, JSON.stringify(value))
}

//optener elementos desde localstorage
getFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key))
  }

  //Modal para crtear ahorro, devuelve los datos al cerra
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
    await modal.present();

  const {data} = await modal.onWillDismiss();

  if (data){
    return data;
  }
}
  dismissModal(data?: any){
    this.modalController.dismiss(data);
  }
  getPercentage(task: Task){
    let completedItems =task.items.filter(item => item.complete).length
    let totalItems = task.items.length;
    let percentage= (100/ totalItems) * completedItems
  
    return parseInt (percentage.toString())


}
}