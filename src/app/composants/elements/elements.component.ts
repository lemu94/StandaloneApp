import { Component, Input , signal } from '@angular/core';
import { Elements } from '../model/elements.model';
@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})

export class ElementsComponent {

  @Input()
  element!: Elements;
  
 
choisir_element(nom : string)
{
  

}


}
