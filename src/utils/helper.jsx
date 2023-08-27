import { useEffect, useState } from "react";

export const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if the user is online or not

    useEffect(() =>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", () =>{
            setOnlineStatus(true);
        })

    }, []);

    //boolean value

    return onlineStatus;
}


