import {css, LitElement} from "lit-element";
import {html} from "lit-html";
import './login';
import './signup';

export default class Auth extends LitElement {
  static get styles() {
    return css`
      .demo-auth, :host {
        width: 100%;
        height: 100%;
      }
      
      .demo-auth {
        background-color: #2b2b2b;
        color: #a0a0a0;
        font-family: roboto, open-sans;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .demo-auth .window {
        background-color: #393939;
        max-width: 600px;
        min-width: 600px;
        max-height: 300px;
        min-height: 300px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .demo-auth a {
        text-decoration: underline;
        cursor: pointer;
      }
    `;
  }

  static get properties() {
    return {
      isLoginWindow: {type: Boolean},
      isConnected: {type: Boolean}
    }
  }


  constructor() {
    super();
    this.isLoginWindow = true;
    this.isConnected = false;
  }

  getSelectedWindow() {
    if (this.isLoginWindow) {
      return html`<demo-login @login="${this.connect}"></demo-login>`;
    } else {
      return html`<demo-signup @signup="${this.signup}"></demo-signup>`;
    }
  }

  changeSelectedWindow() {
    this.isLoginWindow = !this.isLoginWindow;
    this.performUpdate()
  }

  connect(event) {
    this.isConnected = true;
    this.performUpdate();
    alert('You are connected as ' + event.detail.username);
  }

  signup(event) {
    this.changeSelectedWindow();
    alert('You created an account as ' + event.detail.username)
  }

  authGuard() {
    if (this.isConnected) {
      return html`
        <span class="success">You are connected</span>
      `;
    } else {
      return html`
        <div class="window">
          ${this.getSelectedWindow()}
          <a class="switcher" @click="${this.changeSelectedWindow}">I don't have an account</a>
        </div>
      `;
    }
  }

  render() {
    return html`
      <div class="demo-auth">
        ${this.authGuard()}
      </div>
    `;
  }
}
customElements.define('demo-auth', Auth);
