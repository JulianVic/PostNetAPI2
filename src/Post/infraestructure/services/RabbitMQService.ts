import * as amqp from 'amqplib';
import { INotificationNewPost } from '../../domain/services/INotificationNewPost';
import { Post } from '../../domain/entities/Post';

export class RabbitMQService implements INotificationNewPost {
    async sendNotification(post: Post): Promise<boolean> {
        let exchange : string = process.env.AMQP_EXCHANGE!;
        let queue : string = process.env.AMQP_QUEUE!;
        let url : string = process.env.AMQP_URL!;
        let typeExchange : string = process.env.AMQP_TYPE_EXCHANGE!;
        const conn = await amqp.connect(url);
        const ch = await conn.createChannel();
        ch.assertExchange(exchange, typeExchange, {
            durable: true
        });
        ch.assertQueue(queue, {
            durable: true
        });
        ch.bindQueue(queue, exchange, "");
        let status =  ch.publish(exchange, "", Buffer.from(JSON.stringify(post)));
        return status;
    }
}