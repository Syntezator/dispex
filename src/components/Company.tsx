import { FC, useEffect, useState } from 'react';
import { Street } from './Street';


interface Company {
  id: number;
  title: string;
  description: string;
}

interface CompanyProps {
  
}

export const Company: FC<CompanyProps> = () => {
  const [company, setCompany] = useState('');

  return (
    <div className="row justify-content-center ">
      <div className='col-8'>
        <div className='company'>
            {/* {projects.map((project: Project) => (
              <div key={project.id} className="project">
                <a href={`/tasks/${project.id}`}>{project.title}</a>
                <span>{project.description}</span>
                <button onClick={() => handleDelete(project.id)}>Удалить</button>
              </div>
            ))} */}
          <select className='customDropdown'
            value={company} 
            onChange={(e) => setCompany(e.target.value)}
            >
              <option selected disabled value=''>
                Выберите компанию
              </option>
              <option value='1'>Компания 1</option>
              <option value='2'>Компания 2</option>
              <option value='3'>Компания 3</option>
          </select>
        </div>
        
      </div>
      <div className='col-8'>
        <Street companyId={Number(company)} />
      </div>
    </div>
  );
};