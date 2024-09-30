"use client";
import axios from 'axios';
import Card, {Card_Data} from './card';
import styles from './styles/style.module.css'
import React from 'react';
async function getData() {
  const data_db = await axios.get('http://localhost:8000/app/api.php');
  return data_db.data;
}
async function Main(){
  const data = await getData();
  console.log(data);
  return (
  <>
    <header className={styles.title}>Stratagem : Card Strategy Game</header>
    <div className="flex justify-between h-full">
      {data.map((cardData: Card_Data, key: number) => (
        <Card key={key} card_data={cardData} />
      ))}
    </div>
  </>);
}
export default function Home() {
  return(
    <Main />
  );
}
