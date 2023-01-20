import {useState} from 'react'
import AnimalShow from './AnimalShow';
import './App.css'

function getRandomAnimal(){
    const animals = ['bird' , 'cat' , 'cow' , 'gator' , 'horse' , 'dog'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
//   const handleClick = ()=>{
//     console.log('Clicked button');
//   };
    
const [animals,setAnimals] = useState([]);

const renderAnimals = animals.map((animal,index) => {           //[<AnimalShow[type="cat"]/> , <AnimalShow[type="dog"]/> , <AnimalShow[type="bird"]/>] 
    return <AnimalShow type={animal} key={index}/>;
})

const handleClick = () => {
     setAnimals([...animals,getRandomAnimal()]);
};

    return (
        <div className='main'>
            <div className='app'> 
            <button onClick={handleClick}> 
            Add Animal</button>
            <div className='animal-list'> {renderAnimals}</div>
        </div>

        </div>

    );
    
}

export default App;