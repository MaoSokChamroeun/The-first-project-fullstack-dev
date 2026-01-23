import axios from "axios";
import { useEffect, useState } from "react"

const useCategory = () => {
    const [categories , setCategories] = useState([]);
    const [loading , setLoading] = useState(false);
    const getAllCategory = async() => {
        setLoading(true)
        try{
            const res = await axios.get('http://localhost:5000/api/category');
            if (res.data.success) {
                setLoading(false)
                setCategories(res.data.data);
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getAllCategory();
    },[])
    return (
        {
            categories , loading
        }
    )
}

export default useCategory