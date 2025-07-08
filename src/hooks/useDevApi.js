import axios from 'axios';

async function getData(url) {
    try {
        const response = await axios.get(url)
    
        const data = response.data
   
        return data
    } catch (error) {
        console.log(error)
    }
    
}

export default getData

