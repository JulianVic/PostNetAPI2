import { Post } from "../domain/entities/Post";
import { RabbitMQService } from "../infraestructure/services/RabbitMQService"; 

export class NotificationNewPostUseCase{
    constructor(
        readonly serviceNotification: RabbitMQService
    ) {}

    async run(post: Post){
        await this.serviceNotification.sendNotification(post);
    }
}