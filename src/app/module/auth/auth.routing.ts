import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
const route:Routes=[{
  path:'',
  redirectTo:'/login'
},{

}]
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AuthRoutingModule{

}
