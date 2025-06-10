import PLANTS from '../data.js';
import EachCard from './EachCard.jsx';

const PlantList = ({ plant, setPlant }) => {
  return (
    <section>
      <h2>Plants</h2>
      <ul>
        {
          PLANTS.map(eachPlant => (
            <li key={eachPlant.id}>
              <EachCard plantName={eachPlant.name} plantImage={eachPlant.image} eachPlant={eachPlant} setPlant={setPlant} plant={plant} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default PlantList;