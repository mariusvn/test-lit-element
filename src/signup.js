import {css, LitElement} from "lit-element";
import {html} from "lit-html";

export default class Signup extends LitElement {
  static get styles() {
    return css`
      .demo-signup {
        display: flex;
        flex-direction: column;
      }
      .demo-signup input, .demo-signup button {
        margin-bottom: 10px;
      }
    `;
  }
  static get properties() {
    return {
      username: {type: String},
      password: {type: String},
      passwordConfirm: {type: String}
    }
  }

  username = "";
  password = "";
  passwordConfirm = "";

  signup() {
    if (this.password !== this.passwordConfirm)
      return alert('Your passwords doesn\'t match');
    if (this.username.length < 6)
      return alert('Your username is too short (<= 6 characters)');
    const loginEvent = new CustomEvent('signup',
      {
        detail: {
          username: this.username,
          password: this.password
        }
      }
    );
    this.dispatchEvent(loginEvent);
    return false;
  }

  updateData() {
    this.username = this.shadowRoot.getElementById('username-input').value;
    this.password = this.shadowRoot.getElementById('password-input').value;
    this.passwordConfirm = this.shadowRoot.getElementById('confirm-password-input').value;
  }

  render() {
    return html`
      <div>
        <form class="demo-signup">
        <h1>Sign-up</h1>
        <label>
          <input type="text" id="username-input" @change="${this.updateData}" placeholder="Username"/>
        </label>
        <label>
          <input type="password" id="password-input" @change="${this.updateData}" placeholder="Password"/>
        </label>
        <label>
          <input type="password" id="confirm-password-input" @change="${this.updateData}" placeholder="Password confirm"/>
        </label>
        <button @click="${this.signup}">Sign up</button>
      </form>
      </div>
    `;
  }
}
customElements.define('demo-signup', Signup);
