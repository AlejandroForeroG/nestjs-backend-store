import { Controller, Post, Body, Get, Param, Put, Query } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post('/create/')
  createProduct(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(@Body() payload: any, @Param('id', ParseIntPipe) id: number) {
    return this.productsService.update(id, payload);
  }
}
