import { useEffect, useState } from 'react'

const UseFetchCustomHook = (url, options) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(url,{
                ...options
            });
            const result = await response.json();
            console.log(result)

            if(result) {
                setLoading(false);
                setData(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return {loading , data};
}

export default UseFetchCustomHook;