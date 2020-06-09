import {LitElement, css} from "lit-element";
import {html} from "lit-html";

export default class Login extends LitElement {

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
  }

  static get properties() {
    return {
      username: {type: String},
      password: {type: String}
    }
  }

  username = "";
  password = "";

  login() {
    const loginEvent = new CustomEvent('login',
      {
        detail: {
          username: this.username,
          password: this.password
      }
    }
    );
    this.dispatchEvent(loginEvent);
  }

  static get styles() {
    return css`
      .demo-login {
        display: flex;
        flex-direction: column;
      }
      .demo-login input, .demo-login button {
        margin-bottom: 10px;
      }
    `;
  }

  updateData() {
    this.username = this.shadowRoot.getElementById('username-input').value;
    this.password = this.shadowRoot.getElementById('password-input').value;
  }

  render() {
    return html`
      <form class="demo-login">
        <h1>Log-in</h1>
        <label>
          <input type="text" @change="${this.updateData}" id="username-input" placeholder="Username"/>
        </label>
        <label>
          <input type="password" @change="${this.updateData}" id="password-input" placeholder="Password"/>
        </label>
        <button type="submit" @click="${this.login}">Log-in</button>
      </form>
    `;
  }
}
customElements.define('demo-login', Login);
