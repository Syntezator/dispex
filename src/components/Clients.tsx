import { FC, useEffect, useState } from 'react';
import { housingAPI } from '../api/api';


interface Client {
  id: number
  name: string
  phone: string
  email: string
  bindId: number
}

interface ClientsProps {
  houseId:number
  streetId:number
}

export const Clients: FC<ClientsProps> = ({houseId, streetId}) => {
  const [clients, setClients] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await housingAPI.getHouseStock(houseId, streetId);
        console.log(response.data) 
        setClients(response.data)
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
      {clients.map((client: Client ) => (
        <div key={client.id} className="apartment" >
          <div onClick={() => toggleAccordion(client.id)}>{client.name} {client.phone}</div>
          <div>
            {activeIndex === client.id && (
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