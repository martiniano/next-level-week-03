## :rocket: Happy

<p align="center">
  <img src="happy/logo.png">
</p>

O Happy é uma aplicação desenvolvida na [Next Level Week](https://nextlevelweek.com/), semana realizada pela [Rocketseat](https://rocketseat.com.br/) focada na stack NojeJs, React e React Native. O objetivo do Happy é listar os Orfanatos de uma determinada região, informando detalhes, horários que aceitam visitas, etc. Possibilitando que as pessoas visitem orfanatos e mude o dia de muitas crianças.

<p align="center">
  <img src="happy/web.png">
</p>

A prototipação completa do projeto pode ser visualizada no Figma [web](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web) e [mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile)

## :hammer_and_pick: Para executar a aplicação: 

## Api/Backend
```bash
$ cd backend
$ npm install
$ npm run dev
```
## SQLite / Typeorm migrations
```
$ cd backend
$ npm run typeorm migration:run
```
## Frontend Web
```bash
$ cd web
$ npm install
$ npm start
``` 

## Frontend Mobile
```bash
$ cd mobile
# npm install
$ npm start
# ou 
$ expo start
```
<p align="center">
  <img src="happy/mobile.jpeg">
</p>

# :hourglass: ToDO
* No projeto Mobile: Criar ícone e splashScreen para Android e Ios

# :computer: Libs utilizadas

## API
* [Node.JS](https://nodejs.org/en/docs/)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [SQLite](https://www.sqlite.org/index.html)
* [TypeOrm](https://typeorm.io/#/)
* [Multer](https://www.npmjs.com/package/multer)
* [Cors](https://github.com/expressjs/cors)

## Web
* [ReactJS](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Leaflet](https://leafletjs.com/)
* [Axios](https://github.com/axios/axios)

## Mobile
* [React Native](https://reactnative.dev/)
* [Expo](https://docs.expo.io/)
* [Axios](https://github.com/axios/axios)
* [Map View](https://docs.expo.io/versions/latest/sdk/map-view/)
