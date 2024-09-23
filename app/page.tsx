import Card, {Card_Data} from './card'
const data = require ('./data.json');
export default function Home() {
  console.log(data.length);
  return(
    <>
      <header>Stratagem : Card Strategy Game</header>
      {data.map((cardData: Card_Data, key: number) => (
        <Card key={key} card_data={cardData} />
      ))}
    </>
  )
}
