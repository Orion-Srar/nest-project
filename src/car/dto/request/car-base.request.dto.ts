import {IsEnum, IsNotEmpty, IsNumber, IsString, Min} from "class-validator";
import {CarClassEnum} from "../../enum/car-class.enum";

export class CarBaseRequestDto {
    @IsString()
    @IsNotEmpty()
    producer: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1990)
    @Min(2023)
    age: number;

    @IsString()
    model: string;

    @IsNotEmpty()
    @IsEnum(CarClassEnum)
    class: CarClassEnum;

}

