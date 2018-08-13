import { Container } from 'inversify';
import 'reflect-metadata';
import CONTROLLERS from '../controllers.constants';

let container = new Container();

// controllers

container.bind<UserController>(CONTROLLERS.UserController).to(UserController);

export default container;
