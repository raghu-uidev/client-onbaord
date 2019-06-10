import { LitElement, html } from 'lit-element';

export class NavLink extends LitElement {
  static get properties() {
    return {
      href: {type: String},
      name: {type: String},
      activeclass: {type: String}
    };
  }
  constructor() {
    super();
    this.href = '';
    this.name = '';
  }

  render() {
    return html`
      <style>
    a {
      display: block;
      padding: 15px 0px 15px 20px;
      color: #ffffff;
      text-decoration: none;
      cursor: pointer;
    }
    a span {
      color: #6a6a6a;
      padding-right: 10px;
    }
    a.active{
      color: #000000;
    }
    a.active span{
      color: #1a8099;
    }
</style>
            <a class="${this.activeclass}"><span class="dot">&#9632;</span>${this.name}</a>
        `;
  }
}

customElements.define('nav-link', NavLink);