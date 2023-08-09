import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// #region DemoImport
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
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { Demo17Component } from './demos/demo17/demo17.component';
import { Demo18Component } from './demos/demo18/demo18.component';
import { Demo19Component } from './demos/demo19/demo19.component';
import { Demo20Component } from './demos/demo20/demo20.component';
import { Demo21Component } from './demos/demo21/demo21.component';
import { DemosComponent } from './demos/demos.component';
// #endregion  
// #region Exo Import
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
import { Exercice15Component } from './exercices/exercice15/exercice15.component';
import { Exercice21Component } from './exercices/exercice21/exercice21.component';
import { ExercicesComponent } from './exercices/exercices.component';
//#endregion
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'demos', children: [
      { path: '', component: DemosComponent },
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
      { path: 'demo07', component: Demo07Component },
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
      { path: 'demo11', component: Demo11Component },
      { path: 'demo12', component: Demo12Component },
      { path: 'demo13', component: Demo13Component },
      { path: 'demo14', component: Demo14Component },
      { path: 'demo15', component: Demo15Component },
      { path: 'demo16', component: Demo16Component },
      { path: 'demo17', component: Demo17Component },
      { path: 'demo18', component: Demo18Component },
      { path: 'demo19', component: Demo19Component },
      { path: 'demo20', component: Demo20Component },
      { path: 'demo21', component: Demo21Component }

    ]
  },

  {
    path: 'exercices', children: [
      { path: '', component: ExercicesComponent },
      { path: 'exo01', component: Exercice01Component },
      { path: 'exo02', component: Exercice02Component },
      { path: 'exo03', component: Exercice03Component },
      { path: 'exo04', component: Exercice04Component },
      { path: 'exo05', component: Exercice05Component },
      { path: 'exo07', component: Exercice07Component },
      { path: 'exo07bis', component: Exercice07bisComponent },
      { path: 'exo08', component: Exercice08Component },
      { path: 'exo09', component: Exercice09Component },
      { path: 'exo11', component: Exercice11Component },
      { path: 'exo15', component: Exercice15Component },
      { path: 'exo21', component: Exercice21Component }
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
