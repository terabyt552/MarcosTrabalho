import React from 'react';
import './Menu.css'
import 'normalize.css'
import { Link } from 'react-router-dom';


import MenuLogo from './Assets/img/LogoMenu.png';
import ButtonSobre from './components/Buttons/ButtonSobre/indexSobre';
import ButtonReferencias from './components/Buttons/ButtonReferencias/indexReferencias';
import ButtonMenu from  './components/Buttons/ButtonMenu/indexMenu';


import LogoAnimaçao from './Assets/img/LogoPesqAnimaçao.png';
import LogoSobre from './Assets/img/LogoSobre.png';
import LogoReferencias from './Assets/img/LogoReferencias.png'


import SlideMenu from './SlideMenu'
import ProgramadorLucas from './Assets/img/ProgramadorLucas.png'
import ProgramadorSostenes from './Assets/img/ProgramadorSostenes.png'
import LogoProgramador from './Assets/img/LogoProgramador.png'








function Menu() {
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
              

            <ul className="ulPrincipal">
          
              <li className="LiMenuLinguagens"><a href="" className="aMenu">LINGUAGENS</a>

                <ul className="subUl">

                  <li className="SubLiMenu"><a href="" className="SubaMenu"><Link to="/CSharp">C#</Link> </a></li>

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

      
    <main>
 
      <div className="divSlide">
   
        <SlideMenu/>
       
      </div>
      
      <div className="divProgramadores">

        <img src= {ProgramadorLucas} alt="img programadorLucas" className="ProgramadorImg"/>

          <br/>
          <br/>

            <h1 className="h1Lucas"> &nbsp;&nbsp;Lucas Pereira<br/>  &nbsp; &nbsp; &nbsp;  Trindade</h1>

              <a href="https:/facebook.com/Terabyt552" target="_blank"><img src={LogoProgramador} alt="Logo Programador" className="LogoProgramador"/></a>
      
      </div>
   
      <div className="divProgramadores">

        <img src= {ProgramadorSostenes} alt="img programadorSostenes" className="ProgramadorImg"/>

          <br/>
          <br/>

            <h1 className="h1Lucas"> <a>&nbsp;&nbsp;Sóstenes Souza<br/>&nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  Ribeiro</a></h1>

            <a href="https:/facebook.com/Terabyt552" target="_blank"><img src={LogoProgramador} alt="Logo Programador" className="LogoProgramador"/></a>
      </div>

    </main>
    
      <footer className="HeaderFim">

        <h1 className="Residencia">Localizado, Dianópolis-TO IFTO Campus Dianópolis.</h1>
        <h1 className="Prog">LUCAS PEREIRA</h1>
        <h1 className="Prog">SOSTENES RIBEIRO</h1>
         <img className="LogoAnimaçao" src={LogoAnimaçao}/>

      </footer>
      
    

    </body>

    </div>
  )
}

export default Menu;
