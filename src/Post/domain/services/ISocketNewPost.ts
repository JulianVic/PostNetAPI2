import { Post } from "../entities/Post";

export interface ISocketNewPost {
    sendNotification(post: Post): Promise<void>;

}