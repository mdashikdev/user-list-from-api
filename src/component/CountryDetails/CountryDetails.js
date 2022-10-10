import {React,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name}=useParams();
    const [country, setcountry] = useState([]);
    const url=`https://restcountries.com/v2/name/${name}`;
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setcountry(data))
    }, [])
   const countryInfo=country[0];
    return (
        <div className='flex flex-col mt-8 items-center'>
            <div className='w-9/12 sm:w-11/12 flex flex-col items-center justify-center my-2 cursor-auto duration-150 flex flex-col p-5 border border-blue-300 rounded hover:shadow-lg shadow-md'>
                    <img src={countryInfo?.flags?.png} className='w-32 h-32 object-cover rounded-full' alt="" />
                    <div className='grid'>
                        <strong>Name: {countryInfo?.name} </strong>
                        <small>Capital: {countryInfo?.capital} </small>
                    </div>
                    <div className='flex flex-row sm:flex-col gap-5 justify-center'>
                        <ul>
                            <li>Alpha3Code: {countryInfo?.alpha3Code}</li>
                            <li>AltSpellings: {countryInfo?.altSpellings[1]}</li>
                            <li>Area: {countryInfo?.area}</li>
                            <li>Borders: {`${countryInfo?.borders}`}</li>
                            <li>CallingCodes: {countryInfo?.callingCodes[0]}</li>
                            <li>Cioc: {countryInfo?.cioc}</li>
                            <li>Currencies: {`code-${countryInfo?.currencies[0]?.code},name-${countryInfo?.currencies[0]?.name},symbol-${countryInfo?.currencies[0]?.symbol}`}</li>
                            <li>Demonym: {countryInfo?.demonym}</li>
                            <li className='flex gap-2'>Flag: <img src={countryInfo?.flag} className='w-6 h-6 rounded-full' alt="" /></li>
                            <li>Gini: {countryInfo?.gini}</li>
                        </ul>
                        <ul>
                            <li>Independent: {`${countryInfo?.independent}`}</li>
                            <li>Languages:
                                <ul>
                                    <li>{`->`+ countryInfo?.languages[0]?.name}</li>
                                    <li>{`->` + countryInfo?.languages[1]?.name}</li>
                                </ul>
                            </li>
                            <li>latlng: {`${countryInfo?.latlng[0]},${countryInfo?.latlng[1]}`}</li>
                            <li>NativeName: {countryInfo?.nativeName}</li>
                            <li>NumericCode: {countryInfo?.numericCode}</li>
                            <li>Population: {countryInfo?.population}</li>
                            <li>Region: {countryInfo?.region}</li>
                            <li>Timezones: {countryInfo?.timezones}</li>
                            <li>TopLevelDomain: {countryInfo?.topLevelDomain}</li>
                            <li>Translations:{`br-${countryInfo?.translations?.br},de-${countryInfo?.translations?.de},es-${countryInfo?.translations?.es},fa-${countryInfo?.translations?.fa},fr-${countryInfo?.translations?.fr},hr-${countryInfo?.translations?.hr},hu-${countryInfo?.translations?.hu},it-${countryInfo?.translations?.it},ja-${countryInfo?.translations?.ja},nl-${countryInfo?.translations?.nl},pt-${countryInfo?.translations?.pt}`}</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default CountryDetails;