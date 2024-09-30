import axios from 'axios';
import Card, {Card_Data} from './Component/card';
import styles from './styles/style.module.css'
import React, { useState } from 'react';
import CardForm from './Component/cardForm';

async function getData() {
  const data_db = await axios.get('http://localhost:8000/api/api.php');
  return data_db.data;
}
async function Main(){
  const data = await getData();
  return (
  <>
    <header className={styles.title}>Stratagem : Card Strategy Game</header>
    <div className="flex justify-between h-full">
      {data.map((cardData: Card_Data, key: number) => (
        <Card key={key} card_data={cardData} />
      ))}
    </div>
    <CardForm />
    <button>Ajouter une carte</button>
  </>);
}
export default function Home() {
  return(
    <Main />
  );
}
