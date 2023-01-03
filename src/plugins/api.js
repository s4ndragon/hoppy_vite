import axios from "axios";
// import Qs from "qs";
export default {
    getHomeBanner() {
        axios
            .get("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeBanner.json")
            .then((response) => response);
        // return axios.post("https://hoppy-vue-cli-bfe34-default-rtdb.asia-southeast1.firebasedatabase.app/homeBanner");
    },
};
