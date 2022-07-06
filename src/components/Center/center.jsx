import { useEffect } from "react";
import { useState } from "react";
import './center.css'
import lan from "./lanhouse.jpg"
const PAGE_NUMBER = 1;

function Center(){
 const [state, setState] = useState( []);
 const[page, setPage]= useState(PAGE_NUMBER);
 useEffect(  () =>{
fetch(
    'https://api.instantwebtools.net/v1/passenger?page=${page}&size=5'
)
.then(res=>res.json())
.then(json=> setState([...state, ...json.data]))
 }, [page]);
 const scrollToEnd = () =>{
    setPage( page+1);
 }
 window.onscroll = function (){
    if(window.innerHeight+document.doctype.scrollTop===document.documentElement.offsetHeight){
        scrollToEnd()
    }
 };
 return(
    <div className="center">
        {state.length> 0 && state.map((el,i)=>
            <div key={i} className={'container'}>
         <div className="public_name">
        <img src={lan} width={60} alt="" className="imagem-comercio" />
        <h3 className="comercios_name">Michele</h3>
        </div>
        <div className="public">
            <h3 className="public_h3">Novo item da nossa coleção
            camisetas personalizadas, venha conhecer</h3>
            <img src={lan} width={365} alt="" />
        </div>
    </div>
        ) 
        }
    </div>
 )
}
export default Center;