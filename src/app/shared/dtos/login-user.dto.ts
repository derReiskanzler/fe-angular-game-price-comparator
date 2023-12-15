import { RegisterUserDto } from './register-user.dto';

export type LoginUserDto = Omit<RegisterUserDto, 'nickname'>;
