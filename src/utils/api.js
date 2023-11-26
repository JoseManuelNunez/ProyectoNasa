
const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

const fetchNASAData = async (urlParams = "") => {
    const apiUrlWithParams = `${'https://api.nasa.gov/planetary/apod'}?api_key=${'QW4HDTmy6iQEb5igmCuYsYyVw9wIXxaiXtw8ihsB'}${urlParams}`;
    try {
        const response = await fetch(apiUrlWithParams);
        console.log(response)
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export default fetchNASAData;