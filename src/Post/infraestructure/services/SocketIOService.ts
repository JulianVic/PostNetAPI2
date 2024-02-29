import ioClient from 'socket.io-client';
import { ISocketNewPost } from '../../domain/services/ISocketNewPost';
import { Post } from '../../domain/entities/Post';
import dotenv from 'dotenv';
dotenv.config();

export class SocketIOService implements ISocketNewPost {
    private socket: any;
    constructor() {
        this.socket = ioClient(process.env.SOCKET_SERVER_URL!);
    }
    async sendNotification(post: Post): Promise<void> {
        this.socket.emit('post', post);
    }
}

// import ioClient from 'socket.io-client';

// export class SocketIOService {
//     private socket: any;
//     constructor() {
//         this.socket = ioClient('http://localhost:3000');
//     }
    
//     public sendNotification(event: string, data: any) {
//         this.socket.emit(event, data);
//     }
// }
