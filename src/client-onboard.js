
// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './nav-link.js';
import './setup-info.js';
import './load-component.js';
export class ClientOnboard extends  LitElement {


  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      currentView: {type: String}
    }
  }

  static get routes() {
    return [{
      name: 'setup-info',
      pattern: ''
    }, {
      name: 'companies',
      pattern: 'companies'
    }, {
      name: 'funding-account',
      pattern: 'funding-account'
    },{
      name: 'service-billing',
      pattern: 'service-billing'
    },{
      name: 'funding-billing',
      pattern: 'funding-billing'
    },{
      name: 'payroll',
      pattern: 'payroll'
    },{
      name: 'not-found',
      pattern: '*'
    }];
  }
  // navLinks: new Array();
  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.currentView = '/';
    this.navLinks = [
      {
        name: 'Setup Information',
        routeName: '/',
      },
      {
        name: 'Companies',
        routeName: 'companies'
      },
      {
        name: 'Funding Account',
        routeName: 'funding-account'
      },
      {
        name: ' Service Billing Account',
        routeName: 'service-billing'
      },
      {
        name: 'Funding & Service Billing Agreement',
        routeName: 'funding-billing'
      },
      {
        name: 'Payroll Schedule',
        routeName: 'payroll'
      }
    ]
  }

  onRoute(route, params) {
    this.route = route;
    this.params = params;
  }

  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
<style>
  :host {
    display: block;
  }
  
  .profile-container{
    background-color: #fff;
    background: #ffffff;
    -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    height: 600px;
    position: relative;
    color: #6a6a6a;
  }

  .left-nav{
    float: left;
    width: 25%;
  }
  .widget-container{
    float: right;
    width: 75%;
  }
  .clear-fix{
    clear: both;
  }
   .nav-list{
      list-style-type: none;
      background: #1b2a2e;
      padding-left: 0;
      padding-top: 0;
      height: 600px;
      margin: 0;
    }
    .nav-list li{
      display: block;
      margin: 0;
    }
    .nav-list li.active{
      background: #ffffff;
      text-decoration: none;
    }
</style>
   <div class="container">
      <h2>Client Profile</h2>
      <div class="profile-container">
       <div class="left-nav">
          <ul class="nav-list">
           ${this.navLinks.map((item) => {
      return html` <li class="${this.currentView === item.routeName ? 'active' : '' }" @click='${this.linkClick}'><nav-link href='${item.routeName}' name='${item.name}' activeclass='${this.currentView === item.routeName ? 'active' : '' }'></nav-link></li>`
    })}
          </ul>
        </div>
       <div class="widget-container">
          ${this.currentView === '/'? html`<setup-info></setup-info>`:html`<load-component></load-component>`}
    </div>
      <div class="clear-fix"></div>
   </div>`;
  }

  linkClick(event){
    this.currentView = event.target.href;
  }
}

// Register the element with the browser
customElements.define('client-onboard', ClientOnboard);
