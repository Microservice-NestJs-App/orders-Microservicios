import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common';
import {  OrderStatusList } from '../enum/enum-orders';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid Status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
