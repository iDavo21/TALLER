import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateProductDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

     @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    photo: string[];

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;
    
  
}