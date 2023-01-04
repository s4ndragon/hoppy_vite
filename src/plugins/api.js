import axios from "axios";
// import Qs from "qs";
export default {
    getHomeBanner() {
        return axios
            .get("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeBanner.json")
            .then((response) => response.data);
        // return axios.post("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeBanner");
    },
    getHomeProducts() {
        return axios
            .get("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeProducts.json")
            .then((response) => response.data);
    },
    getBeerInfos(theBeerId) {
        return axios
            .get(
                "https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/beers/" +
                    theBeerId +
                    ".json"
            )
            .then((response) => response.data);
    },
};