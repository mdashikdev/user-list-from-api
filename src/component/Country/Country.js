import React from 'react';
import { Link } from 'react-router-dom';

const User = ({usrInf}) => {
    return (
        <Link to={`/country/${usrInf.name}`} className='w-9/12 relative my-2 cursor-pointer duration-150 flex flex-col p-5 border border-green-400 rounded hover:-translate-y-1 hover:shadow-lg shadow-md'>
            <span className='w-fit top-2 right-2 absolute px-2 text-white rounded-full bg-green-400'>{usrInf.id}</span>
            <div className='flex gap-3'>
                <img src={usrInf.flags.png} className='w-12 h-12 object-cover rounded-full' alt="" />
                <div className='flex flex-col'>
                    <strong>Name: {usrInf.name} </strong>
                    <small>Capital: {usrInf.capital} </small>
                </div>
            </div>

        </Link>
    );
};

export default User;