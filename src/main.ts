// this import should be first in order to load some required settings (like globals and reflect-metadata)
//import { registerElement } from "nativescript-angular/element-registry";

import { platformNativeScriptDynamic, registerElement } from "@nativescript/angular";

import { AppModule } from "./app/app.module";


registerElement ("PullToRefresh", () => require ("nativescript-pulltorefresh"). PullToRefresh);
 
 

platformNativeScriptDynamic().bootstrapModule(AppModule);
