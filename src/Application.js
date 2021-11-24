import React, {Component} from 'react';

class Application extends Component{

    render(){
        let name = "nick";
        return(
           <div>
               <h1>
                   Hello, {name}
               </h1>
               <span>This</span>
           </div>
        );
    }
}
export default Application;

