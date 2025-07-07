import axios from 'axios';

async function getData(url) {
    const response = await axios.get(url)
    
    const data = response.data
   
    return data
}

export default getData

