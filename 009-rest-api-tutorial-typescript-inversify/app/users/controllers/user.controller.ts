import * as express from 'express';
import { inject } from 'inversify';
import { controller, httpPost, request, response } from 'inversify-express-utils';
import SERVICES from '../constant/services';
import { UserDocument } from '../models/users.model';
import LoginCreciService from '../service/login-creci.service';
import BaseController from './base/base.controller';

@controller('/users')
export default class UserController extends BaseController {
  constructor(@inject(SERVICES.LoginCreciService) private loginCreciService: LoginCreciService) {
    super();
  }

  @httpPost('/')
  private async userInsert(@request() req: express.Request, @response() res: express.Response) {
    return new Promise(resolve => {
      try {
        const newUser: UserDocument = req.body;
      } catch (e) {
        resolve({ error: e });
      }
    });
  }
}

Object.seal(UserController);
