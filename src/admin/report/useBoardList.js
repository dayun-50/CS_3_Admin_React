import { useEffect, useState } from "react";
import { caxios } from "../../config/config";

function useBoardList(){

    const [data, setData] = useState([{}]);

    useEffect(()=>{
        caxios.get("/report/boardList")
        .then(resp=>{
            console.log(resp.data);
            setData(resp.data);
        })
        .catch(err=>console.log(err));
    }, [])

    return{
        data
    }
}
export default useBoardList;