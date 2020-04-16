import React from 'react';
import { Link } from 'react-router-dom';

import '../abaLinguagens/abaCSharp.css';

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





function CSharp() {
  return (

    <div className="Menu">

      <body className="bodyCSharp">
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
              
              <h1 className="h1AvisoLocalCSharp">Você esta na documentaçao sobre CSharp!</h1>

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
     
     <input type="checkbox" id="check"></input>
     <label id= "icone" for="check"><img src = {MenuDocumentaçao} className="menuDocumentaçao"/></label>
     
      <div className="barra">

      <nav>

        <a href="https://www.youtube.com/watch?v=sngC8L_SK2w&list=PLEdPHGYbHhlcxWx-_LrVVYZ2RRdqltums" target="_blank"><div className="link"><a className="novaAba">VideoAulas</a></div></a>
        <a ><div className="link"><Link to="/abaForumC" className="novaAba">Fórums</Link></div></a>
        <a ><div className="link"><Link to="/abaApostilasC" className="novaAba">Apostilas</Link></div></a>
        <a href="https://docs.microsoft.com/pt-br/dotnet/csharp/" target="_blank"><div className="link"><a className="novaAba">DocumentaçaoOficial</a></div></a>
        <a href="https://www.devmedia.com.br/guia/linguagem-csharp/38152" target="_blank"><div className="link"><a className="novaAba">SiteParaEstudos</a></div></a>

        </nav>

      </div>
      
     



        <header className="conteudoCSharp">


          <h1 className="titulo">Documentaçao CSharp</h1>
          <h2 className="conteudo"> CSharp é uma linguagem criada pela Microsoft voltada para o .NET,  a mesma tem<br/>
                                    uma tipagem forte é multiparadigma com uma base  do c++, além da influencia de<br/>
                                    outras linguagens como o java assim possuindo uma sintaxe orientada a  <br/>
                                    objeto.<br/>
                                    Ela nao esta aqui simplismente por ser uma linguagem, mais sim pelas <br/>
                                    suas caracteristicas que a colocam diretamente como ativa no mercado, algumas dessas<br/>
                                    caracteristicas você precisa saber para começar a estudar a linguagem.<br/>
                                    <span className="span">Siga abaixo uma lista;</span><br/>
                                    <ul>
                                      <li>Simplicidade: Tao poderosa quanto C++, tao simples quanto Visual Basic;</li>
                                      <li>Completamente orientada a objetos:Tudo tem que fazer parte de uma classe;</li>
                                      <li>Fortemente tipada:evita erros por manipulação imprópria de tipos e atribuições<br/> 
                                        incorretas;</li>
                                      <li>Tudo é um objeto: System.Object é a classe base de todo o sistema;</li>
                                      <li>Controle de versões: cada assembly gerado, seja como EXE ou DLL, tem informação<br/>
                                         sobre a versão do código, permitindo a coexistência de dois assemblies homônimos,<br/> 
                                         mas de versões diferentes no mesmo ambiente;</li>
                                      <li>Flexibilidade: se o desenvolvedor precisar usar ponteiros,é permitido, mas ao <br/>
                                         custo de desenvolver código não gerenciado, chamado “unsafe”;</li>
                                      <li>Linguagem gerenciada: os programas desenvolvidos executam num ambiente <br/> 
                                        gerenciado, o que significa que todo o gerenciamento de memória é feito pelo runtime<br/>
                                         via o GC (Garbage Collector).</li>
                                    </ul>
          <h1 className="subTitulo">
           Sintaxe:
          </h1>
          <br/>
          <br/>
          <br/>     
          A sintaxe em c# é muito parecida com outras linguagens de estilo C.<br/>
          <span className="span">Siga abaixo uma lista;</span><br/>
          <ul>
            <li>Os pontos e vírgulas são usados para denotar o fim de uma declaração.</li>
            <li>As chaves são usadas para agrupar declarações. As declarações são geralmente <br/>
              agrupadas em métodos (funções),<br/>
               métodos em classes, e classes em namespaces.</li>
            <li>As variáveis são atribuídas usando um sinal de igual, mas comparadas usando <br/>
              dois sinais iguais consecutivos.</li>
            <li>Colchetes são usados com arrays, tanto para declará-los e para obter um valor<br/>
               em um determinado índice em um deles.</li>
            <li>Possui uma forma limitada de diretivas de compilação.</li>
            <li>Essencialmente imperativa, como todas linguagens mainstream.</li>
          </ul>
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
        </body>
</div>
)}

export default CSharp;


  




