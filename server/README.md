# node-template
This repository give you a starting point with Node JS projects for the following cases: 

## Node Javascript: Run/Dev/Debug

The following scripts launch respectivly: 
`npm run start`: Run production version
`npm run start:dev`: Develop - livereload
`npm run start:debug`: Ability to debug with vscode (activate **auto attach option** ) ctrl+shift+p(_type_ "auto attach")

## Database configuration

In the file `src/loaders/mysql.ts` :

```typescript
  private constructor() {
    this.cnx = createConnection({
      host: 'localhost', // address of the server
      user: 'root', // username
      password: 'root',
      database: 'YOUR_DATABASE',
    });
  }
```

## Node Javascript + Linter: 

Works by the same way than **Node Javascript** but enforce linting.
`npm run lint`: Verify syntaxe error and code quality 



## Node Typescript: Run/Build/Dev/Debug

The following scripts launch respectivly: 
`npm run start`: Run production version
`npm run start:dev`: Develop - livereload
`npm run start:debug`: Ability to debug with vscode (activate **auto attach option** ) ctrl+shift+p(_type_ "auto attach")
`npm run build`: convert typescript to javascript


## Node Typescript + Linter: 

Works by the same way than **Node Typescript** but enforce linting.
`npm run lint`: Verify syntaxe error and code quality 
