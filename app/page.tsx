import axios from 'axios';
import Card, {Card_Data} from './Component/card';
import styles from './styles/style.module.css'
import React, { useState } from 'react';
import CardForm from './Component/cardForm';
import { log } from 'console';

async function getData() {
  const data_db = await axios.get('http://localhost:8000/api/api.php/users/1');
  let data = data_db.data;
  if(!Array.isArray(data)){
    [...data] = data_db.data.toString().split('][');
    for(let i = 0; i<data.length; i++){
      if(i%2==0){
        data[i] = JSON.parse(data[i] + ']');
      }else{
        data[i] = JSON.parse('[' + data[i]);
      }
    }
  }
  return data;
}
function MapCard(cardData : any, cardComponents : any){
  cardData.map((card : Card_Data, index: number)=>{
    cardComponents.push(<Card key={index} card_data={card} />)
  })
}

async function Main(){
  const data = await getData();
  let cardComponents : any = [];
  if(Array.isArray(data[0])){
    for(let i = 0; i < data.length; i++){
      const cardData = data[i];
      MapCard(cardData, cardComponents);
    }
  }else{
    MapCard(data, cardComponents);
  }
  return (
  <>
    <header className={styles.title}>Stratagem : Card Strategy Game</header>
    {
      <div className="flex justify-between h-full">
        {cardComponents}
      </div>
    }
    <CardForm />
  </>);
}
export default function Home() {
  return(
    <Main />
  );
}
