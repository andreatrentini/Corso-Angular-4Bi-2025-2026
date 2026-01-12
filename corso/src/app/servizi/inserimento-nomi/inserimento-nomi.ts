import { Component, inject } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-inserimento-nomi',
  imports: [],
  templateUrl: './inserimento-nomi.html',
  styleUrl: './inserimento-nomi.css'
})
export class InserimentoNomi {
  private _dataService: DataService = inject(DataService);

  public aggiungi(nome: string): void {
    this._dataService.aggiungi(nome);
  }
}
