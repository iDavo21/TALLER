import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";
import { PaginationDto } from "./dtos/pagination.dto";


// localhost:3000/Products/id
@Controller('products')
export class ProductsController {
    @Post()
    create( @Body() body: CreateProductDto ){
        return body;
    }

    @Get()
    findAll( @Query() query: Object ){
        return query;
    }

    @Get(':id')
    findOne(  @Param('id') id:Number  ){
        return `products by id: ${id}`;
    }

    @Get('/')
    findPage( @Query() query: PaginationDto ){
        return query;
    }

    @Patch(':id')
    update( 
        @Param('id') id:Number,
        @Body() updateProductDto: UpdateProductDto,
     ){
        return {
            id, 
            updateProductDto,
        };
    }

    @Delete(':id')
    delete(
        @Param('id') id:Number,
        @Body() updateProductDto: UpdateProductDto
    ){
        return "Product has been deleted succefully :D";
    }

}
