import { Persona } from "./persona";

export class Studente extends Persona {
    // Attributi
    private _id: number;
    private _classe: string = '';
    
    //Costruttore
    constructor(nome: string, cognome: string, sesso: string, classe: string, id: number) {
        // Richiamare il costruttore della classe Persone (Della classe Padre)
        super(nome, cognome, sesso);
        // Adesso abbiamo una persona, careterizziamo lo studente
        this._id = id;
        //this._classe = classe;
        //Nel caso sotto uso il setter. In TypeScript il setter viene utilizzato come se fosse un attributo
        this.classe = classe;
    }

    //Getter di studente
    public get id() : number {
        return this._id;
    }

    public get classe() : string {
        return this._classe;
    }

    //Setter 

    public set classe(value: string) {
        //Controlliamo se la classe è scritta in modo corretto
        //Espressioni regex

        const regex = /^[1-5][A-S][aeim]?$/;

        if (regex.test(value)) {
            this._classe = value;
        }
        else {
            throw new Error('Nome della classe non corretto.');
        }
    }

    public override toString(): string {
        return this.id + ' ' + this.classe + ' ' + super.toString() + ' ' + this.classe;
    }

}
