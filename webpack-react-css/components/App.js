import React,{ Component } from 'react';
import SubApp from './SubApp'
import './App.css'

class App extends Component{
    render(){
        return(
                <div>
                    <h1>This is App</h1>
                    <SubApp/>
               </div>
        ); 
    }
}
export default App;

