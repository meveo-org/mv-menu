import { LitElement, html, css } from "lit-element";
import "mv-click-away";

export class MvMenu extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      shortcut: { type: String },
      disabled: { type: Boolean },
      group: { type: Boolean },
      trigger: { type: Boolean },
      item: { type: Boolean },
      open: { type: Boolean },
      action: { type: String },
      separator: { type: Boolean },
      //  valid theme values are: "light", "dark"
      //    default: "dark"
      theme: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        --font-family: var(--font-family, Arial);
        --font-size: var(--font-size-m, 1rem);
        --item-padding: var(--mv-menu-item-padding, 0.5rem);
        --menu-height: var(--mv-menu-height, 66px);
        --menu-trigger-width: var(--mv-menu-trigger-width, 4rem);
        --menu-dropdown-width: var(--mv-menu-dropdown-width, 14rem);
        --box-shadow: var(
          --mv-menu-box-shadow,
          0 5px 15px 0 rgba(205, 210, 214, 0.8)
        );

        --light-color: var(--mv-menu-light-color, #80828c);
        --light-background: var(--mv-menu-light-background, #ffffff);
        --hover-light-color: var(--mv-menu-hover-light-color, #ffffff);
        --hover-light-background: var(--light-11-background, #1d9bc9);

        --dark-color: var(--mv-menu-dark-color, rgb(202, 213, 218));
        --dark-background: var(--dark-5-background, #344955);
        --hover-dark-color: var(--mv-menu-hover-dark-color, #ffffff);
        --hover-dark-background: var(--mv-menu-hover-dark-background, #232f34);
      }

      .light {
        --color: var(--light-color);
        --background: var(--light-background);
        --hover-color: var(--hover-light-color);
        --hover-background: var(--hover-light-background);
      }

      .dark {
        --color: var(--dark-color);
        --background: var(--dark-background);
        --hover-color: var(--hover-dark-color);
        --hover-background: var(--hover-dark-background);
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        background: var(--background);
      }

      li {
        margin: 0;
        font-weight: normal;
        padding: var(--item-padding);
        color: var(--color);
        text-decoration: none;
        user-select: none;
        cursor: pointer;
      }

      li:hover,
      .trigger.active,
      .group.active {
        color: var(--hover-color);
        background: var(--hover-background);
      }

      .trigger {
        height: var(--menu-height);
        width: var(--menu-trigger-width);
        padding: 0 var(--item-padding);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .shortcut {
        font-size: calc(var(--font-size) * 0.8);
        font-style: italic;
      }

      .separator {
        width: calc(100% - var(--item-padding));
        height: 1px;
        padding: 0;
        margin: 0 calc(var(--item-padding) / 2);
        background: var(--color) !important;
      }

      .separator:hover {
        background: var(--color);
        cursor: default;
      }

      .label-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      .trigger {
        display: inline-block;
        font-weight: bold;
      }

      .trigger .label-group {
        justify-content: center;
      }

      .group {
        --total-padding: calc(var(--item-padding) * 2);
        display: inline-block;
        width: calc(var(--menu-dropdown-width) - var(--total-padding));
      }

      .sub-menu {
        position: absolute;
        margin-top: 5px;
        margin-left: calc(var(--item-padding) * -1);
        box-shadow: var(--box-shadow);
        width: var(--menu-dropdown-width);
      }
    `;
  }

  constructor() {
    super();
    this.type = "default";
    this.theme = "dark";
  }

  render() {
    if (this.separator) {
      return html`<li class="separator"></li>`;
    } else if (this.item) {
      return html`
        <li class="item" @click=${this.selectListItem}>
          <div class="label-group">
            <div class="label">${this.label}</div>
            ${!!this.shortcut
              ? html` <div class="shortcut">${this.shortcut}</div> `
              : html``}
          </div>
        </li>
      `;
    } else if (this.trigger || this.group) {
      const activeClass = this.open ? " active" : "";
      const triggerClass = this.trigger ? "trigger" : "";
      const groupClass = this.group ? "group" : "";
      const listClass = `${triggerClass || groupClass}${activeClass}`;
      return html`
        <mv-click-away @clicked-away="${this.handleClickAway}">
          <li class="${listClass}" @click=${this.selectListItem}>
            <div class="label-group">
              <div class="label">${this.label}</div>
              ${!!this.shortcut
                ? html` <div class="shortcut">${this.shortcut}</div> `
                : html``}
            </div>
            ${this.open
              ? html`
                  <ul class="sub-menu">
                    <slot></slot>
                  </ul>
                `
              : html``}
          </li>
        </mv-click-away>
      `;
    } else {
      return html`
        <ul class="${this.theme}">
          <slot></slot>
        </ul>
      `;
    }
  }

  selectListItem = (event) => {
    if (this.trigger || this.group) {
      this.open = !this.open;
    }
  };

  handleClickAway = () => {
    this.open = false;
  };
}

customElements.define("mv-menu", MvMenu);
