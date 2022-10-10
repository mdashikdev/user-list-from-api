import {React,useState,useEffect} from 'react';
import Country from '../Country/Country';
import loadinggif from '../loading.gif';

const Home = () => {
    const [countries, setcountries] = useState([]);
    const loadgif = (status) => {
        document.getElementById('loadingGif').style.display=`${status}`
    };
    useEffect(() => {
        loadgif('block');
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => {
            loadgif('none');
            setcountries(data)
        });
    }, [])

    return (
        <div className='flex flex-col mt-8 items-center'>
            <h1 className='text-2xl text-bold'>Countries: {countries.length}</h1>
            <img src={loadinggif} id='loadingGif' className='hidden' alt="" />
           {
            countries.map(country => <Country key={country.name} usrInf={country} /> )
           }
        </div>
    );
};

export default Home;