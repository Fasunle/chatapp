import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(5001, {
  cors: {
    origin: "*"
  }
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage( client: any, payload: any ): string {
    return 'Hello world! from the socket IO';
  }
}
