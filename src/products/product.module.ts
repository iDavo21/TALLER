import { Module } from "@nestjs/common";
import { ProductsController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
    imports: [ProductsModule],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductsModule {}