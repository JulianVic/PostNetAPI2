import { NotificationNewPostUseCase } from "../application/RabbitNotificationNewPostUseCase";
import { CreatePostUseCase } from "../application/createPostUseCase";
import { WSNotificationNewPostUseCase } from "../application/WSNotificarionNewPostUseCase";

import { createPostController } from "./controllers/createPostController";

import { RabbitMQService } from "./services/RabbitMQService";
import { SocketIOService } from "./services/SocketIOService";

export const servicesNotification = new RabbitMQService;
export const servicesSocket = new SocketIOService;

export const serviceNotificationUseCase = new NotificationNewPostUseCase(servicesNotification)
export const serviceWSNotificationUseCase = new WSNotificationNewPostUseCase(servicesSocket)
export const createPostUseCase = new CreatePostUseCase(serviceNotificationUseCase, serviceWSNotificationUseCase);

export const createPostControllerInstance = new createPostController(createPostUseCase, servicesSocket);
