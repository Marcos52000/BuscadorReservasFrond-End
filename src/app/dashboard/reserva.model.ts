import { Hotel } from "../home/hotel.model";
import { Cliente } from "./cliente.model";

export class Reserva {
  id?:number;
  fecha_entrada?:Date;
  fecha_salida?:Date;
  importe?:number;
  id_cliente?:number;
  id_hotel?:number;
}
