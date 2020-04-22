import { LitElement, html, css } from "lit-element";
import "./mv-menu.js";

export class MvMenuDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      theme: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .main {
        display: grid;
        grid-template-rows: 1fr;
        grid-row-gap: 20px;
        margin-top: 40px;
      }

      .avatar {
        line-height: 48px;
        text-align: center;
        border-radius: 100%;
        max-width: 48px;
        width: 48px;
        max-height: 48px;
        height: 48px;
        background-color: rgb(52, 152, 219);
      }

      .dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .title {
        padding: 10px;
      }

      .default-menu {
        width: 100%;
        box-shadow: 0 0px 25px 5px rgba(205, 210, 214, 0.8);
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        border-radius: 8px;
        color: #818181;
      }

      legend {
        font-weight: 500;
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    const { theme } = this;
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            ?checked="${this.theme === "light"}"
            @change="${this.changeTheme}"
          />Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            ?checked="${this.theme === "dark"}"
            @change="${this.changeTheme}"
          />Dark
        </label>
      </fieldset>

      <div class="main">
        <h3>Default Menu</h3>
        <div class="default-menu ${theme}">
          <mv-menu .theme="${theme}">
            <mv-menu trigger label="File">
              <mv-menu item label="New File" shortcut="Ctrl+Shift+N"></mv-menu>
              <mv-menu item label="Open File" shortcut="Ctrl+O"></mv-menu>
              <mv-menu group label="Save">
                <mv-menu item label="Save File" shortcut="Ctrl+S"></mv-menu>
                <mv-menu
                  item
                  label="Auto Save"
                  ?checked="${true}"
                  ?disabled="${true}"
                ></mv-menu>
              </mv-menu>
            </mv-menu>
            <mv-menu trigger label="Edit">
              <mv-menu
                item
                label="Undo"
                shortcut="Ctrl+U"
                ?disabled="${true}"
                action="alert('Undo')"
              ></mv-menu>
              <mv-menu
                item
                label="Redo"
                shortcut="Ctrl+Y"
                ?disabled="${true}"
                action="alert('Redo')"
              ></mv-menu>
              <mv-menu separator></mv-menu>
              <mv-menu
                item
                label="Cut"
                shortcut="Ctrl+X"
                action="alert('Cut')"
              ></mv-menu>
              <mv-menu
                item
                label="Copy"
                shortcut="Ctrl+C"
                action="alert('Copy')"
              ></mv-menu>
              <mv-menu
                item
                label="Paste"
                shortcut="Ctrl+V"
                action="alert('Paste')"
              ></mv-menu>
              <mv-menu separator></mv-menu>
              <mv-menu group label="Align">
                <mv-menu item label="Left Align"></mv-menu>
                <mv-menu item label="Center"></mv-menu>
                <mv-menu item label="Right Align"></mv-menu>
                <mv-menu separator></mv-menu>
                <mv-menu item label="Top Align"></mv-menu>
                <mv-menu item label="Middle"></mv-menu>
                <mv-menu item label="Bottom Align"></mv-menu>
              </mv-menu>
              <mv-menu separator></mv-menu>
              <mv-menu group label="Justify">
                <mv-menu item label="Horizontal"></mv-menu>
                <mv-menu item label="Vertical"></mv-menu>
              </mv-menu>
            </mv-menu>
            <mv-menu trigger label="Help">
              <mv-menu item label="Welcome"></mv-menu>
              <mv-menu item label="Help"></mv-menu>
              <mv-menu item label="About"></mv-menu>
            </mv-menu>
          </mv-menu>
        </div>
      </div>
    `;
  }

  changeTheme = (event) => {
    this.theme = event.target.value;
  };
}

customElements.define("mv-menu-demo", MvMenuDemo);
