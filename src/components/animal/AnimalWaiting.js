import react, {useState} from "react"
import { AnimalCard } from './AnimalCard';

export const AnimalWaitingList = () => {
    const [animalsList, setAnimalsList] = useState(true)
    setAnimalsList(animalsList)

    return(
        <>
        <button></button>
        <div className="container-cards">
        {animals.map(animal =>
          <AnimalCard 
          key={animal.id} 
          animal={animal}
          handleDeleteAnimal={handleDeleteAnimal} />
        )}
      </div>
        </>

    )
}