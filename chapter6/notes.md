react js is a js library for building user interfaces. It was developed by Facebook and is widely used for creating web applications .

library: a collection of pre-written code that can be used to perform common tasks, such as making HTTP requests or manipulating the DOM.
-> predefined block of code that can be reused in different parts of an application. 


framework: a collection of pre-written code that provides a structure for building applications. It often includes libraries, but also provides additional features such as routing and state management.

virtual DOM: a lightweight representation of the actual DOM that allows React to efficiently update the UI by only re-rendering the components that have changed.

real DOM: the actual Document Object Model that represents the structure of a web page. It is what the browser uses to render the UI.

jab react application pehli bar run hoti hai, to React virtual DOM create karta hai. Jab bhi state ya props change hote hain, React virtual DOM ko update karta hai aur phir real DOM ko update karta hai sirf un components ke liye jo change hue hain.

diffing: the process of comparing the virtual DOM with the real DOM to determine which components need to be updated.

reconciliation: the process of updating the real DOM to match the virtual DOM after the diffing process has determined which components need to be updated.

export vs import: export is used to make a module available for use in other parts of an application, while import is used to bring a module into the current file so that it can be used.
default export: a module can have only one default export, which is the main value that the module exports. It can be imported without using curly braces.
named export: a module can have multiple named exports, which are additional values that the module exports




