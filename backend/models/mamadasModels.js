import { Schema, model } from "mongoose";

 const Esquemamamadas = new Schema({
    name:String,
    apepat:String,
    secuencia:Number

})
  export const modelomamadas = new model("conteo de mamadas", Esquemamamadas)

