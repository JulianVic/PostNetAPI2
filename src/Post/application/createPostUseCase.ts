import { Post } from "../domain/entities/Post";
import { NotificationNewPostUseCase } from "./NotificationNewPostUseCase";

export class CreatePostUseCase{
    constructor(
        private readonly sendNotification: NotificationNewPostUseCase
    ) {}

    async run(title: string, content: string, authorId: number): Promise<Post>{
        const post = new Post(title, content, authorId);
        await this.sendNotification.run(post);
        return post;
    }
}