import { LitElement, html, css } from "lit-element";
import "./mv-menu.js";

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
    `;
  }

  render() {
    return html`
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
    `;
  }
}

customElements.define("mv-menu-demo", MvMenuDemo);
