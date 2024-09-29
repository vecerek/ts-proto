// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: nested-repeated-values-optional-all.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StringValue } from "./google/protobuf/wrappers";

export const protobufPackage = "";

export interface NestedList {
  aString?: string[] | undefined;
}

export interface Example {
  list?: NestedList | undefined;
}

function createBaseNestedList(): NestedList {
  return { aString: [] };
}

export const NestedList: MessageFns<NestedList> = {
  encode(message: NestedList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.aString !== undefined && message.aString.length !== 0) {
      for (const v of message.aString) {
        StringValue.encode({ value: v!! }, writer.uint32(10).fork()).join();
      }
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NestedList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNestedList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const el = StringValue.decode(reader, reader.uint32()).value;
          if (el !== undefined) {
            message.aString!.push(el);
          }
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

  fromJSON(object: any): NestedList {
    return { aString: globalThis.Array.isArray(object?.aString) ? object.aString.map((e: any) => String(e)) : [] };
  },

  toJSON(message: NestedList): unknown {
    const obj: any = {};
    if (message.aString?.length) {
      obj.aString = message.aString;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NestedList>, I>>(base?: I): NestedList {
    return NestedList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NestedList>, I>>(object: I): NestedList {
    const message = createBaseNestedList();
    message.aString = object.aString?.map((e) => e) || [];
    return message;
  },
};

function createBaseExample(): Example {
  return { list: undefined };
}

export const Example: MessageFns<Example> = {
  encode(message: Example, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.list !== undefined) {
      NestedList.encode(message.list, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Example {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExample();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.list = NestedList.decode(reader, reader.uint32());
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

  fromJSON(object: any): Example {
    return { list: isSet(object.list) ? NestedList.fromJSON(object.list) : undefined };
  },

  toJSON(message: Example): unknown {
    const obj: any = {};
    if (message.list !== undefined) {
      obj.list = NestedList.toJSON(message.list);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Example>, I>>(base?: I): Example {
    return Example.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Example>, I>>(object: I): Example {
    const message = createBaseExample();
    message.list = (object.list !== undefined && object.list !== null)
      ? NestedList.fromPartial(object.list)
      : undefined;
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
