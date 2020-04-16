import React from 'react';
import { Link } from 'react-router-dom';

import '../Ecspert/abaEcspert.css'

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





function Ecspert() {
  return (

    <div className="Menu">

      <body className="bodyEcspert">
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
              
              <h1 className="h1AvisoLocalEcspert">Você esta na documentaçao sobre Ecspert!</h1>

                <ul className="ulPrincipal">
          
                  <li className="LiMenuLinguagens"><a href="" className="aMenu">LINGUAGENS</a>

                    <ul className="subUl">
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/CSharp">C#</Link></a></li>
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/JS">JS</Link></a></li>
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/HTML">HTML</Link></a></li>
                      <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/PHP">PHP</Link></a></li>
                    </ul>
                  
                  </li>
                
                  <li className="LiMenu"><a href="#" ><Link to="/abaIniciante" className="aMenu">INICIANTE</Link></a></li>

<li className="LiMenu"><a href="" ><Link to="/abaEcspert" className="aMenu">ECSPERT</Link></a></li>

                </ul>

                </header>
        </div>

        <header className="divPesquisa">
              <img src={LogoAnimaçao} className="logoAnimaçao" alt="LS"  />
              
              <Form />
              
           
              <h2 className="h2Pesquise">Pesquise;</h2>

        </header>

     



        <header className="conteudoEcspert">


          <h1 className="titulo">Introdução</h1>
          <h2 className="conteudo"> Se você acessou essa aba, é porque tem um conhecimento aprofundado sobre programação<br/>
                                    ,dessa forma vou estar passando aqui algumas informaçoes sobre linguagens novas que <br/>
                                    podem interessar você, alem também de algums links para melhorar sua forma de  <br/>
                                    trabalho e te ajudar no mercado de trabalho.<br/>
                                     
                                     <h1 className="titulo2">Linguagens do momento!</h1>
                                     <br/>
                                    Estamos aqui para te informa que algumas linguagens estão bombando no mercado e por<br/>
                                    isso talvez seja legal você aprender a usar as mesmas. Essas linguagens vem <br/>
                                    adiquirindo muitos usuarios pela sua facilidade de uso e o seu poder. Vamos estar <br/>
                                    listando estas liguagens e caso queira aprender mais  você pode estar verificando se <br/>
                                    nosso site tem conteudo sobre a mesma na aba Linguagens no canto superior esquerdo.<br/>
                                    Se la nao estiver sua linguagem você pode estar clicando no link abaixo,  assim você <br/>
                                   sera redirecionado para um link ensinando a como iniciar o aprendizado <br/>
                                    dessa linguagem.

                                    <br/>

                                    <span className="span">Siga abaixo uma lista;</span><br/>
                                    <ul>
                                      <li><a href="https://www.escolalinux.com.br/blog/os-6-primeiros-passos-para-aprender-java">JAVA</a></li>
                                      <li><a href="https://python.org.br/introducao/">Python</a></li>
                                      <li><Link to="/JS">JAVA SCRIPT</Link></li>
                                      <li><a href="https://www.escolalinux.com.br/blog/os-5-primeiros-passos-para-comecar-a-programar-em-php">PHP</a></li>
                                      <li><Link to="/CSharp">C#</Link></li>
                                      <li><a href="https://pt.wikibooks.org/wiki/Programar_em_C/Por_que_aprender_a_linguagem_C">C</a></li>
                                      <li><a href="https://www.ruby-lang.org/pt/documentation/quickstart/">RUBY</a></li>
                                    </ul>

                                    <br/>

                                    <h1 className="titulo2">Dicas para o mercado de trabalho.</h1>
                                    <br/>
                                    O mercado de trabalho esta a 100 porcento e segundo estimativas deve continuar <br/>
                                    a crecer com a 4 revoluçao industrial, isso proporciona uma ampla demanda de novos<br/>
                                    programadores,e nesse mercado quando mais conhecimento você tem mais requisitado sera<br/>
                                    seus serviços, por isso preparamos uma serie de links para que você possa ver dicas de <br/>
                                    especialistas, em como garantir sua vaga no mercado<br/>
                                    <span className="span">Siga abaixo uma lista;</span><br/>
                                    <ul>
                                      <li><a href="https://www.youtube.com/watch?v=1a13XfBM5_0">Como entrar no mercado?</a></li>
                                      <li><a href="https://woliveiras.com.br/posts/por-onde-come%C3%A7ar-para-aprender-e-trabalhar-com-programa%C3%A7%C3%A3o/">Por onde começar com linguagens requisitadas</a></li>
                                      <li><a href="https://www.guiadacarreira.com.br/salarios/quanto-ganha-um-programador/">Salarios</a></li>
                                    </ul>
                                    
          <br/>
          <br/>
          <img src={gifEmoji} alt="Emoji beijinho" className="Emoji"/>
          </h2>

        </header>
        </body>
</div>
)}

export default Ecspert;


  




