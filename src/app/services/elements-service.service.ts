import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Elements } from '../composants/model/elements.model';
import { elementsData } from '../composants/data/elements.data';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() { }


  getListe () : Observable<Elements[]>
  {
    return of(elementsData)
  }
}
