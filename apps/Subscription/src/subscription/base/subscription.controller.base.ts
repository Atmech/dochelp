/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SubscriptionService } from "../subscription.service";
import { SubscriptionCreateInput } from "./SubscriptionCreateInput";
import { Subscription } from "./Subscription";
import { SubscriptionFindManyArgs } from "./SubscriptionFindManyArgs";
import { SubscriptionWhereUniqueInput } from "./SubscriptionWhereUniqueInput";
import { SubscriptionUpdateInput } from "./SubscriptionUpdateInput";

export class SubscriptionControllerBase {
  constructor(protected readonly service: SubscriptionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subscription })
  async createSubscription(
    @common.Body() data: SubscriptionCreateInput
  ): Promise<Subscription> {
    return await this.service.createSubscription({
      data: data,
      select: {
        clientId: true,
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Subscription] })
  @ApiNestedQuery(SubscriptionFindManyArgs)
  async subscriptions(@common.Req() request: Request): Promise<Subscription[]> {
    const args = plainToClass(SubscriptionFindManyArgs, request.query);
    return this.service.subscriptions({
      ...args,
      select: {
        clientId: true,
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async subscription(
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Subscription | null> {
    const result = await this.service.subscription({
      where: params,
      select: {
        clientId: true,
        createdAt: true,
        endDate: true,
        id: true,
        startDate: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSubscription(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() data: SubscriptionUpdateInput
  ): Promise<Subscription | null> {
    try {
      return await this.service.updateSubscription({
        where: params,
        data: data,
        select: {
          clientId: true,
          createdAt: true,
          endDate: true,
          id: true,
          startDate: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSubscription(
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Subscription | null> {
    try {
      return await this.service.deleteSubscription({
        where: params,
        select: {
          clientId: true,
          createdAt: true,
          endDate: true,
          id: true,
          startDate: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
