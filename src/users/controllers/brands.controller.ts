import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brand')
export class BrandsController {
  @Get(':name')
  getBrand(@Param('name') name: string) {
    return `brand ${name}}`;
  }

  @Get(':name/products')
  getBrandProducts(
    @Query('numberProducts') numberProducts = 0,
    @Query('isReserved') isReserved = false,
    @Param('name') name: string,
  ) {
    return `La brand ${name}, tiene  ${numberProducts} en su catalogo ${!isReserved ? 'no tienes reservado' : 'si tiens reservado'}|✨🛍️}`;
  }
}
