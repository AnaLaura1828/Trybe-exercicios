import ICepAPI from "./interfaces/ICepAPI";

class FooCepAPI  implements ICepAPI {
    async addressByCep(cep: string, num: number): Promise<string> {
        return `Endereço para o CEP é ${cep}, e o numero é: ${num}`
    }
    async cepByAddress(address: string, num: number): Promise<string> {
        return `Cep para o Address é ${address}, e o numero é: ${num}`
    }
  }
  
  export default FooCepAPI;