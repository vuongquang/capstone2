import axios from 'axios'
import * as Config from '../constrains/Config'

export default function callAPI(endpoint, method='GET',body){
    return axios({
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body
      }).catch(err=>{
          alert (err)
    });
}
