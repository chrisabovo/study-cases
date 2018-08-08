import * as express from "express";
import { response,request, requestParam, controller, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { interfaces } from "./interfaces";
import { Type } from "./types";
import { authorize } from "./middleware";
import { Feature } from "./features";

@injectable()
@controller(
  "/api/user"
  authorize({ feature: Feature.UserManagement })
)
class UserController {

  @inject(Type.UserRepository) private readonly _userRepository: interfaces.UserRepository;
  @inject(Type.Logger) private readonly _logger: interfaces.Logger;

  @httpGet("/")
  public async get(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      this._logger.info(`HTTP ${req.method} ${req.url}`);
      return await this._userRepository.readAll();
    } catch (e) {
      this._logger.error(`HTTP ERROR ${req.method} ${req.url}`, e);
      res.status(500).json([]);
    }
  }

  @httpGet("/:email")
  public async getByEmail(
    @requestParam("email") email: string,
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      this._logger.info(`HTTP ${req.method} ${req.url}`);
      return await this._userRepository.readAll({ where: { email: email } });
    } catch (e) {
      this._logger.error(`HTTP ERROR ${req.method} ${req.url}`, e);
      res.status(500).json([]);
    }
  }
}