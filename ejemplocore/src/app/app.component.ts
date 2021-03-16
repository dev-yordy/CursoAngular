import { Component, ElementRef, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplocore';
  @ViewChild('inputName',{static:true}) inputName: any;
  @ViewChild(HijoComponent,{static:true}) hijo: HijoComponent = new HijoComponent();

   mostrar(){
     this.hijo.titulo = "Trashing"
    // console.log(this.inputName.nativeElement.value);
   }
}
