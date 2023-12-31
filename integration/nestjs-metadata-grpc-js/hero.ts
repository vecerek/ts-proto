/* eslint-disable */
import { handleBidiStreamingCall, Metadata } from "@grpc/grpc-js";
import type { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "hero";

export interface HeroById {
  id: number;
}

export interface VillainById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
}

export interface Villain {
  id: number;
  name: string;
}

export const HERO_PACKAGE_NAME = "hero";

function createBaseHeroById(): HeroById {
  return { id: 0 };
}

export const HeroById = {
  encode(message: HeroById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeroById {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeroById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseVillainById(): VillainById {
  return { id: 0 };
}

export const VillainById = {
  encode(message: VillainById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VillainById {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVillainById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseHero(): Hero {
  return { id: 0, name: "" };
}

export const Hero = {
  encode(message: Hero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHero();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseVillain(): Villain {
  return { id: 0, name: "" };
}

export const Villain = {
  encode(message: Villain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Villain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVillain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

export interface HeroServiceClient {
  findOneHero(request: HeroById, metadata?: Metadata): Observable<Hero>;

  findOneVillain(request: VillainById, metadata?: Metadata): Observable<Villain>;

  findManyVillain(request: Observable<VillainById>, metadata?: Metadata): Observable<Villain>;
}

export interface HeroServiceController {
  findOneHero(request: HeroById, metadata?: Metadata): Promise<Hero> | Observable<Hero> | Hero;

  findOneVillain(request: VillainById, metadata?: Metadata): Promise<Villain> | Observable<Villain> | Villain;

  findManyVillain(request: Observable<VillainById>, metadata?: Metadata): Observable<Villain>;
}

export function HeroServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOneHero", "findOneVillain"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("HeroService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["findManyVillain"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("HeroService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const HERO_SERVICE_NAME = "HeroService";

export type HeroServiceService = typeof HeroServiceService;
export const HeroServiceService = {
  findOneHero: {
    path: "/hero.HeroService/FindOneHero",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HeroById) => Buffer.from(HeroById.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HeroById.decode(value),
    responseSerialize: (value: Hero) => Buffer.from(Hero.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Hero.decode(value),
  },
  findOneVillain: {
    path: "/hero.HeroService/FindOneVillain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: VillainById) => Buffer.from(VillainById.encode(value).finish()),
    requestDeserialize: (value: Buffer) => VillainById.decode(value),
    responseSerialize: (value: Villain) => Buffer.from(Villain.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Villain.decode(value),
  },
  findManyVillain: {
    path: "/hero.HeroService/FindManyVillain",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: VillainById) => Buffer.from(VillainById.encode(value).finish()),
    requestDeserialize: (value: Buffer) => VillainById.decode(value),
    responseSerialize: (value: Villain) => Buffer.from(Villain.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Villain.decode(value),
  },
} as const;

export interface HeroServiceServer extends UntypedServiceImplementation {
  findOneHero: handleUnaryCall<HeroById, Hero>;
  findOneVillain: handleUnaryCall<VillainById, Villain>;
  findManyVillain: handleBidiStreamingCall<VillainById, Villain>;
}
