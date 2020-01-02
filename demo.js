import { LitElement, html, css } from "lit-element";
import "./mv-menu.js";
import "mv-font-awesome";

export class MvMenuDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
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
      }
      
      .footer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }

  render() {
    return html`
    <div class="wrap-menu">
        <div>
            <mv-menu>
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
          <mv-menu>
            <mv-menu text="" type="dropdown">
                <span slot="title">
                    <div class="dropdown">
                      <div class="avatar">ma</div>
                      <div class="title">meveo.admin</div>
                      <mv-fa icon="caret-down"></mv-fa>
                    </div>
                </span>
                <mv-menu text="Profile Setttings" @submenu-clicked="${this.clickLink}"></mv-menu>
                <mv-menu text="Log Out"></mv-menu>
            </mv-menu>
          </mv-menu>
        </div>
        
        <div class="notification-menu">
          <mv-menu>
            <mv-menu text="" type="notification">
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
    window.open("https://github.com/meveo-frontend", '_blank');
  }
}

customElements.define("mv-menu-demo", MvMenuDemo);
