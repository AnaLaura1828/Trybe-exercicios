import { IPlane } from "./interfaces/IVeicle";


export default class AirPlane implements IPlane {
    fly(): void { console.log('AirPlane');
    }
}