import React from 'react';

import './Sobre.css'

import Logo from './Assets/img/Logo.png'






function App() {
  return (
    <div className="App-Sobre">
        <body className="bodySobre">

            <main>
            
                <header className="HeaderSobre">
            
                <h1 className="Logo">
           Language<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;Research
         </h1>
       
        
                </header>

                <div className="divH1">
                    
                    <h1 className="h1Sobre">Objetivo</h1>

                        <h2 className="h2Sobre">
                        Este Site, tem intuito de ajudar novos programadores que tem dificuldade de entender a forma 
                        complexa de sintaxes expostas em outros sites, dando exemplos simples, informando parte de 
                        codigos e tambem mostrando as melhores formas de estudar uma nova linguagem.
                        </h2>
                    
                    <h1 className="h1Sobre">Construçao</h1>

                        <h2 className="h2Sobre">
                        Este Site, foi construido totalmente sobre a biblioteca React,  alem desta biblioteca foram 
                        utilizados icones fontes,logos criadas em terceiros sendo possivel acessalas na aba referencias;
                        </h2>

                    <h2 className="h2Sobre">
                        Este site foi desenvolvido pelos alunos Lucas Pereira Trindade e Sostenes Souza Ribeiro.
                    </h2>
                </div>

            </main>

        </body>
    </div>
  )
}


export default App;
