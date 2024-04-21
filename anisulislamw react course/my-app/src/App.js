import React from "react";
import Card from './components/Card';
import Data from './data.json';
import { List } from "./components/UniqueList.js/List";

// let items =[];

// for(let x=0;x<Data.length;x++)
// {
//     items.push( <Card titleText={Data[x].title} descText={Data[x].desc}/>)
// }


export default function App(){
    return(
    //    <>
       /* <div className="multiple"> */
       /* <Card titleText={Data[0].title} descText="this is dexc1" />
        */
         /* {items} */
         /* {Data.map((item)=><Card titleText={item.title} descText={item.desc}/>)} */
        
        /* </div></> */
        <List/>

    )
}