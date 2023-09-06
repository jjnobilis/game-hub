import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "502bcf8355cc4734ba426082f7a40878"
    }
})

