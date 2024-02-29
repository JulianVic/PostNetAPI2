import { Post } from "../domain/entities/Post";
import { NotificationNewPostUseCase } from "./RabbitNotificationNewPostUseCase";
import { WSNotificationNewPostUseCase } from "./WSNotificarionNewPostUseCase";

export class CreatePostUseCase{
    constructor(
        private readonly sendNotification: NotificationNewPostUseCase,
        private readonly sendNotificationWS: WSNotificationNewPostUseCase

    ) {}

    async run(title: string, content: string, authorId: number): Promise<Post>{
        const post = new Post(title, content, authorId);
        await this.sendNotification.run(post);
        await this.sendNotificationWS.run(post);
        return post;
    }
}