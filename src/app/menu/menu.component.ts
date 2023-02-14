import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
constructor() {
  this.items = []
}

items: MenuItem[];

ngOnInit() {
    this.items = [
       
        
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'E-Mail',
                    icon:'pi pi-at',

                },
                {
                    label:'Contraseña',
                    icon:'pi pi-key',

                },
                {
                    label:'login',
                    icon:'pi pi-arrow-right',

                },
                {
                    label:'Registro',
                    icon:'pi pi-pencil',

                }
             
            ]
        },
       
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];
}
}
