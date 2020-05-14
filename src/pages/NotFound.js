import React from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

export  const NotFound = () => {
    return <div>
        <h1 className='title'>404!</h1>
        <h2>No existe la página</h2>
        <br/>

        <ButtonBackToHome />
    </div>
}