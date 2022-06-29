import React from "react";

class ProfessionalForm extends React.Component {
    render() {
        return (
            <fieldset>
                Dados profissionais
                <div>
                    Resumo do curriculo:
                    <textarea
                        name="resume"
                        maxLength="1000"
                        required
                        onChange={() => { }}>

                    </textarea>
                </div>
                <div>
                    Cargo:
                    <input
                        type="text"
                        name="resroleume"
                        maxLength="1000"
                        required
                        onChange={() => { }}
                        onMouseEnter={() => {
                            global.alert('Prrencha com cuidado esta informação')
                        }}
                    >
                    </input>
                </div>
            </fieldset>
        )
    }
}

export default ProfessionalForm;