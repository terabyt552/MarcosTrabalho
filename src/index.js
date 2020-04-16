import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu'
import Sobre from './Sobre';
import abaCSharp from './abaLinguagens/abaCSharp';

import abaJS from './abaLinguagens/abaJS';

import abaHTML from './abaLinguagens/abaHTML';

import abaPHP from './abaLinguagens/abaPHP'

import Referencias from './Referencias';

import abaForumsC from '../src/abaLinksdaAbaLing/linksC#/abaForums'

import abaApostilasC from '../src/abaLinksdaAbaLing/linksC#/abaApostilas'

import abaForumsHTML from '../src/abaLinksdaAbaLing/LinksHTML/abaForums'

import abaApostilasHTML from '../src/abaLinksdaAbaLing/LinksHTML/abaApostilas'

import abaForumsJS from '../src/abaLinksdaAbaLing/LinksJS/abaForums'

import abaApostilasJS from '../src/abaLinksdaAbaLing/LinksJS/abaApostilas'

import abaForumsPHP from '../src/abaLinksdaAbaLing/LinksPHP/abaForums'

import abaApostilasPHP from '../src/abaLinksdaAbaLing/LinksPHP/abaApostilas'

import abaEcspert from '../src/Ecspert/AbaEcspert'

import abaIniciante from '../src/iniciante/AbaIniciante'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/referencias" component={Referencias} />
        <Route path="/menu" component={Menu}/>
        <Route path="/CSharp" component={abaCSharp}/>
        <Route path="/JS" component={abaJS}/>
        <Route path="/HTML" component={abaHTML}/>]
        <Route path="/PHP" component={abaPHP}/>
        <Route path="/abaForumC" component={abaForumsC}/>   
        <Route path="/abaApostilasC" component={abaApostilasC}/> 
        <Route path="/abaForumHTML" component={abaForumsHTML}/>   
        <Route path="/abaApostilasHTML" component={abaApostilasHTML}/> 
        <Route path="/abaForumJS" component={abaForumsJS}/>   
        <Route path="/abaApostilasJS" component={abaApostilasJS}/> 
        <Route path="/abaForumPHP" component={abaForumsPHP}/>   
        <Route path="/abaApostilasPHP" component={abaApostilasPHP}/> 
        <Route path="/abaEcspert" component={abaEcspert}/>  
        <Route path="/abaIniciante" component={abaIniciante}/>    

    </Switch>
</ BrowserRouter>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
