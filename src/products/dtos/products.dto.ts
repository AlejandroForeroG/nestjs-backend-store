import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  readonly brand: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  //usa las mismas validaciones pero de forma opcional
}
