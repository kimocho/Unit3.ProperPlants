const EachCard = ({ plantName, plantImage, eachPlant, setPlant }) => {
  return (
    <>
      <figure>{plantImage}</figure>
      <h3>{plantName}</h3>
      <button onClick={() => setPlant(eachPlant)}>Add to cart</button >
    </>
  )
}

export default EachCard;