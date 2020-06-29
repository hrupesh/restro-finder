import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "BearerAPY_wrfQRVvIM6qG8LcY-Nv3ZWD7Rx-aboIfk6qEAx1NDNv6uRGPzE5--skfpcapPtlZTTIKDopBYnznhAsO1wk-wP7Jadpb5xqaTtjyZru7jq_MG8Ud4qQQZMn3XnYx",
  },
});
