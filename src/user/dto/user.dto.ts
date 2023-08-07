import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Matches} from "class-validator";

export class UserCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    age: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

    @ApiProperty()
    @IsString()
    @Matches(/^\S*(?=\S{8,})(?=\S*[A-Z])(?=\S*[\d])\S*$/, {
        message: 'Password must contain 8 item, 1 uppercase letter',
    })
    @IsNotEmpty()

    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

}

export class UserLoginDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*(?=\S{8,})(?=\S*[A-Z])(?=\S*[\d])\S*$/, {
        message: 'Password must contain 8 item, 1 uppercase letter',
    })
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

}

export class UserLoginSocialDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    accessToken: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

}