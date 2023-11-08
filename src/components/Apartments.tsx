import { FC, useEffect, useState } from 'react';
import { housingAPI } from '../api/api';


interface Apartment {
  addressId: number
  streetId: number
  houseId: number
  streetName: string
  building: string
  corpus: string
  flat: string
}

interface ApartmentsProps {
  houseId:number
  streetId:number
}

export const Apartments: FC<ApartmentsProps> = ({houseId, streetId}) => {
  const [apartments, setApartments] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await housingAPI.getHouseStock(houseId, streetId);
        setApartments(response.data)
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
    <div className='apartments'>
      {apartments.map((apartment: Apartment ) => (
        <div key={apartment.addressId} className="apartment" >
          <div onClick={() => toggleAccordion(apartment.addressId)}>Квартира № {apartment.flat} </div>
          <div>
            {activeIndex === apartment.addressId && (
              <div className='listCollapse'>
                  test1
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};