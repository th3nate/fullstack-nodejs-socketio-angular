import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IWorkspaces} from './workspaces.interface';
import {WorkspacesWsService} from './workspaces-ws.service';

@Injectable()
export class WorkspacesService {
  private data = [] as IWorkspaces[];

  constructor(private socket: WorkspacesWsService) {
  }

  get currentWorkspaces(): IWorkspaces[] {
    return this.data;
  }

  set currentWorkspaces(data: IWorkspaces[]) {
    this.data = data;
  }

  listen(eventName: string): Observable<any> {
    return this.socket.fromEvent(eventName);
  }

  unsubscribe(eventName: string): any {
    return this.socket.removeAllListeners(eventName);
  }
}