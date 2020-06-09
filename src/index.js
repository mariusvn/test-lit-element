
import {html, render} from 'lit-html';
import {LitElement} from 'lit-element';
import './auth';

class MyElement extends LitElement {
  render() {
    return html`<p>template content</p>`;
  }
}
customElements.define('my-element', MyElement);

function main() {
  const myTemplate = html`<demo-auth/>`;
  render(myTemplate, document.body);
}

document.addEventListener("DOMContentLoaded", function(event) {
  main();
});
