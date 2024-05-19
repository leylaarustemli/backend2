
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import "./App.css"
import axios from 'axios'
import MainContext from "./context/context";
import { useEffect, useState } from "react";
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setData] = useState([]);
    const[basket,setBasket]=useState([])
    const router = createBrowserRouter(ROUTES);
useEffect(()=>{
    axios.get("http://localhost:8080/api/products").then(res=>(setData([...res.data])))
},[data])
function addToBasket(id){
    
    let baskeItem=basket.find(item=>item._id==id)
    if(baskeItem){
        baskeItem.count++
        baskeItem.totalPrice+=baskeItem.price
        setBasket([...basket])
        console.log(basket);
    }
    else{
        let target=data.find(item=>item._id==id)
        let newItem={
            ...target,count:1,totalPrice:target.price
        }
        setBasket([...basket,newItem])
    }
}

function deleteBasket(id){
    let target=basket.find((x)=>x._id==id);
    if(target.count>1){
        target.count--;
        target.totalPrice=target.price*target.count;
        setBasket([...basket])
    }
    else{
        let indexOfTarget=basket.indexOf(target);
        basket.splice(indexOfTarget,1);
        setBasket([...basket])
    }
}
const contexData={
    addToBasket,data,setData,basket,setBasket,deleteBasket
}



    return (
        <>
        <MainContext.Provider value={contexData}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
