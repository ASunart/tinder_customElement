import * as components from './components/export.js';
import data from './components/data.js';

console.log(data);

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach((element) => {
      this.shadowRoot.innerHTML += `
      
      <my-profile name="${element.name}" 
      age="${element.age}"
      distance="${element.distance}"
      occupation="${element.occupations}"
      image="${element.image}"></my-profile>
      <my-counter></my-counter>
      `;
    });
  }
}

customElements.define('app-container', AppContainer);

// reference: https://developer.mozilla.org/es/docs/Web/Web_Components
// reference: https://www.youtube.com/watch?v=neko6u1vHcY&list=PLTd5ehIj0goNQNCgtu-M2oGGpyQ1m6nxo
