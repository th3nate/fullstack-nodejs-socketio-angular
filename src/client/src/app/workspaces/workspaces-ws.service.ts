import {Injectable} from '@angular/core';
import {Socket, SocketIoConfig} from 'ngx-socket-io';

@Injectable()
export class WorkspacesWsService extends Socket {

  constructor() {
    super({url: 'http://localhost:3001'} as SocketIoConfig);
  }
}
