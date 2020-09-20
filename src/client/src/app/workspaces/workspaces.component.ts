import {Component, OnDestroy, OnInit} from '@angular/core';
import {IWorkspaces} from './workspaces.interface';
import {WorkspacesService} from './workspaces.service';

@Component({
  selector   : 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls  : ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit, OnDestroy {

  public currentWorkspaces = [] as IWorkspaces[];

  constructor(private readonly workspacesService: WorkspacesService) {
  }

  ngOnInit(): void {
    this.listenToWs();
    this.currentWorkspaces = this.workspacesService.currentWorkspaces;
  }

  ngOnDestroy(): void {
    this.unsubscribeFromWs();
  }

  private listenToWs(): void {
    this.workspacesService
      .listen('workspaces-updated')
      .subscribe((workspaces: IWorkspaces[]) => {
        this.currentWorkspaces                   = workspaces;
        this.workspacesService.currentWorkspaces = this.currentWorkspaces;
        console.log('workspaces: ', workspaces);
      });
  }

  private unsubscribeFromWs(): void {
    this.workspacesService.unsubscribe('workspaces-updated');
  }

  public trackByFn(index: number, item: IWorkspaces): Date {
    return item.createdAt;
  }

}
