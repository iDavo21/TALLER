import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
    private product: CreateProductDto[] = [];

    create(Product: CreateProductDto){
        this.product;
    }
    findAll(): CreateProductDto[] {
        return this.product;
    }
  }

