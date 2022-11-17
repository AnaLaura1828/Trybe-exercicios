import { IVeicle }  from './interfaces/IVeicle';

export default class AirPlane implements IVeicle {
  drive(): void {
    throw new Error('I don\'t drive');
  }

  fly(): void {
    console.log('Fly a airplane');
  }
}