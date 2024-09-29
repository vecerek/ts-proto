// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: bar/bar.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Foo } from "../foo";

export const protobufPackage = "foo.bar";

export interface Bar {
  foo: Foo | undefined;
}

function createBaseBar(): Bar {
  return { foo: undefined };
}

export const Bar: MessageFns<Bar, "foo.bar.Bar"> = {
  $type: "foo.bar.Bar" as const,

  encode(message: Bar, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.foo !== undefined) {
      Foo.encode(message.foo, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Bar {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.foo = Foo.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bar {
    return { foo: isSet(object.foo) ? Foo.fromJSON(object.foo) : undefined };
  },

  toJSON(message: Bar): unknown {
    const obj: any = {};
    if (message.foo !== undefined) {
      obj.foo = Foo.toJSON(message.foo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bar>, I>>(base?: I): Bar {
    return Bar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bar>, I>>(object: I): Bar {
    const message = createBaseBar();
    message.foo = (object.foo !== undefined && object.foo !== null) ? Foo.fromPartial(object.foo) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T, V extends string> {
  readonly $type: V;
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
