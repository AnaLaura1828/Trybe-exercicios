import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalForm from "./ProfessionalForm";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            cpf: '',
            address:'',
            city: '',
            countryState: '',
            addressType: '',
        }
    }
    onBlurHandle = (event) => {
        const {name} = event.target;
        let {value } = event.target;
        if(name === 'city') value = value.match(/^\d/) ? '' : value;
        this.setState({
            [name]: value,
        })
    }

    changeHandle = (event) => { // recebe um elemento como um todo, desestrutura o valor e o nome. e com isso consigo atualizar a chave que tenha o mesmo nome
        const {name} = event.target;
        let {value } = event.target;
       
        // transformando os character em upp case quando forem digitados
        if(name === 'name') value = value.toUpperCase()
        // Removendo qualquer caracter especial que seja digitado
        if(name === 'address') value = this.validateAddress(value)
        this.setState({
           [name] : value,
        })
       }
        // funcao para remover caracter especial
    //NAO FUNCIONOU !!!
    validateAddress = (address) => address.replace(/[\u0300-\u036f]/g, '')

    render() {
        return(
            <form>
                <h1>Cadastro</h1>
                <PersonalForm  // passar o acesso e a funcoes via props para que os componentes filhos Form tenham acesso
                // passo uma prop qualquer nome
                onHandleChange={this.changeHandle}
                onHandleBlur={this.onBlurHandle}
                state={this.state}
                />
                <ProfessionalForm
                onHandleChange={this.changeHandle}
                onHandleBlur={this.onHandleBlur}
                />
            </form>
        )
    }
}

export default Form;