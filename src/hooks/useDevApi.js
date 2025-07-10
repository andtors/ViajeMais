import axios from 'axios';

// Hook para consumir api simples sem necessidade de key
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

