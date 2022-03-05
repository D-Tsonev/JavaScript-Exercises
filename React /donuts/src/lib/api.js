import axios from "axios";

const baseUrl='http://localhost:3000/donuts'

export function getAllDobuts(){
  return axios.get(`${baseUrl}`)
}

export function getSingleDonut(id){
  return axios.get(`${baseUrl}/${id}`)
}