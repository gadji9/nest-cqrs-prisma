import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUSerCommand {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  name: string;
}
