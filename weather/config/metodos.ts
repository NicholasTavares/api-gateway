import { Request, Response } from "express"
import axios from 'axios'

interface IWeather {
  location: {
    name: string
    region: string
    country: string
    localtime: string
  }
}

const API_KEY = '9189ea1fc29b46748f1134514222807'

export const Weather = async (req: Request, res: Response) => {
  const response = await axios
  .get<IWeather>(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=natal&aqi=no`)
  .then(({data}) => res.json(data))
  .catch((err) => console.log(err))

  return response
}
