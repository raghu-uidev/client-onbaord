// Import LitElement base class and html helper function
import {LitElement, html, property} from 'lit-element';

export class LoadComponent extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
            <style>
            .load-component{
             position: relative;
            }
            .component-container{
              position: absolute;
              left: 32%;
              top: 20%;
            }
            span{
             display: inline-block;
             font-size: 3rem;
             margin-left: -62px;
            }
            .fa {
              display: inline-block;
              font: normal normal normal 14px/1 FontAwesome;
                  font-size: 20em;
              text-rendering: auto;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .fa-code:before {
                content: "\\f121";
            }
      </style>
            <div class="load-component">
               <div class="component-container">
                 <i class="fa fa-code"></i>
                 <span>Load respective component here</span>
               </div>
            </div>
        `;
  }
}

// Register the element with the browser
customElements.define('load-component', LoadComponent);