import '../App.css';
import React from 'react';
import Card from './Card';

function Home(){
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="BadBank Landing Module"
      title="Welcome to the Bank of Zod"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

export default Home;