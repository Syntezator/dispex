import axios from "axios";

const API = axios.create({
    baseURL: 'https://dispex.org/api/vtest/',
    headers: {
        'Accept': 'application/json'
    }
});

export const housingAPI = {
  getHouseStock: (houseId:number, streetId:number) => {
    return API.get(`/HousingStock?companyId=1&streetId=${streetId}&houseId=${houseId}`)
  },
  getStreets: () => {
    return API.get(`/Request/streets`)
  },
  getHouses: (streetId:number) => {
    return API.get(`/Request/houses/${streetId}`)
  },
  create: (data:{title:string, description: string}) => {
    return API.post('/project/add', data)
  },
  delete: (projectId: number) => {
    return API.delete(`/project/delete/${projectId}`);
  }
}