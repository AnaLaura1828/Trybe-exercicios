import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor(cepApi: FooCepAPI) {
      this.cepApi = cepApi;
    // this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.addressByCep(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.cepByAddress(address, num);
  }
}

export default CepService;