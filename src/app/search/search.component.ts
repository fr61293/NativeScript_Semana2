import { filter } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Color, View } from "@nativescript/core";
import { NoticiasServices } from "../donain/noticias.service";
//import * as app from "tns-core-modules/Application" ;

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    //providers:[NoticiasServices]
})
export class SearchComponent implements OnInit {

    resultados: Array<string> = [];
    @ViewChild("layout") layout: ElementRef;
    onPull(e) {
        console.log(e);
        const pullRefresh = e.object;
        setTimeout(() => {
            this.resultados.push("xxxxxxx");
            pullRefresh.refreshing = false;
        }, 2000);
    }

    constructor(private noticias:NoticiasServices) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
       //console.log("abcde");
       // console.log({nombere: {nombre: {nombre: {nombre: "pedro"}}}});
        //console.dir({nombere: {nombre: {nombre: {nombre: "pedro"}}}});
       // console.log([1,2,3]);
       // console.dir([4,5,6]);
        // Init your component properties here.
        this.noticias.agregar("Hola 01");
        this.noticias.agregar("Hola 02");
        this.noticias.agregar("Hola 03");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        console.dir(x);
    }

    buscarAhora(s: string) {
        this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

        const layout = <View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("blue"),
            duration: 300,
            delay: 150
        }).then(() => layout.animate({
            backgroundColor: new Color("white"),
            duration: 300,
            delay: 150
        }));
    }
     
}
