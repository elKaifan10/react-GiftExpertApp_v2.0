//////////////////////  Herramientas  ///////////////////////////////
npm install --global http-server
http-server -o                        // Abrir el servidor.





$ yarn create vite  //react,react, cdProyecto, yarn, yarn dev.
yarn add --dev prop-types   // sino lo trae.

///////////  Testing  ////////////
                                    //https://jestjs.io/docs/getting-started
yarn add --dev jest
"test":"jest --watch"               //packed.json  -> scripts 
yarn add --dev @types/jest          //dependencia para tener en el intelisense Jest.


// Babel                            // https://jestjs.io/docs/getting-started    
yarn add --dev babel-jest @babel/core @babel/preset-env          

// Se crea el babel.config.cjs 
module.exports = {                                                           
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

 // O Se crea el babel.config.json             
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}


///////// Crear los Archivos en el root ////////////
jest.config.js_x:
module.exports = {
    setupFiles: ['jest.setup.js_x']
}


jest.setup.js_x:
import 'whatwg-fetch';


//////////////////
yarn add --dev whatwg-fetch         // Se Instala dep
yarn add --dev isomorphic-fetch     // O  







///////////////////////   Api Key   /////////////////////
const apiKey = 'BkIyoGnrvPGlLg3GPiJrRqtivPZ91boz';
const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

https://developers.giphy.com/docs/api/endpoint#trending 



/////////////////////  Estructuras de React  ////////////////////
https://es.reactjs.org/docs/faq-structure.html
https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76




////////////////////////////    Git     ///////////////////////////////
git init                                // prepara todos los archivos para git. 
git add .                               // Prepara para la foto.
git commint -m "Primer commit"          // Realiza la primer foto " " Se nombra y organiza.

git checkout --.                        // Recupera todos los archivos al ultimo commit respaldado.

loguearte en la pagina de github.com
+ new repository
Nombre del app
public o privado 
crear. 

git remote add origin https://github.com/elKaifan/react-GiftExpertApp_v2.0.git
git branch -M main
git push -u origin main