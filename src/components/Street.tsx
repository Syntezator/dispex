import { FC, useEffect, useState } from 'react';
import { housingAPI } from '../api/api';
import { Houses } from './Houses';


interface Street {
  id: number,
  prefix: {
    id: number,
    name: string,
    shortName: string
  },
  name: string,
  cityId: number,
  city: string,
  nameWithPrefix: string
}

interface StreetProps {
  companyId:number
}

export const Street: FC<StreetProps> = ({companyId}) => {
  const [streets, setStreets] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await housingAPI.getStreets();
        setStreets(response.data)
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
    <div className='streets'>
      {streets.map((street: Street ) => (
        <div key={street.id} className="street" >
          <div onClick={() => toggleAccordion(street.id)}>{street.city}  {street.nameWithPrefix} {street.prefix.id}</div>
          <div>
            {activeIndex === street.id && (
                <div className='listCollapse'>
                    <Houses streetId={street.id}/>
                </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};