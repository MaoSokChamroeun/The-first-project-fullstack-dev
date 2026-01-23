import { useEffect, useState } from "react";
import axios from "axios";


const useBanners = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/api/banner`);
                if (res.data.success) {
                    setBanners(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching banners:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBanners();
    }, []);

    // Return the object directly
    return { banners, loading };
};

export default useBanners;