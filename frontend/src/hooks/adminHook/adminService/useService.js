import axios from "axios"
import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllService = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/api/services');
            if (res.data.success) {
                setServices(res.data.data || []);
                console.log(res.data.data)
            }
        } catch (error) {
            console.error('Fetching error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllService();
    }, []);

    return {
        services, 
        getAllService, 
        loading
    };
};

export default useService;