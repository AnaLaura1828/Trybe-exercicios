import React from "react";

const states = ['RJ', 'SP', 'MG', 'DF', 'AP', 'AM']

class PersonalForm extends React.Component {

//     // funcao para remover caracter especial
//     //NAO FUNCIONOU !!!
//     validateAddress = (address) => address.replace(/[\u0300-\u036f]/g, '')

//     changeHandle = (event) => { // recebe um elemento como um todo, desestrutura o valor e o nome. e com isso consigo atualizar a chave que tenha o mesmo nome
//      const {name} = event.target;
//      let {value } = event.target;
    
//      // transformando os character em upp case quando forem digitados
//      if(name === 'name') value = value.toUpperCase()
//      // Removendo qualquer caracter especial que seja digitado
//      if(name === 'address') value = this.validateAddress(value)
//      this.setState({
//         [name] : value,
//      })
//     }

//     //Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
//     // NAO FUNCIONOU !!
// onBlurHandle = (event) => {
//     const {name} = event.target;
//     let {value } = event.target;
//     if(name === 'city') value = value.match(/^\d/) ? '' : value;
//     this.setState({
//         [name]: value,
//     })
// }

    render() {
        // const {name, address} = this.state;
        const {onHandlerChange, onHandlerBlur} = this.props;
        const { state: {name, address, city}} = this.props // ta chegando um estado e dele quero pegar essas chaves
        return(
            <fieldset>
                <legend>Dados Pessoais</legend>
                <div className="container">
                    Nome:
                    <input 
                    type="name"
                    name="name"
                    maxLength="40"
                    required
                    value={name} // aqui esta transformando em letra maiscula
                    onChange={ onHandlerChange} 
                    />
                </div>
                <div className="container">
                    Email:
                    <input 
                    type="email"
                    name="email"
                    maxLength="50"
                    required
                    onChange={onHandlerChange} />
                </div>
                <div className="container">
                     CPF:
                    <input 
                    type="text"
                    name="cpf"
                    maxLength="11"
                    required
                    onChange={onHandlerChange}
                 />
                </div>
                <div className="container">
                    Endereço:
                    <input 
                    type="text"
                    name="address"
                    value={address} // chamo no value para aparecer na tela e nao somente no state
                    required
                    onChange={onHandlerChange} />
                </div>
                <div className="container">
                    Cidade:
                    <input 
                    type="text"
                    name="city"
                    maxLength="28"
                    required 
                    onBlur={ onHandlerBlur} // sair numero
                    value={ city }
                    onChange={ onHandlerChange}/>
                </div>
                <div className="container">
                    Estado:
                    <select 
                    name="countryState"
                    required
                    onChange={onHandlerChange}
                    defaultValue=""
                     >
                      <option value="">Selecione</option>
                      {states.map((value, key) => (
                        <option key={key}>{value}</option>
                      ))}
                    </select>
                </div>
                <div className="container">
                    <label htmlFor="house">
                        <input 
                        type="radio"
                        id="house"
                        name="addressType"
                        value="house"
                        onChange={ onHandlerChange} 
                        />
                        Casa
                    </label>
                </div>
                <div className="container">
                    <label htmlFor="apart">
                        <input 
                        type="radio"
                        id="apart"
                        name="addressType"
                        value="apart"
                        onChange={ onHandlerChange} 
                        />
                        Apartamento
                    </label>
                </div>
            </fieldset>
        )
    }
}

export default PersonalForm;