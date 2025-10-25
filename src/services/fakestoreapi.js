const API_KEY = "key value here" // no key needed for FakeStoreApi
const BASE_URL = "https://fakestoreapi.com/products"

export const getFakeStoreApiFunction = async () => {
    const response = await
    fetch(`${BASE_URL}`);
    const data = await response.json()
    return data;
};

