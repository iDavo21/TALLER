import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";
import { CreateProductDto } from "./create-product.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateProductDto extends PartialType(CreateProductDto){}