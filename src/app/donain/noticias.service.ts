import { Injectable } from "@angular/core";
import { getJSON, request } from "@nativescript/core/http";


@Injectable()
export class NoticiasServices{
  //private noticias: Array<string> = [];
  api: string = "https://fa659269264c.ngrok.io";

  agregar(s:string) {
    //this.noticias.push(s);
    return request({
      url: this.api + "/favs",
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      content: JSON.stringify({
        nuevo: s
      })
    });
   
  }

  favs() {
    return getJSON(this.api + "/favs");
  }

  buscar(s: string) {
    return getJSON(this.api + "/get?q=" +s);
  }
}