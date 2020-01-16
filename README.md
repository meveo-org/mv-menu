# mv-menu

 MvMenu is a Meveo menu component (based on lit-element) that provides menu with sub menus.

## Features
* Arbitrary sub-menu levels
* Shortcut text
* Written in vanila javascript
* Can render custom dropdown and notification

## Dependencies

- [mv-click-away](https://github.com/meveo-org/mv-click-away)

## Quick Start

To experiment with the MvMenu component.   

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself) 

3. Sample menu usage is included in the demo.js     

The `mv-menu` has 3 `type` variants:
```
default, dropdown, and notification 
```

## Sample usage
- dropdown
```html
<mv-menu>      
   <mv-menu text="" type="dropdown">
       <span slot="title">                            // title slot
           <div class="dropdown">
               <div class="avatar">ma</div>
               <div class="title">meveo.admin</div>
               <mv-fa icon="caret-down"></mv-fa>
           </div>
       </span>
       <mv-menu 
           text="Profile Setttings"
           @submenu-clicked="${this.clickLink}"       // links and actions to be dispatched when menu items are clicked
       ></mv-menu>  
       <mv-menu text="Log Out"></mv-menu>
   </mv-menu>
</mv-menu>
```

- notification
```html
<mv-menu>
   <mv-menu text="" type="notification" .showFooter="${false}">  // hide notification's footer
       <span slot="title">                                       // title, footer, body slots
           <mv-fa icon="bell"></mv-fa>
       </span>
       <span slot="footer">
           <span class="footer">View all</span>
       </span>
   </mv-menu>
</mv-menu>
```

You can also check this [demo](https://menu.meveo.org/)


## Acknowledgements

* MvMenu is inspired from [MenuLitElement](https://github.com/glenkitchen/menu-lit-element) and [Flex menu](https://www.damienflandrin.fr/blog/post/tutoriel-realiser-un-menu-responsive-avec-flexbox).
