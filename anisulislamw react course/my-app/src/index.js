import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title="Todo App";
const descr="In this video, I will discuss jsx and javascript expression in a react app."
// const titleStyle={
//     backgroundColor:"purple",
//     textAlign:"center",
//     color:"White",
//     padding:"15px"
// }
const w={
    width: "18rem"
}
root.render(<>

<h1>Welcome</h1>
<h1>Hello</h1>

<div>
    <h1 className="titleStyle" >{title}</h1> 
    <p>{descr}</p>
    <p>{new Date().getFullYear()}</p>
</div>
<div className="card" style={w}>
  <div className="card-body">
    <img></img>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

,

</>);



