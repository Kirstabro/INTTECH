import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: 'input' , component : InputComponent},
  {path: 'total' , component : UsersComponent},
  {path: 'output', component : OutputComponent},
  {path: '', redirectTo: '/input', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
