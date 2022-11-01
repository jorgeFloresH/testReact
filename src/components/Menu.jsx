import { useEffect } from "react";
const Menu =({ color ='yellow', title})=>{
    
    useEffect(()=>{
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