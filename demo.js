import { LitElement, html, css } from "lit";
import "./mv-menu.js";
import "@meveo-org/mv-font-awesome";

export class MvMenuDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      
      .wrap-menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 1600px;
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
      
      .notification-menu {
        height: 95px;
        width: 756px;
        background: #3F4753;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0px 25px 5px rgba(205,210,214,0.8);
      }
      
      .notification-menu.light {
        background-color: #FFFFFF;
      }
      
      .notification-menu.light mv-fa[icon="bell"] {
        color: #80828C;
      }
      
      .footer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;	
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
    this.theme = "dark";
  }

  render() {
    const { theme } = this;
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label><input type="radio" name="theme" value="light" @change="${this.changeTheme}" />Light</label>
        <label><input type="radio" name="theme" value="dark" checked @change="${this.changeTheme}" />Dark</label>
      </fieldset>
      <div class="wrap-menu">
        <div>
          <mv-menu .theme="${theme}">
            <mv-menu text="File">
              <mv-menu text="New File" shortcut="Ctrl+Shift+N"></mv-menu>
              <mv-menu text="Open File" shortcut="Ctrl+O"></mv-menu>
              <mv-menu text="Save">
                <mv-menu text="Save File" shortcut="Ctrl+S"></mv-menu>
                <mv-menu text="Auto Save" checked=true disabled=true></mv-menu>
              </mv-menu>
              <mv-menu text="-"></mv-menu>
            </mv-menu>
            <mv-menu text="Edit">
              <mv-menu text="Undo" shortcut="Ctrl+U"  disabled=true action="alert('Undo')"></mv-menu>
              <mv-menu text="Redo" shortcut="Ctrl+Y"  disabled=true action="alert('Redo')"></mv-menu>
              <mv-menu text="-"></mv-menu>
              <mv-menu text="Cut" shortcut="Ctrl+X"  action="alert('Cut')"></mv-menu>
              <mv-menu text="Copy" shortcut="Ctrl+C"  action="alert('Copy')"></mv-menu>
              <mv-menu text="Paste" shortcut="Ctrl+V" action="alert('Paste')"></mv-menu>
              <mv-menu text="-"></mv-menu>
              <mv-menu text="Align">
                <mv-menu text="Left Align"></mv-menu>
                <mv-menu text="Center"></mv-menu>
                <mv-menu text="Right Align"></mv-menu>
                <mv-menu text="-"></mv-menu>
                <mv-menu text="Top Align"></mv-menu>
                <mv-menu text="Middle"></mv-menu>
                <mv-menu text="Bottom Align"></mv-menu>
              </mv-menu>
              <mv-menu text="-"></mv-menu>
              <mv-menu text="Distribute">
                <mv-menu text="Horizontal"></mv-menu>
                <mv-menu text="Vertical"></mv-menu>
              </mv-menu>
            </mv-menu>
            <mv-menu text="Help">
              <mv-menu text="Welcome"></mv-menu>
              <mv-menu text="Help"></mv-menu>
              <mv-menu text="About"></mv-menu>
            </mv-menu>
          </mv-menu>
        </div>
        
        <div>
          <mv-menu type="dropdown" .theme="${theme}">
            <mv-menu text="">
              <span slot="title">
                <div class="dropdown">
                  <div class="avatar">ma</div>
                  <div class="title">meveo.admin</div>
                  <mv-fa icon="caret-down"></mv-fa>
                </div>
              </span>
              <mv-menu text="Profile Setttings" @submenu-clicked="${this
                .clickLink}"></mv-menu>
              <mv-menu text="Log Out"></mv-menu>
            </mv-menu>
          </mv-menu>
        </div>
        
        <div class="notification-menu ${theme}">
          <mv-menu type="notification" .theme="${theme}">
            <mv-menu text="">
              <span slot="title">
                <mv-fa icon="bell"></mv-fa>
              </span>
              <span slot="footer">
                <span class="footer">View all</span>
              </span>
              <mv-menu text="New File" shortcut="Ctrl+Shift+N" action="alert('Undo')"></mv-menu>
              <mv-menu text="Log Out"></mv-menu>
            </mv-menu>
          </mv-menu>
        </div>
      </div>
    `;
  }

  clickLink() {
    window.open("https://github.com/meveo-frontend", "_blank");
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-menu-demo", MvMenuDemo);
