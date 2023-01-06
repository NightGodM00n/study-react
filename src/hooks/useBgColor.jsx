import { useEffect, useMemo } from 'react';
import { useRouter } from "next/router";

export const useBgColor = () => {
    const router = useRouter();
    const bgColor = useMemo(() => {
        switch(router.pathname){
            case "/":{
                return "lightblue";
            }
            case "/about":{
                return "beige"
            }
            default :{
                return;
            }
        }

        // return router.pathname === "/" ? "lightblue" : "beige";
    }, [router.pathname]);


    useEffect(() => {
        // console.log("マウント時");
        document.body.style.backgroundColor = bgColor;
        return () => {
            // console.log("アンマウント時");
            document.body.style.backgroundColor = "";
        }
    }, [bgColor]);
};
