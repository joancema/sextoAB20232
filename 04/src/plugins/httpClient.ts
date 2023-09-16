
import axios from "axios";



export const httpClientPlugin = {
  get:  async <T> (url:string):Promise<T> => {
    const { data } = await axios.get<T>( url );
    return data;
  },

  post: async(url:string, body:string) => {},
  put: async(url:string, body:string) => {},
  delete: async(url:string) => {},

};

