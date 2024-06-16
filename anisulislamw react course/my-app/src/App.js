import React from "react";
import Card from './components/Card';
import Data from './data.json';
import { List } from "./components/UniqueList.js/List";
import Card1 from './components/ClassComponent/card1'
import Card2 from "./components/ClassComponent/card2";
import ReactBootstrap from "./components/React-Bootstrap/ReactBootstrap";
import STATE from "./components/State/State";
import EVENT_HANDLING from "./components/EVENT_HANDLING/index";
import UState from "./components/UpdateState/UState";

// let items =[];

// for(let x=0;x<Data.length;x++)
// {
//     items.push( <Card titleText={Data[x].title} descText={Data[x].desc}/>)
// }


 function App(){
    return(
        <div>
            {/* <Card1 name="card1" desc="this is card 1"/>
            <Card2 name="card2" desc="this is card 2"/> */}
            {/* <ReactBootstrap/> */}
           {/* <STATE/> */}
           {/* <EVENT_HANDLING/> */}
           <UState/>
        </div>
       
    //    <>
       /* <div className="multiple"> */
       /* <Card titleText={Data[0].title} descText="this is dexc1" />
        */
         /* {items} */
         /* {Data.map((item)=><Card titleText={item.title} descText={item.desc}/>)} */
        
        /* </div></> */
        // <List/>

    )
}
export default App;