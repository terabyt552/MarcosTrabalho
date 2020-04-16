import React, { Component } from 'react'
import './Form.css';


class Form extends Component {
   state = {

   errors: {},

   Pesquisa: ""

   }

render() {
   const { errors, Pesquisa, } = this.state;
   
      return (

         <form className="Form" onSubmit={this.handleSubmit}>

            <div className="Form-Group">
    
               <input className="Pesquisar" name="Pesquisa" placeholder="  Pesquisar" type="text" onBlur={this.handlePesquisarBluer} onChange={this.handlePesquisaChange}  value={Pesquisa}/>
            
               <div>

                  <spam className="Erro">{errors.Pesquisa}</spam>

               </div>
        
            </div>

         </form>
        )
    }

   handlePesquisarBluer = () => {

      const{Pesquisa} = this.state

         if (Pesquisa.trim().length) {

            this.setState(({errors}) =>({

               errors: {...errors, Pesquisa: ""}

        }))

         } else{

            this.setState(({errors}) =>({

               errors: {...errors, Pesquisa: "Escreva algo!"}

        }))     
    }
}

   handlePesquisaChange = event => this.setState({Pesquisa: event.target.value})

   handleSubmit = event => {

      const {Pesquisa,} = this.state

         event.preventDefault()

            if(JSON.stringify(Pesquisa) == JSON.stringify("for") || JSON.stringify("For") || JSON.stringify("FOR")) {
               alert("http://w3.impa.br/~zubelli/tutorial/node5.html " + "copie o link e cole no navegador")
            }

            if(JSON.stringify(Pesquisa) == JSON.stringify("while") || JSON.stringify("While") || JSON.stringify("WHILE"))  {
               alert("http://w3.impa.br/~zubelli/tutorial/node5.html " + "copie o link e cole no navegador")
            }

            
            if(JSON.stringify(Pesquisa) == JSON.stringify("if") || JSON.stringify("IF")  || JSON.stringify("If")  || JSON.stringify("iF")) {
               alert("http://w3.impa.br/~zubelli/tutorial/node5.html " + "copie o link e cole no navegador")
            }
}
}
export default Form;