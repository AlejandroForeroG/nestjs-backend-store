import { PartialType } from "@nestjs/mapped-types";
import {IsString, IsNotEmpty, IsEmail } from "class-validator"

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}


export class UpdateUserDto extends PartialType(CreateUserDto) {
}
