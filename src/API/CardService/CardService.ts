import axios from 'axios'

export default class CardsService{

    static async getAll(){
        try{
            const response = await axios.get('https://66e3139b494df9a478e433fe.mockapi.io/api/items');
            if (response.status >= 400){
                throw new Error('server-mistake');
            }
            return response.data;
        }catch(error){
            throw new Error(error);
        }
    }
    
    static async getCard(id: string){
        try {
          const response = await axios.get(
            "https://66e3139b494df9a478e433fe.mockapi.io/api/items/" + id
          );
          if (response.status >= 404) {
            throw new Error("server error");
          }
          return response.data;
        } catch (err) {
          throw new Error(err);
        }
      };
}