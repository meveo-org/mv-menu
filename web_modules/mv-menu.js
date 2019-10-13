import { LitElement,html,css} from './lit-element.js';
export * from './lit-element.js';

export class MvMenu extends LitElement {

    static get properties() {
        return {
          text: {  type : String, attribute: true },
          shortCut: { type : String, attribute: true},
          checked: { type : Boolean, attribute: true},
          disabled: { type : Boolean, attribute: true},
          isOpen: { type : Boolean, attribute: true},
          action: { type : String, attribute: true}
        };
    }

    static get styles() {
        return css`
          :host {
            font-family: Arial;
            font-size: 10pt;
          }
          ul {
              margin: 0px;
              list-style:none;
          }
          li {
              padding: 1em;
              display: block;
              padding: 6px;
              color: #000000;
              text-decoration: none;
          }
          li:hover {
            background: #eeeeee;
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
            top:2em;
            flex-flow: column wrap;
            min-width: 100px;
            position: absolute;
            background: #eeeeee;
            @media(max-width: 450px) {
              position: static;
            }
          }
          .submenu.is-open {
            display: flex!important;
          }
          .submenu span {
            text-align: left;
            @media(max-width: 450px) {
              text-align: center;
            }
            color:white;
          }
          .level2 {
            top: 0px;
            left: 100%;
            background: #dddddd;
          }
          .level2:hover {
            top: 0px;
            left: 100%;
            background: #cccccc;
          }

          .menuitem{
            display: flex;
            justify-content:space-between;
          }

          .text{
            padding-right:1em;
          }
        }`
    } 

    render() {
        if(this.isRoot){
          return html `<ul class="menu"><slot></slot></ul>`
        } else if(this.hasChildren){
          return html `
          <li class="level${this.level}" @click=${this.clicked}>
            <span class="menuitem"><span class="text">${this.text}</span><span class="shortCut">${this.shortCut}</span></span>
            <ul class="submenu ${this.isOpen?'is-open':''}"><slot></slot></ul>
          </li>`;
        } else {
          return html `
          <li @click=${this.clicked}>
          <span class="menuitem"><span class="text">${this.text}</span><span class="shortCut">${this.shortCut}</span></span>
          </li>`;
        }
    ;
    }

    clicked(e){
      if(!this.isRoot){
        console.log("clicked "+this.text);
        if(this.hasChildren){
          e.stopImmediatePropagation();
          this.isOpen=!this.isOpen;
        }
        if(this.action){
          eval(this.action);
        }
        let event = new CustomEvent('mv-submenu-clicked', {
          detail: {
            message: this.text
          }
        });
        this.dispatchEvent(event);
      }
    }

    //called if a sub menu has been clicked
    submenuClicked(e){
      //we then close all other submenus
      console.log("On menu "+this.text+" submenu clicked "+e.detail.message);
      this.submenus.map(
        (submenu)=>{
          if(submenu.text!=e.detail.message && submenu.isOpen){
            submenu.isOpen=false}
          })
      e.stopImmediatePropagation();
    }

    //the submenus register themself to there parent using this method
    registerChild(submenu){
      this.submenus.push(submenu);
      return this.level+1;
    }

    firstUpdated(changedProperties) {
      if(this.isRoot || this.hasChildren){
        this.submenus.map(
          (submenu)=>{
            //used a lambda to bind this
            submenu.addEventListener('mv-submenu-clicked', (e)=>{this.submenuClicked(e)});
          }
        )
      }
    }
        
    connectedCallback() {
        //initialize 
        this.level=0;
        this.submenus=[];
        this.hasChildren=false;
        this.isRoot=(this.text==undefined);
        if(!this.isRoot){
          this.level=this.parentNode.registerChild(this);
          this.hasChildren=this.children.length>0;
          this.isOpen=false;
        }
        super.connectedCallback();
    }

}

customElements.define('mv-menu', MvMenu);