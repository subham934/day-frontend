Routing: ek page se durse page pe jana

Browser Router:  History API ka use kakta hai routing karne ke liye aur mainly use hota hai browser me routing karne ke liye. (client side)

home: "/"
profile: "/profile"
settings: "/settings"

Hash router:"mainly use hota hai jab server routing configure nahi kar sakte aur routing browser ke andar hi handle karni hoti hai." ✅

home: "/#/"



wrap your main.jsx with BrowserRouter::
```javascript
--------
main.jsx
--------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```


