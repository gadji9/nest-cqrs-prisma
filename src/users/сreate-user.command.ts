import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserCommand {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  name: string;
}
