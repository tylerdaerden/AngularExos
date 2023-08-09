import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReducePipe } from './shared/pipes/reduce.pipe';
import { ChronoPipe } from './shared/pipes/chrono.pipe';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SecondsToDHMSPipe } from './shared/pipes/seconds-to-dhms.pipe';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { GetFormateurPipe } from './shared/pipes/get-formateur.pipe';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { ChildInputComponent } from './demos/demo11/child-input/child-input.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exercice01Component } from './exercices/exercice01/exercice01.component';
import { Exercice02Component } from './exercices/exercice02/exercice02.component';
import { Exercice03Component } from './exercices/exercice03/exercice03.component';
import { Exercice04Component } from './exercices/exercice04/exercice04.component';
import { Exercice05Component } from './exercices/exercice05/exercice05.component';
import { Exercice07Component } from './exercices/exercice07/exercice07.component';
import { Exercice07bisComponent } from './exercices/exercice07bis/exercice07bis.component';
import { Exercice08Component } from './exercices/exercice08/exercice08.component';
import { Exercice09Component } from './exercices/exercice09/exercice09.component';
import { Exercice11Component } from './exercices/exercice11/exercice11.component';
import { PanierInputComponent } from './exercices/exercice11/panier/panier-input.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Exercice15Component } from './exercices/exercice15/exercice15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { Demo17Component } from './demos/demo17/demo17.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    ExercicesComponent,
    Demo01Component,
    Exercice01Component,
    Demo02Component,
    Exercice02Component,
    Demo03Component,
    Exercice03Component,
    Demo04Component,
    Exercice04Component,
    Demo05Component,
    NavbarComponent,
    NotFoundComponent,
    Exercice05Component,
    Demo06Component,
    Demo07Component,
    SecondsToDHMSPipe,
    GetFormateurPipe,
    ReducePipe,
    ChronoPipe,
    Exercice07Component,
    Exercice07bisComponent,
    Exercice08Component,
    Demo08Component,
    Demo09Component,
    Demo10Component,
    Demo11Component,
    ChildInputComponent,
    Exercice09Component,
    Exercice11Component,
    PanierInputComponent,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    Exercice15Component,
    Demo16Component,
    Demo17Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Important pour le fonctionnement du routing
    FormsModule, // Important pour le fonctionnement du Two-Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
