const EachCard = ({ plantName, plantImage, eachPlant, setPlant, plant }) => {
  return (
    <>
      <figure>{plantImage}</figure>
      <h3>{plantName}</h3>
      <button onClick={() => setPlant([...plant, eachPlant])}>
        Add to cart
      </button >
    </>
  )
}

export default EachCard;