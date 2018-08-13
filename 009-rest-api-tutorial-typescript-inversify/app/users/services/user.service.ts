import Crypto from 'crypto';
import { injectable } from 'inversify';
import { User, UserDocument } from '../models/users.model';

@injectable()
export default class UserService {
  public insert(user: UserDocument, callback: (error?: string, result?: UserDocument) => void) {
    try {
      const salt = Crypto.randomBytes(16).toString('base64');
      const hash = Crypto.createHmac('sha512', salt)
        .update(user.password)
        .digest('base64');
      user.password = salt + '$' + hash;
      user.permissionLevel = 1;

      User.create(user).then(result => {
        callback(null, result);
        user.save();
        res.status(201).send({ id: result._id });
      }); //
    } catch (e) {
      callback(e, null);
    }
  }
}

Object.seal(UserService);
