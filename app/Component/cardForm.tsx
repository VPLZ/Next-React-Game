"use client";
import { useState } from "react";
export default function CardForm(){

  const [attributes, setAttributes] = useState({
    strength_value : 0,
    agility_value : 0,
    health_value : 0
  })

  const handleAttributeChange = (attribute: string, value: string) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: value
    }));
  }
  return(
    <form action="">
      <label htmlFor="name">Nom</label>
      <input type="text" name="name" placeholder="Inscrire le nom" />
      <p>Carractéristiques :</p>
      <label htmlFor="strength">Force : {attributes.strength_value}</label>
      <input type="range" name="strength" min={0} max={100} value={attributes.strength_value} step={10} onChange={e => {handleAttributeChange('strength_value', e.target.value)}} /><br/>
      <label htmlFor="strength">Agilité : {attributes.agility_value}</label>
      <input type="range" name="strength" min={0} max={100} value={attributes.agility_value} step={10} onChange={e => {handleAttributeChange('agility_value', e.target.value)}} /><br/>
      <label htmlFor="strength">Vie : {attributes.health_value}</label>
      <input type="range" name="strength" min={0} max={100} value={attributes.health_value} step={10} onChange={e => {handleAttributeChange('health_value', e.target.value)}} /><br/>
      <button>Créer une carte</button>
    </form>
  );
}
