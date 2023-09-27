import '../App.css';
import React from 'react';


function Card(props) { // Creates the Card function
  function classes() { // Creates the classes function
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' '; // Sets the background color
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white'; // Sets the text color
    return 'card mb-3 ' + bg + txt; // Returns the card style
  } // Ends the classes function

  return ( // Returns the following
    <div className={classes()} 
         style={{ maxWidth: "18rem" }}> {/* Creates the card */}
      <div className="card-header">{props.header}</div> {/* Creates the card header */}
      <div className="card-body"> {/* Creates the card body */}
        {props.title && (<h5 className="card-title">{props.title}</h5>)} {/* Creates the card title */}
        {props.text && (<p className="card-text">{props.text}</p>)} 
        {props.body} 
        {props.status && (<div id='createStatus'>{props.status}</div>)} 
      </div> 
    </div> 
  ); 
}

export default Card; // Exports the Card function