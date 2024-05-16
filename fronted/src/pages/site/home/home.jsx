
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import Section1 from '../../../components/Section1'
import Cardsection from '../../../components/Cardsection'
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
               <Section1/>
               <Cardsection/>
        </>
        )
    }
    
    export default Home
        