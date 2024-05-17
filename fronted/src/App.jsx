
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
    const[basket,setBasket]=([])
    const router = createBrowserRouter(ROUTES);
useEffect(()=>{
    axios.get("http://localhost:5000/api/blogs").then(res=>(setData([...res.data])))
},[])
function addToBasket(id){
    let baskeItem=basket.find(item=>item._id==id)
    if(baskeItem){
        baskeItem.count++
        baskeItem.totalPrice+=baskeItem.price
        setBasket([...basket])
    }
    else{
        let target=data.find(item=>item._id==id)
        let newItem={
            ...target,count:1,totalPrice:target.price
        }
        setBasket([...basket,newItem])
    }
}
const contexData={
    addToBasket,data,setData,basket,setBasket
}


    return (
        <>
        <MainContext.Provider value={{data, setData, loading, setLoading, error, setError,basket,setBasket}}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
