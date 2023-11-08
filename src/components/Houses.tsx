import { FC, useEffect, useState } from 'react';
import { housingAPI } from '../api/api';
import { Apartments } from './Apartments';


interface House {
  id: number,
  name: string,
  type: {
    id: number,
    text: string
  }
}

interface HousesProps {
  streetId:number
}

export const Houses: FC<HousesProps> = ({streetId}) => {
  const [houses, setHouses] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await housingAPI.getHouses(streetId);
        setHouses(response.data)
      } catch (error) {
        console.error('error');
      }
    })();
  }, []);
  
  
  
  const toggleAccordion = (id:number) => {
    if(id === activeIndex){
      setActiveIndex(0);
    } else{
      setActiveIndex(id);
    } 
  };

  return (
    <div className='houses'>
      {houses.map((house: House ) => (
        <div key={house.id} className="house">
          <div onClick={() => toggleAccordion(house.id)}>Дом № {house.name}</div>
          <div>
            {activeIndex === house.id && (
              <div className='listCollapse'>
                  <Apartments houseId={house.id} streetId={streetId}/>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};