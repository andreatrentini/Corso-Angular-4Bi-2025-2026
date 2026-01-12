import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

// providedIn: 'root' fa sì che un'instanza di DataService venga creata in automatico all'avvio dell'applicazione (SingleTon)
// Questa istanza può essere usata da tutti i componenti dell'applicazione e anche dagli altri servizi
// attraverso il meccanismo di dependecy injection.
@Injectable({
  providedIn: 'root'
})
// Il serivizio è una classe
export class DataService {
  private _dati: WritableSignal<string[]> = signal([]);
  public dati: Signal<string[]> = this._dati.asReadonly();

  public aggiungi(valore: string): void {
    if (valore != '') {
      this._dati.update(current => [...current, valore]);
    } else {
      throw new Error('Il valore non può essere vuoto.');
    }
  }

  public elimina(indice: number): void {
    try {
      this._dati.update(current => {
        current.splice(indice, 1);
        return current;
      })
    } catch {
      throw new Error('Index out of range.');
    }
  }
}
