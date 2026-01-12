import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Bindings } from './bindings/bindings';
import { DirettiveStrutturali } from './direttive-strutturali/direttive-strutturali';
import { ClassiInterfacce } from './classi-interfacce/classi-interfacce';
import { ContenitorePadre } from './comunicazione-fra-componenti/contenitore-padre/contenitore-padre';
import { NotFound } from './not-found/not-found';
import { Servizi } from './servizi/servizi';

/*
    L'array routes contiene un elenco di oggetti composti nella forma più semplice
    dalla proprietà path che contiene il testo della URL dopo la radice (o indirizzo del sito)
    e dalla proprietà component con la quale associamo un componente alla URL. Sarà
    il componente che verrà visualizzato nel browser in presenta della URL definita da path.
*/ 
export const routes: Routes = [
    {path: '', component: Home},
    {path: 'bindings', component: Bindings},
    {path: 'direttive-strutturali', component: DirettiveStrutturali},
    {path: 'classi-interfacce', component: ClassiInterfacce},
    {path: 'com-fra-comp', component: ContenitorePadre},
    {path: 'servizi', component: Servizi},
    {path: '**', component: NotFound}
];
