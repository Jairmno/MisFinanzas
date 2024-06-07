import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
// variable titulo del header
  @Input() title: string;
  @Input() backButton: string;
  @Input() isModal: boolean;
  @Input() color: string;
  @Input() centerTitle: boolean;
  @Input() valor: string;
  @Input() concepto: string;
  @Input() fecha: string;
  
  
  
  constructor(  
    private firebaseSvc : FirebaseService,
    private utilsSvc : UtilsService 
  ) { }

  ngOnInit() {}

  dismissModal(){
    this.utilsSvc.dismissModal()
  }


}
