# 🅰️ Corso Angular 4Bi 2025-2026

## 📚 Riferimenti

- [Node.js](https://nodejs.org/en) - Runtime JavaScript
- [Angular](https://angular.dev/) - Framework per applicazioni web
- [📦 Repository Theo Zadra](https://github.com/theozadra/Corso-Angular-4Bi-2025-2026)

## ⚙️ Configurazione iniziale

### 1️⃣ Installare Node.js
**Requisito**: Node.js v20.19.0 o successivo (già installato in Codespaces)

**🐧 Linux**
```bash
sudo apt update
sudo apt install nodejs npm
```

**🪟 Windows**  
Scaricare ed installare il programma dal sito ufficiale

### 2️⃣ Installare Angular CLI
```bash
npm install -g @angular/cli
```
✅ Questo comando aggiunge **ng** ai programmi disponibili sul sistema

## 🚀 Creare la prima applicazione
```bash
ng new nome-applicazione
```

> [!TIP]
> 💡 Scrivere sempre i nomi di applicazioni, componenti, servizi, ecc. in **minuscolo**. Se il nome è composto da più parole, separarle con un trattino (es: `mia-app`)

## 📁 Struttura dell'applicazione

- **`.vscode`**: Impostazioni di Visual Studio Code ⚠️ **NON MODIFICARE NÉ CANCELLARE**
- **`node_modules`**: Pacchetti Node.js necessari per l'applicazione 
  - ⚠️ **NON AGGIUNGERE AI COMMIT** 
  - ♻️ Può essere ricreata con `npm install`
- **`public`**: File multimediali (🖼️ immagini, 🎵 audio, 🎬 video, favicon, ecc.)
- **`src`**: Codice sorgente dell'applicazione
  - **`app`**: File TypeScript, HTML e CSS dell'applicazione
    - `app.config.ts`: Configurazione principale
    - `app.component.html|css|ts`: Template, stili e logica del componente principale
    - `app.routes.ts`: Configurazione routing per Single Page Application
    - `*.spec.ts`: Test automatici dei componenti
  - `index.html`: Pagina principale dell'applicazione
  - `main.ts`: Punto di ingresso dell'applicazione
  - `style.css`: Stili globali
- **`.editorconfig`**: Configurazione editor
- **`.gitignore`**: File e cartelle esclusi da Git
- **`angular.json`**: Configurazione progetto Angular
- **`package.json`** / **`package-lock.json`**: Configurazione Node.js ⚠️ **NON MODIFICARE**
- **`tsconfig.*.json`**: Configurazione TypeScript ⚠️ **NON MODIFICARE**

## 📦 Deploy dell'applicazione

Per creare i file da distribuire (senza SSR - Server Side Rendering):

```bash
ng build
```

📂 Verrà creata la directory `dist/nome-progetto/browser` contenente:
- `index.html`
- `style.css`
- File JavaScript compilati

✅ Per pubblicare l'applicazione, basta caricare questi file su un web server statico.

⚠️ **Importante**: Rieseguire il build dopo ogni modifica al progetto.

## 🔧 Server Web di sviluppo

Angular include un server di sviluppo che:
- ♻️ Ricompila automaticamente ad ogni modifica
- 🔄 Aggiorna il browser in tempo reale

```bash
ng serve
```

## 🔗 Collegamenti

- [📖 Guida sull'applicazione Corso](./corso/CORSO.md)