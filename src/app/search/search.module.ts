import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { NoticiasServices } from "../donain/noticias.service";
import { MinLenDirective } from "./search-control-component";

import { SearchFormComponent } from './search-form-component';
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
//import { MinLenDirective } from "../minlen.validator";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule
    ],
   // providers:[NoticiasServices],
    declarations: [
        SearchComponent,
        SearchFormComponent,
        MinLenDirective 

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
