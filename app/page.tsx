"use client";
import axios from 'axios';
import Card, {Card_Data} from './card'
async function getData() {
  const data_db = await axios.get('http://localhost:8000/app/api.php');
  return data_db.data;
}
async function Main(){
  const data = await getData();
  return (<>
    <header>Stratagem : Card Strategy Game</header>
    {data.map((cardData: Card_Data, key: number) => (
      <Card key={key} card_data={cardData} />
    ))}
  </>);
}
export default function Home() {
  return(
    <Main />
  );
}
