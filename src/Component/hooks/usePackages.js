import { useEffect, useState } from "react";
import data from "../Data/Data";

const usePackages = () =>{
    
    const [packages, setPackages] = useState([]);

    useEffect( () =>{setPackages(data);
    }, []);

    return [packages, setPackages];
}

export default usePackages;