import { NotificationNewPostUseCase } from "../application/NotificationNewPostUseCase";
import { CreatePostUseCase } from "../application/createPostUseCase";

import { createPostController } from "./controllers/createPostController";

import { RabbitMQService } from "./services/RabbitMQService";

export const servicesNotification = new RabbitMQService;

export const serviceNotificationUseCase = new NotificationNewPostUseCase(servicesNotification)
export const createPostUseCase = new CreatePostUseCase(serviceNotificationUseCase);

export const createPostControllerInstance = new createPostController(createPostUseCase);
