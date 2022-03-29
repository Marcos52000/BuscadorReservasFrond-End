import { User } from "../services/auth/login.service";

export class Cliente {
  id?:number;
  dni?:string;
  nombre?:string;
  apellido?:string;
  telefono?:number;
  iduser?:User;
}
