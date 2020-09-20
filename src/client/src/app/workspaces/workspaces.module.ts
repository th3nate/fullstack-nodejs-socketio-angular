import {NgModule} from '@angular/core';

import {WorkspacesRoutingModule} from './workspaces-routing.module';
import {WorkspacesComponent} from './workspaces.component';
import {SharedModule} from '../@shared/shared.module';
import {WorkspacesService} from './workspaces.service';
import {WorkspacesWsService} from './workspaces-ws.service';


@NgModule({
  declarations: [WorkspacesComponent],
  imports     : [
    SharedModule,
    WorkspacesRoutingModule
  ],
  providers   : [WorkspacesService, WorkspacesWsService]
})
export class WorkspacesModule {
}
