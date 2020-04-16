import React from 'react';
import { Link } from 'react-router-dom';

import '../iniciante/abaIniciante.css'

import LogoAnimaçao from '../Assets/img/LogoPesqAnimaçao.png';

import MenuLogo from '../Assets/img/LogoMenu.png';

import ButtonSobre from '../components/Buttons/ButtonSobre/indexSobre';

import ButtonReferencias from '../components/Buttons/ButtonReferencias/indexReferencias';

import ButtonMenu from  '../components/Buttons/ButtonMenu/indexMenu';

import Form from '../Form'

import LogoSobre from '../Assets/img/LogoSobre.png';

import LogoReferencias from '../Assets/img/LogoReferencias.png';

import 'normalize.css';

import gifEmoji from '../Assets/img/gif emoji beijo - Pesquisa Google_files/e061552b0bc6615f8504893bc8c6fbb3.gif'

import MenuDocumentaçao from '../Assets/img/menuDocumentaçao.png'





function Iniciante() {
  return (

    <div className="Menu">

      <body className="bodyIniciante">
         <div>
        <header className="Menu-header">
        
         <h1 className="Logo">
           Language<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;Research
         </h1>
       
            <ul className="headerOpçoes">
            
              <li className="headerMenu"> <a><img src={MenuLogo} alt="Logo Menu" className="logoMenu"/><ButtonMenu/></a></li>

                  <li className="headerSobre"><a><img src={LogoSobre} alt="Logo sobre" className="logoSobre"/> <ButtonSobre /> </a> </li>  

                    <li className="headerReferencias"> <a><img src={LogoReferencias} alt="Logo Referencias" className="logoReferencias"/><ButtonReferencias/> </a></li>

                  

            </ul> 

        </header>
        </div>

        <div>

       
            <header className="headerMain">
              
              <h1 className="h1AvisoLocalIniciante">Você esta na documentaçao sobre iniciante!</h1>

                <ul className="ulPrincipal">
          
                  <li className="LiMenuLinguagens"><a href="" className="aMenu">LINGUAGENS</a>

                    <ul className="subUl">
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/CSharp">C#</Link></a></li>
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/JS">JS</Link></a></li>
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/HTML">HTML</Link></a></li>
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/PHP">PHP</Link></a></li>
                    </ul>
                  
                  </li>
                
                  <li className="LiMenu"><a href="#"><Link to="/abaIniciante" className="aMenu">INICIANTE</Link></a></li>

                  <li className="LiMenu"><a href="" ><Link to="/abaEcspert" className="aMenu">ECSPERT</Link></a></li>
                </ul>

                </header>
        </div>

        <header className="divPesquisa">
              <img src={LogoAnimaçao} className="logoAnimaçao" alt="LS"  />
              
              <Form />
              
           
              <h2 className="h2Pesquise">Pesquise;</h2>

        </header>

     



        <header className="conteudoIniciante">


          <h1 className="titulo">Introdução</h1>
          <h2 className="conteudo"> Se você acessou essa aba, você provavelmente nao tem tanto conhecimento sobre <br/>
                                    programação e por isso aqui eu vou estar indicando alguns conteúdos ótimos para<br/>
                                    você começar a programar, também vamos mostrar algumas otimas linguagens para <br/>
                                    começar a programar e facilitar sua vida.<br/>
                                    <span className="span">Siga abaixo uma lista;</span><br/>
                                    <ul>
                                      <li><a href="https://www.researchgate.net/publication/268510321_CONCEITOS_BASICOS_SOBRE_PROGRAMACAO_Programacao_Orientada_a_Objetos_POO">Conceitos iniciais de POO</a></li>
                                      <li><a href="https://www.devmedia.com.br/guia/introducao-a-programacao/37404">Introdução</a></li>
                                      <li><a href="https://www.youtube.com/watch?v=_FzkHVWFctI">Qual linguagem começar?</a></li>
                                    </ul>

                                    <br/>                             
          <br/>
          <br/>
          <img src={gifEmoji} alt="Emoji beijinho" className="Emoji"/>
          </h2>

        </header>
        </body>
</div>
)}

export default Iniciante;


  




