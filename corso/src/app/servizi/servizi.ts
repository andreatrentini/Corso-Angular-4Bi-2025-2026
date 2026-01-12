import { Component, inject, Signal } from '@angular/core';
import { DataService } from './data-service';
import { InserimentoNomi } from './inserimento-nomi/inserimento-nomi';
import { ListaNomi } from './lista-nomi/lista-nomi';

@Component({
  selector: 'app-servizi',
  imports: [InserimentoNomi, ListaNomi],
  templateUrl: './servizi.html',
  styleUrl: './servizi.css'
})
export class Servizi {
  // L'istruzione successiva (inject(DataService)) consente al componente di usare l'istanza del servizio
  // DataService creata all'avvio dell'applicazione: providedIn: 'root'
  // Questo meccanismo si chiama: Dependency injection
  private _dataService: DataService = inject(DataService);
  // In un template HTML si possono usare esclusivamente variabili, signal, metodi, ecc.
  // dichiarati come attributi della classe del componente.
  // Ecco il perchè dichiaro datiComponente, di tipo Signal read-only che verrà inizializzato
  // con il riferimento al signal dichiarato nel servizio.
  // Qualsiasi cosa accada a dati nel setivizio, verrà immediatamente riflettuta in datiComponente
  datiComponente: Signal<string[]> = this._dataService.dati;

  public aggiungiInComponente(nome: string): void {
    try {
      this._dataService.aggiungi(nome);
    } catch (error) {
      // gestione dell'errore
      console.log(error);
    }
  }

  public eliminaDaComponente(indice: number): void {
    try {
      this._dataService.elimina(indice);
    } catch (error) {
      // gestione errore
      console.log(error);
    }
  }
}
