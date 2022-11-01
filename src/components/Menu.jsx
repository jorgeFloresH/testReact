import { useEffect } from "react";
const Menu =({ color ='yellow', title})=>{
    const getWidth=()=>{
        console.log(window.innerWidth);
    };
    useEffect(()=>{
        window.addEventListener('resize', getWidth);
        console.log('componente menu cargado')
    },[]
    );
    return(
        <>
        <>este es el menu</>
        <br />
        <>donde donde ?</>
        </>
    )
    
};
export default Menu;