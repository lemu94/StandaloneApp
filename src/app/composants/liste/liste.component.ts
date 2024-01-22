import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from '../elements/elements.component';
import { ElementsService } from '../../services/elements-service.service';
import { Elements } from '../model/elements.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ElementsComponent,CommonModule],
  providers : [ElementsService],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  Data_elements : Elements []=[];
  datats!: Observable<Elements[]>;
  constructor(readonly ListeService : ElementsService)
  {

  }
  
  ngOnInit(): void {
    
    this.Recuperer_liste();
  }

  Recuperer_liste()
  {
   this.datats= this.ListeService.getListe();
  }


}
