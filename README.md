# Flight Search App
A web application built using Vue.js and * [Atomic Design](https://atomicdesign.bradfrost.com/) princicple to find return trip best price for your flight 

<!-- ABOUT THE PROJECT -->
## About The Project

### Demo
Here is a working live demo :  https://my-projet-f21ee.web.app

<p align="center">
  <img alt="screenshot" src="https://firebasestorage.googleapis.com/v0/b/my-projet-f21ee.appspot.com/o/screenshot.png?alt=media&token=0bbfb11f-406d-4f30-b4cc-36283b611c34">
</p>

#### Browser Compatibility
Supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Vue.js v2.6](https://vuejs.org/) due to more library support, this project not using latest version of Vue.js
* [Vuetify](https://vuetifyjs.com/)
* [Vuex](https://vuex.vuejs.org/)
* [Typescript](https://laravel.com)
* [Moocha](https://mochajs.org/)  & [Chai](https://www.chaijs.com/) for using testing
* [Cypres](https://www.cypress.io/) for  End to End  testing

### API
For simplicity, fake API is used that getting static data stored in ```public``` directory
Offers data only available for city origin Frankfurt and departure city Fiumicino  with departure date within 2 months from 11th AUgust 2021. 

## Project setup
```
yarn install
```

### Customize project setting such as port and api endpoint (Optional)
```
cp env.sample env
```
### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



