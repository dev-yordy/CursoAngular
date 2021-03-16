
import { Address } from "./address";

export class User{
    id:number = 0;
    name: string = "";
    username: string = "";
    email:string = "";
    address: Address = new Address();
}