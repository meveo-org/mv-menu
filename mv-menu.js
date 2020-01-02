import { LitElement, html, css } from 'lit-element';

export class MvMenu extends LitElement {

  static get properties() {
    return {
      text: { type: String, attribute: true },
      shortCut: { type: String, attribute: true },
      checked: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },
      isOpen: { type: Boolean, attribute: true },
      action: { type: String, attribute: true },

      //  valid type values are: "dropdown", "notification"
      //    default: "default"
      type: { type: String, attribute: true },
      parentType: { type: String, attribute: true },
      title: { type: String, attribute: true },
      showFooter: { type: Boolean, attribute: true }
    };
  }

  static styles = css`
    :host {
      font-family: var(--font-family,Arial);
      font-size: var(--font-size-m,10pt);
      line-height: var(--line-height-s,1.625);
      background: var(--p-color,#ffffff);
    }
          
    ul {
      margin: 0px;
      list-style:none;
    }
          
    li {
      padding: 1em;
      display: block;
      color: var(--on-p-color,#000000);
      text-decoration: none;
    }
          
    li:hover {
      background: var(--pd-color,#eeeeee);
      color: var(--on-pd-color,#111111);
    }
          
    .menu {
      display: flex;
      flex-direction : row;
      justify-content: left;
      
      @media(max-width: 450px) {
        flex-flow: column wrap;
      }
    }
          
    .level1 {
      position: relative;
    }
          
    .level1:hover > .sous-menu {
      display: flex;
    }
          
    .submenu {
      display: none;
      top: 2em;
      flex-flow: column wrap;
      min-width: 100px;
      position: absolute;
      background: var(--pd-color,#eeeeee);
      
      @media(max-width: 450px) {
        position: static;
      }
    }
          
    .submenu.is-open {
      display: flex!important;
    }
          
    .submenu span {
      text-align: left;
      color:white;
      
      @media(max-width: 450px) {
        text-align: center;
      }
    }
          
    .level2 {
      top: 0px;
      left: 100%;
      background: var(--pl-color,#eeeeee);
      color: var(--on-pl-color,#111111);
    }
          
    .level2:hover {
      top: 0px;
      left: 100%;
      background: var(--p-color,#ffffff);
      color: var(--on-p-color,#111111);
    }
          
    .menuitem {
      display: flex;
      justify-content:space-between;
    }
          
    .text{
      padding-right:1em;
    }
    
    .sublevel.dropdown {
      height: var(--mv-dropdown-sublevel-height, 41px);
      padding: 0 10px;
      line-height: var(--mv-dropdown-sublevel-height, 41px);
      background-color: var(--mv-dropdown-background-color, #3F4753);
    }
    
    .sublevel.dropdown:hover {
      background-color: var(--mv-dropdown-hover-background-color, #353F4D);
    }
    
    .level.dropdown {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      height: var(--mv-dropdown-level-height, 95px);
      width: var(--mv-dropdown-level-width, 265px);
      cursor: pointer;
      position: relative;
      padding: 0 20px;
      display: flex;
      align-items: center;
      background-color: var(--mv-dropdown-background-color, #3F4753);
    }
    
    .level.dropdown:hover {
      background-color: var(--mv-dropdown-hover-background-color, #353F4D);
    }
    
    .level.dropdown > ul {
      width: var(--mv-dropdown-sublevel-width, 198px) !important;
      border-radius: 5px;
      padding: 0;
      border: 1px solid var(--mv-dropdown-hover-background-color, #353F4D);
      box-shadow: 0 0 20px 1px rgba(93, 94, 07, 0.35);
      z-index: 101;
      position: absolute;
      top: var(--mv-dropdown-sublevel-position-top, 100px);
      left: var(--mv-dropdown-sublevel-position-left, 0px);
    }
    
    .level.notification {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      width: var(--mv-notification-level-size, 48px);
      height: var(--mv-notification-level-size, 48px);
      border-radius: 24px;
      background-color: var(--p-color,#ffffff);
      display: flex;
      margin: auto;
      position: relative;
      background-color: var(--mv-notification-button-background-color, #3F4753);
    }
    
    .level.notification:hover {
      background-color: var(--mv-notification-button-hover-background-color, #353F4D);
      cursor: pointer;
    }
    
    .level.notification .text {
      display: none;
    }
    
    .level.dropdown .text {
      display: none;
    }
    
    .level.notification > ul {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      height: var(--mv-notification-sublevel-height, 400px);
      width: var(--mv-notification-sublevel-width, 756px) !important;
      border-radius: 5px;
      padding: 0;
      box-shadow: 0 0 20px 1px rgba(93, 94, 07, 0.35);
      z-index: 101;
      position: absolute;
      top: var(--mv-dropdown-sublevel-position-top, 80px);
      left: var(--mv-dropdown-sublevel-position-left, -375px);
    }
    
    .sublevel.notification {
      display: none;
    }
    
    .wrap-notification {
      width: 100%;
      height: 100%;
      cursor: default;
      box-shadow: 0 0 15px 1px rgba(151, 156, 163, 1);
      border-radius: 5px;
    }
    
    .title {
      font-size: 20px;
      color: var(--mv-notification-title-color, #FFFFFF);
      font-weight: 500;
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: default;
    }
    
    .header {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      height: 60px;
      position: relative;
      background-color: var(--mv-notification-background-color, #3F4753);
      box-shadow: 0 5px 10px 0 rgba(7, 17, 26, 0.2); 
      z-index: 1;
      border-radius: 5px 5px 0 0;
    }
    
    .footer {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      border-top: 1px solid #B0B3B6;
      height: 55px;
      position: relative;
      background-color: var(--mv-notification-background-color, #3F4753);
      border-radius: 0 0 5px 5px;
    }
    
    .body {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      height: calc(var(--mv-notification-sublevel-height, 400px) - 60px);
      position: relative;
      background-color: var(--mv-notification-background-color, #3F4753);
      border-radius: 0 0 5px 5px;
    }
    
    .wrap-notification[showFooter] .body {
      height: calc(var(--mv-notification-sublevel-height, 400px) - 115px);
      position: relative;
      border-radius: 0;
    }
 `;

  constructor() {
    super();
    this.type = "default";
    this.title = "Notifications";
    this.showFooter = true;
  }

  render() {
    const isDropdownOrNotification = ["dropdown", "notification"].includes(this.type);
    const isNotification = this.type === "notification";
    if (this.isRoot) {
      return html `<ul class="menu"><slot></slot></ul>`;
    } else if (this.hasChildren) {
      return html `
         <li class="level${this.level} level ${this.type}" @click=${this.clicked}>
            <span class="menuitem">
              ${isDropdownOrNotification
                ? html`<slot name="title"></slot>`
                : html``}  
              <span class="text">${this.text}</span>
              <span class="shortCut">${this.shortCut}</span>
            </span>
            <ul class="submenu ${this.isOpen ? 'is-open' : ''}">
            ${isNotification
                ? html`<div class="wrap-notification" @click=${this.stopImmediatePropagation} ?showFooter="${this.showFooter}">
                            <div class="header">
                                <slot name="header"><div class="title">${this.title}</div></slot>
                            </div>
                            <div class="body">
                                <slot name="body"></slot>
                            </div>
                            ${this.showFooter
                              ? html`<div class="footer">
                                        <slot name="footer"></slot>
                                    </div>`
                              : html``}
                       </div>`
                : html``}
              <slot></slot>
            </ul>
         </li>`;
    } else {
      return html `
         <li @click=${this.clicked} class="sublevel ${this.type}">
            <span class="menuitem">
              <span class="text">${this.text}</span>
              <span class="shortCut">${this.shortCut}</span>
            </span>
         </li>`;
    }
  }

  connectedCallback() {
    //initialize
    this.level = 0;
    this.submenus = [];
    this.hasChildren = false;
    this.isRoot = (this.text == undefined);
    if (!this.isRoot) {
      this.level = this.parentNode.registerChild(this);
      this.hasChildren = this.children.length > 0;
      this.isOpen = false;
    }
    if (this.hasChildren) {
      this.parentType = this.type;
    }
    if (!this.isRoot && !this.hasChildren) {
      if (this.parentNode.parentType) {
        this.type = this.parentNode.parentType;
      }
    }
    document.addEventListener('click', this.handleClickAway);
    super.connectedCallback();
  }

  clicked(e) {
    if (!this.isRoot) {
      if (this.hasChildren) {
        e.stopImmediatePropagation();
        this.isOpen = !this.isOpen;
      }
      if (this.action) {
        eval(this.action);
      }
      let event = new CustomEvent('submenu-clicked', {
        detail: {
          message: this.text,
        },
      });
      this.dispatchEvent(event);
    }
  }

  //called if a sub menu has been clicked
  submenuClicked(e) {
    //we then close all other submenus
    this.submenus.map(
      (submenu) => {
        if (submenu.text != e.detail.message && submenu.isOpen) {
          submenu.isOpen = false;
        }
      });
    e.stopImmediatePropagation();
  }

  //the submenus register themself to there parent using this method
  registerChild(submenu) {
    this.submenus.push(submenu);
    return this.level + 1;
  }

  firstUpdated(changedProperties) {
    if (this.isRoot || this.hasChildren) {
      this.submenus.map(
        (submenu) => {
          //used a lambda to bind this
          submenu.addEventListener('submenu-clicked', (e) => {
            this.submenuClicked(e);
          });
        },
      );
    }
  }

  detachedCallback() {
    document.removeEventListener('click', this.handleClickAway);
    super.detachedCallback();
  }

  handleClickAway = event => {
    const { path } = event;
    const clickedTooltip = !(path || []).some(node => node === this);
    if (clickedTooltip) {
      this.isOpen = false;
    }
  };

  stopImmediatePropagation(event) {
    event && event.stopImmediatePropagation();
  }
}

customElements.define('mv-menu', MvMenu);