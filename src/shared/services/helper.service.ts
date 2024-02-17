import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Errors } from '../enums/error.enum';

@Injectable()
export class HelperService {
  async encryptPassword(password: string) {
    try {
      const salt = await bcrypt.genSalt(10, 'a');
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      throw new InternalServerErrorException(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  async comparePassword(password: string, hash: string) {
    try {
      const isMatch = await bcrypt.compare(password, hash);
      return isMatch;
    } catch (error) {
      throw new UnauthorizedException(Errors.UNAUTHORIZED);
    }
  }
}
