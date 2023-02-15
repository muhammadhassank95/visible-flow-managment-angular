import { NgModule } from "@angular/core";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FooterComponent } from "../components/pages/partials/footer/footer.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoaderComponent } from "../components/loader/loader.component";
import { ZorroModule } from "./zorro-module";
import { NgxLoadingModule } from "ngx-loading";
import { AgGridModule } from "ag-grid-angular";


@NgModule({
    declarations: [
        FooterComponent,
        LoaderComponent
    ],
    exports: [
        DragDropModule,
        AgGridModule,
        LoaderComponent,
        FooterComponent,
    ], 
    imports: [
        NgxLoadingModule.forRoot({}),
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ZorroModule
    ]
})

export class SharedModule { }