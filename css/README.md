# Meveo UI design system

Design Principles
Philosophy, brand guideline,product principles (what it solve, who is it for)

Design Language
Typography, color,spacing, scaling, voice & tones, illustrations, motion

Components, goups and patterns
Containers, Buttons, modal, transitions,...

The outcome of the designing process will be used by managers, UI designers, developers, marketers
and must be share on meveo drive.


## Colors
The meveo color theme is inspired from [Material](https://material.io/design/color/the-color-system.html) and [Prototypr](https://blog.prototypr.io/basic-ui-color-guide-7612075cc71a).  
When creating your color theme, [keep in the accessibility](https://webaim.org/).  
Some tools can help:  
[contrast checker](https://webaim.org/resources/contrastchecker/)

### Background colors
Primary colors : Essential set of brand colors it comes with dark, darkest and light, lightest variations  
`p-color, pd-color, pdd-color, pl-color, pll-color`  
(Secondary) Accent colors: Used to higlight information or actions  
`a-color,ad-color, add-color, al-color, all-color`  
Semantic colors : Used for success, warning, errors for back ground and text  
`success-color, warning-color, error-color`  
Background colors : Used for background and surface
`b-color`  
`s-color`  
Neutral colors : Used for caption texts, border, icons  
`n-color, nd-color, nl-color`  
Data colors : Used in charts, 3 paletes categorical, sequential, polarize  
`cat-1-color,cat-2-color,...,cat-12-color`  
`seq-1-color,seq-2-color,...,seq-12-color`  
`pol-1-color,pol-2-color,...,pol-12-color`  

### Text colors
The text colors are univoquely associated to the background on which they are supposed to appear  
Their css variable name is simply the background color name prefixed by "on-", except for neutral palette  
that is used by component on which we are not supposed to write text.  
`on-p-color, on-pd-color, on-pdd-color, on-pl-color, on-pll-color`  
`on-a-color, on-ad-color, on-add-color, on-al-color, on-all-color`  
`on-success-color, on-warning-color, on-error-color`  
`on-cat-1-color, on-cat-2-color,..., on-cat-12-color`  
`on-seq-1-color, on-seq-2-color,..., on-seq-12-color`  
`on-pol-1-color, on-pol-2-color,..., on-pol-12-color`  

##  Components

TODO : integrate a component browser that allow see a component on any device and in any language