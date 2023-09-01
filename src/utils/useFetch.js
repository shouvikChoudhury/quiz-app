import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [apiData, setapiData] = useState([]);

    const getapiData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setapiData(data);
    };
    useEffect(() => {
        getapiData();
    }, []);

    return { apiData }
}

export default useFetch