import axios from "axios";

const KEY = "AIzaSyBlHXKySbWRv6VdH8UrtmBLZnq0JwAOv_o";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  type: "video",
  key: `${KEY}`,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
