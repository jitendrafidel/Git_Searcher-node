import { IsNumber, IsOptional, IsString } from "class-validator";

export class Search {
    @IsOptional()
    @IsString()
    public type: string;
    @IsOptional()
    @IsString()
    public searchWord: string;
}