import React from 'react';

import { Link } from 'react-router-dom'



function trocaPagSobre() {
    return(
    <Link to="/sobre">Ir para sobre \o/</Link>
 )   
}

export default () => <Link className="Sobre" to="/sobre">SOBRE</Link>;
            
       
