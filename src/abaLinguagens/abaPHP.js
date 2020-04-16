import React from 'react';
import { Link } from 'react-router-dom';

import '../abaLinguagens/abaPHP.css';

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







function PHP() {
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
              
            <h1 className="h1AvisoLocalPHP">Você esta na documentaçao sobre PHP!</h1>

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

        <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k" target="_blank"><div className="link"><a className="novaAba">VideoAulas</a></div></a>
        <a ><div className="link"><Link to="/abaForumPHP" className="novaAba">Fórums</Link></div></a>
        <a ><div className="link"><Link to="/abaApostilasPHP" className="novaAba">Apostilas</Link></div></a>
        <a href="https://www.php.net/docs.php" target="_blank"><div className="link"><a className="novaAba">DocumentaçaoOficial</a></div></a>
        <a href="https://www.devmedia.com.br/guia/linguagem-php/38780" target="_blank"><div className="link"><a className="novaAba">SiteParaEstudos</a></div></a>

        </nav>

      </div>
      
     



        <header className="conteudoPHP">


          <h1 className="titulo">Documentaçao PHP</h1>
          <h2 className="conteudo">  PHP é uma linguagem usada primordialmente para o desenvolvimento<br/> 
          de  aplicações no server-side, capaz de gerar  conteúdo dinâmica na web<br/>
          (world wide web). O código é interpretado pelo módulo PHP  que gera páginas<br/>
           webs no cliente-side. Com o passardo tempo a linguagem ganhou<br/>
          linha de comando e caracteres que possibilitou o uso adicional do PHP.<br/>
          O domínio do PHP é no campo do desenvolvimento web. Com o propósito <br/>
          de desenvolver soluçõesna web rápidas, simples e eficaz.<br/>

          <br/>
           Caracteristicas:<br/>
            <ul>
              <li>Rápido e robusto</li>
              <li>Tipagem dinâmica</li>
              <li>Portabilidade</li>
              <li>Orientação a objetos</li>
              <li>Código aberto</li>
              <li>Cliente-side</li>
                                        
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


export default PHP;












