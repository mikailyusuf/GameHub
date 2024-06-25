import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"7be94f941b3e48689105a62c4168fa6b",
    }
});