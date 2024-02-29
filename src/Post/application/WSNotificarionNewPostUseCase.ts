import { Post } from "../domain/entities/Post";
import { SocketIOService } from "../infraestructure/services/SocketIOService";

export class WSNotificationNewPostUseCase{
    constructor(
        readonly serviceNotification: SocketIOService
    ) {}

    async run(post: Post){
        await this.serviceNotification.sendNotification(post);
    }
}