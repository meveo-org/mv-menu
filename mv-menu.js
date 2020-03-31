import { LitElement, html, css } from "lit-element";
import "mv-click-away";

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
      showFooter: { type: Boolean, attribute: true },

      //  valid theme values are: "light", "dark"
      //    default: "dark"
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        line-height: var(--line-height-s, 1.625);
        --border: var(--mv-menu-border, 1px solid #344955);

        --light-background: var(--mv-menu-light-background, #FFFFFF);
        --hover-light-background: var(--mv-menu-hover-light-background, #F0FFF0);
        --light-color: var(--mv-menu-light-color, #80828C);
        --dark-background: var(--mv-menu-dark-background, #344955);
        --hover-dark-background: var(--mv-menu-hover-dark-background, #232F34);
        --dark-color: var(--mv-menu-dark-color, rgb(202, 213, 218));

        --dropdown-sublevel-height: var(--mv-dropdown-sublevel-height, 41px);
        --dropdown-sublevel-width: var(--mv-dropdown-sublevel-width, 198px);
        --dropdown-level-height: var(--mv-dropdown-level-height, 95px);
        --dropdown-level-width: var(--mv-dropdown-level-width, 265px);
        --dropdown-sublevel-position-top: var(--mv-dropdown-sublevel-position-top, 100px);
        --dropdown-sublevel-position-left: var(--mv-dropdown-sublevel-position-left, 0px);
        --dropdown-dark-background: var(--mv-menu-dropdown-dark-background, #3F4753);
        --dropdown-hover-dark-background: var(--mv-menu-dropdown-hover-dark-background, #353F4D);
        --dropdown-light-background: var(--mv-menu-dropdown-light-background, #FFFFFF);
        --dropdown-hover-light-background: var(--mv-menu-dropdown-hover-light-background, #F0FFF0);

        --notification-level-size: var(--mv-notification-level-size, 48px);
        --notification-sublevel-height: var(--mv-notification-sublevel-height, 400px);
        --notification-sublevel-width: var(--mv-notification-sublevel-width, 756px);
        --notification-sublevel-position-top: var(--mv-notification-sublevel-position-top, 80px);
        --notification-sublevel-position-left: var(--mv-notification-sublevel-position-left, -355px);
        --notification-dark-background: var(--mv-menu-notification-dark-background, #3F4753);
        --notification-button-dark-background: var(--mv-menu-notification-button-dark-background, #3F4753);
        --notification-button-hover-dark-background: var(--mv-menu-notification-button-hover-dark-background, #353F4D);
        --notification-menu-dark-background: var(--mv-menu-notification-menu-dark-background, #3F4753);
        --notification-dark-color: var(--mv-menu-notification-dark-color, #FFFFFF);
        --notification-light-background: var(--mv-menu-notification-light-background, #FFFFFF);
        --notification-button-light-background: var(--mv-menu-notification-button-light-background, #FFFFFF);
        --notification-button-hover-light-background: var(--mv-menu-notification-button-hover-light-background, #F0FFF0);
        --notification-menu-light-background: var(--mv-menu-notification-menu-light-background, #FFFFFF);
        --notification-light-color: var(--mv-menu-notification-light-color, #80828C);
        --level-dropdown-box-shadow: var(--mv-level-dropdown-box-shadow, 0 0px 25px 5px rgba(205,210,214,0.8));
      }

      ul {
        margin: 0px;
        list-style: none;
        border: var(--border);
        background-color: var(--background-color);
      }

      li {
        padding: 1em;
        display: block;
        color: var(--color);
        text-decoration: none;
        background-color: var(--background-color);
      }

      li:hover {
        background: var(--hover-background-color);
        color: var(--color);
      }

      .menu {
        display: flex;
        flex-direction : row;
        justify-content: left;
        padding: 0;

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
        background: var(--hover-background-color);

        @media(max-width: 450px) {
          position: static;
        }
      }

      .submenu.is-open {
        display: flex !important;
      }

      .submenu span {
        text-align: left;
        color: white;

        @media(max-width: 450px) {
          text-align: center;
        }
      }

      .level2 {
        top: 0px;
        left: 100%;
        background: var(--background-color);
        color: var(--color);
      }

      .level2:hover {
        top: 0px;
        left: 100%;
      }

      .menuitem {
        display: flex;
        justify-content: space-between;
      }

      .text{
        padding-right: 1em;
      }

      ul.dropdown {
        border: none;
      }

      .sublevel.dropdown {
        height: var(--dropdown-sublevel-height);
        padding: 0 10px;
        line-height: var(--dropdown-sublevel-height);
        background-color: var(--dropdown-background-color);
        border-radius: 1px;
      }

      .sublevel.dropdown:hover {
        background-color: var(--dropdown-hover-background-color);
        color: var(--color);
      }

      .level.dropdown {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: var(--dropdown-level-height);
        width: var(--dropdown-level-width);
        cursor: pointer;
        position: relative;
        padding: 0 20px;
        display: flex;
        align-items: center;
        background-color: var(--dropdown-background-color);
        box-shadow: var(--level-dropdown-box-shadow);
      }

      .level.dropdown:hover {
        background-color: var(--dropdown-hover-background-color);
        color: var(--color);
      }

      .level.dropdown > ul {
        width: var(--dropdown-sublevel-width) !important;
        border-radius: 5px;
        padding: 0;
        border: 1px solid var(--dropdown-hover-background-color);
        box-shadow: 0 0 20px 1px rgba(93, 94, 07, 0.35);
        z-index: 101;
        position: absolute;
        top: var(--dropdown-sublevel-position-top);
        left: var(--dropdown-sublevel-position-left);
      }

      ul.notification {
        border: none;
      }

      .level.notification {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: var(--notification-level-size);
        height: var(--notification-level-size);
        border-radius: 50%;
        display: flex;
        margin: auto;
        position: relative;
        background-color: var(--notification-button-background-color);
      }

      .level.notification:hover {
        background-color: var(--notification-button-hover-background-color);
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
        height: var(--notification-sublevel-height);
        width: var(--notification-sublevel-width) !important;
        border-radius: 5px;
        padding: 0;
        box-shadow: 0 0 20px 1px rgba(93, 94, 07, 0.35);
        z-index: 101;
        position: absolute;
        top: var(--notification-sublevel-position-top);
        left: var(--notification-sublevel-position-left);
        border: none;
      }

      .sublevel.notification {
        display: none;
      }

      .menu.notification {
        background-color: var(--notification-menu-background-color);
      }

      .wrap-notification {
        width: 100%;
        height: 100%;
        cursor: default;
        box-shadow: 0 0 15px 1px rgba(151, 156, 163, 1);
        border-radius: 5px;
        color: var(--notification-color);
      }

      .title {
        font-size: --font-size-xl;
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
        background-color: var(--notification-background-color);
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
        background-color: var(--notification-background-color);
        border-radius: 0 0 5px 5px;
      }

      .body {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: calc(var(--notification-sublevel-height) - 60px);
        position: relative;
        background-color: var(--notification-background-color);
        border-radius: 0 0 5px 5px;
      }

      .wrap-notification[showFooter] .body {
        height: calc(var(--notification-sublevel-height) - 115px);
        position: relative;
        border-radius: 0;
      }

      .level.default .submenu {
        margin-top: 22px;
        margin-left: 194px;
        min-width: 210px !important;
        max-width: 210px;
      }

      .level1.default .submenu {
        margin-left: 0px;
      }

      .light {
        --background-color: var(--light-background);
        --hover-background-color: var(--hover-light-background);
        --color: var(--light-color);
        --dropdown-background-color: var(--dropdown-light-background);
        --dropdown-hover-background-color: var(--dropdown-hover-light-background);
        --notification-button-background-color: var(--notification-button-light-background);
        --notification-button-hover-background-color: var(--notification-button-hover-light-background);
        --notification-background-color: var(--notification-light-background);
        --notification-menu-background-color: var(--notification-menu-light-background);
        --notification-color: var(--notification-light-color);
      }

      .dark {
        --background-color: var(--dark-background);
        --hover-background-color: var(--hover-dark-background);
        --color: var(--dark-color);
        --dropdown-background-color: var(--dropdown-dark-background);
        --dropdown-hover-background-color: var(--dropdown-hover-dark-background);
        --notification-button-background-color: var(--notification-button-dark-background);
        --notification-button-hover-background-color: var(--notification-button-hover-dark-background);
        --notification-background-color: var(--notification-dark-background);
        --notification-menu-background-color: var(--notification-menu-dark-background)
        --notification-color: var(--notification-dark-color);
      }
    `;
  }

  constructor() {
    super();
    this.type = "default";
    this.title = "Notifications";
    this.showFooter = true;
    this.theme = "dark";
  }

  render() {
    const isDropdownOrNotification = ["dropdown", "notification"].includes(
      this.type
    );
    const isNotification = this.type === "notification";
    if (this.isRoot) {
      return html`
        <mv-click-away @clicked-away="${this.handleClickAway}">
          <ul class="menu ${this.type} ${this.theme}"><slot></slot></ul>
        </mv-click-away>
      `;
    } else if (this.hasChildren) {
      return html`
        <li
          class="level${this.level} level ${this.type}"
          @click=${this.clicked}
        >
          <span class="menuitem">
            ${isDropdownOrNotification
              ? html`<slot name="title"></slot>`
              : html``}
            <span class="text">${this.text}</span>
            <span class="shortCut">${this.shortCut}</span>
          </span>
          <ul class="submenu ${this.isOpen ? "is-open" : ""}">
          ${isNotification
            ? html`
              <div
                class="wrap-notification"
                @click=${this.stopImmediatePropagation}
                ?showFooter="${this.showFooter}"
              >
                <div class="header">
                  <slot name="header">
                    <div class="title">${this.title}</div>
                  </slot>
                </div>
                <div class="body">
                  <slot name="body"></slot>
                </div>
                ${this.showFooter
                  ? html`
                    <div class="footer">
                      <slot name="footer"></slot>
                    </div>`
                  : html``}
                </div>`
            : html``}
            <slot></slot>
          </ul>
        </li>`;
    } else {
      return html`
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
    this.isRoot = this.text === undefined;
    this.parentType = this.type;
    if (!this.isRoot) {
      this.level = this.parentNode.registerChild(this);
      this.hasChildren = this.children.length > 0;
      this.isOpen = false;
    }
    if (this.hasChildren) {
      this.type = this.parentNode.parentType;
      this.parentType = this.type;
    }
    if (!this.isRoot && !this.hasChildren) {
      if (this.parentNode.parentType) {
        this.type = this.parentNode.parentType;
      }
    }
    document.addEventListener("click", this.handleClickAway);
    super.connectedCallback();
  }

  detachedCallback() {
    document.removeEventListener("click", this.handleClickAway);
    super.detachedCallback();
  }

  firstUpdated(changedProperties) {
    if (this.isRoot || this.hasChildren) {
      this.submenus.map(submenu => {
        //used a lambda to bind this
        submenu.addEventListener("submenu-clicked", this.submenuClicked);
      });
    }
  }

  clicked = event => {
    if (!this.isRoot) {
      if (this.hasChildren) {
        event.stopImmediatePropagation();
        this.isOpen = !this.isOpen;
      }
      if (this.action) {
        eval(this.action);
      }
      let submenuEvent = new CustomEvent("submenu-clicked", {
        detail: { message: this.text }
      });
      this.dispatchEvent(submenuEvent);
    }
  };

  //called if a sub menu has been clicked
  submenuClicked = event => {
    //we then close all other submenus
    this.submenus.map(submenu => {
      if (submenu.text !== event.detail.message && submenu.isOpen) {
        submenu.isOpen = false;
      }
    });
    event.stopImmediatePropagation();
  };

  //the submenus register themself to there parent using this method
  registerChild = submenu => {
    this.submenus.push(submenu);
    return this.level + 1;
  };

  handleClickAway = () => {
    this.isOpen = false;
  };

  stopImmediatePropagation(event) {
    event && event.stopImmediatePropagation();
  }
}

customElements.define("mv-menu", MvMenu);
