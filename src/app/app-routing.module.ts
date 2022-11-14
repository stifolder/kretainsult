import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InsultGeneratorComponent} from "./components/insult-generator/insult-generator.component";
import {WhatIsThisComponent} from "./components/what-is-this/what-is-this.component";

const routes: Routes = [
  {
    path: "",
    component: InsultGeneratorComponent
  },
  {
    path: "miez",
    component: WhatIsThisComponent
  },
  {
    path: "**",
    component: InsultGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
