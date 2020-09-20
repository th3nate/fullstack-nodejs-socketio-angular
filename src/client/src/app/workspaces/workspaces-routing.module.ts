import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from '../@shared/guards/auth-guard.service';
import {WorkspacesComponent} from './workspaces.component';

const routes: Routes = [{
  path       : 'workspaces',
  component  : WorkspacesComponent,
  canActivate: [AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspacesRoutingModule {
}
