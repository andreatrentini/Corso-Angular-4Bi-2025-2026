import { Component, inject } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-lista-nomi',
  imports: [],
  templateUrl: './lista-nomi.html',
  styleUrl: './lista-nomi.css'
})
export class ListaNomi {
  private _dataService: DataService = inject(DataService);
  elencoNomi = this._dataService.dati;
}
