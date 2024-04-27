import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
@Injectable()
export class ProductsService {
  private counterId = 3;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 1,
      brand: 'alexa',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 2,
      brand: 'google',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 3,
      brand: 'apple',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product with #id ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((element) => element.id === id);
    const updatedProduct = {
      ...product,
      ...payload,
    };
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  delete(id: number) {
    const index = this.products.findIndex((element) => element.id === id);
    this.products.splice(index, 1);
    return this.products;
  }
}
