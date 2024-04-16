import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title="Todo App";
const descr="In this video, I will discuss jsx and javascript expression in a react app."
root.render(<>

<h1>Welcome</h1>
<h1>Hello</h1>

<div>
    <h1>{title}</h1>
    <p>{descr}</p>
    <p>{new Date().getFullYear()}</p>
</div>,

</>);



