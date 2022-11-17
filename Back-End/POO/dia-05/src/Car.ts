import { ICarDriver } from "./interfaces/IVeicle";

export default class Car implements ICarDriver {
    drive(): void {
        console.log("Drive a car");
    }
}