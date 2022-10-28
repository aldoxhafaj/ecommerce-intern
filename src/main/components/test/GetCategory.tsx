import {FC,useEffect} from 'react';
import axios from 'axios';

const GetCategory : FC = () => {

    const get = async () => {
        const response = await axios.get(
          "http://192.168.10.248:2208/api/category/get-all"
        );
        console.log(response);
        return response;
      };
    
      useEffect(() => {
        get();
      }, []);

      return (
        <div>{get}</div>
      );
}

export default GetCategory;