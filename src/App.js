import React from 'react'
import './index.css'


const Slot =(props)=>{
    
    

        // {(props.x===props.y) &&(props.x===props.z) ? <><h1>{props.x} {props.y} {props.z}</h1><h1>This is Matching</h1></> : <><h1>{props.x} {props.y} {props.z}</h1><h1>This is not Matching</h1></>}
    

    
    if((props.x===props.y) && (props.x===props.z)){
        return(
            <>
             <h1>{props.x} {props.y} {props.z}</h1>
             <h1>This is Matching</h1>
             <hr />
            </>
        )
    }else{
        return(
            <>
             <h1>{props.x} {props.y} {props.z}</h1>
             <h1>This  is Not Matching</h1>
             <hr />
            </>
        )
        
    }
}

 
const App = ()=>{
    return(
        <>
        <h1 style={{textAlign:"center"}}>🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot machine</span>🎰</h1>
        <div className="box">
        <Slot x='😃' y='😃' z='😃'/>
        <Slot x='😃' y='😃' z='😍'/>
        <Slot x='😃' y='🎅' z='😃'/>
        
        <Slot x='🎰 ' y='😃' z='🎰'/>
        </div>
        
        </>
    )
}
export default App;