// Env variables from the env file
const baseURL = import.meta.env.VITE_REACT_APP_BASE_API_URL;
const searchUrl = import.meta.env.VITE_REACT_APP_SEARCH_API_URL
const api_Key = import.meta.env.VITE_REACT_APP_BASE_API_KEY
const app_Id = import.meta.env.VITE_REACT_APP_BASE_APP_ID

// Base url configuration 
export const root = {
  baseUrl: baseURL,
  searchUrl: searchUrl,
};


// End point for the api url 
export const EndPoint = {
  // This is a separate search api for the recipe
  bySearch: `q="Apple"&app_id=${app_Id}&app_key=${api_Key}&to=1`,
  
  // This common base api url
  commonUrl: `?type=public&app_id=${app_Id}&app_key=${api_Key}`,
};

