import { useState,useEffect } from "react";
export function LoadingBar(){
    const [filled,setFilled]=useState(0);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        if(filled<100 && isLoading ){
            setTimeout(()=>setFilled(prev=>prev+=5),500);
        }
    },[filled,isLoading])

    return(
        <div style={{width: "100%"}}>
            <div style={{
                width: "100%", 
                height: "20px", 
                backgroundColor: "#e0e0e0", 
                borderRadius: "1rem",
                overflow: "hidden"
            }}>
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    background: "linear-gradient(30deg, #e781fb 10%, #8e76fa 60%)",
                    transition: "width 0.5s",
                    borderRadius: "1rem"
                }}></div>
            </div>

        </div>
    )
}