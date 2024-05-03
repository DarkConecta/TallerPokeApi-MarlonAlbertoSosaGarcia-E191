import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() emitParent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  onChangeBuscador(e:Event){
    this.emitParent.emit((e.target as HTMLInputElement).value); 
  }
}
