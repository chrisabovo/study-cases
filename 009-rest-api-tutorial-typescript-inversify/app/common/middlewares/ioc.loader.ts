import { Container } from 'inversify';
import 'reflect-metadata';
import UserController from '../../users/controllers/user.controller';
import UserService from '../../users/services/user.service';
import CONTROLLERS from '../controllers.constants';
import SERVICES from '../services.constants';
const container = new Container();

// services
container.bind<UserService>(SERVICES.UserService).to(UserService);

// controllers
container.bind<UserController>(CONTROLLERS.UserController).to(UserController);

export default container;
