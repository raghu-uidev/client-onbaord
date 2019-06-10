// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
export class SetupInfo extends LitElement {

  static get properties() {
    return {
      currentRoute: { type: String }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <style>
    .setup-info-layout{
         position: relative;
        height: 620px;
    }
    .cob-setup-info-header{
      text-align: center;
    }
    .cob-setup-info-header h1{
      font-family: ProximaNova-Light, sans-serif;
      font-size: 3.0rem;
      line-height: 1.1;
      color: #4a4a4a;
      margin: 43px 0 23px 0;
      color: #3ebede;
    }
    .setup-info-form {
      border-radius: 8px;
      margin-top: 5px;
      padding-bottom: 30px;
      padding-top: 10px;
      max-height: 475px;
      overflow-y: auto;
    }
    .setup-info-form .row {
      margin-top: 20px;
      width: 100%;
      margin-right: -15px;
      margin-left: -15px;
      display: table;
      content: " ";
   }
   .cob-setup-info__form__label {
    padding: 8px 0;
    color: #6a6a6a;
    width: 33.3333%;
    float: left;
        text-align: right;
   }
   .cob-setup-info__form__label label{
     display: inline-block;
    font-weight: normal;
    margin-bottom: 5px;
    font-size: 1.4rem;
    font-family: ProximaNova-Semibold, sans-serif;
    max-width: 100%;
   }
   .cob-setup-info__form__field {
    float: left;
    width: 396px;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
   }
   .setup-info-form .input-text {
    width: 365px;
    height: 36px;
    display: block;
    border: 1px solid #bbbbbb;
    padding: 7px;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: ProximaNova-Regular, sans-serif;
    font-size: 1.4rem;
    color: #4a4a4a;
   }
   .setup-info-form .input-text-lg {
    width: 265px;
    height: 36px;
    border: 1px solid #bbbbbb;
    padding: 7px;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: ProximaNova-Regular, sans-serif;
    font-size: 1.4rem;
  }
   .setup-info-form .input-text-sm {
    width: 92px;
    height: 36px;
    border: 1px solid #bbbbbb;
    padding: 7px;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: ProximaNova-Regular, sans-serif;
    font-size: 1.4rem;
}
   .cob__field-lg {
    width: 265px;
    float: left;
   }
   .cob-setup-info__form__space {
      margin-right: 4px;
   }
   .cob__field-sm {
    width: 92px;
    float: left;
   }
   .vdl-dropdown-list {
    width: auto;
    position: relative;
   }
   .vdl-dropdown-list__input-container {
    font-family: ProximaNova;
    display: inline-block;
    font-weight: 100;
    font-size: 14px;
    box-shadow: none;
    border-radius: 0;
    outline: 0 none;
    padding: 10px;
    appearance: none;
    background-color: #fff;
    border: 1px solid #bbb;
    height: 36px;
    width: 36.5 rem;
    box-sizing: border-box;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    display: block;
    position: relative;
    cursor: pointer;
    line-height: 35px;
    padding: 0 36px 0 12px;
    overflow: hidden;
}

  .vdl-dropdown-list__picker {
      height: 100%;
      vertical-align: middle;
      outline: none;
      position: absolute;
      right: 0;
      top: 0;
      padding: 0 10px;
  }
  .vdl-dropdown-list__input__placeholder{
      color: #4a4a4a;
      font-style: italic;
  }
  .vdl-popup {
      position: absolute;
      top: 100%;
      z-index: 1005;
      left: -5px;
      right: -5px;
     width: 36.5rem;
  }
  
  .vdl-popup__content {
      position: absolute;
      background-color: #fff;
      border: 1px solid #bbb;
      border-top-width: 0;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
      left: 5px;
      right: 5px;
      text-align: left;
    overflow: hidden;
  }
  
  .vdl-list {
      padding: 0;
      margin: 0;
      outline: none;
      max-height: 200px;
      height: auto;
      overflow: auto;
      background-color: #fff;
  }
  
  .vdl-list__option {
      list-style: outside none none;
      padding: 6px 10px;
      min-height: 30px;
      line-height: 20px;
      outline: none;
      cursor: pointer;
      color: #000;
  }
  .fa {
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
    }
	
	.fa-chevron-down:before {
    content: "\\F078";
  }
  .vdl-date-time-picker__select {
    vertical-align: middle;
    outline: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding-right: 5px;
}

.cob .vdl-date-time-picker__select__picker {
    color: #1a8099;
    padding-top: 0px;
	height: 100%;
    border: 0;
    font-size: 18px;
    outline: none;
    background-color: transparent;
}

vdl-date-time-picker .fa-calendar{
    padding-top: 4px;
}
.fa-calendar:before {
    content: "\\F073";
}
.vdl-date-time-picker {
    position: relative;
}
.vdl-date-time-picker__input {
    font-family: ProximaNova;
    display: inline-block;
    font-weight: 100;
    font-size: 14px;
    box-shadow: none;
    border-radius: 0;
    outline: 0 none;
    padding: 10px;
    appearance: none;
    background-color: #fff;
    border: 1px solid #bbb;
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    padding-right: 30px;
}
.vdl-date-time-picker__select__picker {
    height: 100%;
    border: 0;
    font-size: 18px;
    outline: none;
    background-color: transparent;
}
.sc-btn {
    font-family: ProximaNova-Regular, sans-serif;
    text-transform: uppercase;
    font-size: 1.3rem;
    margin: 20px 15px 20px 0;
    min-width: 120px;
    border: 2px solid;
    padding: 0 20px;
    border-radius: 38px;
    cursor: pointer;
}


.sc-btn-secondary {
    background-color: #ffffff;
    color: #1a8099;
    border-color: #ffffff;
    height: 32px;
    
}

.sc-btn-secondary--outline {
    color: #1a8099;
    border-color: #1a8099;
}
.sc-btn:hover, .sc-btn-primary:hover, .sc-btn-secondary:hover, .sc-btn-secondary--outline:hover {
    background-color: #3ebede;
    color: #ffffff;
    border-color: #3ebede;
}
.sc-btn-primary {
    float: right;
    background-color: #1a8099;
    color: #ffffff;
    border-color: #1a8099;
    height: 32px;
	}
	.sc-btn:hover, .sc-btn-primary:hover, .sc-btn-secondary:hover, .sc-btn-secondary--outline:hover {
    background-color: #3ebede;
    color: #ffffff;
    border-color: #3ebede;
}
.button-case{
  margin: 0px 20px;
}
   </style> 
    <div class="setup-info-layout">
    <div class="cob-setup-info-header">
      <h1>Setup information</h1>
    </div>
    <div class="setup-info-form">
    <div class="row">
          <div class="col-md-4 text-right cob-setup-info__form__label"><label>Parent Company Legal Name</label></div>
          <div class="col-md-8 cob-setup-info__form__field">
            <input class="input-text" type="text">
          </div>
        </div>
    <div class="row">
          <div class="col-md-4 text-right cob-setup-info__form__label"><label>Parent Company Legal Address</label></div>
          <div class="col-md-8 cob-setup-info__form__field">
            <div class="cob__field-lg cob-setup-info__form__space">
              <input class="input-text-lg ng-untouched ng-pristine ng-invalid" formcontrolname="street" placeholder="Street" type="text" ng-reflect-name="street" ng-reflect-model="">
  
            </div>
            <div class="cob__field-sm">
              <input class="input-text-sm ng-untouched ng-pristine ng-valid" formcontrolname="suite" placeholder="Suite" type="text" ng-reflect-name="suite" ng-reflect-model="">
            </div>
          </div>
        </div>
    <div class="row">
          <div class="col-md-4 text-right cob-setup-info__form__label"><label>FEIN</label></div>
          <div class="col-md-8 cob-setup-info__form__field">
            <input class="input-text ng-untouched ng-pristine ng-invalid" formcontrolname="fein" mask="00-0000000" type="text" ng-reflect-mask-expression="00-0000000" ng-reflect-name="fein" ng-reflect-model="">
          </div>
        </div>
    <div class="row">
          <div class="col-md-4 text-right cob-setup-info__form__label"><label>Payroll System</label></div>
          <div class="col-md-8 cob-setup-info__form__field">
            <adp-dropdown-list dropdowninputwidth="36.5rem" dropdownmenuwidth="36.5rem" formcontrolname="payrollSystem" placeholder="Select" _nghost-c4="" class="ng-tns-c4-1 ng-untouched ng-pristine ng-invalid" ng-reflect-options="[object Object]" ng-reflect-placeholder="Select" ng-reflect-label-formatter="[object Object]" ng-reflect-dropdown-input-width="36.5rem" ng-reflect-dropdown-menu-width="36.5rem" ng-reflect-name="payrollSystem"><div _ngcontent-c4="" class="vdl-dropdown-list" role="combobox" ng-reflect-klass="vdl-dropdown-list vdl-dropdown" ng-reflect-ng-class="[object Object]">
  <div _ngcontent-c4="" class="vdl-dropdown-list__input-container" ng-reflect-klass="vdl-dropdown-list__input-conta" ng-reflect-ng-class="[object Object]" style="width: 36.5rem;">

        <span _ngcontent-c4="" class="vdl-dropdown-list__picker" ng-reflect-klass="vdl-dropdown-list__picker" ng-reflect-ng-class="[object Object]">
            <i _ngcontent-c4="" class="fa fa-chevron-down"></i>
        </span>

    <div _ngcontent-c4="" class="vdl-dropdown-list__input">
            <span _ngcontent-c4="" class="vdl-dropdown-list__input__placeholder ng-tns-c4-1 ng-star-inserted">Select</span>
     
    </div>
  </div>
  <div _ngcontent-c4="" class="vdl-popup ng-tns-c4-1 ng-star-inserted" ng-reflect-klass="vdl-popup" ng-reflect-ng-class="[object Object]" style="width: 36.5rem;">
    <div _ngcontent-c4="" class="vdl-popup__content ng-trigger ng-trigger-slideInOut" style="height: 0px; visibility: hidden;">
      <div _ngcontent-c4="" class="ng-tns-c4-1">


        <ul _ngcontent-c4="" class="vdl-list" role="listbox" ng-reflect-klass="vdl-list" ng-reflect-ng-class="[object Object]">
          <!--bindings={
  "ng-reflect-ng-for-of": "[object Object]"
}--><li _ngcontent-c4="" class="vdl-list__option ng-tns-c4-1 ng-star-inserted" role="option" ng-reflect-klass="vdl-list__option" ng-reflect-ng-class="[object Object]" style="">
            Workday
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</adp-dropdown-list>
            <div>*At the time of go live with ADP</div>
          </div>
        </div>
    <div class="row">
          <div class="col-md-4 text-right cob-setup-info__form__label"><label>Target Start Date</label></div>
          <div class="col-md-8 cob-setup-info__form__field">
            <adp-date-picker formcontrolname="startDate" _nghost-c5="" class="ng-tns-c5-2 ng-untouched ng-pristine ng-invalid" ng-reflect-name="startDate" ng-reflect-model=""><div _ngcontent-c5="" class="vdl-date-time-picker has-error-highlight" ng-reflect-klass="vdl-date-time-picker has-error" ng-reflect-ng-class="[object Object]">

  <input _ngcontent-c5="" class="vdl-date-time-picker__input" role="combobox" type="text" ng-reflect-klass="vdl-date-time-picker__input" ng-reflect-ng-class="[object Object]" placeholder="MM/DD/YYYY">

  <span _ngcontent-c5="" class="vdl-date-time-picker__select">
    <button _ngcontent-c5="" class="vdl-date-time-picker__select__picker">
      <i _ngcontent-c5="" class="fa fa-calendar"></i>
    </button>
  </span>

  <div _ngcontent-c5="" class="vdl-calendar-popup vdl-popup">
    <div _ngcontent-c5="" class="vdl-popup__content ng-trigger ng-trigger-slideInOut" style="height: 0px; visibility: hidden;">
      <div _ngcontent-c5="" class="ng-tns-c5-2">
          <div _ngcontent-c5="" class="vdl-calendar" role="group">

              
              <div _ngcontent-c5="" class="vdl-calendar__header">
                  <button _ngcontent-c5="" class="vdl-calendar__header__button vdl-calendar__header__button--prev" title="navigate back">
                      <i _ngcontent-c5="" class="fa fa-arrow-circle-left"></i>
                  </button>
                  <button _ngcontent-c5="" class="vdl-calendar__header__button vdl-calendar__header__button--view">
                      May 2019
                      <span _ngcontent-c5="" class="vdl-calendar__header__view-icon">
                        <i _ngcontent-c5="" class="fa fa-chevron-down"></i>
                      </span>
                  </button>
                  <button _ngcontent-c5="" class="vdl-calendar__header__button vdl-calendar__header__button--next" title="navigate forward">
                      <i _ngcontent-c5="" class="fa fa-arrow-circle-right"></i>
                  </button>
              </div>

              
              <!--bindings={
  "ng-reflect-ng-if": "true"
}--><table _ngcontent-c5="" class="vdl-calendar__grid ng-tns-c5-2 ng-star-inserted" role="grid" style="">
                  <thead _ngcontent-c5="" class="vdl-calendar__grid__header">
                  <tr _ngcontent-c5="" class="ng-tns-c5-2">
                      <!--bindings={
  "ng-reflect-ng-for-of": "Su,Mo,Tu,We,Th,Fr,Sa"
}--><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">Su</th><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">Mo</th><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">Tu</th><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">We</th><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">Th</th><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">Fr</th><th _ngcontent-c5="" class="vdl-calendar__grid__header__cell ng-tns-c5-2 ng-star-inserted">Sa</th>
                  </tr>
                  </thead>
                  <tbody _ngcontent-c5="" class="ng-tns-c5-2">
                  <!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><tr _ngcontent-c5="" role="row" class="ng-tns-c5-2 ng-star-inserted">
                      <!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 vdl-calendar__day--off-range ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="April 28, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">28</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 vdl-calendar__day--off-range ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="April 29, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">29</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 vdl-calendar__day--off-range ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="April 30, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">30</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 1, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">1</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 2, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">2</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 3, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">3</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 4, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">4</span>
                      </td>
                  </tr><tr _ngcontent-c5="" role="row" class="ng-tns-c5-2 ng-star-inserted">
                      <!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 5, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">5</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 vdl-calendar__day--now ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 6, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">6</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 7, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">7</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 8, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">8</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 9, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">9</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 10, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">10</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 11, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">11</span>
                      </td>
                  </tr><tr _ngcontent-c5="" role="row" class="ng-tns-c5-2 ng-star-inserted">
                      <!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 12, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">12</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 13, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">13</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 14, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">14</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 15, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">15</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 16, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">16</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 17, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">17</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 18, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">18</span>
                      </td>
                  </tr><tr _ngcontent-c5="" role="row" class="ng-tns-c5-2 ng-star-inserted">
                      <!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 19, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">19</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 20, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">20</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 21, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">21</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 22, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">22</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 23, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">23</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 24, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">24</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 25, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">25</span>
                      </td>
                  </tr><tr _ngcontent-c5="" role="row" class="ng-tns-c5-2 ng-star-inserted">
                      <!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 26, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">26</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 27, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">27</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 28, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">28</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 29, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">29</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 30, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">30</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="May 31, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">31</span>
                      </td><td _ngcontent-c5="" class="vdl-calendar__day ng-tns-c5-2 vdl-calendar__day--off-range ng-star-inserted" role="gridcell" ng-reflect-klass="vdl-calendar__day" ng-reflect-ng-class="[object Object]" title="June 1, 2019">
                          <span _ngcontent-c5="" class="ng-tns-c5-2">1</span>
                      </td>
                  </tr>
                  </tbody>
              </table>

              
              <!--bindings={
  "ng-reflect-ng-if": "false"
}-->

              
              <!--bindings={
  "ng-reflect-ng-if": "false"
}-->

              
              <!--bindings={
  "ng-reflect-ng-if": "false"
}-->

          </div>
      </div>
    </div>
  </div>

</div>










</adp-date-picker>
            <div> *First Payroll using ADP Service(s)</div>
          </div>
        </div>
    <div class="row">
          <div class="col-md-4 text-right cob-setup-info__form__label"><label>Employee Count</label></div>
          <div class="col-md-8 cob-setup-info__form__field">
            <input class="input-text ng-untouched ng-pristine ng-invalid" formcontrolname="employeeCount" type="text" ng-reflect-name="employeeCount" ng-reflect-model="">
          </div>
        </div>    
    </div>
    <div class="button-case">
     <sc-button class="cob-cp-overview__back-button" label="back" ng-reflect-label="back" ng-reflect-outline="true" ng-reflect-primary="false">
      <button class="sc-btn ng-binding ng-scope sc-btn-secondary sc-btn-secondary--outline" ng-class="$ctrl.classForBtn" ng-style="$ctrl.additionalStyle" ng-click="$ctrl.handleOnClick($event)" style="">
         back
     </button>
     </sc-button>
     <sc-button class="cob-cp-overview__back-button" label="back" ng-reflect-label="back" ng-reflect-outline="true" ng-reflect-primary="false">
      <button class="sc-btn ng-binding ng-scope sc-btn-primary" ng-class="$ctrl.classForBtn" ng-style="$ctrl.additionalStyle" ng-click="$ctrl.handleOnClick($event)" style="">
         previous
     </button>
     </sc-button>
    </div>
    </div> 
    `;
  }
}
// Register the element with the browser
customElements.define('setup-info', SetupInfo);