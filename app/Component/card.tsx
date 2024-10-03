"use client";
import styles from '../styles/style.module.css';
import '../styles/style.module.css';


interface StateProps{
  stat_name: string
  stat_value: string | number
}
interface CardState{
  card_data: Card_Data
}
export interface Card_Data{
  Agility: number
  Strength: number
  Health: number
  Name: string
}

export default function Card({card_data}: CardState){
  return (
    <div className={styles.card_container}>
      <h1 className={styles.name}>{card_data.Name}</h1>
      <Stat stat_name="Agility" stat_value={card_data.Agility} />
      <Stat stat_name="Strength" stat_value={card_data.Strength} />
      <Stat stat_name="Health" stat_value={card_data.Health} />
    </div>
  )
}

function Stat({stat_name, stat_value}: StateProps){
  return(
    <div className="flex justify-between">
      <p>{stat_name}:</p>
      <p className='text-blue-400'>{stat_value}</p>
    </div>
  )
}