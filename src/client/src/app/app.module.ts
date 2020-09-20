import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './@core/core.module';
import {SharedModule} from './@shared/shared.module';
import {WorkspacesModule} from './workspaces/workspaces.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    CoreModule,
    SharedModule,
    WorkspacesModule,
    AppRoutingModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
