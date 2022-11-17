export default interface ICepAPI {
    addressByCep(cep: string, num: number): Promise<string>
    
    cepByAddress(address: string, num: number): Promise<string>
}