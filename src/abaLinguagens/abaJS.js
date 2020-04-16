import React from 'react';
import { Link } from 'react-router-dom';

import '../abaLinguagens/abaJS.css';

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







function JS() {
  return (

    <div className="Menu">

      <body className="bodyMenu">
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
              
            <h1 className="h1AvisoLocalJS">Você esta na documentaçao sobre JS!</h1>

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
        </body>


<header className="divPesquisa">
              <img src={LogoAnimaçao} className="logoAnimaçao" alt="LS"  />
              
              <Form />
              
           
              <h2 className="h2Pesquise">Pesquise;</h2>

        </header>
     
     <input type="checkbox" id="check"></input>
     <label id= "icone" for="check"><img src = {MenuDocumentaçao} className="menuDocumentaçao"/></label>
     
      <div className="barra">

      <nav>

        <a href="https://www.youtube.com/playlist?list=PLuHnogVhQCn-UE3A6DwBdOxrTcgJPCtXo" target="_blank"><div className="link"><a className="novaAba">VideoAulas</a></div></a>
        <a ><div className="link"><Link to="/abaForumJS" className="novaAba">Fórums</Link></div></a>
        <a ><div className="link"><Link to="/abaApostilasJS" className="novaAba">Apostilas</Link></div></a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><div className="link"><a className="novaAba">Documentaçao</a></div></a>
        <a href="https://www.devmedia.com.br/guia/javascript/34372" target="_blank"><div className="link"><a className="novaAba">SiteParaEstudos</a></div></a>

        </nav>

      </div>
      
     



        <header className="conteudoJS">


          <h1 className="titulo">Documentaçao JS</h1>
          <h2 className="conteudo"> Linguagem de programação principalmente para cliente-side em navegadores web.<br/>
           É uma linguagem de programação de Script em alto nível mas de tipagem dinâmica fraca<br/>
           e multiparadigma. Junto com HTML e CSS, o Js é uma das três principais linguagem do <br/>
           world wide web. Esta linguagem é talvez uma das mais interessantes de se aprender pois <br/>
           possui um poder imenso e tambem é indicada para quem esta pensando em desenvolver <br/>
           aplicações para web e conteúdo online, além tambem de varias outras aplicações.<br/>
           <br/>
           Caracteristicas:<br/>
            <ul>
              <li>Estruturada e imperativa</li>
              <li>Tipagem dinâmica</li>
              <li>Orientação a objetos</li>
              <li>Orientação a protótipos</li>
              <li>Funcional</li>
                                        
            </ul>

          <br/>
          <br/>
          <br/>
          Bem agora vc pode ir a aba ao lado esquerdo da sua tela e escolher por onde quer <br/>
          começar, nao se preoucupe se a explicação foi breve, nosso intuito não é ensinar<br/>
           o usuario mais sim facilitar o encontro de conteudo para estudos. Na aba vc vai<br/>
            encontrar videos apostilas links e etc...Boa Sorte nos seus estudos!

          <br/>
          <br/>
          <img src={gifEmoji} alt="Emoji beijinho" className="Emoji"/>
          </h2>

        </header>
        
</div>
)}


export default JS;












