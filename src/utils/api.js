import axios from 'axios';

export const api = () => {
   axios
      .get('./dummy/data.json') //
      .then(res => console.log(res))
      .catch(e => {
         console.log(e);
      });
};
