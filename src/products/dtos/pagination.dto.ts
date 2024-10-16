import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";
import { CreateProductDto } from "./create-product.dto";
import { PartialType } from "@nestjs/mapped-types";
import { defaultIfEmpty } from "rxjs";
import { DefaultValuePipe } from "@nestjs/common";

export class PaginationDto {
    @IsNumber()
    page: number;

    @IsNumber()
    limit: number;

    
}