import React from 'react';
import { Link } from 'react-router-dom';

import '../abaLinguagens/abaHTML.css';

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







function HTML() {
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
              
            <h1 className="h1AvisoLocalHTML">Você esta na documentaçao sobre HTML!</h1>

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

        <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o" target="_blank"><div className="link"><a className="novaAba">VideoAulas</a></div></a>
        <a ><div className="link"><Link to="/abaForumHTML" className="novaAba">Fórums</Link></div></a>
        <a ><div className="link"><Link to="/abaApostilasHTML" className="novaAba">Apostilas</Link></div></a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"><div className="link"><a className="novaAba">Documentaçao</a></div></a>
        <a href="https://www.devmedia.com.br/guia/html/38051" target="_blank"><div className="link"><a className="novaAba">SiteParaEstudos</a></div></a>

        </nav>

      </div>
      
     



        <header className="conteudoHTML">


          <h1 className="titulo">Documentaçao HTML</h1>
          <h2 className="conteudo"> Linguagem de marcação usada na construção de páginas webs. É baseada<br/>
           em padrões HyTime e SGML. Padrão HyTime são para reprodução de hipermídia <br/>
          e conteúdos baseados em tempo. O padrão SGML são para a formatação de textos.<br/>
           Esta linguagem é muito interessante para quem está pensando em entrar na<br/>
           produção de aplicações voltadas para a web e conteúdo online. Recomendamos também<br/>
           o estudo de uma outra linguagem, esta de estilo chamada css.
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


export default HTML;






