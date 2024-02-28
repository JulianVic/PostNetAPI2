import { Post } from '../entities/Post';

export interface INotificationNewPost {
    sendNotification(post: Post): Promise<boolean>;
}