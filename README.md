### TBD

- tailwind classnames for boilerplate;
- hooks for theming;
- rtk services;
- jest configuration;
- hygen commands;

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```

## Generate new component

Run the following command

```bash
  yarn add-component
```

Follow the steps, after you will get a component, e.g:

```typescript
TBD
```

## Generate new container

Run the following command

```bash
  yarn add-container
```

**NB the command will generate a new TEST FILE, TDD is reccomended**

Follow the steps, after you will get a container, e.g:

```typescript
TBD
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

## Add images

## Conventions & naming

Per quanto riguarda la struttura del codice all’interno dell’applicazione, seguiamo alcune convenzioni per mantenere una struttura ordinata e facile da navigare all’interno del progetto, rendendo il codice più leggibile e facile da mantenere.

- Utilizziamo il kebab case per i nomi dei file. Ad esempio: “pagina-iniziale.tsx” o “dettagli-prodotto.tsx”
- Utilizziamo il Pascal case per i nomi dei componenti React. Ad esempio: “export const PaginaIniziale[….]”
- Utilizziamo il camel case per i nomi delle funzioni all’interno dei componenti React. Ad esempio: “export const caricaDati[…]”
