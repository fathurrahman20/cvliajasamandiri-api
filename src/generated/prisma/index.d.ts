
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model HeroSection
 * 
 */
export type HeroSection = $Result.DefaultSelection<Prisma.$HeroSectionPayload>
/**
 * Model BottonSection
 * 
 */
export type BottonSection = $Result.DefaultSelection<Prisma.$BottonSectionPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>
/**
 * Model Footer
 * 
 */
export type Footer = $Result.DefaultSelection<Prisma.$FooterPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model CompanyAbout
 * 
 */
export type CompanyAbout = $Result.DefaultSelection<Prisma.$CompanyAboutPayload>
/**
 * Model OurAdvantage
 * 
 */
export type OurAdvantage = $Result.DefaultSelection<Prisma.$OurAdvantagePayload>
/**
 * Model OurService
 * 
 */
export type OurService = $Result.DefaultSelection<Prisma.$OurServicePayload>
/**
 * Model RequirementWithDriver
 * 
 */
export type RequirementWithDriver = $Result.DefaultSelection<Prisma.$RequirementWithDriverPayload>
/**
 * Model RequirementNoDriver
 * 
 */
export type RequirementNoDriver = $Result.DefaultSelection<Prisma.$RequirementNoDriverPayload>
/**
 * Model RequirementNote
 * 
 */
export type RequirementNote = $Result.DefaultSelection<Prisma.$RequirementNotePayload>
/**
 * Model Regulation
 * 
 */
export type Regulation = $Result.DefaultSelection<Prisma.$RegulationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heroSection`: Exposes CRUD operations for the **HeroSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroSections
    * const heroSections = await prisma.heroSection.findMany()
    * ```
    */
  get heroSection(): Prisma.HeroSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bottonSection`: Exposes CRUD operations for the **BottonSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BottonSections
    * const bottonSections = await prisma.bottonSection.findMany()
    * ```
    */
  get bottonSection(): Prisma.BottonSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footer`: Exposes CRUD operations for the **Footer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Footers
    * const footers = await prisma.footer.findMany()
    * ```
    */
  get footer(): Prisma.FooterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyAbout`: Exposes CRUD operations for the **CompanyAbout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyAbouts
    * const companyAbouts = await prisma.companyAbout.findMany()
    * ```
    */
  get companyAbout(): Prisma.CompanyAboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ourAdvantage`: Exposes CRUD operations for the **OurAdvantage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OurAdvantages
    * const ourAdvantages = await prisma.ourAdvantage.findMany()
    * ```
    */
  get ourAdvantage(): Prisma.OurAdvantageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ourService`: Exposes CRUD operations for the **OurService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OurServices
    * const ourServices = await prisma.ourService.findMany()
    * ```
    */
  get ourService(): Prisma.OurServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requirementWithDriver`: Exposes CRUD operations for the **RequirementWithDriver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequirementWithDrivers
    * const requirementWithDrivers = await prisma.requirementWithDriver.findMany()
    * ```
    */
  get requirementWithDriver(): Prisma.RequirementWithDriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requirementNoDriver`: Exposes CRUD operations for the **RequirementNoDriver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequirementNoDrivers
    * const requirementNoDrivers = await prisma.requirementNoDriver.findMany()
    * ```
    */
  get requirementNoDriver(): Prisma.RequirementNoDriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requirementNote`: Exposes CRUD operations for the **RequirementNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequirementNotes
    * const requirementNotes = await prisma.requirementNote.findMany()
    * ```
    */
  get requirementNote(): Prisma.RequirementNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regulation`: Exposes CRUD operations for the **Regulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regulations
    * const regulations = await prisma.regulation.findMany()
    * ```
    */
  get regulation(): Prisma.RegulationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    HeroSection: 'HeroSection',
    BottonSection: 'BottonSection',
    Faq: 'Faq',
    Footer: 'Footer',
    Brand: 'Brand',
    Car: 'Car',
    CompanyAbout: 'CompanyAbout',
    OurAdvantage: 'OurAdvantage',
    OurService: 'OurService',
    RequirementWithDriver: 'RequirementWithDriver',
    RequirementNoDriver: 'RequirementNoDriver',
    RequirementNote: 'RequirementNote',
    Regulation: 'Regulation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "heroSection" | "bottonSection" | "faq" | "footer" | "brand" | "car" | "companyAbout" | "ourAdvantage" | "ourService" | "requirementWithDriver" | "requirementNoDriver" | "requirementNote" | "regulation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      HeroSection: {
        payload: Prisma.$HeroSectionPayload<ExtArgs>
        fields: Prisma.HeroSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findFirst: {
            args: Prisma.HeroSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findMany: {
            args: Prisma.HeroSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          create: {
            args: Prisma.HeroSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          createMany: {
            args: Prisma.HeroSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          delete: {
            args: Prisma.HeroSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          update: {
            args: Prisma.HeroSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          deleteMany: {
            args: Prisma.HeroSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          upsert: {
            args: Prisma.HeroSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          aggregate: {
            args: Prisma.HeroSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeroSection>
          }
          groupBy: {
            args: Prisma.HeroSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroSectionCountArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionCountAggregateOutputType> | number
          }
        }
      }
      BottonSection: {
        payload: Prisma.$BottonSectionPayload<ExtArgs>
        fields: Prisma.BottonSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BottonSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BottonSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>
          }
          findFirst: {
            args: Prisma.BottonSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BottonSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>
          }
          findMany: {
            args: Prisma.BottonSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>[]
          }
          create: {
            args: Prisma.BottonSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>
          }
          createMany: {
            args: Prisma.BottonSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BottonSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>[]
          }
          delete: {
            args: Prisma.BottonSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>
          }
          update: {
            args: Prisma.BottonSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>
          }
          deleteMany: {
            args: Prisma.BottonSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BottonSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BottonSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>[]
          }
          upsert: {
            args: Prisma.BottonSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BottonSectionPayload>
          }
          aggregate: {
            args: Prisma.BottonSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBottonSection>
          }
          groupBy: {
            args: Prisma.BottonSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BottonSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BottonSectionCountArgs<ExtArgs>
            result: $Utils.Optional<BottonSectionCountAggregateOutputType> | number
          }
        }
      }
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
      Footer: {
        payload: Prisma.$FooterPayload<ExtArgs>
        fields: Prisma.FooterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          findFirst: {
            args: Prisma.FooterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          findMany: {
            args: Prisma.FooterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          create: {
            args: Prisma.FooterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          createMany: {
            args: Prisma.FooterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          delete: {
            args: Prisma.FooterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          update: {
            args: Prisma.FooterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          deleteMany: {
            args: Prisma.FooterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FooterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          upsert: {
            args: Prisma.FooterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          aggregate: {
            args: Prisma.FooterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooter>
          }
          groupBy: {
            args: Prisma.FooterGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterCountArgs<ExtArgs>
            result: $Utils.Optional<FooterCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      CompanyAbout: {
        payload: Prisma.$CompanyAboutPayload<ExtArgs>
        fields: Prisma.CompanyAboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyAboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyAboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>
          }
          findFirst: {
            args: Prisma.CompanyAboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyAboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>
          }
          findMany: {
            args: Prisma.CompanyAboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>[]
          }
          create: {
            args: Prisma.CompanyAboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>
          }
          createMany: {
            args: Prisma.CompanyAboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyAboutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>[]
          }
          delete: {
            args: Prisma.CompanyAboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>
          }
          update: {
            args: Prisma.CompanyAboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>
          }
          deleteMany: {
            args: Prisma.CompanyAboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyAboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyAboutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>[]
          }
          upsert: {
            args: Prisma.CompanyAboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAboutPayload>
          }
          aggregate: {
            args: Prisma.CompanyAboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyAbout>
          }
          groupBy: {
            args: Prisma.CompanyAboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyAboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyAboutCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyAboutCountAggregateOutputType> | number
          }
        }
      }
      OurAdvantage: {
        payload: Prisma.$OurAdvantagePayload<ExtArgs>
        fields: Prisma.OurAdvantageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OurAdvantageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OurAdvantageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>
          }
          findFirst: {
            args: Prisma.OurAdvantageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OurAdvantageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>
          }
          findMany: {
            args: Prisma.OurAdvantageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>[]
          }
          create: {
            args: Prisma.OurAdvantageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>
          }
          createMany: {
            args: Prisma.OurAdvantageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OurAdvantageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>[]
          }
          delete: {
            args: Prisma.OurAdvantageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>
          }
          update: {
            args: Prisma.OurAdvantageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>
          }
          deleteMany: {
            args: Prisma.OurAdvantageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OurAdvantageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OurAdvantageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>[]
          }
          upsert: {
            args: Prisma.OurAdvantageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurAdvantagePayload>
          }
          aggregate: {
            args: Prisma.OurAdvantageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOurAdvantage>
          }
          groupBy: {
            args: Prisma.OurAdvantageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OurAdvantageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OurAdvantageCountArgs<ExtArgs>
            result: $Utils.Optional<OurAdvantageCountAggregateOutputType> | number
          }
        }
      }
      OurService: {
        payload: Prisma.$OurServicePayload<ExtArgs>
        fields: Prisma.OurServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OurServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OurServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>
          }
          findFirst: {
            args: Prisma.OurServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OurServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>
          }
          findMany: {
            args: Prisma.OurServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>[]
          }
          create: {
            args: Prisma.OurServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>
          }
          createMany: {
            args: Prisma.OurServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OurServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>[]
          }
          delete: {
            args: Prisma.OurServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>
          }
          update: {
            args: Prisma.OurServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>
          }
          deleteMany: {
            args: Prisma.OurServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OurServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OurServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>[]
          }
          upsert: {
            args: Prisma.OurServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OurServicePayload>
          }
          aggregate: {
            args: Prisma.OurServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOurService>
          }
          groupBy: {
            args: Prisma.OurServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OurServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OurServiceCountArgs<ExtArgs>
            result: $Utils.Optional<OurServiceCountAggregateOutputType> | number
          }
        }
      }
      RequirementWithDriver: {
        payload: Prisma.$RequirementWithDriverPayload<ExtArgs>
        fields: Prisma.RequirementWithDriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementWithDriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementWithDriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>
          }
          findFirst: {
            args: Prisma.RequirementWithDriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementWithDriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>
          }
          findMany: {
            args: Prisma.RequirementWithDriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>[]
          }
          create: {
            args: Prisma.RequirementWithDriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>
          }
          createMany: {
            args: Prisma.RequirementWithDriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementWithDriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>[]
          }
          delete: {
            args: Prisma.RequirementWithDriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>
          }
          update: {
            args: Prisma.RequirementWithDriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>
          }
          deleteMany: {
            args: Prisma.RequirementWithDriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementWithDriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequirementWithDriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>[]
          }
          upsert: {
            args: Prisma.RequirementWithDriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementWithDriverPayload>
          }
          aggregate: {
            args: Prisma.RequirementWithDriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirementWithDriver>
          }
          groupBy: {
            args: Prisma.RequirementWithDriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementWithDriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementWithDriverCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementWithDriverCountAggregateOutputType> | number
          }
        }
      }
      RequirementNoDriver: {
        payload: Prisma.$RequirementNoDriverPayload<ExtArgs>
        fields: Prisma.RequirementNoDriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementNoDriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementNoDriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>
          }
          findFirst: {
            args: Prisma.RequirementNoDriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementNoDriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>
          }
          findMany: {
            args: Prisma.RequirementNoDriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>[]
          }
          create: {
            args: Prisma.RequirementNoDriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>
          }
          createMany: {
            args: Prisma.RequirementNoDriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementNoDriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>[]
          }
          delete: {
            args: Prisma.RequirementNoDriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>
          }
          update: {
            args: Prisma.RequirementNoDriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>
          }
          deleteMany: {
            args: Prisma.RequirementNoDriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementNoDriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequirementNoDriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>[]
          }
          upsert: {
            args: Prisma.RequirementNoDriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNoDriverPayload>
          }
          aggregate: {
            args: Prisma.RequirementNoDriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirementNoDriver>
          }
          groupBy: {
            args: Prisma.RequirementNoDriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementNoDriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementNoDriverCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementNoDriverCountAggregateOutputType> | number
          }
        }
      }
      RequirementNote: {
        payload: Prisma.$RequirementNotePayload<ExtArgs>
        fields: Prisma.RequirementNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>
          }
          findFirst: {
            args: Prisma.RequirementNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>
          }
          findMany: {
            args: Prisma.RequirementNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>[]
          }
          create: {
            args: Prisma.RequirementNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>
          }
          createMany: {
            args: Prisma.RequirementNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>[]
          }
          delete: {
            args: Prisma.RequirementNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>
          }
          update: {
            args: Prisma.RequirementNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>
          }
          deleteMany: {
            args: Prisma.RequirementNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequirementNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>[]
          }
          upsert: {
            args: Prisma.RequirementNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementNotePayload>
          }
          aggregate: {
            args: Prisma.RequirementNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirementNote>
          }
          groupBy: {
            args: Prisma.RequirementNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementNoteCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementNoteCountAggregateOutputType> | number
          }
        }
      }
      Regulation: {
        payload: Prisma.$RegulationPayload<ExtArgs>
        fields: Prisma.RegulationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegulationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegulationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          findFirst: {
            args: Prisma.RegulationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegulationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          findMany: {
            args: Prisma.RegulationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>[]
          }
          create: {
            args: Prisma.RegulationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          createMany: {
            args: Prisma.RegulationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegulationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>[]
          }
          delete: {
            args: Prisma.RegulationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          update: {
            args: Prisma.RegulationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          deleteMany: {
            args: Prisma.RegulationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegulationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegulationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>[]
          }
          upsert: {
            args: Prisma.RegulationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          aggregate: {
            args: Prisma.RegulationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegulation>
          }
          groupBy: {
            args: Prisma.RegulationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegulationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegulationCountArgs<ExtArgs>
            result: $Utils.Optional<RegulationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    heroSection?: HeroSectionOmit
    bottonSection?: BottonSectionOmit
    faq?: FaqOmit
    footer?: FooterOmit
    brand?: BrandOmit
    car?: CarOmit
    companyAbout?: CompanyAboutOmit
    ourAdvantage?: OurAdvantageOmit
    ourService?: OurServiceOmit
    requirementWithDriver?: RequirementWithDriverOmit
    requirementNoDriver?: RequirementNoDriverOmit
    requirementNote?: RequirementNoteOmit
    regulation?: RegulationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Car: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Car?: boolean | BrandCountOutputTypeCountCarArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model HeroSection
   */

  export type AggregateHeroSection = {
    _count: HeroSectionCountAggregateOutputType | null
    _avg: HeroSectionAvgAggregateOutputType | null
    _sum: HeroSectionSumAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  export type HeroSectionAvgAggregateOutputType = {
    id: number | null
  }

  export type HeroSectionSumAggregateOutputType = {
    id: number | null
  }

  export type HeroSectionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroSectionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroSectionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroSectionAvgAggregateInputType = {
    id?: true
  }

  export type HeroSectionSumAggregateInputType = {
    id?: true
  }

  export type HeroSectionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroSectionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroSectionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSection to aggregate.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroSections
    **/
    _count?: true | HeroSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroSectionMaxAggregateInputType
  }

  export type GetHeroSectionAggregateType<T extends HeroSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroSection[P]>
      : GetScalarType<T[P], AggregateHeroSection[P]>
  }




  export type HeroSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroSectionWhereInput
    orderBy?: HeroSectionOrderByWithAggregationInput | HeroSectionOrderByWithAggregationInput[]
    by: HeroSectionScalarFieldEnum[] | HeroSectionScalarFieldEnum
    having?: HeroSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroSectionCountAggregateInputType | true
    _avg?: HeroSectionAvgAggregateInputType
    _sum?: HeroSectionSumAggregateInputType
    _min?: HeroSectionMinAggregateInputType
    _max?: HeroSectionMaxAggregateInputType
  }

  export type HeroSectionGroupByOutputType = {
    id: number
    title: string
    description: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: HeroSectionCountAggregateOutputType | null
    _avg: HeroSectionAvgAggregateOutputType | null
    _sum: HeroSectionSumAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  type GetHeroSectionGroupByPayload<T extends HeroSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
            : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
        }
      >
    >


  export type HeroSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeroSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["heroSection"]>

  export type $HeroSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeroSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["heroSection"]>
    composites: {}
  }

  type HeroSectionGetPayload<S extends boolean | null | undefined | HeroSectionDefaultArgs> = $Result.GetResult<Prisma.$HeroSectionPayload, S>

  type HeroSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroSectionCountAggregateInputType | true
    }

  export interface HeroSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeroSection'], meta: { name: 'HeroSection' } }
    /**
     * Find zero or one HeroSection that matches the filter.
     * @param {HeroSectionFindUniqueArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroSectionFindUniqueArgs>(args: SelectSubset<T, HeroSectionFindUniqueArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeroSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroSectionFindUniqueOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroSectionFindFirstArgs>(args?: SelectSubset<T, HeroSectionFindFirstArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeroSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroSections
     * const heroSections = await prisma.heroSection.findMany()
     * 
     * // Get first 10 HeroSections
     * const heroSections = await prisma.heroSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroSectionFindManyArgs>(args?: SelectSubset<T, HeroSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeroSection.
     * @param {HeroSectionCreateArgs} args - Arguments to create a HeroSection.
     * @example
     * // Create one HeroSection
     * const HeroSection = await prisma.heroSection.create({
     *   data: {
     *     // ... data to create a HeroSection
     *   }
     * })
     * 
     */
    create<T extends HeroSectionCreateArgs>(args: SelectSubset<T, HeroSectionCreateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeroSections.
     * @param {HeroSectionCreateManyArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroSectionCreateManyArgs>(args?: SelectSubset<T, HeroSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeroSections and returns the data saved in the database.
     * @param {HeroSectionCreateManyAndReturnArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeroSections and only return the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeroSection.
     * @param {HeroSectionDeleteArgs} args - Arguments to delete one HeroSection.
     * @example
     * // Delete one HeroSection
     * const HeroSection = await prisma.heroSection.delete({
     *   where: {
     *     // ... filter to delete one HeroSection
     *   }
     * })
     * 
     */
    delete<T extends HeroSectionDeleteArgs>(args: SelectSubset<T, HeroSectionDeleteArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeroSection.
     * @param {HeroSectionUpdateArgs} args - Arguments to update one HeroSection.
     * @example
     * // Update one HeroSection
     * const heroSection = await prisma.heroSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroSectionUpdateArgs>(args: SelectSubset<T, HeroSectionUpdateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeroSections.
     * @param {HeroSectionDeleteManyArgs} args - Arguments to filter HeroSections to delete.
     * @example
     * // Delete a few HeroSections
     * const { count } = await prisma.heroSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroSectionDeleteManyArgs>(args?: SelectSubset<T, HeroSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroSections
     * const heroSection = await prisma.heroSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroSectionUpdateManyArgs>(args: SelectSubset<T, HeroSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroSections and returns the data updated in the database.
     * @param {HeroSectionUpdateManyAndReturnArgs} args - Arguments to update many HeroSections.
     * @example
     * // Update many HeroSections
     * const heroSection = await prisma.heroSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeroSections and only return the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeroSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeroSection.
     * @param {HeroSectionUpsertArgs} args - Arguments to update or create a HeroSection.
     * @example
     * // Update or create a HeroSection
     * const heroSection = await prisma.heroSection.upsert({
     *   create: {
     *     // ... data to create a HeroSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroSection we want to update
     *   }
     * })
     */
    upsert<T extends HeroSectionUpsertArgs>(args: SelectSubset<T, HeroSectionUpsertArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionCountArgs} args - Arguments to filter HeroSections to count.
     * @example
     * // Count the number of HeroSections
     * const count = await prisma.heroSection.count({
     *   where: {
     *     // ... the filter for the HeroSections we want to count
     *   }
     * })
    **/
    count<T extends HeroSectionCountArgs>(
      args?: Subset<T, HeroSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroSectionAggregateArgs>(args: Subset<T, HeroSectionAggregateArgs>): Prisma.PrismaPromise<GetHeroSectionAggregateType<T>>

    /**
     * Group by HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeroSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroSectionGroupByArgs['orderBy'] }
        : { orderBy?: HeroSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeroSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeroSection model
   */
  readonly fields: HeroSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeroSection model
   */
  interface HeroSectionFieldRefs {
    readonly id: FieldRef<"HeroSection", 'Int'>
    readonly title: FieldRef<"HeroSection", 'String'>
    readonly description: FieldRef<"HeroSection", 'String'>
    readonly imageUrl: FieldRef<"HeroSection", 'String'>
    readonly createdAt: FieldRef<"HeroSection", 'DateTime'>
    readonly updatedAt: FieldRef<"HeroSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeroSection findUnique
   */
  export type HeroSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findUniqueOrThrow
   */
  export type HeroSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findFirst
   */
  export type HeroSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findFirstOrThrow
   */
  export type HeroSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findMany
   */
  export type HeroSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter, which HeroSections to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection create
   */
  export type HeroSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data needed to create a HeroSection.
     */
    data: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
  }

  /**
   * HeroSection createMany
   */
  export type HeroSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeroSection createManyAndReturn
   */
  export type HeroSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeroSection update
   */
  export type HeroSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data needed to update a HeroSection.
     */
    data: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
    /**
     * Choose, which HeroSection to update.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection updateMany
   */
  export type HeroSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeroSections.
     */
    data: XOR<HeroSectionUpdateManyMutationInput, HeroSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeroSections to update
     */
    where?: HeroSectionWhereInput
    /**
     * Limit how many HeroSections to update.
     */
    limit?: number
  }

  /**
   * HeroSection updateManyAndReturn
   */
  export type HeroSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The data used to update HeroSections.
     */
    data: XOR<HeroSectionUpdateManyMutationInput, HeroSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeroSections to update
     */
    where?: HeroSectionWhereInput
    /**
     * Limit how many HeroSections to update.
     */
    limit?: number
  }

  /**
   * HeroSection upsert
   */
  export type HeroSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * The filter to search for the HeroSection to update in case it exists.
     */
    where: HeroSectionWhereUniqueInput
    /**
     * In case the HeroSection found by the `where` argument doesn't exist, create a new HeroSection with this data.
     */
    create: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
    /**
     * In case the HeroSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
  }

  /**
   * HeroSection delete
   */
  export type HeroSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
    /**
     * Filter which HeroSection to delete.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection deleteMany
   */
  export type HeroSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSections to delete
     */
    where?: HeroSectionWhereInput
    /**
     * Limit how many HeroSections to delete.
     */
    limit?: number
  }

  /**
   * HeroSection without action
   */
  export type HeroSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroSection
     */
    omit?: HeroSectionOmit<ExtArgs> | null
  }


  /**
   * Model BottonSection
   */

  export type AggregateBottonSection = {
    _count: BottonSectionCountAggregateOutputType | null
    _avg: BottonSectionAvgAggregateOutputType | null
    _sum: BottonSectionSumAggregateOutputType | null
    _min: BottonSectionMinAggregateOutputType | null
    _max: BottonSectionMaxAggregateOutputType | null
  }

  export type BottonSectionAvgAggregateOutputType = {
    id: number | null
  }

  export type BottonSectionSumAggregateOutputType = {
    id: number | null
  }

  export type BottonSectionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BottonSectionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BottonSectionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BottonSectionAvgAggregateInputType = {
    id?: true
  }

  export type BottonSectionSumAggregateInputType = {
    id?: true
  }

  export type BottonSectionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BottonSectionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BottonSectionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BottonSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BottonSection to aggregate.
     */
    where?: BottonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottonSections to fetch.
     */
    orderBy?: BottonSectionOrderByWithRelationInput | BottonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BottonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottonSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BottonSections
    **/
    _count?: true | BottonSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BottonSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BottonSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BottonSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BottonSectionMaxAggregateInputType
  }

  export type GetBottonSectionAggregateType<T extends BottonSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateBottonSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBottonSection[P]>
      : GetScalarType<T[P], AggregateBottonSection[P]>
  }




  export type BottonSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BottonSectionWhereInput
    orderBy?: BottonSectionOrderByWithAggregationInput | BottonSectionOrderByWithAggregationInput[]
    by: BottonSectionScalarFieldEnum[] | BottonSectionScalarFieldEnum
    having?: BottonSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BottonSectionCountAggregateInputType | true
    _avg?: BottonSectionAvgAggregateInputType
    _sum?: BottonSectionSumAggregateInputType
    _min?: BottonSectionMinAggregateInputType
    _max?: BottonSectionMaxAggregateInputType
  }

  export type BottonSectionGroupByOutputType = {
    id: number
    title: string
    description: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BottonSectionCountAggregateOutputType | null
    _avg: BottonSectionAvgAggregateOutputType | null
    _sum: BottonSectionSumAggregateOutputType | null
    _min: BottonSectionMinAggregateOutputType | null
    _max: BottonSectionMaxAggregateOutputType | null
  }

  type GetBottonSectionGroupByPayload<T extends BottonSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BottonSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BottonSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BottonSectionGroupByOutputType[P]>
            : GetScalarType<T[P], BottonSectionGroupByOutputType[P]>
        }
      >
    >


  export type BottonSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bottonSection"]>

  export type BottonSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bottonSection"]>

  export type BottonSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bottonSection"]>

  export type BottonSectionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BottonSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["bottonSection"]>

  export type $BottonSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BottonSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bottonSection"]>
    composites: {}
  }

  type BottonSectionGetPayload<S extends boolean | null | undefined | BottonSectionDefaultArgs> = $Result.GetResult<Prisma.$BottonSectionPayload, S>

  type BottonSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BottonSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BottonSectionCountAggregateInputType | true
    }

  export interface BottonSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BottonSection'], meta: { name: 'BottonSection' } }
    /**
     * Find zero or one BottonSection that matches the filter.
     * @param {BottonSectionFindUniqueArgs} args - Arguments to find a BottonSection
     * @example
     * // Get one BottonSection
     * const bottonSection = await prisma.bottonSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BottonSectionFindUniqueArgs>(args: SelectSubset<T, BottonSectionFindUniqueArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BottonSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BottonSectionFindUniqueOrThrowArgs} args - Arguments to find a BottonSection
     * @example
     * // Get one BottonSection
     * const bottonSection = await prisma.bottonSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BottonSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, BottonSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BottonSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionFindFirstArgs} args - Arguments to find a BottonSection
     * @example
     * // Get one BottonSection
     * const bottonSection = await prisma.bottonSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BottonSectionFindFirstArgs>(args?: SelectSubset<T, BottonSectionFindFirstArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BottonSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionFindFirstOrThrowArgs} args - Arguments to find a BottonSection
     * @example
     * // Get one BottonSection
     * const bottonSection = await prisma.bottonSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BottonSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, BottonSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BottonSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BottonSections
     * const bottonSections = await prisma.bottonSection.findMany()
     * 
     * // Get first 10 BottonSections
     * const bottonSections = await prisma.bottonSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bottonSectionWithIdOnly = await prisma.bottonSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BottonSectionFindManyArgs>(args?: SelectSubset<T, BottonSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BottonSection.
     * @param {BottonSectionCreateArgs} args - Arguments to create a BottonSection.
     * @example
     * // Create one BottonSection
     * const BottonSection = await prisma.bottonSection.create({
     *   data: {
     *     // ... data to create a BottonSection
     *   }
     * })
     * 
     */
    create<T extends BottonSectionCreateArgs>(args: SelectSubset<T, BottonSectionCreateArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BottonSections.
     * @param {BottonSectionCreateManyArgs} args - Arguments to create many BottonSections.
     * @example
     * // Create many BottonSections
     * const bottonSection = await prisma.bottonSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BottonSectionCreateManyArgs>(args?: SelectSubset<T, BottonSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BottonSections and returns the data saved in the database.
     * @param {BottonSectionCreateManyAndReturnArgs} args - Arguments to create many BottonSections.
     * @example
     * // Create many BottonSections
     * const bottonSection = await prisma.bottonSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BottonSections and only return the `id`
     * const bottonSectionWithIdOnly = await prisma.bottonSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BottonSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, BottonSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BottonSection.
     * @param {BottonSectionDeleteArgs} args - Arguments to delete one BottonSection.
     * @example
     * // Delete one BottonSection
     * const BottonSection = await prisma.bottonSection.delete({
     *   where: {
     *     // ... filter to delete one BottonSection
     *   }
     * })
     * 
     */
    delete<T extends BottonSectionDeleteArgs>(args: SelectSubset<T, BottonSectionDeleteArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BottonSection.
     * @param {BottonSectionUpdateArgs} args - Arguments to update one BottonSection.
     * @example
     * // Update one BottonSection
     * const bottonSection = await prisma.bottonSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BottonSectionUpdateArgs>(args: SelectSubset<T, BottonSectionUpdateArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BottonSections.
     * @param {BottonSectionDeleteManyArgs} args - Arguments to filter BottonSections to delete.
     * @example
     * // Delete a few BottonSections
     * const { count } = await prisma.bottonSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BottonSectionDeleteManyArgs>(args?: SelectSubset<T, BottonSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BottonSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BottonSections
     * const bottonSection = await prisma.bottonSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BottonSectionUpdateManyArgs>(args: SelectSubset<T, BottonSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BottonSections and returns the data updated in the database.
     * @param {BottonSectionUpdateManyAndReturnArgs} args - Arguments to update many BottonSections.
     * @example
     * // Update many BottonSections
     * const bottonSection = await prisma.bottonSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BottonSections and only return the `id`
     * const bottonSectionWithIdOnly = await prisma.bottonSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BottonSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, BottonSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BottonSection.
     * @param {BottonSectionUpsertArgs} args - Arguments to update or create a BottonSection.
     * @example
     * // Update or create a BottonSection
     * const bottonSection = await prisma.bottonSection.upsert({
     *   create: {
     *     // ... data to create a BottonSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BottonSection we want to update
     *   }
     * })
     */
    upsert<T extends BottonSectionUpsertArgs>(args: SelectSubset<T, BottonSectionUpsertArgs<ExtArgs>>): Prisma__BottonSectionClient<$Result.GetResult<Prisma.$BottonSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BottonSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionCountArgs} args - Arguments to filter BottonSections to count.
     * @example
     * // Count the number of BottonSections
     * const count = await prisma.bottonSection.count({
     *   where: {
     *     // ... the filter for the BottonSections we want to count
     *   }
     * })
    **/
    count<T extends BottonSectionCountArgs>(
      args?: Subset<T, BottonSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BottonSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BottonSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BottonSectionAggregateArgs>(args: Subset<T, BottonSectionAggregateArgs>): Prisma.PrismaPromise<GetBottonSectionAggregateType<T>>

    /**
     * Group by BottonSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BottonSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BottonSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BottonSectionGroupByArgs['orderBy'] }
        : { orderBy?: BottonSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BottonSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBottonSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BottonSection model
   */
  readonly fields: BottonSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BottonSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BottonSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BottonSection model
   */
  interface BottonSectionFieldRefs {
    readonly id: FieldRef<"BottonSection", 'Int'>
    readonly title: FieldRef<"BottonSection", 'String'>
    readonly description: FieldRef<"BottonSection", 'String'>
    readonly imageUrl: FieldRef<"BottonSection", 'String'>
    readonly createdAt: FieldRef<"BottonSection", 'DateTime'>
    readonly updatedAt: FieldRef<"BottonSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BottonSection findUnique
   */
  export type BottonSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * Filter, which BottonSection to fetch.
     */
    where: BottonSectionWhereUniqueInput
  }

  /**
   * BottonSection findUniqueOrThrow
   */
  export type BottonSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * Filter, which BottonSection to fetch.
     */
    where: BottonSectionWhereUniqueInput
  }

  /**
   * BottonSection findFirst
   */
  export type BottonSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * Filter, which BottonSection to fetch.
     */
    where?: BottonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottonSections to fetch.
     */
    orderBy?: BottonSectionOrderByWithRelationInput | BottonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BottonSections.
     */
    cursor?: BottonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottonSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BottonSections.
     */
    distinct?: BottonSectionScalarFieldEnum | BottonSectionScalarFieldEnum[]
  }

  /**
   * BottonSection findFirstOrThrow
   */
  export type BottonSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * Filter, which BottonSection to fetch.
     */
    where?: BottonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottonSections to fetch.
     */
    orderBy?: BottonSectionOrderByWithRelationInput | BottonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BottonSections.
     */
    cursor?: BottonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottonSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BottonSections.
     */
    distinct?: BottonSectionScalarFieldEnum | BottonSectionScalarFieldEnum[]
  }

  /**
   * BottonSection findMany
   */
  export type BottonSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * Filter, which BottonSections to fetch.
     */
    where?: BottonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BottonSections to fetch.
     */
    orderBy?: BottonSectionOrderByWithRelationInput | BottonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BottonSections.
     */
    cursor?: BottonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BottonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BottonSections.
     */
    skip?: number
    distinct?: BottonSectionScalarFieldEnum | BottonSectionScalarFieldEnum[]
  }

  /**
   * BottonSection create
   */
  export type BottonSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * The data needed to create a BottonSection.
     */
    data: XOR<BottonSectionCreateInput, BottonSectionUncheckedCreateInput>
  }

  /**
   * BottonSection createMany
   */
  export type BottonSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BottonSections.
     */
    data: BottonSectionCreateManyInput | BottonSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BottonSection createManyAndReturn
   */
  export type BottonSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * The data used to create many BottonSections.
     */
    data: BottonSectionCreateManyInput | BottonSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BottonSection update
   */
  export type BottonSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * The data needed to update a BottonSection.
     */
    data: XOR<BottonSectionUpdateInput, BottonSectionUncheckedUpdateInput>
    /**
     * Choose, which BottonSection to update.
     */
    where: BottonSectionWhereUniqueInput
  }

  /**
   * BottonSection updateMany
   */
  export type BottonSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BottonSections.
     */
    data: XOR<BottonSectionUpdateManyMutationInput, BottonSectionUncheckedUpdateManyInput>
    /**
     * Filter which BottonSections to update
     */
    where?: BottonSectionWhereInput
    /**
     * Limit how many BottonSections to update.
     */
    limit?: number
  }

  /**
   * BottonSection updateManyAndReturn
   */
  export type BottonSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * The data used to update BottonSections.
     */
    data: XOR<BottonSectionUpdateManyMutationInput, BottonSectionUncheckedUpdateManyInput>
    /**
     * Filter which BottonSections to update
     */
    where?: BottonSectionWhereInput
    /**
     * Limit how many BottonSections to update.
     */
    limit?: number
  }

  /**
   * BottonSection upsert
   */
  export type BottonSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * The filter to search for the BottonSection to update in case it exists.
     */
    where: BottonSectionWhereUniqueInput
    /**
     * In case the BottonSection found by the `where` argument doesn't exist, create a new BottonSection with this data.
     */
    create: XOR<BottonSectionCreateInput, BottonSectionUncheckedCreateInput>
    /**
     * In case the BottonSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BottonSectionUpdateInput, BottonSectionUncheckedUpdateInput>
  }

  /**
   * BottonSection delete
   */
  export type BottonSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
    /**
     * Filter which BottonSection to delete.
     */
    where: BottonSectionWhereUniqueInput
  }

  /**
   * BottonSection deleteMany
   */
  export type BottonSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BottonSections to delete
     */
    where?: BottonSectionWhereInput
    /**
     * Limit how many BottonSections to delete.
     */
    limit?: number
  }

  /**
   * BottonSection without action
   */
  export type BottonSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BottonSection
     */
    select?: BottonSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BottonSection
     */
    omit?: BottonSectionOmit<ExtArgs> | null
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    id: number | null
  }

  export type FaqSumAggregateOutputType = {
    id: number | null
  }

  export type FaqMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    id?: true
  }

  export type FaqSumAggregateInputType = {
    id?: true
  }

  export type FaqMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    id: number
    question: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["faq"]>

  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faqs and returns the data saved in the database.
     * @param {FaqCreateManyAndReturnArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faqs and only return the `id`
     * const faqWithIdOnly = await prisma.faq.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaqCreateManyAndReturnArgs>(args?: SelectSubset<T, FaqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs and returns the data updated in the database.
     * @param {FaqUpdateManyAndReturnArgs} args - Arguments to update many Faqs.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faqs and only return the `id`
     * const faqWithIdOnly = await prisma.faq.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FaqUpdateManyAndReturnArgs>(args: SelectSubset<T, FaqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faq model
   */
  interface FaqFieldRefs {
    readonly id: FieldRef<"Faq", 'Int'>
    readonly question: FieldRef<"Faq", 'String'>
    readonly answer: FieldRef<"Faq", 'String'>
    readonly createdAt: FieldRef<"Faq", 'DateTime'>
    readonly updatedAt: FieldRef<"Faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq createManyAndReturn
   */
  export type FaqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq updateManyAndReturn
   */
  export type FaqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to delete.
     */
    limit?: number
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
  }


  /**
   * Model Footer
   */

  export type AggregateFooter = {
    _count: FooterCountAggregateOutputType | null
    _avg: FooterAvgAggregateOutputType | null
    _sum: FooterSumAggregateOutputType | null
    _min: FooterMinAggregateOutputType | null
    _max: FooterMaxAggregateOutputType | null
  }

  export type FooterAvgAggregateOutputType = {
    id: number | null
  }

  export type FooterSumAggregateOutputType = {
    id: number | null
  }

  export type FooterMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FooterAvgAggregateInputType = {
    id?: true
  }

  export type FooterSumAggregateInputType = {
    id?: true
  }

  export type FooterMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Footer to aggregate.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Footers
    **/
    _count?: true | FooterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FooterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FooterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterMaxAggregateInputType
  }

  export type GetFooterAggregateType<T extends FooterAggregateArgs> = {
        [P in keyof T & keyof AggregateFooter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooter[P]>
      : GetScalarType<T[P], AggregateFooter[P]>
  }




  export type FooterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterWhereInput
    orderBy?: FooterOrderByWithAggregationInput | FooterOrderByWithAggregationInput[]
    by: FooterScalarFieldEnum[] | FooterScalarFieldEnum
    having?: FooterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterCountAggregateInputType | true
    _avg?: FooterAvgAggregateInputType
    _sum?: FooterSumAggregateInputType
    _min?: FooterMinAggregateInputType
    _max?: FooterMaxAggregateInputType
  }

  export type FooterGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: FooterCountAggregateOutputType | null
    _avg: FooterAvgAggregateOutputType | null
    _sum: FooterSumAggregateOutputType | null
    _min: FooterMinAggregateOutputType | null
    _max: FooterMaxAggregateOutputType | null
  }

  type GetFooterGroupByPayload<T extends FooterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterGroupByOutputType[P]>
            : GetScalarType<T[P], FooterGroupByOutputType[P]>
        }
      >
    >


  export type FooterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FooterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["footer"]>

  export type $FooterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Footer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["footer"]>
    composites: {}
  }

  type FooterGetPayload<S extends boolean | null | undefined | FooterDefaultArgs> = $Result.GetResult<Prisma.$FooterPayload, S>

  type FooterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterCountAggregateInputType | true
    }

  export interface FooterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Footer'], meta: { name: 'Footer' } }
    /**
     * Find zero or one Footer that matches the filter.
     * @param {FooterFindUniqueArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterFindUniqueArgs>(args: SelectSubset<T, FooterFindUniqueArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Footer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterFindUniqueOrThrowArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Footer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindFirstArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterFindFirstArgs>(args?: SelectSubset<T, FooterFindFirstArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Footer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindFirstOrThrowArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Footers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Footers
     * const footers = await prisma.footer.findMany()
     * 
     * // Get first 10 Footers
     * const footers = await prisma.footer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerWithIdOnly = await prisma.footer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterFindManyArgs>(args?: SelectSubset<T, FooterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Footer.
     * @param {FooterCreateArgs} args - Arguments to create a Footer.
     * @example
     * // Create one Footer
     * const Footer = await prisma.footer.create({
     *   data: {
     *     // ... data to create a Footer
     *   }
     * })
     * 
     */
    create<T extends FooterCreateArgs>(args: SelectSubset<T, FooterCreateArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Footers.
     * @param {FooterCreateManyArgs} args - Arguments to create many Footers.
     * @example
     * // Create many Footers
     * const footer = await prisma.footer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterCreateManyArgs>(args?: SelectSubset<T, FooterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Footers and returns the data saved in the database.
     * @param {FooterCreateManyAndReturnArgs} args - Arguments to create many Footers.
     * @example
     * // Create many Footers
     * const footer = await prisma.footer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Footers and only return the `id`
     * const footerWithIdOnly = await prisma.footer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Footer.
     * @param {FooterDeleteArgs} args - Arguments to delete one Footer.
     * @example
     * // Delete one Footer
     * const Footer = await prisma.footer.delete({
     *   where: {
     *     // ... filter to delete one Footer
     *   }
     * })
     * 
     */
    delete<T extends FooterDeleteArgs>(args: SelectSubset<T, FooterDeleteArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Footer.
     * @param {FooterUpdateArgs} args - Arguments to update one Footer.
     * @example
     * // Update one Footer
     * const footer = await prisma.footer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterUpdateArgs>(args: SelectSubset<T, FooterUpdateArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Footers.
     * @param {FooterDeleteManyArgs} args - Arguments to filter Footers to delete.
     * @example
     * // Delete a few Footers
     * const { count } = await prisma.footer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterDeleteManyArgs>(args?: SelectSubset<T, FooterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Footers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Footers
     * const footer = await prisma.footer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterUpdateManyArgs>(args: SelectSubset<T, FooterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Footers and returns the data updated in the database.
     * @param {FooterUpdateManyAndReturnArgs} args - Arguments to update many Footers.
     * @example
     * // Update many Footers
     * const footer = await prisma.footer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Footers and only return the `id`
     * const footerWithIdOnly = await prisma.footer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FooterUpdateManyAndReturnArgs>(args: SelectSubset<T, FooterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Footer.
     * @param {FooterUpsertArgs} args - Arguments to update or create a Footer.
     * @example
     * // Update or create a Footer
     * const footer = await prisma.footer.upsert({
     *   create: {
     *     // ... data to create a Footer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Footer we want to update
     *   }
     * })
     */
    upsert<T extends FooterUpsertArgs>(args: SelectSubset<T, FooterUpsertArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Footers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterCountArgs} args - Arguments to filter Footers to count.
     * @example
     * // Count the number of Footers
     * const count = await prisma.footer.count({
     *   where: {
     *     // ... the filter for the Footers we want to count
     *   }
     * })
    **/
    count<T extends FooterCountArgs>(
      args?: Subset<T, FooterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Footer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooterAggregateArgs>(args: Subset<T, FooterAggregateArgs>): Prisma.PrismaPromise<GetFooterAggregateType<T>>

    /**
     * Group by Footer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FooterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterGroupByArgs['orderBy'] }
        : { orderBy?: FooterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FooterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Footer model
   */
  readonly fields: FooterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Footer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Footer model
   */
  interface FooterFieldRefs {
    readonly id: FieldRef<"Footer", 'Int'>
    readonly description: FieldRef<"Footer", 'String'>
    readonly createdAt: FieldRef<"Footer", 'DateTime'>
    readonly updatedAt: FieldRef<"Footer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Footer findUnique
   */
  export type FooterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer findUniqueOrThrow
   */
  export type FooterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer findFirst
   */
  export type FooterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Footers.
     */
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer findFirstOrThrow
   */
  export type FooterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Footers.
     */
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer findMany
   */
  export type FooterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footers to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer create
   */
  export type FooterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data needed to create a Footer.
     */
    data: XOR<FooterCreateInput, FooterUncheckedCreateInput>
  }

  /**
   * Footer createMany
   */
  export type FooterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Footers.
     */
    data: FooterCreateManyInput | FooterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Footer createManyAndReturn
   */
  export type FooterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data used to create many Footers.
     */
    data: FooterCreateManyInput | FooterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Footer update
   */
  export type FooterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data needed to update a Footer.
     */
    data: XOR<FooterUpdateInput, FooterUncheckedUpdateInput>
    /**
     * Choose, which Footer to update.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer updateMany
   */
  export type FooterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Footers.
     */
    data: XOR<FooterUpdateManyMutationInput, FooterUncheckedUpdateManyInput>
    /**
     * Filter which Footers to update
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to update.
     */
    limit?: number
  }

  /**
   * Footer updateManyAndReturn
   */
  export type FooterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data used to update Footers.
     */
    data: XOR<FooterUpdateManyMutationInput, FooterUncheckedUpdateManyInput>
    /**
     * Filter which Footers to update
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to update.
     */
    limit?: number
  }

  /**
   * Footer upsert
   */
  export type FooterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The filter to search for the Footer to update in case it exists.
     */
    where: FooterWhereUniqueInput
    /**
     * In case the Footer found by the `where` argument doesn't exist, create a new Footer with this data.
     */
    create: XOR<FooterCreateInput, FooterUncheckedCreateInput>
    /**
     * In case the Footer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterUpdateInput, FooterUncheckedUpdateInput>
  }

  /**
   * Footer delete
   */
  export type FooterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter which Footer to delete.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer deleteMany
   */
  export type FooterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Footers to delete
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to delete.
     */
    limit?: number
  }

  /**
   * Footer without action
   */
  export type FooterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Car?: boolean | Brand$CarArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Car?: boolean | Brand$CarArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      Car: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Car<T extends Brand$CarArgs<ExtArgs> = {}>(args?: Subset<T, Brand$CarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly slug: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.Car
   */
  export type Brand$CarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
    priceFullDay: number | null
    priceHalfDay: number | null
    priceFullDayInCity: number | null
    priceHalfDayInCity: number | null
    priceFullDayOutCity: number | null
    priceHalfDayOutCity: number | null
    year: number | null
    maxPassengers: number | null
    payloadCapacity: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    brandId: number | null
    priceFullDay: number | null
    priceHalfDay: number | null
    priceFullDayInCity: number | null
    priceHalfDayInCity: number | null
    priceFullDayOutCity: number | null
    priceHalfDayOutCity: number | null
    year: number | null
    maxPassengers: number | null
    payloadCapacity: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    features: string | null
    imageUrl: string | null
    brandId: number | null
    priceFullDay: number | null
    priceHalfDay: number | null
    priceFullDayInCity: number | null
    priceHalfDayInCity: number | null
    priceFullDayOutCity: number | null
    priceHalfDayOutCity: number | null
    year: number | null
    fuelType: string | null
    transmission: string | null
    maxPassengers: number | null
    payloadCapacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    features: string | null
    imageUrl: string | null
    brandId: number | null
    priceFullDay: number | null
    priceHalfDay: number | null
    priceFullDayInCity: number | null
    priceHalfDayInCity: number | null
    priceFullDayOutCity: number | null
    priceHalfDayOutCity: number | null
    year: number | null
    fuelType: string | null
    transmission: string | null
    maxPassengers: number | null
    payloadCapacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    features: number
    imageUrl: number
    brandId: number
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity: number
    priceHalfDayInCity: number
    priceFullDayOutCity: number
    priceHalfDayOutCity: number
    year: number
    fuelType: number
    transmission: number
    maxPassengers: number
    payloadCapacity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    brandId?: true
    priceFullDay?: true
    priceHalfDay?: true
    priceFullDayInCity?: true
    priceHalfDayInCity?: true
    priceFullDayOutCity?: true
    priceHalfDayOutCity?: true
    year?: true
    maxPassengers?: true
    payloadCapacity?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    brandId?: true
    priceFullDay?: true
    priceHalfDay?: true
    priceFullDayInCity?: true
    priceHalfDayInCity?: true
    priceFullDayOutCity?: true
    priceHalfDayOutCity?: true
    year?: true
    maxPassengers?: true
    payloadCapacity?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    features?: true
    imageUrl?: true
    brandId?: true
    priceFullDay?: true
    priceHalfDay?: true
    priceFullDayInCity?: true
    priceHalfDayInCity?: true
    priceFullDayOutCity?: true
    priceHalfDayOutCity?: true
    year?: true
    fuelType?: true
    transmission?: true
    maxPassengers?: true
    payloadCapacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    features?: true
    imageUrl?: true
    brandId?: true
    priceFullDay?: true
    priceHalfDay?: true
    priceFullDayInCity?: true
    priceHalfDayInCity?: true
    priceFullDayOutCity?: true
    priceHalfDayOutCity?: true
    year?: true
    fuelType?: true
    transmission?: true
    maxPassengers?: true
    payloadCapacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    features?: true
    imageUrl?: true
    brandId?: true
    priceFullDay?: true
    priceHalfDay?: true
    priceFullDayInCity?: true
    priceHalfDayInCity?: true
    priceFullDayOutCity?: true
    priceHalfDayOutCity?: true
    year?: true
    fuelType?: true
    transmission?: true
    maxPassengers?: true
    payloadCapacity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    name: string
    slug: string
    features: string
    imageUrl: string | null
    brandId: number
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity: number | null
    priceHalfDayInCity: number | null
    priceFullDayOutCity: number | null
    priceHalfDayOutCity: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity: number | null
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    features?: boolean
    imageUrl?: boolean
    brandId?: boolean
    priceFullDay?: boolean
    priceHalfDay?: boolean
    priceFullDayInCity?: boolean
    priceHalfDayInCity?: boolean
    priceFullDayOutCity?: boolean
    priceHalfDayOutCity?: boolean
    year?: boolean
    fuelType?: boolean
    transmission?: boolean
    maxPassengers?: boolean
    payloadCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    features?: boolean
    imageUrl?: boolean
    brandId?: boolean
    priceFullDay?: boolean
    priceHalfDay?: boolean
    priceFullDayInCity?: boolean
    priceHalfDayInCity?: boolean
    priceFullDayOutCity?: boolean
    priceHalfDayOutCity?: boolean
    year?: boolean
    fuelType?: boolean
    transmission?: boolean
    maxPassengers?: boolean
    payloadCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    features?: boolean
    imageUrl?: boolean
    brandId?: boolean
    priceFullDay?: boolean
    priceHalfDay?: boolean
    priceFullDayInCity?: boolean
    priceHalfDayInCity?: boolean
    priceFullDayOutCity?: boolean
    priceHalfDayOutCity?: boolean
    year?: boolean
    fuelType?: boolean
    transmission?: boolean
    maxPassengers?: boolean
    payloadCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    features?: boolean
    imageUrl?: boolean
    brandId?: boolean
    priceFullDay?: boolean
    priceHalfDay?: boolean
    priceFullDayInCity?: boolean
    priceHalfDayInCity?: boolean
    priceFullDayOutCity?: boolean
    priceHalfDayOutCity?: boolean
    year?: boolean
    fuelType?: boolean
    transmission?: boolean
    maxPassengers?: boolean
    payloadCapacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "features" | "imageUrl" | "brandId" | "priceFullDay" | "priceHalfDay" | "priceFullDayInCity" | "priceHalfDayInCity" | "priceFullDayOutCity" | "priceHalfDayOutCity" | "year" | "fuelType" | "transmission" | "maxPassengers" | "payloadCapacity" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      features: string
      imageUrl: string | null
      brandId: number
      priceFullDay: number
      priceHalfDay: number
      priceFullDayInCity: number | null
      priceHalfDayInCity: number | null
      priceFullDayOutCity: number | null
      priceHalfDayOutCity: number | null
      year: number
      fuelType: string
      transmission: string
      maxPassengers: number
      payloadCapacity: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly name: FieldRef<"Car", 'String'>
    readonly slug: FieldRef<"Car", 'String'>
    readonly features: FieldRef<"Car", 'String'>
    readonly imageUrl: FieldRef<"Car", 'String'>
    readonly brandId: FieldRef<"Car", 'Int'>
    readonly priceFullDay: FieldRef<"Car", 'Float'>
    readonly priceHalfDay: FieldRef<"Car", 'Float'>
    readonly priceFullDayInCity: FieldRef<"Car", 'Float'>
    readonly priceHalfDayInCity: FieldRef<"Car", 'Float'>
    readonly priceFullDayOutCity: FieldRef<"Car", 'Float'>
    readonly priceHalfDayOutCity: FieldRef<"Car", 'Float'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly fuelType: FieldRef<"Car", 'String'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly maxPassengers: FieldRef<"Car", 'Int'>
    readonly payloadCapacity: FieldRef<"Car", 'Float'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model CompanyAbout
   */

  export type AggregateCompanyAbout = {
    _count: CompanyAboutCountAggregateOutputType | null
    _avg: CompanyAboutAvgAggregateOutputType | null
    _sum: CompanyAboutSumAggregateOutputType | null
    _min: CompanyAboutMinAggregateOutputType | null
    _max: CompanyAboutMaxAggregateOutputType | null
  }

  export type CompanyAboutAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanyAboutSumAggregateOutputType = {
    id: number | null
  }

  export type CompanyAboutMinAggregateOutputType = {
    id: number | null
    description: string | null
    imageUrl: string | null
    vision: string | null
    mission: string | null
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyAboutMaxAggregateOutputType = {
    id: number | null
    description: string | null
    imageUrl: string | null
    vision: string | null
    mission: string | null
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyAboutCountAggregateOutputType = {
    id: number
    description: number
    imageUrl: number
    vision: number
    mission: number
    address: number
    phone: number
    email: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAboutAvgAggregateInputType = {
    id?: true
  }

  export type CompanyAboutSumAggregateInputType = {
    id?: true
  }

  export type CompanyAboutMinAggregateInputType = {
    id?: true
    description?: true
    imageUrl?: true
    vision?: true
    mission?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyAboutMaxAggregateInputType = {
    id?: true
    description?: true
    imageUrl?: true
    vision?: true
    mission?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyAboutCountAggregateInputType = {
    id?: true
    description?: true
    imageUrl?: true
    vision?: true
    mission?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyAbout to aggregate.
     */
    where?: CompanyAboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAbouts to fetch.
     */
    orderBy?: CompanyAboutOrderByWithRelationInput | CompanyAboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyAboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAbouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAbouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyAbouts
    **/
    _count?: true | CompanyAboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAboutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyAboutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyAboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyAboutMaxAggregateInputType
  }

  export type GetCompanyAboutAggregateType<T extends CompanyAboutAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyAbout[P]>
      : GetScalarType<T[P], AggregateCompanyAbout[P]>
  }




  export type CompanyAboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAboutWhereInput
    orderBy?: CompanyAboutOrderByWithAggregationInput | CompanyAboutOrderByWithAggregationInput[]
    by: CompanyAboutScalarFieldEnum[] | CompanyAboutScalarFieldEnum
    having?: CompanyAboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyAboutCountAggregateInputType | true
    _avg?: CompanyAboutAvgAggregateInputType
    _sum?: CompanyAboutSumAggregateInputType
    _min?: CompanyAboutMinAggregateInputType
    _max?: CompanyAboutMaxAggregateInputType
  }

  export type CompanyAboutGroupByOutputType = {
    id: number
    description: string
    imageUrl: string | null
    vision: string
    mission: string
    address: string
    phone: string
    email: string
    website: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyAboutCountAggregateOutputType | null
    _avg: CompanyAboutAvgAggregateOutputType | null
    _sum: CompanyAboutSumAggregateOutputType | null
    _min: CompanyAboutMinAggregateOutputType | null
    _max: CompanyAboutMaxAggregateOutputType | null
  }

  type GetCompanyAboutGroupByPayload<T extends CompanyAboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyAboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyAboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyAboutGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyAboutGroupByOutputType[P]>
        }
      >
    >


  export type CompanyAboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    vision?: boolean
    mission?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyAbout"]>

  export type CompanyAboutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    vision?: boolean
    mission?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyAbout"]>

  export type CompanyAboutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    vision?: boolean
    mission?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyAbout"]>

  export type CompanyAboutSelectScalar = {
    id?: boolean
    description?: boolean
    imageUrl?: boolean
    vision?: boolean
    mission?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyAboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "imageUrl" | "vision" | "mission" | "address" | "phone" | "email" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["companyAbout"]>

  export type $CompanyAboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyAbout"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      imageUrl: string | null
      vision: string
      mission: string
      address: string
      phone: string
      email: string
      website: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companyAbout"]>
    composites: {}
  }

  type CompanyAboutGetPayload<S extends boolean | null | undefined | CompanyAboutDefaultArgs> = $Result.GetResult<Prisma.$CompanyAboutPayload, S>

  type CompanyAboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyAboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyAboutCountAggregateInputType | true
    }

  export interface CompanyAboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyAbout'], meta: { name: 'CompanyAbout' } }
    /**
     * Find zero or one CompanyAbout that matches the filter.
     * @param {CompanyAboutFindUniqueArgs} args - Arguments to find a CompanyAbout
     * @example
     * // Get one CompanyAbout
     * const companyAbout = await prisma.companyAbout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyAboutFindUniqueArgs>(args: SelectSubset<T, CompanyAboutFindUniqueArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyAbout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyAboutFindUniqueOrThrowArgs} args - Arguments to find a CompanyAbout
     * @example
     * // Get one CompanyAbout
     * const companyAbout = await prisma.companyAbout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyAboutFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyAboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyAbout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutFindFirstArgs} args - Arguments to find a CompanyAbout
     * @example
     * // Get one CompanyAbout
     * const companyAbout = await prisma.companyAbout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyAboutFindFirstArgs>(args?: SelectSubset<T, CompanyAboutFindFirstArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyAbout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutFindFirstOrThrowArgs} args - Arguments to find a CompanyAbout
     * @example
     * // Get one CompanyAbout
     * const companyAbout = await prisma.companyAbout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyAboutFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyAboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyAbouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyAbouts
     * const companyAbouts = await prisma.companyAbout.findMany()
     * 
     * // Get first 10 CompanyAbouts
     * const companyAbouts = await prisma.companyAbout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyAboutWithIdOnly = await prisma.companyAbout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyAboutFindManyArgs>(args?: SelectSubset<T, CompanyAboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyAbout.
     * @param {CompanyAboutCreateArgs} args - Arguments to create a CompanyAbout.
     * @example
     * // Create one CompanyAbout
     * const CompanyAbout = await prisma.companyAbout.create({
     *   data: {
     *     // ... data to create a CompanyAbout
     *   }
     * })
     * 
     */
    create<T extends CompanyAboutCreateArgs>(args: SelectSubset<T, CompanyAboutCreateArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyAbouts.
     * @param {CompanyAboutCreateManyArgs} args - Arguments to create many CompanyAbouts.
     * @example
     * // Create many CompanyAbouts
     * const companyAbout = await prisma.companyAbout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyAboutCreateManyArgs>(args?: SelectSubset<T, CompanyAboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyAbouts and returns the data saved in the database.
     * @param {CompanyAboutCreateManyAndReturnArgs} args - Arguments to create many CompanyAbouts.
     * @example
     * // Create many CompanyAbouts
     * const companyAbout = await prisma.companyAbout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyAbouts and only return the `id`
     * const companyAboutWithIdOnly = await prisma.companyAbout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyAboutCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyAboutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyAbout.
     * @param {CompanyAboutDeleteArgs} args - Arguments to delete one CompanyAbout.
     * @example
     * // Delete one CompanyAbout
     * const CompanyAbout = await prisma.companyAbout.delete({
     *   where: {
     *     // ... filter to delete one CompanyAbout
     *   }
     * })
     * 
     */
    delete<T extends CompanyAboutDeleteArgs>(args: SelectSubset<T, CompanyAboutDeleteArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyAbout.
     * @param {CompanyAboutUpdateArgs} args - Arguments to update one CompanyAbout.
     * @example
     * // Update one CompanyAbout
     * const companyAbout = await prisma.companyAbout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyAboutUpdateArgs>(args: SelectSubset<T, CompanyAboutUpdateArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyAbouts.
     * @param {CompanyAboutDeleteManyArgs} args - Arguments to filter CompanyAbouts to delete.
     * @example
     * // Delete a few CompanyAbouts
     * const { count } = await prisma.companyAbout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyAboutDeleteManyArgs>(args?: SelectSubset<T, CompanyAboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyAbouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyAbouts
     * const companyAbout = await prisma.companyAbout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyAboutUpdateManyArgs>(args: SelectSubset<T, CompanyAboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyAbouts and returns the data updated in the database.
     * @param {CompanyAboutUpdateManyAndReturnArgs} args - Arguments to update many CompanyAbouts.
     * @example
     * // Update many CompanyAbouts
     * const companyAbout = await prisma.companyAbout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyAbouts and only return the `id`
     * const companyAboutWithIdOnly = await prisma.companyAbout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyAboutUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyAboutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyAbout.
     * @param {CompanyAboutUpsertArgs} args - Arguments to update or create a CompanyAbout.
     * @example
     * // Update or create a CompanyAbout
     * const companyAbout = await prisma.companyAbout.upsert({
     *   create: {
     *     // ... data to create a CompanyAbout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyAbout we want to update
     *   }
     * })
     */
    upsert<T extends CompanyAboutUpsertArgs>(args: SelectSubset<T, CompanyAboutUpsertArgs<ExtArgs>>): Prisma__CompanyAboutClient<$Result.GetResult<Prisma.$CompanyAboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyAbouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutCountArgs} args - Arguments to filter CompanyAbouts to count.
     * @example
     * // Count the number of CompanyAbouts
     * const count = await prisma.companyAbout.count({
     *   where: {
     *     // ... the filter for the CompanyAbouts we want to count
     *   }
     * })
    **/
    count<T extends CompanyAboutCountArgs>(
      args?: Subset<T, CompanyAboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyAboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyAbout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAboutAggregateArgs>(args: Subset<T, CompanyAboutAggregateArgs>): Prisma.PrismaPromise<GetCompanyAboutAggregateType<T>>

    /**
     * Group by CompanyAbout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAboutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyAboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyAboutGroupByArgs['orderBy'] }
        : { orderBy?: CompanyAboutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyAboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyAboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyAbout model
   */
  readonly fields: CompanyAboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyAbout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyAboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyAbout model
   */
  interface CompanyAboutFieldRefs {
    readonly id: FieldRef<"CompanyAbout", 'Int'>
    readonly description: FieldRef<"CompanyAbout", 'String'>
    readonly imageUrl: FieldRef<"CompanyAbout", 'String'>
    readonly vision: FieldRef<"CompanyAbout", 'String'>
    readonly mission: FieldRef<"CompanyAbout", 'String'>
    readonly address: FieldRef<"CompanyAbout", 'String'>
    readonly phone: FieldRef<"CompanyAbout", 'String'>
    readonly email: FieldRef<"CompanyAbout", 'String'>
    readonly website: FieldRef<"CompanyAbout", 'String'>
    readonly createdAt: FieldRef<"CompanyAbout", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyAbout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyAbout findUnique
   */
  export type CompanyAboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * Filter, which CompanyAbout to fetch.
     */
    where: CompanyAboutWhereUniqueInput
  }

  /**
   * CompanyAbout findUniqueOrThrow
   */
  export type CompanyAboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * Filter, which CompanyAbout to fetch.
     */
    where: CompanyAboutWhereUniqueInput
  }

  /**
   * CompanyAbout findFirst
   */
  export type CompanyAboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * Filter, which CompanyAbout to fetch.
     */
    where?: CompanyAboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAbouts to fetch.
     */
    orderBy?: CompanyAboutOrderByWithRelationInput | CompanyAboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyAbouts.
     */
    cursor?: CompanyAboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAbouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAbouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyAbouts.
     */
    distinct?: CompanyAboutScalarFieldEnum | CompanyAboutScalarFieldEnum[]
  }

  /**
   * CompanyAbout findFirstOrThrow
   */
  export type CompanyAboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * Filter, which CompanyAbout to fetch.
     */
    where?: CompanyAboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAbouts to fetch.
     */
    orderBy?: CompanyAboutOrderByWithRelationInput | CompanyAboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyAbouts.
     */
    cursor?: CompanyAboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAbouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAbouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyAbouts.
     */
    distinct?: CompanyAboutScalarFieldEnum | CompanyAboutScalarFieldEnum[]
  }

  /**
   * CompanyAbout findMany
   */
  export type CompanyAboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * Filter, which CompanyAbouts to fetch.
     */
    where?: CompanyAboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAbouts to fetch.
     */
    orderBy?: CompanyAboutOrderByWithRelationInput | CompanyAboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyAbouts.
     */
    cursor?: CompanyAboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAbouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAbouts.
     */
    skip?: number
    distinct?: CompanyAboutScalarFieldEnum | CompanyAboutScalarFieldEnum[]
  }

  /**
   * CompanyAbout create
   */
  export type CompanyAboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanyAbout.
     */
    data: XOR<CompanyAboutCreateInput, CompanyAboutUncheckedCreateInput>
  }

  /**
   * CompanyAbout createMany
   */
  export type CompanyAboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyAbouts.
     */
    data: CompanyAboutCreateManyInput | CompanyAboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyAbout createManyAndReturn
   */
  export type CompanyAboutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyAbouts.
     */
    data: CompanyAboutCreateManyInput | CompanyAboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyAbout update
   */
  export type CompanyAboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanyAbout.
     */
    data: XOR<CompanyAboutUpdateInput, CompanyAboutUncheckedUpdateInput>
    /**
     * Choose, which CompanyAbout to update.
     */
    where: CompanyAboutWhereUniqueInput
  }

  /**
   * CompanyAbout updateMany
   */
  export type CompanyAboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyAbouts.
     */
    data: XOR<CompanyAboutUpdateManyMutationInput, CompanyAboutUncheckedUpdateManyInput>
    /**
     * Filter which CompanyAbouts to update
     */
    where?: CompanyAboutWhereInput
    /**
     * Limit how many CompanyAbouts to update.
     */
    limit?: number
  }

  /**
   * CompanyAbout updateManyAndReturn
   */
  export type CompanyAboutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * The data used to update CompanyAbouts.
     */
    data: XOR<CompanyAboutUpdateManyMutationInput, CompanyAboutUncheckedUpdateManyInput>
    /**
     * Filter which CompanyAbouts to update
     */
    where?: CompanyAboutWhereInput
    /**
     * Limit how many CompanyAbouts to update.
     */
    limit?: number
  }

  /**
   * CompanyAbout upsert
   */
  export type CompanyAboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanyAbout to update in case it exists.
     */
    where: CompanyAboutWhereUniqueInput
    /**
     * In case the CompanyAbout found by the `where` argument doesn't exist, create a new CompanyAbout with this data.
     */
    create: XOR<CompanyAboutCreateInput, CompanyAboutUncheckedCreateInput>
    /**
     * In case the CompanyAbout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyAboutUpdateInput, CompanyAboutUncheckedUpdateInput>
  }

  /**
   * CompanyAbout delete
   */
  export type CompanyAboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
    /**
     * Filter which CompanyAbout to delete.
     */
    where: CompanyAboutWhereUniqueInput
  }

  /**
   * CompanyAbout deleteMany
   */
  export type CompanyAboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyAbouts to delete
     */
    where?: CompanyAboutWhereInput
    /**
     * Limit how many CompanyAbouts to delete.
     */
    limit?: number
  }

  /**
   * CompanyAbout without action
   */
  export type CompanyAboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAbout
     */
    select?: CompanyAboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAbout
     */
    omit?: CompanyAboutOmit<ExtArgs> | null
  }


  /**
   * Model OurAdvantage
   */

  export type AggregateOurAdvantage = {
    _count: OurAdvantageCountAggregateOutputType | null
    _avg: OurAdvantageAvgAggregateOutputType | null
    _sum: OurAdvantageSumAggregateOutputType | null
    _min: OurAdvantageMinAggregateOutputType | null
    _max: OurAdvantageMaxAggregateOutputType | null
  }

  export type OurAdvantageAvgAggregateOutputType = {
    id: number | null
  }

  export type OurAdvantageSumAggregateOutputType = {
    id: number | null
  }

  export type OurAdvantageMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OurAdvantageMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OurAdvantageCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OurAdvantageAvgAggregateInputType = {
    id?: true
  }

  export type OurAdvantageSumAggregateInputType = {
    id?: true
  }

  export type OurAdvantageMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OurAdvantageMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OurAdvantageCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OurAdvantageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OurAdvantage to aggregate.
     */
    where?: OurAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurAdvantages to fetch.
     */
    orderBy?: OurAdvantageOrderByWithRelationInput | OurAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OurAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurAdvantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OurAdvantages
    **/
    _count?: true | OurAdvantageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OurAdvantageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OurAdvantageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OurAdvantageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OurAdvantageMaxAggregateInputType
  }

  export type GetOurAdvantageAggregateType<T extends OurAdvantageAggregateArgs> = {
        [P in keyof T & keyof AggregateOurAdvantage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOurAdvantage[P]>
      : GetScalarType<T[P], AggregateOurAdvantage[P]>
  }




  export type OurAdvantageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OurAdvantageWhereInput
    orderBy?: OurAdvantageOrderByWithAggregationInput | OurAdvantageOrderByWithAggregationInput[]
    by: OurAdvantageScalarFieldEnum[] | OurAdvantageScalarFieldEnum
    having?: OurAdvantageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OurAdvantageCountAggregateInputType | true
    _avg?: OurAdvantageAvgAggregateInputType
    _sum?: OurAdvantageSumAggregateInputType
    _min?: OurAdvantageMinAggregateInputType
    _max?: OurAdvantageMaxAggregateInputType
  }

  export type OurAdvantageGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: OurAdvantageCountAggregateOutputType | null
    _avg: OurAdvantageAvgAggregateOutputType | null
    _sum: OurAdvantageSumAggregateOutputType | null
    _min: OurAdvantageMinAggregateOutputType | null
    _max: OurAdvantageMaxAggregateOutputType | null
  }

  type GetOurAdvantageGroupByPayload<T extends OurAdvantageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OurAdvantageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OurAdvantageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OurAdvantageGroupByOutputType[P]>
            : GetScalarType<T[P], OurAdvantageGroupByOutputType[P]>
        }
      >
    >


  export type OurAdvantageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ourAdvantage"]>

  export type OurAdvantageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ourAdvantage"]>

  export type OurAdvantageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ourAdvantage"]>

  export type OurAdvantageSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OurAdvantageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["ourAdvantage"]>

  export type $OurAdvantagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OurAdvantage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ourAdvantage"]>
    composites: {}
  }

  type OurAdvantageGetPayload<S extends boolean | null | undefined | OurAdvantageDefaultArgs> = $Result.GetResult<Prisma.$OurAdvantagePayload, S>

  type OurAdvantageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OurAdvantageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OurAdvantageCountAggregateInputType | true
    }

  export interface OurAdvantageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OurAdvantage'], meta: { name: 'OurAdvantage' } }
    /**
     * Find zero or one OurAdvantage that matches the filter.
     * @param {OurAdvantageFindUniqueArgs} args - Arguments to find a OurAdvantage
     * @example
     * // Get one OurAdvantage
     * const ourAdvantage = await prisma.ourAdvantage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OurAdvantageFindUniqueArgs>(args: SelectSubset<T, OurAdvantageFindUniqueArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OurAdvantage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OurAdvantageFindUniqueOrThrowArgs} args - Arguments to find a OurAdvantage
     * @example
     * // Get one OurAdvantage
     * const ourAdvantage = await prisma.ourAdvantage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OurAdvantageFindUniqueOrThrowArgs>(args: SelectSubset<T, OurAdvantageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OurAdvantage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageFindFirstArgs} args - Arguments to find a OurAdvantage
     * @example
     * // Get one OurAdvantage
     * const ourAdvantage = await prisma.ourAdvantage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OurAdvantageFindFirstArgs>(args?: SelectSubset<T, OurAdvantageFindFirstArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OurAdvantage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageFindFirstOrThrowArgs} args - Arguments to find a OurAdvantage
     * @example
     * // Get one OurAdvantage
     * const ourAdvantage = await prisma.ourAdvantage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OurAdvantageFindFirstOrThrowArgs>(args?: SelectSubset<T, OurAdvantageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OurAdvantages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OurAdvantages
     * const ourAdvantages = await prisma.ourAdvantage.findMany()
     * 
     * // Get first 10 OurAdvantages
     * const ourAdvantages = await prisma.ourAdvantage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ourAdvantageWithIdOnly = await prisma.ourAdvantage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OurAdvantageFindManyArgs>(args?: SelectSubset<T, OurAdvantageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OurAdvantage.
     * @param {OurAdvantageCreateArgs} args - Arguments to create a OurAdvantage.
     * @example
     * // Create one OurAdvantage
     * const OurAdvantage = await prisma.ourAdvantage.create({
     *   data: {
     *     // ... data to create a OurAdvantage
     *   }
     * })
     * 
     */
    create<T extends OurAdvantageCreateArgs>(args: SelectSubset<T, OurAdvantageCreateArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OurAdvantages.
     * @param {OurAdvantageCreateManyArgs} args - Arguments to create many OurAdvantages.
     * @example
     * // Create many OurAdvantages
     * const ourAdvantage = await prisma.ourAdvantage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OurAdvantageCreateManyArgs>(args?: SelectSubset<T, OurAdvantageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OurAdvantages and returns the data saved in the database.
     * @param {OurAdvantageCreateManyAndReturnArgs} args - Arguments to create many OurAdvantages.
     * @example
     * // Create many OurAdvantages
     * const ourAdvantage = await prisma.ourAdvantage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OurAdvantages and only return the `id`
     * const ourAdvantageWithIdOnly = await prisma.ourAdvantage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OurAdvantageCreateManyAndReturnArgs>(args?: SelectSubset<T, OurAdvantageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OurAdvantage.
     * @param {OurAdvantageDeleteArgs} args - Arguments to delete one OurAdvantage.
     * @example
     * // Delete one OurAdvantage
     * const OurAdvantage = await prisma.ourAdvantage.delete({
     *   where: {
     *     // ... filter to delete one OurAdvantage
     *   }
     * })
     * 
     */
    delete<T extends OurAdvantageDeleteArgs>(args: SelectSubset<T, OurAdvantageDeleteArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OurAdvantage.
     * @param {OurAdvantageUpdateArgs} args - Arguments to update one OurAdvantage.
     * @example
     * // Update one OurAdvantage
     * const ourAdvantage = await prisma.ourAdvantage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OurAdvantageUpdateArgs>(args: SelectSubset<T, OurAdvantageUpdateArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OurAdvantages.
     * @param {OurAdvantageDeleteManyArgs} args - Arguments to filter OurAdvantages to delete.
     * @example
     * // Delete a few OurAdvantages
     * const { count } = await prisma.ourAdvantage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OurAdvantageDeleteManyArgs>(args?: SelectSubset<T, OurAdvantageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OurAdvantages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OurAdvantages
     * const ourAdvantage = await prisma.ourAdvantage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OurAdvantageUpdateManyArgs>(args: SelectSubset<T, OurAdvantageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OurAdvantages and returns the data updated in the database.
     * @param {OurAdvantageUpdateManyAndReturnArgs} args - Arguments to update many OurAdvantages.
     * @example
     * // Update many OurAdvantages
     * const ourAdvantage = await prisma.ourAdvantage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OurAdvantages and only return the `id`
     * const ourAdvantageWithIdOnly = await prisma.ourAdvantage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OurAdvantageUpdateManyAndReturnArgs>(args: SelectSubset<T, OurAdvantageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OurAdvantage.
     * @param {OurAdvantageUpsertArgs} args - Arguments to update or create a OurAdvantage.
     * @example
     * // Update or create a OurAdvantage
     * const ourAdvantage = await prisma.ourAdvantage.upsert({
     *   create: {
     *     // ... data to create a OurAdvantage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OurAdvantage we want to update
     *   }
     * })
     */
    upsert<T extends OurAdvantageUpsertArgs>(args: SelectSubset<T, OurAdvantageUpsertArgs<ExtArgs>>): Prisma__OurAdvantageClient<$Result.GetResult<Prisma.$OurAdvantagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OurAdvantages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageCountArgs} args - Arguments to filter OurAdvantages to count.
     * @example
     * // Count the number of OurAdvantages
     * const count = await prisma.ourAdvantage.count({
     *   where: {
     *     // ... the filter for the OurAdvantages we want to count
     *   }
     * })
    **/
    count<T extends OurAdvantageCountArgs>(
      args?: Subset<T, OurAdvantageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OurAdvantageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OurAdvantage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OurAdvantageAggregateArgs>(args: Subset<T, OurAdvantageAggregateArgs>): Prisma.PrismaPromise<GetOurAdvantageAggregateType<T>>

    /**
     * Group by OurAdvantage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurAdvantageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OurAdvantageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OurAdvantageGroupByArgs['orderBy'] }
        : { orderBy?: OurAdvantageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OurAdvantageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOurAdvantageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OurAdvantage model
   */
  readonly fields: OurAdvantageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OurAdvantage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OurAdvantageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OurAdvantage model
   */
  interface OurAdvantageFieldRefs {
    readonly id: FieldRef<"OurAdvantage", 'Int'>
    readonly title: FieldRef<"OurAdvantage", 'String'>
    readonly description: FieldRef<"OurAdvantage", 'String'>
    readonly createdAt: FieldRef<"OurAdvantage", 'DateTime'>
    readonly updatedAt: FieldRef<"OurAdvantage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OurAdvantage findUnique
   */
  export type OurAdvantageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * Filter, which OurAdvantage to fetch.
     */
    where: OurAdvantageWhereUniqueInput
  }

  /**
   * OurAdvantage findUniqueOrThrow
   */
  export type OurAdvantageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * Filter, which OurAdvantage to fetch.
     */
    where: OurAdvantageWhereUniqueInput
  }

  /**
   * OurAdvantage findFirst
   */
  export type OurAdvantageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * Filter, which OurAdvantage to fetch.
     */
    where?: OurAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurAdvantages to fetch.
     */
    orderBy?: OurAdvantageOrderByWithRelationInput | OurAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OurAdvantages.
     */
    cursor?: OurAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurAdvantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OurAdvantages.
     */
    distinct?: OurAdvantageScalarFieldEnum | OurAdvantageScalarFieldEnum[]
  }

  /**
   * OurAdvantage findFirstOrThrow
   */
  export type OurAdvantageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * Filter, which OurAdvantage to fetch.
     */
    where?: OurAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurAdvantages to fetch.
     */
    orderBy?: OurAdvantageOrderByWithRelationInput | OurAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OurAdvantages.
     */
    cursor?: OurAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurAdvantages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OurAdvantages.
     */
    distinct?: OurAdvantageScalarFieldEnum | OurAdvantageScalarFieldEnum[]
  }

  /**
   * OurAdvantage findMany
   */
  export type OurAdvantageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * Filter, which OurAdvantages to fetch.
     */
    where?: OurAdvantageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurAdvantages to fetch.
     */
    orderBy?: OurAdvantageOrderByWithRelationInput | OurAdvantageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OurAdvantages.
     */
    cursor?: OurAdvantageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurAdvantages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurAdvantages.
     */
    skip?: number
    distinct?: OurAdvantageScalarFieldEnum | OurAdvantageScalarFieldEnum[]
  }

  /**
   * OurAdvantage create
   */
  export type OurAdvantageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * The data needed to create a OurAdvantage.
     */
    data: XOR<OurAdvantageCreateInput, OurAdvantageUncheckedCreateInput>
  }

  /**
   * OurAdvantage createMany
   */
  export type OurAdvantageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OurAdvantages.
     */
    data: OurAdvantageCreateManyInput | OurAdvantageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OurAdvantage createManyAndReturn
   */
  export type OurAdvantageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * The data used to create many OurAdvantages.
     */
    data: OurAdvantageCreateManyInput | OurAdvantageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OurAdvantage update
   */
  export type OurAdvantageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * The data needed to update a OurAdvantage.
     */
    data: XOR<OurAdvantageUpdateInput, OurAdvantageUncheckedUpdateInput>
    /**
     * Choose, which OurAdvantage to update.
     */
    where: OurAdvantageWhereUniqueInput
  }

  /**
   * OurAdvantage updateMany
   */
  export type OurAdvantageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OurAdvantages.
     */
    data: XOR<OurAdvantageUpdateManyMutationInput, OurAdvantageUncheckedUpdateManyInput>
    /**
     * Filter which OurAdvantages to update
     */
    where?: OurAdvantageWhereInput
    /**
     * Limit how many OurAdvantages to update.
     */
    limit?: number
  }

  /**
   * OurAdvantage updateManyAndReturn
   */
  export type OurAdvantageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * The data used to update OurAdvantages.
     */
    data: XOR<OurAdvantageUpdateManyMutationInput, OurAdvantageUncheckedUpdateManyInput>
    /**
     * Filter which OurAdvantages to update
     */
    where?: OurAdvantageWhereInput
    /**
     * Limit how many OurAdvantages to update.
     */
    limit?: number
  }

  /**
   * OurAdvantage upsert
   */
  export type OurAdvantageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * The filter to search for the OurAdvantage to update in case it exists.
     */
    where: OurAdvantageWhereUniqueInput
    /**
     * In case the OurAdvantage found by the `where` argument doesn't exist, create a new OurAdvantage with this data.
     */
    create: XOR<OurAdvantageCreateInput, OurAdvantageUncheckedCreateInput>
    /**
     * In case the OurAdvantage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OurAdvantageUpdateInput, OurAdvantageUncheckedUpdateInput>
  }

  /**
   * OurAdvantage delete
   */
  export type OurAdvantageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
    /**
     * Filter which OurAdvantage to delete.
     */
    where: OurAdvantageWhereUniqueInput
  }

  /**
   * OurAdvantage deleteMany
   */
  export type OurAdvantageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OurAdvantages to delete
     */
    where?: OurAdvantageWhereInput
    /**
     * Limit how many OurAdvantages to delete.
     */
    limit?: number
  }

  /**
   * OurAdvantage without action
   */
  export type OurAdvantageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurAdvantage
     */
    select?: OurAdvantageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurAdvantage
     */
    omit?: OurAdvantageOmit<ExtArgs> | null
  }


  /**
   * Model OurService
   */

  export type AggregateOurService = {
    _count: OurServiceCountAggregateOutputType | null
    _avg: OurServiceAvgAggregateOutputType | null
    _sum: OurServiceSumAggregateOutputType | null
    _min: OurServiceMinAggregateOutputType | null
    _max: OurServiceMaxAggregateOutputType | null
  }

  export type OurServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type OurServiceSumAggregateOutputType = {
    id: number | null
  }

  export type OurServiceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OurServiceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OurServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OurServiceAvgAggregateInputType = {
    id?: true
  }

  export type OurServiceSumAggregateInputType = {
    id?: true
  }

  export type OurServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OurServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OurServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OurServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OurService to aggregate.
     */
    where?: OurServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurServices to fetch.
     */
    orderBy?: OurServiceOrderByWithRelationInput | OurServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OurServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OurServices
    **/
    _count?: true | OurServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OurServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OurServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OurServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OurServiceMaxAggregateInputType
  }

  export type GetOurServiceAggregateType<T extends OurServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateOurService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOurService[P]>
      : GetScalarType<T[P], AggregateOurService[P]>
  }




  export type OurServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OurServiceWhereInput
    orderBy?: OurServiceOrderByWithAggregationInput | OurServiceOrderByWithAggregationInput[]
    by: OurServiceScalarFieldEnum[] | OurServiceScalarFieldEnum
    having?: OurServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OurServiceCountAggregateInputType | true
    _avg?: OurServiceAvgAggregateInputType
    _sum?: OurServiceSumAggregateInputType
    _min?: OurServiceMinAggregateInputType
    _max?: OurServiceMaxAggregateInputType
  }

  export type OurServiceGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: OurServiceCountAggregateOutputType | null
    _avg: OurServiceAvgAggregateOutputType | null
    _sum: OurServiceSumAggregateOutputType | null
    _min: OurServiceMinAggregateOutputType | null
    _max: OurServiceMaxAggregateOutputType | null
  }

  type GetOurServiceGroupByPayload<T extends OurServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OurServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OurServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OurServiceGroupByOutputType[P]>
            : GetScalarType<T[P], OurServiceGroupByOutputType[P]>
        }
      >
    >


  export type OurServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ourService"]>

  export type OurServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ourService"]>

  export type OurServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ourService"]>

  export type OurServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OurServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["ourService"]>

  export type $OurServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OurService"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ourService"]>
    composites: {}
  }

  type OurServiceGetPayload<S extends boolean | null | undefined | OurServiceDefaultArgs> = $Result.GetResult<Prisma.$OurServicePayload, S>

  type OurServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OurServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OurServiceCountAggregateInputType | true
    }

  export interface OurServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OurService'], meta: { name: 'OurService' } }
    /**
     * Find zero or one OurService that matches the filter.
     * @param {OurServiceFindUniqueArgs} args - Arguments to find a OurService
     * @example
     * // Get one OurService
     * const ourService = await prisma.ourService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OurServiceFindUniqueArgs>(args: SelectSubset<T, OurServiceFindUniqueArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OurService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OurServiceFindUniqueOrThrowArgs} args - Arguments to find a OurService
     * @example
     * // Get one OurService
     * const ourService = await prisma.ourService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OurServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, OurServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OurService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceFindFirstArgs} args - Arguments to find a OurService
     * @example
     * // Get one OurService
     * const ourService = await prisma.ourService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OurServiceFindFirstArgs>(args?: SelectSubset<T, OurServiceFindFirstArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OurService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceFindFirstOrThrowArgs} args - Arguments to find a OurService
     * @example
     * // Get one OurService
     * const ourService = await prisma.ourService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OurServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, OurServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OurServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OurServices
     * const ourServices = await prisma.ourService.findMany()
     * 
     * // Get first 10 OurServices
     * const ourServices = await prisma.ourService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ourServiceWithIdOnly = await prisma.ourService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OurServiceFindManyArgs>(args?: SelectSubset<T, OurServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OurService.
     * @param {OurServiceCreateArgs} args - Arguments to create a OurService.
     * @example
     * // Create one OurService
     * const OurService = await prisma.ourService.create({
     *   data: {
     *     // ... data to create a OurService
     *   }
     * })
     * 
     */
    create<T extends OurServiceCreateArgs>(args: SelectSubset<T, OurServiceCreateArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OurServices.
     * @param {OurServiceCreateManyArgs} args - Arguments to create many OurServices.
     * @example
     * // Create many OurServices
     * const ourService = await prisma.ourService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OurServiceCreateManyArgs>(args?: SelectSubset<T, OurServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OurServices and returns the data saved in the database.
     * @param {OurServiceCreateManyAndReturnArgs} args - Arguments to create many OurServices.
     * @example
     * // Create many OurServices
     * const ourService = await prisma.ourService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OurServices and only return the `id`
     * const ourServiceWithIdOnly = await prisma.ourService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OurServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, OurServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OurService.
     * @param {OurServiceDeleteArgs} args - Arguments to delete one OurService.
     * @example
     * // Delete one OurService
     * const OurService = await prisma.ourService.delete({
     *   where: {
     *     // ... filter to delete one OurService
     *   }
     * })
     * 
     */
    delete<T extends OurServiceDeleteArgs>(args: SelectSubset<T, OurServiceDeleteArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OurService.
     * @param {OurServiceUpdateArgs} args - Arguments to update one OurService.
     * @example
     * // Update one OurService
     * const ourService = await prisma.ourService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OurServiceUpdateArgs>(args: SelectSubset<T, OurServiceUpdateArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OurServices.
     * @param {OurServiceDeleteManyArgs} args - Arguments to filter OurServices to delete.
     * @example
     * // Delete a few OurServices
     * const { count } = await prisma.ourService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OurServiceDeleteManyArgs>(args?: SelectSubset<T, OurServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OurServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OurServices
     * const ourService = await prisma.ourService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OurServiceUpdateManyArgs>(args: SelectSubset<T, OurServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OurServices and returns the data updated in the database.
     * @param {OurServiceUpdateManyAndReturnArgs} args - Arguments to update many OurServices.
     * @example
     * // Update many OurServices
     * const ourService = await prisma.ourService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OurServices and only return the `id`
     * const ourServiceWithIdOnly = await prisma.ourService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OurServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, OurServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OurService.
     * @param {OurServiceUpsertArgs} args - Arguments to update or create a OurService.
     * @example
     * // Update or create a OurService
     * const ourService = await prisma.ourService.upsert({
     *   create: {
     *     // ... data to create a OurService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OurService we want to update
     *   }
     * })
     */
    upsert<T extends OurServiceUpsertArgs>(args: SelectSubset<T, OurServiceUpsertArgs<ExtArgs>>): Prisma__OurServiceClient<$Result.GetResult<Prisma.$OurServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OurServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceCountArgs} args - Arguments to filter OurServices to count.
     * @example
     * // Count the number of OurServices
     * const count = await prisma.ourService.count({
     *   where: {
     *     // ... the filter for the OurServices we want to count
     *   }
     * })
    **/
    count<T extends OurServiceCountArgs>(
      args?: Subset<T, OurServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OurServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OurService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OurServiceAggregateArgs>(args: Subset<T, OurServiceAggregateArgs>): Prisma.PrismaPromise<GetOurServiceAggregateType<T>>

    /**
     * Group by OurService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OurServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OurServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OurServiceGroupByArgs['orderBy'] }
        : { orderBy?: OurServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OurServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOurServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OurService model
   */
  readonly fields: OurServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OurService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OurServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OurService model
   */
  interface OurServiceFieldRefs {
    readonly id: FieldRef<"OurService", 'Int'>
    readonly title: FieldRef<"OurService", 'String'>
    readonly description: FieldRef<"OurService", 'String'>
    readonly createdAt: FieldRef<"OurService", 'DateTime'>
    readonly updatedAt: FieldRef<"OurService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OurService findUnique
   */
  export type OurServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * Filter, which OurService to fetch.
     */
    where: OurServiceWhereUniqueInput
  }

  /**
   * OurService findUniqueOrThrow
   */
  export type OurServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * Filter, which OurService to fetch.
     */
    where: OurServiceWhereUniqueInput
  }

  /**
   * OurService findFirst
   */
  export type OurServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * Filter, which OurService to fetch.
     */
    where?: OurServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurServices to fetch.
     */
    orderBy?: OurServiceOrderByWithRelationInput | OurServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OurServices.
     */
    cursor?: OurServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OurServices.
     */
    distinct?: OurServiceScalarFieldEnum | OurServiceScalarFieldEnum[]
  }

  /**
   * OurService findFirstOrThrow
   */
  export type OurServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * Filter, which OurService to fetch.
     */
    where?: OurServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurServices to fetch.
     */
    orderBy?: OurServiceOrderByWithRelationInput | OurServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OurServices.
     */
    cursor?: OurServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OurServices.
     */
    distinct?: OurServiceScalarFieldEnum | OurServiceScalarFieldEnum[]
  }

  /**
   * OurService findMany
   */
  export type OurServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * Filter, which OurServices to fetch.
     */
    where?: OurServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OurServices to fetch.
     */
    orderBy?: OurServiceOrderByWithRelationInput | OurServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OurServices.
     */
    cursor?: OurServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OurServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OurServices.
     */
    skip?: number
    distinct?: OurServiceScalarFieldEnum | OurServiceScalarFieldEnum[]
  }

  /**
   * OurService create
   */
  export type OurServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a OurService.
     */
    data: XOR<OurServiceCreateInput, OurServiceUncheckedCreateInput>
  }

  /**
   * OurService createMany
   */
  export type OurServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OurServices.
     */
    data: OurServiceCreateManyInput | OurServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OurService createManyAndReturn
   */
  export type OurServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * The data used to create many OurServices.
     */
    data: OurServiceCreateManyInput | OurServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OurService update
   */
  export type OurServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a OurService.
     */
    data: XOR<OurServiceUpdateInput, OurServiceUncheckedUpdateInput>
    /**
     * Choose, which OurService to update.
     */
    where: OurServiceWhereUniqueInput
  }

  /**
   * OurService updateMany
   */
  export type OurServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OurServices.
     */
    data: XOR<OurServiceUpdateManyMutationInput, OurServiceUncheckedUpdateManyInput>
    /**
     * Filter which OurServices to update
     */
    where?: OurServiceWhereInput
    /**
     * Limit how many OurServices to update.
     */
    limit?: number
  }

  /**
   * OurService updateManyAndReturn
   */
  export type OurServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * The data used to update OurServices.
     */
    data: XOR<OurServiceUpdateManyMutationInput, OurServiceUncheckedUpdateManyInput>
    /**
     * Filter which OurServices to update
     */
    where?: OurServiceWhereInput
    /**
     * Limit how many OurServices to update.
     */
    limit?: number
  }

  /**
   * OurService upsert
   */
  export type OurServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the OurService to update in case it exists.
     */
    where: OurServiceWhereUniqueInput
    /**
     * In case the OurService found by the `where` argument doesn't exist, create a new OurService with this data.
     */
    create: XOR<OurServiceCreateInput, OurServiceUncheckedCreateInput>
    /**
     * In case the OurService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OurServiceUpdateInput, OurServiceUncheckedUpdateInput>
  }

  /**
   * OurService delete
   */
  export type OurServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
    /**
     * Filter which OurService to delete.
     */
    where: OurServiceWhereUniqueInput
  }

  /**
   * OurService deleteMany
   */
  export type OurServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OurServices to delete
     */
    where?: OurServiceWhereInput
    /**
     * Limit how many OurServices to delete.
     */
    limit?: number
  }

  /**
   * OurService without action
   */
  export type OurServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OurService
     */
    select?: OurServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OurService
     */
    omit?: OurServiceOmit<ExtArgs> | null
  }


  /**
   * Model RequirementWithDriver
   */

  export type AggregateRequirementWithDriver = {
    _count: RequirementWithDriverCountAggregateOutputType | null
    _avg: RequirementWithDriverAvgAggregateOutputType | null
    _sum: RequirementWithDriverSumAggregateOutputType | null
    _min: RequirementWithDriverMinAggregateOutputType | null
    _max: RequirementWithDriverMaxAggregateOutputType | null
  }

  export type RequirementWithDriverAvgAggregateOutputType = {
    id: number | null
  }

  export type RequirementWithDriverSumAggregateOutputType = {
    id: number | null
  }

  export type RequirementWithDriverMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementWithDriverMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementWithDriverCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequirementWithDriverAvgAggregateInputType = {
    id?: true
  }

  export type RequirementWithDriverSumAggregateInputType = {
    id?: true
  }

  export type RequirementWithDriverMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementWithDriverMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementWithDriverCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequirementWithDriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementWithDriver to aggregate.
     */
    where?: RequirementWithDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementWithDrivers to fetch.
     */
    orderBy?: RequirementWithDriverOrderByWithRelationInput | RequirementWithDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementWithDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementWithDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementWithDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequirementWithDrivers
    **/
    _count?: true | RequirementWithDriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementWithDriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementWithDriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementWithDriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementWithDriverMaxAggregateInputType
  }

  export type GetRequirementWithDriverAggregateType<T extends RequirementWithDriverAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirementWithDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirementWithDriver[P]>
      : GetScalarType<T[P], AggregateRequirementWithDriver[P]>
  }




  export type RequirementWithDriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementWithDriverWhereInput
    orderBy?: RequirementWithDriverOrderByWithAggregationInput | RequirementWithDriverOrderByWithAggregationInput[]
    by: RequirementWithDriverScalarFieldEnum[] | RequirementWithDriverScalarFieldEnum
    having?: RequirementWithDriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementWithDriverCountAggregateInputType | true
    _avg?: RequirementWithDriverAvgAggregateInputType
    _sum?: RequirementWithDriverSumAggregateInputType
    _min?: RequirementWithDriverMinAggregateInputType
    _max?: RequirementWithDriverMaxAggregateInputType
  }

  export type RequirementWithDriverGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RequirementWithDriverCountAggregateOutputType | null
    _avg: RequirementWithDriverAvgAggregateOutputType | null
    _sum: RequirementWithDriverSumAggregateOutputType | null
    _min: RequirementWithDriverMinAggregateOutputType | null
    _max: RequirementWithDriverMaxAggregateOutputType | null
  }

  type GetRequirementWithDriverGroupByPayload<T extends RequirementWithDriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementWithDriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementWithDriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementWithDriverGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementWithDriverGroupByOutputType[P]>
        }
      >
    >


  export type RequirementWithDriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementWithDriver"]>

  export type RequirementWithDriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementWithDriver"]>

  export type RequirementWithDriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementWithDriver"]>

  export type RequirementWithDriverSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequirementWithDriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["requirementWithDriver"]>

  export type $RequirementWithDriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequirementWithDriver"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requirementWithDriver"]>
    composites: {}
  }

  type RequirementWithDriverGetPayload<S extends boolean | null | undefined | RequirementWithDriverDefaultArgs> = $Result.GetResult<Prisma.$RequirementWithDriverPayload, S>

  type RequirementWithDriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequirementWithDriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequirementWithDriverCountAggregateInputType | true
    }

  export interface RequirementWithDriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequirementWithDriver'], meta: { name: 'RequirementWithDriver' } }
    /**
     * Find zero or one RequirementWithDriver that matches the filter.
     * @param {RequirementWithDriverFindUniqueArgs} args - Arguments to find a RequirementWithDriver
     * @example
     * // Get one RequirementWithDriver
     * const requirementWithDriver = await prisma.requirementWithDriver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementWithDriverFindUniqueArgs>(args: SelectSubset<T, RequirementWithDriverFindUniqueArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequirementWithDriver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequirementWithDriverFindUniqueOrThrowArgs} args - Arguments to find a RequirementWithDriver
     * @example
     * // Get one RequirementWithDriver
     * const requirementWithDriver = await prisma.requirementWithDriver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementWithDriverFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementWithDriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequirementWithDriver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverFindFirstArgs} args - Arguments to find a RequirementWithDriver
     * @example
     * // Get one RequirementWithDriver
     * const requirementWithDriver = await prisma.requirementWithDriver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementWithDriverFindFirstArgs>(args?: SelectSubset<T, RequirementWithDriverFindFirstArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequirementWithDriver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverFindFirstOrThrowArgs} args - Arguments to find a RequirementWithDriver
     * @example
     * // Get one RequirementWithDriver
     * const requirementWithDriver = await prisma.requirementWithDriver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementWithDriverFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementWithDriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequirementWithDrivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequirementWithDrivers
     * const requirementWithDrivers = await prisma.requirementWithDriver.findMany()
     * 
     * // Get first 10 RequirementWithDrivers
     * const requirementWithDrivers = await prisma.requirementWithDriver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementWithDriverWithIdOnly = await prisma.requirementWithDriver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementWithDriverFindManyArgs>(args?: SelectSubset<T, RequirementWithDriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequirementWithDriver.
     * @param {RequirementWithDriverCreateArgs} args - Arguments to create a RequirementWithDriver.
     * @example
     * // Create one RequirementWithDriver
     * const RequirementWithDriver = await prisma.requirementWithDriver.create({
     *   data: {
     *     // ... data to create a RequirementWithDriver
     *   }
     * })
     * 
     */
    create<T extends RequirementWithDriverCreateArgs>(args: SelectSubset<T, RequirementWithDriverCreateArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequirementWithDrivers.
     * @param {RequirementWithDriverCreateManyArgs} args - Arguments to create many RequirementWithDrivers.
     * @example
     * // Create many RequirementWithDrivers
     * const requirementWithDriver = await prisma.requirementWithDriver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementWithDriverCreateManyArgs>(args?: SelectSubset<T, RequirementWithDriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequirementWithDrivers and returns the data saved in the database.
     * @param {RequirementWithDriverCreateManyAndReturnArgs} args - Arguments to create many RequirementWithDrivers.
     * @example
     * // Create many RequirementWithDrivers
     * const requirementWithDriver = await prisma.requirementWithDriver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequirementWithDrivers and only return the `id`
     * const requirementWithDriverWithIdOnly = await prisma.requirementWithDriver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementWithDriverCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementWithDriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequirementWithDriver.
     * @param {RequirementWithDriverDeleteArgs} args - Arguments to delete one RequirementWithDriver.
     * @example
     * // Delete one RequirementWithDriver
     * const RequirementWithDriver = await prisma.requirementWithDriver.delete({
     *   where: {
     *     // ... filter to delete one RequirementWithDriver
     *   }
     * })
     * 
     */
    delete<T extends RequirementWithDriverDeleteArgs>(args: SelectSubset<T, RequirementWithDriverDeleteArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequirementWithDriver.
     * @param {RequirementWithDriverUpdateArgs} args - Arguments to update one RequirementWithDriver.
     * @example
     * // Update one RequirementWithDriver
     * const requirementWithDriver = await prisma.requirementWithDriver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementWithDriverUpdateArgs>(args: SelectSubset<T, RequirementWithDriverUpdateArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequirementWithDrivers.
     * @param {RequirementWithDriverDeleteManyArgs} args - Arguments to filter RequirementWithDrivers to delete.
     * @example
     * // Delete a few RequirementWithDrivers
     * const { count } = await prisma.requirementWithDriver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementWithDriverDeleteManyArgs>(args?: SelectSubset<T, RequirementWithDriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementWithDrivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequirementWithDrivers
     * const requirementWithDriver = await prisma.requirementWithDriver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementWithDriverUpdateManyArgs>(args: SelectSubset<T, RequirementWithDriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementWithDrivers and returns the data updated in the database.
     * @param {RequirementWithDriverUpdateManyAndReturnArgs} args - Arguments to update many RequirementWithDrivers.
     * @example
     * // Update many RequirementWithDrivers
     * const requirementWithDriver = await prisma.requirementWithDriver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequirementWithDrivers and only return the `id`
     * const requirementWithDriverWithIdOnly = await prisma.requirementWithDriver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequirementWithDriverUpdateManyAndReturnArgs>(args: SelectSubset<T, RequirementWithDriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequirementWithDriver.
     * @param {RequirementWithDriverUpsertArgs} args - Arguments to update or create a RequirementWithDriver.
     * @example
     * // Update or create a RequirementWithDriver
     * const requirementWithDriver = await prisma.requirementWithDriver.upsert({
     *   create: {
     *     // ... data to create a RequirementWithDriver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequirementWithDriver we want to update
     *   }
     * })
     */
    upsert<T extends RequirementWithDriverUpsertArgs>(args: SelectSubset<T, RequirementWithDriverUpsertArgs<ExtArgs>>): Prisma__RequirementWithDriverClient<$Result.GetResult<Prisma.$RequirementWithDriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequirementWithDrivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverCountArgs} args - Arguments to filter RequirementWithDrivers to count.
     * @example
     * // Count the number of RequirementWithDrivers
     * const count = await prisma.requirementWithDriver.count({
     *   where: {
     *     // ... the filter for the RequirementWithDrivers we want to count
     *   }
     * })
    **/
    count<T extends RequirementWithDriverCountArgs>(
      args?: Subset<T, RequirementWithDriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementWithDriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequirementWithDriver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementWithDriverAggregateArgs>(args: Subset<T, RequirementWithDriverAggregateArgs>): Prisma.PrismaPromise<GetRequirementWithDriverAggregateType<T>>

    /**
     * Group by RequirementWithDriver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementWithDriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementWithDriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementWithDriverGroupByArgs['orderBy'] }
        : { orderBy?: RequirementWithDriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementWithDriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementWithDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequirementWithDriver model
   */
  readonly fields: RequirementWithDriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequirementWithDriver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementWithDriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequirementWithDriver model
   */
  interface RequirementWithDriverFieldRefs {
    readonly id: FieldRef<"RequirementWithDriver", 'Int'>
    readonly description: FieldRef<"RequirementWithDriver", 'String'>
    readonly createdAt: FieldRef<"RequirementWithDriver", 'DateTime'>
    readonly updatedAt: FieldRef<"RequirementWithDriver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequirementWithDriver findUnique
   */
  export type RequirementWithDriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementWithDriver to fetch.
     */
    where: RequirementWithDriverWhereUniqueInput
  }

  /**
   * RequirementWithDriver findUniqueOrThrow
   */
  export type RequirementWithDriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementWithDriver to fetch.
     */
    where: RequirementWithDriverWhereUniqueInput
  }

  /**
   * RequirementWithDriver findFirst
   */
  export type RequirementWithDriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementWithDriver to fetch.
     */
    where?: RequirementWithDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementWithDrivers to fetch.
     */
    orderBy?: RequirementWithDriverOrderByWithRelationInput | RequirementWithDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementWithDrivers.
     */
    cursor?: RequirementWithDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementWithDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementWithDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementWithDrivers.
     */
    distinct?: RequirementWithDriverScalarFieldEnum | RequirementWithDriverScalarFieldEnum[]
  }

  /**
   * RequirementWithDriver findFirstOrThrow
   */
  export type RequirementWithDriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementWithDriver to fetch.
     */
    where?: RequirementWithDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementWithDrivers to fetch.
     */
    orderBy?: RequirementWithDriverOrderByWithRelationInput | RequirementWithDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementWithDrivers.
     */
    cursor?: RequirementWithDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementWithDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementWithDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementWithDrivers.
     */
    distinct?: RequirementWithDriverScalarFieldEnum | RequirementWithDriverScalarFieldEnum[]
  }

  /**
   * RequirementWithDriver findMany
   */
  export type RequirementWithDriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementWithDrivers to fetch.
     */
    where?: RequirementWithDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementWithDrivers to fetch.
     */
    orderBy?: RequirementWithDriverOrderByWithRelationInput | RequirementWithDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequirementWithDrivers.
     */
    cursor?: RequirementWithDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementWithDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementWithDrivers.
     */
    skip?: number
    distinct?: RequirementWithDriverScalarFieldEnum | RequirementWithDriverScalarFieldEnum[]
  }

  /**
   * RequirementWithDriver create
   */
  export type RequirementWithDriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * The data needed to create a RequirementWithDriver.
     */
    data: XOR<RequirementWithDriverCreateInput, RequirementWithDriverUncheckedCreateInput>
  }

  /**
   * RequirementWithDriver createMany
   */
  export type RequirementWithDriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequirementWithDrivers.
     */
    data: RequirementWithDriverCreateManyInput | RequirementWithDriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementWithDriver createManyAndReturn
   */
  export type RequirementWithDriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * The data used to create many RequirementWithDrivers.
     */
    data: RequirementWithDriverCreateManyInput | RequirementWithDriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementWithDriver update
   */
  export type RequirementWithDriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * The data needed to update a RequirementWithDriver.
     */
    data: XOR<RequirementWithDriverUpdateInput, RequirementWithDriverUncheckedUpdateInput>
    /**
     * Choose, which RequirementWithDriver to update.
     */
    where: RequirementWithDriverWhereUniqueInput
  }

  /**
   * RequirementWithDriver updateMany
   */
  export type RequirementWithDriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequirementWithDrivers.
     */
    data: XOR<RequirementWithDriverUpdateManyMutationInput, RequirementWithDriverUncheckedUpdateManyInput>
    /**
     * Filter which RequirementWithDrivers to update
     */
    where?: RequirementWithDriverWhereInput
    /**
     * Limit how many RequirementWithDrivers to update.
     */
    limit?: number
  }

  /**
   * RequirementWithDriver updateManyAndReturn
   */
  export type RequirementWithDriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * The data used to update RequirementWithDrivers.
     */
    data: XOR<RequirementWithDriverUpdateManyMutationInput, RequirementWithDriverUncheckedUpdateManyInput>
    /**
     * Filter which RequirementWithDrivers to update
     */
    where?: RequirementWithDriverWhereInput
    /**
     * Limit how many RequirementWithDrivers to update.
     */
    limit?: number
  }

  /**
   * RequirementWithDriver upsert
   */
  export type RequirementWithDriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * The filter to search for the RequirementWithDriver to update in case it exists.
     */
    where: RequirementWithDriverWhereUniqueInput
    /**
     * In case the RequirementWithDriver found by the `where` argument doesn't exist, create a new RequirementWithDriver with this data.
     */
    create: XOR<RequirementWithDriverCreateInput, RequirementWithDriverUncheckedCreateInput>
    /**
     * In case the RequirementWithDriver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementWithDriverUpdateInput, RequirementWithDriverUncheckedUpdateInput>
  }

  /**
   * RequirementWithDriver delete
   */
  export type RequirementWithDriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
    /**
     * Filter which RequirementWithDriver to delete.
     */
    where: RequirementWithDriverWhereUniqueInput
  }

  /**
   * RequirementWithDriver deleteMany
   */
  export type RequirementWithDriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementWithDrivers to delete
     */
    where?: RequirementWithDriverWhereInput
    /**
     * Limit how many RequirementWithDrivers to delete.
     */
    limit?: number
  }

  /**
   * RequirementWithDriver without action
   */
  export type RequirementWithDriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementWithDriver
     */
    select?: RequirementWithDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementWithDriver
     */
    omit?: RequirementWithDriverOmit<ExtArgs> | null
  }


  /**
   * Model RequirementNoDriver
   */

  export type AggregateRequirementNoDriver = {
    _count: RequirementNoDriverCountAggregateOutputType | null
    _avg: RequirementNoDriverAvgAggregateOutputType | null
    _sum: RequirementNoDriverSumAggregateOutputType | null
    _min: RequirementNoDriverMinAggregateOutputType | null
    _max: RequirementNoDriverMaxAggregateOutputType | null
  }

  export type RequirementNoDriverAvgAggregateOutputType = {
    id: number | null
  }

  export type RequirementNoDriverSumAggregateOutputType = {
    id: number | null
  }

  export type RequirementNoDriverMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementNoDriverMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementNoDriverCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequirementNoDriverAvgAggregateInputType = {
    id?: true
  }

  export type RequirementNoDriverSumAggregateInputType = {
    id?: true
  }

  export type RequirementNoDriverMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementNoDriverMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementNoDriverCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequirementNoDriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementNoDriver to aggregate.
     */
    where?: RequirementNoDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNoDrivers to fetch.
     */
    orderBy?: RequirementNoDriverOrderByWithRelationInput | RequirementNoDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementNoDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNoDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNoDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequirementNoDrivers
    **/
    _count?: true | RequirementNoDriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementNoDriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementNoDriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementNoDriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementNoDriverMaxAggregateInputType
  }

  export type GetRequirementNoDriverAggregateType<T extends RequirementNoDriverAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirementNoDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirementNoDriver[P]>
      : GetScalarType<T[P], AggregateRequirementNoDriver[P]>
  }




  export type RequirementNoDriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementNoDriverWhereInput
    orderBy?: RequirementNoDriverOrderByWithAggregationInput | RequirementNoDriverOrderByWithAggregationInput[]
    by: RequirementNoDriverScalarFieldEnum[] | RequirementNoDriverScalarFieldEnum
    having?: RequirementNoDriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementNoDriverCountAggregateInputType | true
    _avg?: RequirementNoDriverAvgAggregateInputType
    _sum?: RequirementNoDriverSumAggregateInputType
    _min?: RequirementNoDriverMinAggregateInputType
    _max?: RequirementNoDriverMaxAggregateInputType
  }

  export type RequirementNoDriverGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RequirementNoDriverCountAggregateOutputType | null
    _avg: RequirementNoDriverAvgAggregateOutputType | null
    _sum: RequirementNoDriverSumAggregateOutputType | null
    _min: RequirementNoDriverMinAggregateOutputType | null
    _max: RequirementNoDriverMaxAggregateOutputType | null
  }

  type GetRequirementNoDriverGroupByPayload<T extends RequirementNoDriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementNoDriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementNoDriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementNoDriverGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementNoDriverGroupByOutputType[P]>
        }
      >
    >


  export type RequirementNoDriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementNoDriver"]>

  export type RequirementNoDriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementNoDriver"]>

  export type RequirementNoDriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementNoDriver"]>

  export type RequirementNoDriverSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequirementNoDriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["requirementNoDriver"]>

  export type $RequirementNoDriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequirementNoDriver"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requirementNoDriver"]>
    composites: {}
  }

  type RequirementNoDriverGetPayload<S extends boolean | null | undefined | RequirementNoDriverDefaultArgs> = $Result.GetResult<Prisma.$RequirementNoDriverPayload, S>

  type RequirementNoDriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequirementNoDriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequirementNoDriverCountAggregateInputType | true
    }

  export interface RequirementNoDriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequirementNoDriver'], meta: { name: 'RequirementNoDriver' } }
    /**
     * Find zero or one RequirementNoDriver that matches the filter.
     * @param {RequirementNoDriverFindUniqueArgs} args - Arguments to find a RequirementNoDriver
     * @example
     * // Get one RequirementNoDriver
     * const requirementNoDriver = await prisma.requirementNoDriver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementNoDriverFindUniqueArgs>(args: SelectSubset<T, RequirementNoDriverFindUniqueArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequirementNoDriver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequirementNoDriverFindUniqueOrThrowArgs} args - Arguments to find a RequirementNoDriver
     * @example
     * // Get one RequirementNoDriver
     * const requirementNoDriver = await prisma.requirementNoDriver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementNoDriverFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementNoDriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequirementNoDriver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverFindFirstArgs} args - Arguments to find a RequirementNoDriver
     * @example
     * // Get one RequirementNoDriver
     * const requirementNoDriver = await prisma.requirementNoDriver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementNoDriverFindFirstArgs>(args?: SelectSubset<T, RequirementNoDriverFindFirstArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequirementNoDriver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverFindFirstOrThrowArgs} args - Arguments to find a RequirementNoDriver
     * @example
     * // Get one RequirementNoDriver
     * const requirementNoDriver = await prisma.requirementNoDriver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementNoDriverFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementNoDriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequirementNoDrivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequirementNoDrivers
     * const requirementNoDrivers = await prisma.requirementNoDriver.findMany()
     * 
     * // Get first 10 RequirementNoDrivers
     * const requirementNoDrivers = await prisma.requirementNoDriver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementNoDriverWithIdOnly = await prisma.requirementNoDriver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementNoDriverFindManyArgs>(args?: SelectSubset<T, RequirementNoDriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequirementNoDriver.
     * @param {RequirementNoDriverCreateArgs} args - Arguments to create a RequirementNoDriver.
     * @example
     * // Create one RequirementNoDriver
     * const RequirementNoDriver = await prisma.requirementNoDriver.create({
     *   data: {
     *     // ... data to create a RequirementNoDriver
     *   }
     * })
     * 
     */
    create<T extends RequirementNoDriverCreateArgs>(args: SelectSubset<T, RequirementNoDriverCreateArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequirementNoDrivers.
     * @param {RequirementNoDriverCreateManyArgs} args - Arguments to create many RequirementNoDrivers.
     * @example
     * // Create many RequirementNoDrivers
     * const requirementNoDriver = await prisma.requirementNoDriver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementNoDriverCreateManyArgs>(args?: SelectSubset<T, RequirementNoDriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequirementNoDrivers and returns the data saved in the database.
     * @param {RequirementNoDriverCreateManyAndReturnArgs} args - Arguments to create many RequirementNoDrivers.
     * @example
     * // Create many RequirementNoDrivers
     * const requirementNoDriver = await prisma.requirementNoDriver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequirementNoDrivers and only return the `id`
     * const requirementNoDriverWithIdOnly = await prisma.requirementNoDriver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementNoDriverCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementNoDriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequirementNoDriver.
     * @param {RequirementNoDriverDeleteArgs} args - Arguments to delete one RequirementNoDriver.
     * @example
     * // Delete one RequirementNoDriver
     * const RequirementNoDriver = await prisma.requirementNoDriver.delete({
     *   where: {
     *     // ... filter to delete one RequirementNoDriver
     *   }
     * })
     * 
     */
    delete<T extends RequirementNoDriverDeleteArgs>(args: SelectSubset<T, RequirementNoDriverDeleteArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequirementNoDriver.
     * @param {RequirementNoDriverUpdateArgs} args - Arguments to update one RequirementNoDriver.
     * @example
     * // Update one RequirementNoDriver
     * const requirementNoDriver = await prisma.requirementNoDriver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementNoDriverUpdateArgs>(args: SelectSubset<T, RequirementNoDriverUpdateArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequirementNoDrivers.
     * @param {RequirementNoDriverDeleteManyArgs} args - Arguments to filter RequirementNoDrivers to delete.
     * @example
     * // Delete a few RequirementNoDrivers
     * const { count } = await prisma.requirementNoDriver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementNoDriverDeleteManyArgs>(args?: SelectSubset<T, RequirementNoDriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementNoDrivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequirementNoDrivers
     * const requirementNoDriver = await prisma.requirementNoDriver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementNoDriverUpdateManyArgs>(args: SelectSubset<T, RequirementNoDriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementNoDrivers and returns the data updated in the database.
     * @param {RequirementNoDriverUpdateManyAndReturnArgs} args - Arguments to update many RequirementNoDrivers.
     * @example
     * // Update many RequirementNoDrivers
     * const requirementNoDriver = await prisma.requirementNoDriver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequirementNoDrivers and only return the `id`
     * const requirementNoDriverWithIdOnly = await prisma.requirementNoDriver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequirementNoDriverUpdateManyAndReturnArgs>(args: SelectSubset<T, RequirementNoDriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequirementNoDriver.
     * @param {RequirementNoDriverUpsertArgs} args - Arguments to update or create a RequirementNoDriver.
     * @example
     * // Update or create a RequirementNoDriver
     * const requirementNoDriver = await prisma.requirementNoDriver.upsert({
     *   create: {
     *     // ... data to create a RequirementNoDriver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequirementNoDriver we want to update
     *   }
     * })
     */
    upsert<T extends RequirementNoDriverUpsertArgs>(args: SelectSubset<T, RequirementNoDriverUpsertArgs<ExtArgs>>): Prisma__RequirementNoDriverClient<$Result.GetResult<Prisma.$RequirementNoDriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequirementNoDrivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverCountArgs} args - Arguments to filter RequirementNoDrivers to count.
     * @example
     * // Count the number of RequirementNoDrivers
     * const count = await prisma.requirementNoDriver.count({
     *   where: {
     *     // ... the filter for the RequirementNoDrivers we want to count
     *   }
     * })
    **/
    count<T extends RequirementNoDriverCountArgs>(
      args?: Subset<T, RequirementNoDriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementNoDriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequirementNoDriver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementNoDriverAggregateArgs>(args: Subset<T, RequirementNoDriverAggregateArgs>): Prisma.PrismaPromise<GetRequirementNoDriverAggregateType<T>>

    /**
     * Group by RequirementNoDriver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoDriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementNoDriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementNoDriverGroupByArgs['orderBy'] }
        : { orderBy?: RequirementNoDriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementNoDriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementNoDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequirementNoDriver model
   */
  readonly fields: RequirementNoDriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequirementNoDriver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementNoDriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequirementNoDriver model
   */
  interface RequirementNoDriverFieldRefs {
    readonly id: FieldRef<"RequirementNoDriver", 'Int'>
    readonly title: FieldRef<"RequirementNoDriver", 'String'>
    readonly description: FieldRef<"RequirementNoDriver", 'String'>
    readonly createdAt: FieldRef<"RequirementNoDriver", 'DateTime'>
    readonly updatedAt: FieldRef<"RequirementNoDriver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequirementNoDriver findUnique
   */
  export type RequirementNoDriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNoDriver to fetch.
     */
    where: RequirementNoDriverWhereUniqueInput
  }

  /**
   * RequirementNoDriver findUniqueOrThrow
   */
  export type RequirementNoDriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNoDriver to fetch.
     */
    where: RequirementNoDriverWhereUniqueInput
  }

  /**
   * RequirementNoDriver findFirst
   */
  export type RequirementNoDriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNoDriver to fetch.
     */
    where?: RequirementNoDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNoDrivers to fetch.
     */
    orderBy?: RequirementNoDriverOrderByWithRelationInput | RequirementNoDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementNoDrivers.
     */
    cursor?: RequirementNoDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNoDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNoDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementNoDrivers.
     */
    distinct?: RequirementNoDriverScalarFieldEnum | RequirementNoDriverScalarFieldEnum[]
  }

  /**
   * RequirementNoDriver findFirstOrThrow
   */
  export type RequirementNoDriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNoDriver to fetch.
     */
    where?: RequirementNoDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNoDrivers to fetch.
     */
    orderBy?: RequirementNoDriverOrderByWithRelationInput | RequirementNoDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementNoDrivers.
     */
    cursor?: RequirementNoDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNoDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNoDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementNoDrivers.
     */
    distinct?: RequirementNoDriverScalarFieldEnum | RequirementNoDriverScalarFieldEnum[]
  }

  /**
   * RequirementNoDriver findMany
   */
  export type RequirementNoDriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNoDrivers to fetch.
     */
    where?: RequirementNoDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNoDrivers to fetch.
     */
    orderBy?: RequirementNoDriverOrderByWithRelationInput | RequirementNoDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequirementNoDrivers.
     */
    cursor?: RequirementNoDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNoDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNoDrivers.
     */
    skip?: number
    distinct?: RequirementNoDriverScalarFieldEnum | RequirementNoDriverScalarFieldEnum[]
  }

  /**
   * RequirementNoDriver create
   */
  export type RequirementNoDriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * The data needed to create a RequirementNoDriver.
     */
    data: XOR<RequirementNoDriverCreateInput, RequirementNoDriverUncheckedCreateInput>
  }

  /**
   * RequirementNoDriver createMany
   */
  export type RequirementNoDriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequirementNoDrivers.
     */
    data: RequirementNoDriverCreateManyInput | RequirementNoDriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementNoDriver createManyAndReturn
   */
  export type RequirementNoDriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * The data used to create many RequirementNoDrivers.
     */
    data: RequirementNoDriverCreateManyInput | RequirementNoDriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementNoDriver update
   */
  export type RequirementNoDriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * The data needed to update a RequirementNoDriver.
     */
    data: XOR<RequirementNoDriverUpdateInput, RequirementNoDriverUncheckedUpdateInput>
    /**
     * Choose, which RequirementNoDriver to update.
     */
    where: RequirementNoDriverWhereUniqueInput
  }

  /**
   * RequirementNoDriver updateMany
   */
  export type RequirementNoDriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequirementNoDrivers.
     */
    data: XOR<RequirementNoDriverUpdateManyMutationInput, RequirementNoDriverUncheckedUpdateManyInput>
    /**
     * Filter which RequirementNoDrivers to update
     */
    where?: RequirementNoDriverWhereInput
    /**
     * Limit how many RequirementNoDrivers to update.
     */
    limit?: number
  }

  /**
   * RequirementNoDriver updateManyAndReturn
   */
  export type RequirementNoDriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * The data used to update RequirementNoDrivers.
     */
    data: XOR<RequirementNoDriverUpdateManyMutationInput, RequirementNoDriverUncheckedUpdateManyInput>
    /**
     * Filter which RequirementNoDrivers to update
     */
    where?: RequirementNoDriverWhereInput
    /**
     * Limit how many RequirementNoDrivers to update.
     */
    limit?: number
  }

  /**
   * RequirementNoDriver upsert
   */
  export type RequirementNoDriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * The filter to search for the RequirementNoDriver to update in case it exists.
     */
    where: RequirementNoDriverWhereUniqueInput
    /**
     * In case the RequirementNoDriver found by the `where` argument doesn't exist, create a new RequirementNoDriver with this data.
     */
    create: XOR<RequirementNoDriverCreateInput, RequirementNoDriverUncheckedCreateInput>
    /**
     * In case the RequirementNoDriver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementNoDriverUpdateInput, RequirementNoDriverUncheckedUpdateInput>
  }

  /**
   * RequirementNoDriver delete
   */
  export type RequirementNoDriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
    /**
     * Filter which RequirementNoDriver to delete.
     */
    where: RequirementNoDriverWhereUniqueInput
  }

  /**
   * RequirementNoDriver deleteMany
   */
  export type RequirementNoDriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementNoDrivers to delete
     */
    where?: RequirementNoDriverWhereInput
    /**
     * Limit how many RequirementNoDrivers to delete.
     */
    limit?: number
  }

  /**
   * RequirementNoDriver without action
   */
  export type RequirementNoDriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNoDriver
     */
    select?: RequirementNoDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNoDriver
     */
    omit?: RequirementNoDriverOmit<ExtArgs> | null
  }


  /**
   * Model RequirementNote
   */

  export type AggregateRequirementNote = {
    _count: RequirementNoteCountAggregateOutputType | null
    _avg: RequirementNoteAvgAggregateOutputType | null
    _sum: RequirementNoteSumAggregateOutputType | null
    _min: RequirementNoteMinAggregateOutputType | null
    _max: RequirementNoteMaxAggregateOutputType | null
  }

  export type RequirementNoteAvgAggregateOutputType = {
    id: number | null
  }

  export type RequirementNoteSumAggregateOutputType = {
    id: number | null
  }

  export type RequirementNoteMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementNoteMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequirementNoteCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequirementNoteAvgAggregateInputType = {
    id?: true
  }

  export type RequirementNoteSumAggregateInputType = {
    id?: true
  }

  export type RequirementNoteMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementNoteMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequirementNoteCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequirementNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementNote to aggregate.
     */
    where?: RequirementNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNotes to fetch.
     */
    orderBy?: RequirementNoteOrderByWithRelationInput | RequirementNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequirementNotes
    **/
    _count?: true | RequirementNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementNoteMaxAggregateInputType
  }

  export type GetRequirementNoteAggregateType<T extends RequirementNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirementNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirementNote[P]>
      : GetScalarType<T[P], AggregateRequirementNote[P]>
  }




  export type RequirementNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementNoteWhereInput
    orderBy?: RequirementNoteOrderByWithAggregationInput | RequirementNoteOrderByWithAggregationInput[]
    by: RequirementNoteScalarFieldEnum[] | RequirementNoteScalarFieldEnum
    having?: RequirementNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementNoteCountAggregateInputType | true
    _avg?: RequirementNoteAvgAggregateInputType
    _sum?: RequirementNoteSumAggregateInputType
    _min?: RequirementNoteMinAggregateInputType
    _max?: RequirementNoteMaxAggregateInputType
  }

  export type RequirementNoteGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RequirementNoteCountAggregateOutputType | null
    _avg: RequirementNoteAvgAggregateOutputType | null
    _sum: RequirementNoteSumAggregateOutputType | null
    _min: RequirementNoteMinAggregateOutputType | null
    _max: RequirementNoteMaxAggregateOutputType | null
  }

  type GetRequirementNoteGroupByPayload<T extends RequirementNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementNoteGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementNoteGroupByOutputType[P]>
        }
      >
    >


  export type RequirementNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementNote"]>

  export type RequirementNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementNote"]>

  export type RequirementNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["requirementNote"]>

  export type RequirementNoteSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequirementNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["requirementNote"]>

  export type $RequirementNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequirementNote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requirementNote"]>
    composites: {}
  }

  type RequirementNoteGetPayload<S extends boolean | null | undefined | RequirementNoteDefaultArgs> = $Result.GetResult<Prisma.$RequirementNotePayload, S>

  type RequirementNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequirementNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequirementNoteCountAggregateInputType | true
    }

  export interface RequirementNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequirementNote'], meta: { name: 'RequirementNote' } }
    /**
     * Find zero or one RequirementNote that matches the filter.
     * @param {RequirementNoteFindUniqueArgs} args - Arguments to find a RequirementNote
     * @example
     * // Get one RequirementNote
     * const requirementNote = await prisma.requirementNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementNoteFindUniqueArgs>(args: SelectSubset<T, RequirementNoteFindUniqueArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequirementNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequirementNoteFindUniqueOrThrowArgs} args - Arguments to find a RequirementNote
     * @example
     * // Get one RequirementNote
     * const requirementNote = await prisma.requirementNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequirementNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteFindFirstArgs} args - Arguments to find a RequirementNote
     * @example
     * // Get one RequirementNote
     * const requirementNote = await prisma.requirementNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementNoteFindFirstArgs>(args?: SelectSubset<T, RequirementNoteFindFirstArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequirementNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteFindFirstOrThrowArgs} args - Arguments to find a RequirementNote
     * @example
     * // Get one RequirementNote
     * const requirementNote = await prisma.requirementNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequirementNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequirementNotes
     * const requirementNotes = await prisma.requirementNote.findMany()
     * 
     * // Get first 10 RequirementNotes
     * const requirementNotes = await prisma.requirementNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementNoteWithIdOnly = await prisma.requirementNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementNoteFindManyArgs>(args?: SelectSubset<T, RequirementNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequirementNote.
     * @param {RequirementNoteCreateArgs} args - Arguments to create a RequirementNote.
     * @example
     * // Create one RequirementNote
     * const RequirementNote = await prisma.requirementNote.create({
     *   data: {
     *     // ... data to create a RequirementNote
     *   }
     * })
     * 
     */
    create<T extends RequirementNoteCreateArgs>(args: SelectSubset<T, RequirementNoteCreateArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequirementNotes.
     * @param {RequirementNoteCreateManyArgs} args - Arguments to create many RequirementNotes.
     * @example
     * // Create many RequirementNotes
     * const requirementNote = await prisma.requirementNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementNoteCreateManyArgs>(args?: SelectSubset<T, RequirementNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequirementNotes and returns the data saved in the database.
     * @param {RequirementNoteCreateManyAndReturnArgs} args - Arguments to create many RequirementNotes.
     * @example
     * // Create many RequirementNotes
     * const requirementNote = await prisma.requirementNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequirementNotes and only return the `id`
     * const requirementNoteWithIdOnly = await prisma.requirementNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequirementNote.
     * @param {RequirementNoteDeleteArgs} args - Arguments to delete one RequirementNote.
     * @example
     * // Delete one RequirementNote
     * const RequirementNote = await prisma.requirementNote.delete({
     *   where: {
     *     // ... filter to delete one RequirementNote
     *   }
     * })
     * 
     */
    delete<T extends RequirementNoteDeleteArgs>(args: SelectSubset<T, RequirementNoteDeleteArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequirementNote.
     * @param {RequirementNoteUpdateArgs} args - Arguments to update one RequirementNote.
     * @example
     * // Update one RequirementNote
     * const requirementNote = await prisma.requirementNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementNoteUpdateArgs>(args: SelectSubset<T, RequirementNoteUpdateArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequirementNotes.
     * @param {RequirementNoteDeleteManyArgs} args - Arguments to filter RequirementNotes to delete.
     * @example
     * // Delete a few RequirementNotes
     * const { count } = await prisma.requirementNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementNoteDeleteManyArgs>(args?: SelectSubset<T, RequirementNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequirementNotes
     * const requirementNote = await prisma.requirementNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementNoteUpdateManyArgs>(args: SelectSubset<T, RequirementNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequirementNotes and returns the data updated in the database.
     * @param {RequirementNoteUpdateManyAndReturnArgs} args - Arguments to update many RequirementNotes.
     * @example
     * // Update many RequirementNotes
     * const requirementNote = await prisma.requirementNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequirementNotes and only return the `id`
     * const requirementNoteWithIdOnly = await prisma.requirementNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequirementNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, RequirementNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequirementNote.
     * @param {RequirementNoteUpsertArgs} args - Arguments to update or create a RequirementNote.
     * @example
     * // Update or create a RequirementNote
     * const requirementNote = await prisma.requirementNote.upsert({
     *   create: {
     *     // ... data to create a RequirementNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequirementNote we want to update
     *   }
     * })
     */
    upsert<T extends RequirementNoteUpsertArgs>(args: SelectSubset<T, RequirementNoteUpsertArgs<ExtArgs>>): Prisma__RequirementNoteClient<$Result.GetResult<Prisma.$RequirementNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequirementNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteCountArgs} args - Arguments to filter RequirementNotes to count.
     * @example
     * // Count the number of RequirementNotes
     * const count = await prisma.requirementNote.count({
     *   where: {
     *     // ... the filter for the RequirementNotes we want to count
     *   }
     * })
    **/
    count<T extends RequirementNoteCountArgs>(
      args?: Subset<T, RequirementNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequirementNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementNoteAggregateArgs>(args: Subset<T, RequirementNoteAggregateArgs>): Prisma.PrismaPromise<GetRequirementNoteAggregateType<T>>

    /**
     * Group by RequirementNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementNoteGroupByArgs['orderBy'] }
        : { orderBy?: RequirementNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequirementNote model
   */
  readonly fields: RequirementNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequirementNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequirementNote model
   */
  interface RequirementNoteFieldRefs {
    readonly id: FieldRef<"RequirementNote", 'Int'>
    readonly description: FieldRef<"RequirementNote", 'String'>
    readonly createdAt: FieldRef<"RequirementNote", 'DateTime'>
    readonly updatedAt: FieldRef<"RequirementNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequirementNote findUnique
   */
  export type RequirementNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNote to fetch.
     */
    where: RequirementNoteWhereUniqueInput
  }

  /**
   * RequirementNote findUniqueOrThrow
   */
  export type RequirementNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNote to fetch.
     */
    where: RequirementNoteWhereUniqueInput
  }

  /**
   * RequirementNote findFirst
   */
  export type RequirementNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNote to fetch.
     */
    where?: RequirementNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNotes to fetch.
     */
    orderBy?: RequirementNoteOrderByWithRelationInput | RequirementNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementNotes.
     */
    cursor?: RequirementNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementNotes.
     */
    distinct?: RequirementNoteScalarFieldEnum | RequirementNoteScalarFieldEnum[]
  }

  /**
   * RequirementNote findFirstOrThrow
   */
  export type RequirementNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNote to fetch.
     */
    where?: RequirementNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNotes to fetch.
     */
    orderBy?: RequirementNoteOrderByWithRelationInput | RequirementNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequirementNotes.
     */
    cursor?: RequirementNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequirementNotes.
     */
    distinct?: RequirementNoteScalarFieldEnum | RequirementNoteScalarFieldEnum[]
  }

  /**
   * RequirementNote findMany
   */
  export type RequirementNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * Filter, which RequirementNotes to fetch.
     */
    where?: RequirementNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequirementNotes to fetch.
     */
    orderBy?: RequirementNoteOrderByWithRelationInput | RequirementNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequirementNotes.
     */
    cursor?: RequirementNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequirementNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequirementNotes.
     */
    skip?: number
    distinct?: RequirementNoteScalarFieldEnum | RequirementNoteScalarFieldEnum[]
  }

  /**
   * RequirementNote create
   */
  export type RequirementNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * The data needed to create a RequirementNote.
     */
    data: XOR<RequirementNoteCreateInput, RequirementNoteUncheckedCreateInput>
  }

  /**
   * RequirementNote createMany
   */
  export type RequirementNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequirementNotes.
     */
    data: RequirementNoteCreateManyInput | RequirementNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementNote createManyAndReturn
   */
  export type RequirementNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * The data used to create many RequirementNotes.
     */
    data: RequirementNoteCreateManyInput | RequirementNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequirementNote update
   */
  export type RequirementNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * The data needed to update a RequirementNote.
     */
    data: XOR<RequirementNoteUpdateInput, RequirementNoteUncheckedUpdateInput>
    /**
     * Choose, which RequirementNote to update.
     */
    where: RequirementNoteWhereUniqueInput
  }

  /**
   * RequirementNote updateMany
   */
  export type RequirementNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequirementNotes.
     */
    data: XOR<RequirementNoteUpdateManyMutationInput, RequirementNoteUncheckedUpdateManyInput>
    /**
     * Filter which RequirementNotes to update
     */
    where?: RequirementNoteWhereInput
    /**
     * Limit how many RequirementNotes to update.
     */
    limit?: number
  }

  /**
   * RequirementNote updateManyAndReturn
   */
  export type RequirementNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * The data used to update RequirementNotes.
     */
    data: XOR<RequirementNoteUpdateManyMutationInput, RequirementNoteUncheckedUpdateManyInput>
    /**
     * Filter which RequirementNotes to update
     */
    where?: RequirementNoteWhereInput
    /**
     * Limit how many RequirementNotes to update.
     */
    limit?: number
  }

  /**
   * RequirementNote upsert
   */
  export type RequirementNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * The filter to search for the RequirementNote to update in case it exists.
     */
    where: RequirementNoteWhereUniqueInput
    /**
     * In case the RequirementNote found by the `where` argument doesn't exist, create a new RequirementNote with this data.
     */
    create: XOR<RequirementNoteCreateInput, RequirementNoteUncheckedCreateInput>
    /**
     * In case the RequirementNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementNoteUpdateInput, RequirementNoteUncheckedUpdateInput>
  }

  /**
   * RequirementNote delete
   */
  export type RequirementNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
    /**
     * Filter which RequirementNote to delete.
     */
    where: RequirementNoteWhereUniqueInput
  }

  /**
   * RequirementNote deleteMany
   */
  export type RequirementNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequirementNotes to delete
     */
    where?: RequirementNoteWhereInput
    /**
     * Limit how many RequirementNotes to delete.
     */
    limit?: number
  }

  /**
   * RequirementNote without action
   */
  export type RequirementNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequirementNote
     */
    select?: RequirementNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequirementNote
     */
    omit?: RequirementNoteOmit<ExtArgs> | null
  }


  /**
   * Model Regulation
   */

  export type AggregateRegulation = {
    _count: RegulationCountAggregateOutputType | null
    _avg: RegulationAvgAggregateOutputType | null
    _sum: RegulationSumAggregateOutputType | null
    _min: RegulationMinAggregateOutputType | null
    _max: RegulationMaxAggregateOutputType | null
  }

  export type RegulationAvgAggregateOutputType = {
    id: number | null
  }

  export type RegulationSumAggregateOutputType = {
    id: number | null
  }

  export type RegulationMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegulationMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegulationCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegulationAvgAggregateInputType = {
    id?: true
  }

  export type RegulationSumAggregateInputType = {
    id?: true
  }

  export type RegulationMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegulationMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegulationCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegulationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regulation to aggregate.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regulations
    **/
    _count?: true | RegulationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegulationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegulationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegulationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegulationMaxAggregateInputType
  }

  export type GetRegulationAggregateType<T extends RegulationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegulation[P]>
      : GetScalarType<T[P], AggregateRegulation[P]>
  }




  export type RegulationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegulationWhereInput
    orderBy?: RegulationOrderByWithAggregationInput | RegulationOrderByWithAggregationInput[]
    by: RegulationScalarFieldEnum[] | RegulationScalarFieldEnum
    having?: RegulationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegulationCountAggregateInputType | true
    _avg?: RegulationAvgAggregateInputType
    _sum?: RegulationSumAggregateInputType
    _min?: RegulationMinAggregateInputType
    _max?: RegulationMaxAggregateInputType
  }

  export type RegulationGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RegulationCountAggregateOutputType | null
    _avg: RegulationAvgAggregateOutputType | null
    _sum: RegulationSumAggregateOutputType | null
    _min: RegulationMinAggregateOutputType | null
    _max: RegulationMaxAggregateOutputType | null
  }

  type GetRegulationGroupByPayload<T extends RegulationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegulationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegulationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegulationGroupByOutputType[P]>
            : GetScalarType<T[P], RegulationGroupByOutputType[P]>
        }
      >
    >


  export type RegulationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regulation"]>

  export type RegulationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regulation"]>

  export type RegulationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regulation"]>

  export type RegulationSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegulationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["regulation"]>

  export type $RegulationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regulation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["regulation"]>
    composites: {}
  }

  type RegulationGetPayload<S extends boolean | null | undefined | RegulationDefaultArgs> = $Result.GetResult<Prisma.$RegulationPayload, S>

  type RegulationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegulationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegulationCountAggregateInputType | true
    }

  export interface RegulationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regulation'], meta: { name: 'Regulation' } }
    /**
     * Find zero or one Regulation that matches the filter.
     * @param {RegulationFindUniqueArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegulationFindUniqueArgs>(args: SelectSubset<T, RegulationFindUniqueArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegulationFindUniqueOrThrowArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegulationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegulationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationFindFirstArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegulationFindFirstArgs>(args?: SelectSubset<T, RegulationFindFirstArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationFindFirstOrThrowArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegulationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegulationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regulations
     * const regulations = await prisma.regulation.findMany()
     * 
     * // Get first 10 Regulations
     * const regulations = await prisma.regulation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regulationWithIdOnly = await prisma.regulation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegulationFindManyArgs>(args?: SelectSubset<T, RegulationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regulation.
     * @param {RegulationCreateArgs} args - Arguments to create a Regulation.
     * @example
     * // Create one Regulation
     * const Regulation = await prisma.regulation.create({
     *   data: {
     *     // ... data to create a Regulation
     *   }
     * })
     * 
     */
    create<T extends RegulationCreateArgs>(args: SelectSubset<T, RegulationCreateArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regulations.
     * @param {RegulationCreateManyArgs} args - Arguments to create many Regulations.
     * @example
     * // Create many Regulations
     * const regulation = await prisma.regulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegulationCreateManyArgs>(args?: SelectSubset<T, RegulationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regulations and returns the data saved in the database.
     * @param {RegulationCreateManyAndReturnArgs} args - Arguments to create many Regulations.
     * @example
     * // Create many Regulations
     * const regulation = await prisma.regulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regulations and only return the `id`
     * const regulationWithIdOnly = await prisma.regulation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegulationCreateManyAndReturnArgs>(args?: SelectSubset<T, RegulationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regulation.
     * @param {RegulationDeleteArgs} args - Arguments to delete one Regulation.
     * @example
     * // Delete one Regulation
     * const Regulation = await prisma.regulation.delete({
     *   where: {
     *     // ... filter to delete one Regulation
     *   }
     * })
     * 
     */
    delete<T extends RegulationDeleteArgs>(args: SelectSubset<T, RegulationDeleteArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regulation.
     * @param {RegulationUpdateArgs} args - Arguments to update one Regulation.
     * @example
     * // Update one Regulation
     * const regulation = await prisma.regulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegulationUpdateArgs>(args: SelectSubset<T, RegulationUpdateArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regulations.
     * @param {RegulationDeleteManyArgs} args - Arguments to filter Regulations to delete.
     * @example
     * // Delete a few Regulations
     * const { count } = await prisma.regulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegulationDeleteManyArgs>(args?: SelectSubset<T, RegulationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regulations
     * const regulation = await prisma.regulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegulationUpdateManyArgs>(args: SelectSubset<T, RegulationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulations and returns the data updated in the database.
     * @param {RegulationUpdateManyAndReturnArgs} args - Arguments to update many Regulations.
     * @example
     * // Update many Regulations
     * const regulation = await prisma.regulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regulations and only return the `id`
     * const regulationWithIdOnly = await prisma.regulation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegulationUpdateManyAndReturnArgs>(args: SelectSubset<T, RegulationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regulation.
     * @param {RegulationUpsertArgs} args - Arguments to update or create a Regulation.
     * @example
     * // Update or create a Regulation
     * const regulation = await prisma.regulation.upsert({
     *   create: {
     *     // ... data to create a Regulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regulation we want to update
     *   }
     * })
     */
    upsert<T extends RegulationUpsertArgs>(args: SelectSubset<T, RegulationUpsertArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationCountArgs} args - Arguments to filter Regulations to count.
     * @example
     * // Count the number of Regulations
     * const count = await prisma.regulation.count({
     *   where: {
     *     // ... the filter for the Regulations we want to count
     *   }
     * })
    **/
    count<T extends RegulationCountArgs>(
      args?: Subset<T, RegulationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegulationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegulationAggregateArgs>(args: Subset<T, RegulationAggregateArgs>): Prisma.PrismaPromise<GetRegulationAggregateType<T>>

    /**
     * Group by Regulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegulationGroupByArgs['orderBy'] }
        : { orderBy?: RegulationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegulationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regulation model
   */
  readonly fields: RegulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegulationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Regulation model
   */
  interface RegulationFieldRefs {
    readonly id: FieldRef<"Regulation", 'Int'>
    readonly description: FieldRef<"Regulation", 'String'>
    readonly createdAt: FieldRef<"Regulation", 'DateTime'>
    readonly updatedAt: FieldRef<"Regulation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Regulation findUnique
   */
  export type RegulationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation findUniqueOrThrow
   */
  export type RegulationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation findFirst
   */
  export type RegulationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regulations.
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regulations.
     */
    distinct?: RegulationScalarFieldEnum | RegulationScalarFieldEnum[]
  }

  /**
   * Regulation findFirstOrThrow
   */
  export type RegulationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regulations.
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regulations.
     */
    distinct?: RegulationScalarFieldEnum | RegulationScalarFieldEnum[]
  }

  /**
   * Regulation findMany
   */
  export type RegulationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulations to fetch.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regulations.
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    distinct?: RegulationScalarFieldEnum | RegulationScalarFieldEnum[]
  }

  /**
   * Regulation create
   */
  export type RegulationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The data needed to create a Regulation.
     */
    data: XOR<RegulationCreateInput, RegulationUncheckedCreateInput>
  }

  /**
   * Regulation createMany
   */
  export type RegulationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regulations.
     */
    data: RegulationCreateManyInput | RegulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regulation createManyAndReturn
   */
  export type RegulationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The data used to create many Regulations.
     */
    data: RegulationCreateManyInput | RegulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regulation update
   */
  export type RegulationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The data needed to update a Regulation.
     */
    data: XOR<RegulationUpdateInput, RegulationUncheckedUpdateInput>
    /**
     * Choose, which Regulation to update.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation updateMany
   */
  export type RegulationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regulations.
     */
    data: XOR<RegulationUpdateManyMutationInput, RegulationUncheckedUpdateManyInput>
    /**
     * Filter which Regulations to update
     */
    where?: RegulationWhereInput
    /**
     * Limit how many Regulations to update.
     */
    limit?: number
  }

  /**
   * Regulation updateManyAndReturn
   */
  export type RegulationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The data used to update Regulations.
     */
    data: XOR<RegulationUpdateManyMutationInput, RegulationUncheckedUpdateManyInput>
    /**
     * Filter which Regulations to update
     */
    where?: RegulationWhereInput
    /**
     * Limit how many Regulations to update.
     */
    limit?: number
  }

  /**
   * Regulation upsert
   */
  export type RegulationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The filter to search for the Regulation to update in case it exists.
     */
    where: RegulationWhereUniqueInput
    /**
     * In case the Regulation found by the `where` argument doesn't exist, create a new Regulation with this data.
     */
    create: XOR<RegulationCreateInput, RegulationUncheckedCreateInput>
    /**
     * In case the Regulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegulationUpdateInput, RegulationUncheckedUpdateInput>
  }

  /**
   * Regulation delete
   */
  export type RegulationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter which Regulation to delete.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation deleteMany
   */
  export type RegulationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regulations to delete
     */
    where?: RegulationWhereInput
    /**
     * Limit how many Regulations to delete.
     */
    limit?: number
  }

  /**
   * Regulation without action
   */
  export type RegulationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HeroSectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroSectionScalarFieldEnum = (typeof HeroSectionScalarFieldEnum)[keyof typeof HeroSectionScalarFieldEnum]


  export const BottonSectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BottonSectionScalarFieldEnum = (typeof BottonSectionScalarFieldEnum)[keyof typeof BottonSectionScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const FooterScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FooterScalarFieldEnum = (typeof FooterScalarFieldEnum)[keyof typeof FooterScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    features: 'features',
    imageUrl: 'imageUrl',
    brandId: 'brandId',
    priceFullDay: 'priceFullDay',
    priceHalfDay: 'priceHalfDay',
    priceFullDayInCity: 'priceFullDayInCity',
    priceHalfDayInCity: 'priceHalfDayInCity',
    priceFullDayOutCity: 'priceFullDayOutCity',
    priceHalfDayOutCity: 'priceHalfDayOutCity',
    year: 'year',
    fuelType: 'fuelType',
    transmission: 'transmission',
    maxPassengers: 'maxPassengers',
    payloadCapacity: 'payloadCapacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const CompanyAboutScalarFieldEnum: {
    id: 'id',
    description: 'description',
    imageUrl: 'imageUrl',
    vision: 'vision',
    mission: 'mission',
    address: 'address',
    phone: 'phone',
    email: 'email',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyAboutScalarFieldEnum = (typeof CompanyAboutScalarFieldEnum)[keyof typeof CompanyAboutScalarFieldEnum]


  export const OurAdvantageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OurAdvantageScalarFieldEnum = (typeof OurAdvantageScalarFieldEnum)[keyof typeof OurAdvantageScalarFieldEnum]


  export const OurServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OurServiceScalarFieldEnum = (typeof OurServiceScalarFieldEnum)[keyof typeof OurServiceScalarFieldEnum]


  export const RequirementWithDriverScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequirementWithDriverScalarFieldEnum = (typeof RequirementWithDriverScalarFieldEnum)[keyof typeof RequirementWithDriverScalarFieldEnum]


  export const RequirementNoDriverScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequirementNoDriverScalarFieldEnum = (typeof RequirementNoDriverScalarFieldEnum)[keyof typeof RequirementNoDriverScalarFieldEnum]


  export const RequirementNoteScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequirementNoteScalarFieldEnum = (typeof RequirementNoteScalarFieldEnum)[keyof typeof RequirementNoteScalarFieldEnum]


  export const RegulationScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegulationScalarFieldEnum = (typeof RegulationScalarFieldEnum)[keyof typeof RegulationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HeroSectionWhereInput = {
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    id?: IntFilter<"HeroSection"> | number
    title?: StringFilter<"HeroSection"> | string
    description?: StringFilter<"HeroSection"> | string
    imageUrl?: StringNullableFilter<"HeroSection"> | string | null
    createdAt?: DateTimeFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }

  export type HeroSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    title?: StringFilter<"HeroSection"> | string
    description?: StringFilter<"HeroSection"> | string
    imageUrl?: StringNullableFilter<"HeroSection"> | string | null
    createdAt?: DateTimeFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }, "id">

  export type HeroSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroSectionCountOrderByAggregateInput
    _avg?: HeroSectionAvgOrderByAggregateInput
    _max?: HeroSectionMaxOrderByAggregateInput
    _min?: HeroSectionMinOrderByAggregateInput
    _sum?: HeroSectionSumOrderByAggregateInput
  }

  export type HeroSectionScalarWhereWithAggregatesInput = {
    AND?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    OR?: HeroSectionScalarWhereWithAggregatesInput[]
    NOT?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HeroSection"> | number
    title?: StringWithAggregatesFilter<"HeroSection"> | string
    description?: StringWithAggregatesFilter<"HeroSection"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"HeroSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
  }

  export type BottonSectionWhereInput = {
    AND?: BottonSectionWhereInput | BottonSectionWhereInput[]
    OR?: BottonSectionWhereInput[]
    NOT?: BottonSectionWhereInput | BottonSectionWhereInput[]
    id?: IntFilter<"BottonSection"> | number
    title?: StringFilter<"BottonSection"> | string
    description?: StringFilter<"BottonSection"> | string
    imageUrl?: StringNullableFilter<"BottonSection"> | string | null
    createdAt?: DateTimeFilter<"BottonSection"> | Date | string
    updatedAt?: DateTimeFilter<"BottonSection"> | Date | string
  }

  export type BottonSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BottonSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BottonSectionWhereInput | BottonSectionWhereInput[]
    OR?: BottonSectionWhereInput[]
    NOT?: BottonSectionWhereInput | BottonSectionWhereInput[]
    title?: StringFilter<"BottonSection"> | string
    description?: StringFilter<"BottonSection"> | string
    imageUrl?: StringNullableFilter<"BottonSection"> | string | null
    createdAt?: DateTimeFilter<"BottonSection"> | Date | string
    updatedAt?: DateTimeFilter<"BottonSection"> | Date | string
  }, "id">

  export type BottonSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BottonSectionCountOrderByAggregateInput
    _avg?: BottonSectionAvgOrderByAggregateInput
    _max?: BottonSectionMaxOrderByAggregateInput
    _min?: BottonSectionMinOrderByAggregateInput
    _sum?: BottonSectionSumOrderByAggregateInput
  }

  export type BottonSectionScalarWhereWithAggregatesInput = {
    AND?: BottonSectionScalarWhereWithAggregatesInput | BottonSectionScalarWhereWithAggregatesInput[]
    OR?: BottonSectionScalarWhereWithAggregatesInput[]
    NOT?: BottonSectionScalarWhereWithAggregatesInput | BottonSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BottonSection"> | number
    title?: StringWithAggregatesFilter<"BottonSection"> | string
    description?: StringWithAggregatesFilter<"BottonSection"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"BottonSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BottonSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BottonSection"> | Date | string
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    id?: IntFilter<"Faq"> | number
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }

  export type FaqOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }, "id">

  export type FaqOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Faq"> | number
    question?: StringWithAggregatesFilter<"Faq"> | string
    answer?: StringWithAggregatesFilter<"Faq"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
  }

  export type FooterWhereInput = {
    AND?: FooterWhereInput | FooterWhereInput[]
    OR?: FooterWhereInput[]
    NOT?: FooterWhereInput | FooterWhereInput[]
    id?: IntFilter<"Footer"> | number
    description?: StringFilter<"Footer"> | string
    createdAt?: DateTimeFilter<"Footer"> | Date | string
    updatedAt?: DateTimeFilter<"Footer"> | Date | string
  }

  export type FooterOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FooterWhereInput | FooterWhereInput[]
    OR?: FooterWhereInput[]
    NOT?: FooterWhereInput | FooterWhereInput[]
    description?: StringFilter<"Footer"> | string
    createdAt?: DateTimeFilter<"Footer"> | Date | string
    updatedAt?: DateTimeFilter<"Footer"> | Date | string
  }, "id">

  export type FooterOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterCountOrderByAggregateInput
    _avg?: FooterAvgOrderByAggregateInput
    _max?: FooterMaxOrderByAggregateInput
    _min?: FooterMinOrderByAggregateInput
    _sum?: FooterSumOrderByAggregateInput
  }

  export type FooterScalarWhereWithAggregatesInput = {
    AND?: FooterScalarWhereWithAggregatesInput | FooterScalarWhereWithAggregatesInput[]
    OR?: FooterScalarWhereWithAggregatesInput[]
    NOT?: FooterScalarWhereWithAggregatesInput | FooterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Footer"> | number
    description?: StringWithAggregatesFilter<"Footer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Footer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Footer"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    name?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Car?: CarListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Car?: CarOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Car?: CarListRelationFilter
  }, "id" | "slug">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    name?: StringWithAggregatesFilter<"Brand"> | string
    slug?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    name?: StringFilter<"Car"> | string
    slug?: StringFilter<"Car"> | string
    features?: StringFilter<"Car"> | string
    imageUrl?: StringNullableFilter<"Car"> | string | null
    brandId?: IntFilter<"Car"> | number
    priceFullDay?: FloatFilter<"Car"> | number
    priceHalfDay?: FloatFilter<"Car"> | number
    priceFullDayInCity?: FloatNullableFilter<"Car"> | number | null
    priceHalfDayInCity?: FloatNullableFilter<"Car"> | number | null
    priceFullDayOutCity?: FloatNullableFilter<"Car"> | number | null
    priceHalfDayOutCity?: FloatNullableFilter<"Car"> | number | null
    year?: IntFilter<"Car"> | number
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    maxPassengers?: IntFilter<"Car"> | number
    payloadCapacity?: FloatNullableFilter<"Car"> | number | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    features?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrderInput | SortOrder
    priceHalfDayInCity?: SortOrderInput | SortOrder
    priceFullDayOutCity?: SortOrderInput | SortOrder
    priceHalfDayOutCity?: SortOrderInput | SortOrder
    year?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    name?: StringFilter<"Car"> | string
    features?: StringFilter<"Car"> | string
    imageUrl?: StringNullableFilter<"Car"> | string | null
    brandId?: IntFilter<"Car"> | number
    priceFullDay?: FloatFilter<"Car"> | number
    priceHalfDay?: FloatFilter<"Car"> | number
    priceFullDayInCity?: FloatNullableFilter<"Car"> | number | null
    priceHalfDayInCity?: FloatNullableFilter<"Car"> | number | null
    priceFullDayOutCity?: FloatNullableFilter<"Car"> | number | null
    priceHalfDayOutCity?: FloatNullableFilter<"Car"> | number | null
    year?: IntFilter<"Car"> | number
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    maxPassengers?: IntFilter<"Car"> | number
    payloadCapacity?: FloatNullableFilter<"Car"> | number | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
  }, "id" | "slug">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    features?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrderInput | SortOrder
    priceHalfDayInCity?: SortOrderInput | SortOrder
    priceFullDayOutCity?: SortOrderInput | SortOrder
    priceHalfDayOutCity?: SortOrderInput | SortOrder
    year?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    name?: StringWithAggregatesFilter<"Car"> | string
    slug?: StringWithAggregatesFilter<"Car"> | string
    features?: StringWithAggregatesFilter<"Car"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Car"> | string | null
    brandId?: IntWithAggregatesFilter<"Car"> | number
    priceFullDay?: FloatWithAggregatesFilter<"Car"> | number
    priceHalfDay?: FloatWithAggregatesFilter<"Car"> | number
    priceFullDayInCity?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    priceHalfDayInCity?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    priceFullDayOutCity?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    priceHalfDayOutCity?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    year?: IntWithAggregatesFilter<"Car"> | number
    fuelType?: StringWithAggregatesFilter<"Car"> | string
    transmission?: StringWithAggregatesFilter<"Car"> | string
    maxPassengers?: IntWithAggregatesFilter<"Car"> | number
    payloadCapacity?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type CompanyAboutWhereInput = {
    AND?: CompanyAboutWhereInput | CompanyAboutWhereInput[]
    OR?: CompanyAboutWhereInput[]
    NOT?: CompanyAboutWhereInput | CompanyAboutWhereInput[]
    id?: IntFilter<"CompanyAbout"> | number
    description?: StringFilter<"CompanyAbout"> | string
    imageUrl?: StringNullableFilter<"CompanyAbout"> | string | null
    vision?: StringFilter<"CompanyAbout"> | string
    mission?: StringFilter<"CompanyAbout"> | string
    address?: StringFilter<"CompanyAbout"> | string
    phone?: StringFilter<"CompanyAbout"> | string
    email?: StringFilter<"CompanyAbout"> | string
    website?: StringFilter<"CompanyAbout"> | string
    createdAt?: DateTimeFilter<"CompanyAbout"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyAbout"> | Date | string
  }

  export type CompanyAboutOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    vision?: SortOrder
    mission?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAboutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyAboutWhereInput | CompanyAboutWhereInput[]
    OR?: CompanyAboutWhereInput[]
    NOT?: CompanyAboutWhereInput | CompanyAboutWhereInput[]
    description?: StringFilter<"CompanyAbout"> | string
    imageUrl?: StringNullableFilter<"CompanyAbout"> | string | null
    vision?: StringFilter<"CompanyAbout"> | string
    mission?: StringFilter<"CompanyAbout"> | string
    address?: StringFilter<"CompanyAbout"> | string
    phone?: StringFilter<"CompanyAbout"> | string
    email?: StringFilter<"CompanyAbout"> | string
    website?: StringFilter<"CompanyAbout"> | string
    createdAt?: DateTimeFilter<"CompanyAbout"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyAbout"> | Date | string
  }, "id">

  export type CompanyAboutOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    vision?: SortOrder
    mission?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyAboutCountOrderByAggregateInput
    _avg?: CompanyAboutAvgOrderByAggregateInput
    _max?: CompanyAboutMaxOrderByAggregateInput
    _min?: CompanyAboutMinOrderByAggregateInput
    _sum?: CompanyAboutSumOrderByAggregateInput
  }

  export type CompanyAboutScalarWhereWithAggregatesInput = {
    AND?: CompanyAboutScalarWhereWithAggregatesInput | CompanyAboutScalarWhereWithAggregatesInput[]
    OR?: CompanyAboutScalarWhereWithAggregatesInput[]
    NOT?: CompanyAboutScalarWhereWithAggregatesInput | CompanyAboutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyAbout"> | number
    description?: StringWithAggregatesFilter<"CompanyAbout"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CompanyAbout"> | string | null
    vision?: StringWithAggregatesFilter<"CompanyAbout"> | string
    mission?: StringWithAggregatesFilter<"CompanyAbout"> | string
    address?: StringWithAggregatesFilter<"CompanyAbout"> | string
    phone?: StringWithAggregatesFilter<"CompanyAbout"> | string
    email?: StringWithAggregatesFilter<"CompanyAbout"> | string
    website?: StringWithAggregatesFilter<"CompanyAbout"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompanyAbout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyAbout"> | Date | string
  }

  export type OurAdvantageWhereInput = {
    AND?: OurAdvantageWhereInput | OurAdvantageWhereInput[]
    OR?: OurAdvantageWhereInput[]
    NOT?: OurAdvantageWhereInput | OurAdvantageWhereInput[]
    id?: IntFilter<"OurAdvantage"> | number
    title?: StringFilter<"OurAdvantage"> | string
    description?: StringFilter<"OurAdvantage"> | string
    createdAt?: DateTimeFilter<"OurAdvantage"> | Date | string
    updatedAt?: DateTimeFilter<"OurAdvantage"> | Date | string
  }

  export type OurAdvantageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurAdvantageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OurAdvantageWhereInput | OurAdvantageWhereInput[]
    OR?: OurAdvantageWhereInput[]
    NOT?: OurAdvantageWhereInput | OurAdvantageWhereInput[]
    title?: StringFilter<"OurAdvantage"> | string
    description?: StringFilter<"OurAdvantage"> | string
    createdAt?: DateTimeFilter<"OurAdvantage"> | Date | string
    updatedAt?: DateTimeFilter<"OurAdvantage"> | Date | string
  }, "id">

  export type OurAdvantageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OurAdvantageCountOrderByAggregateInput
    _avg?: OurAdvantageAvgOrderByAggregateInput
    _max?: OurAdvantageMaxOrderByAggregateInput
    _min?: OurAdvantageMinOrderByAggregateInput
    _sum?: OurAdvantageSumOrderByAggregateInput
  }

  export type OurAdvantageScalarWhereWithAggregatesInput = {
    AND?: OurAdvantageScalarWhereWithAggregatesInput | OurAdvantageScalarWhereWithAggregatesInput[]
    OR?: OurAdvantageScalarWhereWithAggregatesInput[]
    NOT?: OurAdvantageScalarWhereWithAggregatesInput | OurAdvantageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OurAdvantage"> | number
    title?: StringWithAggregatesFilter<"OurAdvantage"> | string
    description?: StringWithAggregatesFilter<"OurAdvantage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OurAdvantage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OurAdvantage"> | Date | string
  }

  export type OurServiceWhereInput = {
    AND?: OurServiceWhereInput | OurServiceWhereInput[]
    OR?: OurServiceWhereInput[]
    NOT?: OurServiceWhereInput | OurServiceWhereInput[]
    id?: IntFilter<"OurService"> | number
    title?: StringFilter<"OurService"> | string
    description?: StringFilter<"OurService"> | string
    createdAt?: DateTimeFilter<"OurService"> | Date | string
    updatedAt?: DateTimeFilter<"OurService"> | Date | string
  }

  export type OurServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OurServiceWhereInput | OurServiceWhereInput[]
    OR?: OurServiceWhereInput[]
    NOT?: OurServiceWhereInput | OurServiceWhereInput[]
    title?: StringFilter<"OurService"> | string
    description?: StringFilter<"OurService"> | string
    createdAt?: DateTimeFilter<"OurService"> | Date | string
    updatedAt?: DateTimeFilter<"OurService"> | Date | string
  }, "id">

  export type OurServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OurServiceCountOrderByAggregateInput
    _avg?: OurServiceAvgOrderByAggregateInput
    _max?: OurServiceMaxOrderByAggregateInput
    _min?: OurServiceMinOrderByAggregateInput
    _sum?: OurServiceSumOrderByAggregateInput
  }

  export type OurServiceScalarWhereWithAggregatesInput = {
    AND?: OurServiceScalarWhereWithAggregatesInput | OurServiceScalarWhereWithAggregatesInput[]
    OR?: OurServiceScalarWhereWithAggregatesInput[]
    NOT?: OurServiceScalarWhereWithAggregatesInput | OurServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OurService"> | number
    title?: StringWithAggregatesFilter<"OurService"> | string
    description?: StringWithAggregatesFilter<"OurService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OurService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OurService"> | Date | string
  }

  export type RequirementWithDriverWhereInput = {
    AND?: RequirementWithDriverWhereInput | RequirementWithDriverWhereInput[]
    OR?: RequirementWithDriverWhereInput[]
    NOT?: RequirementWithDriverWhereInput | RequirementWithDriverWhereInput[]
    id?: IntFilter<"RequirementWithDriver"> | number
    description?: StringFilter<"RequirementWithDriver"> | string
    createdAt?: DateTimeFilter<"RequirementWithDriver"> | Date | string
    updatedAt?: DateTimeFilter<"RequirementWithDriver"> | Date | string
  }

  export type RequirementWithDriverOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementWithDriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequirementWithDriverWhereInput | RequirementWithDriverWhereInput[]
    OR?: RequirementWithDriverWhereInput[]
    NOT?: RequirementWithDriverWhereInput | RequirementWithDriverWhereInput[]
    description?: StringFilter<"RequirementWithDriver"> | string
    createdAt?: DateTimeFilter<"RequirementWithDriver"> | Date | string
    updatedAt?: DateTimeFilter<"RequirementWithDriver"> | Date | string
  }, "id">

  export type RequirementWithDriverOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequirementWithDriverCountOrderByAggregateInput
    _avg?: RequirementWithDriverAvgOrderByAggregateInput
    _max?: RequirementWithDriverMaxOrderByAggregateInput
    _min?: RequirementWithDriverMinOrderByAggregateInput
    _sum?: RequirementWithDriverSumOrderByAggregateInput
  }

  export type RequirementWithDriverScalarWhereWithAggregatesInput = {
    AND?: RequirementWithDriverScalarWhereWithAggregatesInput | RequirementWithDriverScalarWhereWithAggregatesInput[]
    OR?: RequirementWithDriverScalarWhereWithAggregatesInput[]
    NOT?: RequirementWithDriverScalarWhereWithAggregatesInput | RequirementWithDriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequirementWithDriver"> | number
    description?: StringWithAggregatesFilter<"RequirementWithDriver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RequirementWithDriver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequirementWithDriver"> | Date | string
  }

  export type RequirementNoDriverWhereInput = {
    AND?: RequirementNoDriverWhereInput | RequirementNoDriverWhereInput[]
    OR?: RequirementNoDriverWhereInput[]
    NOT?: RequirementNoDriverWhereInput | RequirementNoDriverWhereInput[]
    id?: IntFilter<"RequirementNoDriver"> | number
    title?: StringFilter<"RequirementNoDriver"> | string
    description?: StringFilter<"RequirementNoDriver"> | string
    createdAt?: DateTimeFilter<"RequirementNoDriver"> | Date | string
    updatedAt?: DateTimeFilter<"RequirementNoDriver"> | Date | string
  }

  export type RequirementNoDriverOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoDriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequirementNoDriverWhereInput | RequirementNoDriverWhereInput[]
    OR?: RequirementNoDriverWhereInput[]
    NOT?: RequirementNoDriverWhereInput | RequirementNoDriverWhereInput[]
    title?: StringFilter<"RequirementNoDriver"> | string
    description?: StringFilter<"RequirementNoDriver"> | string
    createdAt?: DateTimeFilter<"RequirementNoDriver"> | Date | string
    updatedAt?: DateTimeFilter<"RequirementNoDriver"> | Date | string
  }, "id">

  export type RequirementNoDriverOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequirementNoDriverCountOrderByAggregateInput
    _avg?: RequirementNoDriverAvgOrderByAggregateInput
    _max?: RequirementNoDriverMaxOrderByAggregateInput
    _min?: RequirementNoDriverMinOrderByAggregateInput
    _sum?: RequirementNoDriverSumOrderByAggregateInput
  }

  export type RequirementNoDriverScalarWhereWithAggregatesInput = {
    AND?: RequirementNoDriverScalarWhereWithAggregatesInput | RequirementNoDriverScalarWhereWithAggregatesInput[]
    OR?: RequirementNoDriverScalarWhereWithAggregatesInput[]
    NOT?: RequirementNoDriverScalarWhereWithAggregatesInput | RequirementNoDriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequirementNoDriver"> | number
    title?: StringWithAggregatesFilter<"RequirementNoDriver"> | string
    description?: StringWithAggregatesFilter<"RequirementNoDriver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RequirementNoDriver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequirementNoDriver"> | Date | string
  }

  export type RequirementNoteWhereInput = {
    AND?: RequirementNoteWhereInput | RequirementNoteWhereInput[]
    OR?: RequirementNoteWhereInput[]
    NOT?: RequirementNoteWhereInput | RequirementNoteWhereInput[]
    id?: IntFilter<"RequirementNote"> | number
    description?: StringFilter<"RequirementNote"> | string
    createdAt?: DateTimeFilter<"RequirementNote"> | Date | string
    updatedAt?: DateTimeFilter<"RequirementNote"> | Date | string
  }

  export type RequirementNoteOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequirementNoteWhereInput | RequirementNoteWhereInput[]
    OR?: RequirementNoteWhereInput[]
    NOT?: RequirementNoteWhereInput | RequirementNoteWhereInput[]
    description?: StringFilter<"RequirementNote"> | string
    createdAt?: DateTimeFilter<"RequirementNote"> | Date | string
    updatedAt?: DateTimeFilter<"RequirementNote"> | Date | string
  }, "id">

  export type RequirementNoteOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequirementNoteCountOrderByAggregateInput
    _avg?: RequirementNoteAvgOrderByAggregateInput
    _max?: RequirementNoteMaxOrderByAggregateInput
    _min?: RequirementNoteMinOrderByAggregateInput
    _sum?: RequirementNoteSumOrderByAggregateInput
  }

  export type RequirementNoteScalarWhereWithAggregatesInput = {
    AND?: RequirementNoteScalarWhereWithAggregatesInput | RequirementNoteScalarWhereWithAggregatesInput[]
    OR?: RequirementNoteScalarWhereWithAggregatesInput[]
    NOT?: RequirementNoteScalarWhereWithAggregatesInput | RequirementNoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequirementNote"> | number
    description?: StringWithAggregatesFilter<"RequirementNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RequirementNote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequirementNote"> | Date | string
  }

  export type RegulationWhereInput = {
    AND?: RegulationWhereInput | RegulationWhereInput[]
    OR?: RegulationWhereInput[]
    NOT?: RegulationWhereInput | RegulationWhereInput[]
    id?: IntFilter<"Regulation"> | number
    description?: StringFilter<"Regulation"> | string
    createdAt?: DateTimeFilter<"Regulation"> | Date | string
    updatedAt?: DateTimeFilter<"Regulation"> | Date | string
  }

  export type RegulationOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegulationWhereInput | RegulationWhereInput[]
    OR?: RegulationWhereInput[]
    NOT?: RegulationWhereInput | RegulationWhereInput[]
    description?: StringFilter<"Regulation"> | string
    createdAt?: DateTimeFilter<"Regulation"> | Date | string
    updatedAt?: DateTimeFilter<"Regulation"> | Date | string
  }, "id">

  export type RegulationOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegulationCountOrderByAggregateInput
    _avg?: RegulationAvgOrderByAggregateInput
    _max?: RegulationMaxOrderByAggregateInput
    _min?: RegulationMinOrderByAggregateInput
    _sum?: RegulationSumOrderByAggregateInput
  }

  export type RegulationScalarWhereWithAggregatesInput = {
    AND?: RegulationScalarWhereWithAggregatesInput | RegulationScalarWhereWithAggregatesInput[]
    OR?: RegulationScalarWhereWithAggregatesInput[]
    NOT?: RegulationScalarWhereWithAggregatesInput | RegulationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Regulation"> | number
    description?: StringWithAggregatesFilter<"Regulation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Regulation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Regulation"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateInput = {
    title: string
    description: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateManyInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottonSectionCreateInput = {
    title: string
    description: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BottonSectionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BottonSectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottonSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottonSectionCreateManyInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BottonSectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BottonSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateInput = {
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateManyInput = {
    id?: number
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Car?: CarCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Car?: CarUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Car?: CarUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Car?: CarUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    name: string
    slug: string
    features: string
    imageUrl?: string | null
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity?: number | null
    priceHalfDayInCity?: number | null
    priceFullDayOutCity?: number | null
    priceHalfDayOutCity?: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    features: string
    imageUrl?: string | null
    brandId: number
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity?: number | null
    priceHalfDayInCity?: number | null
    priceFullDayOutCity?: number | null
    priceHalfDayOutCity?: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: IntFieldUpdateOperationsInput | number
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyInput = {
    id?: number
    name: string
    slug: string
    features: string
    imageUrl?: string | null
    brandId: number
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity?: number | null
    priceHalfDayInCity?: number | null
    priceFullDayOutCity?: number | null
    priceHalfDayOutCity?: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: IntFieldUpdateOperationsInput | number
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyAboutCreateInput = {
    description: string
    imageUrl?: string | null
    vision: string
    mission: string
    address: string
    phone: string
    email: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyAboutUncheckedCreateInput = {
    id?: number
    description: string
    imageUrl?: string | null
    vision: string
    mission: string
    address: string
    phone: string
    email: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyAboutUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vision?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyAboutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vision?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyAboutCreateManyInput = {
    id?: number
    description: string
    imageUrl?: string | null
    vision: string
    mission: string
    address: string
    phone: string
    email: string
    website: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyAboutUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vision?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyAboutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vision?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurAdvantageCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OurAdvantageUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OurAdvantageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurAdvantageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurAdvantageCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OurAdvantageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurAdvantageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurServiceCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OurServiceUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OurServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurServiceCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OurServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OurServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementWithDriverCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementWithDriverUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementWithDriverUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementWithDriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementWithDriverCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementWithDriverUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementWithDriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoDriverCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementNoDriverUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementNoDriverUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoDriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoDriverCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementNoDriverUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoDriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoteCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementNoteUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementNoteUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoteCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementNoteUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegulationUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegulationUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegulationUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HeroSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HeroSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BottonSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BottonSectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BottonSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BottonSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BottonSectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaqCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FooterCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FooterMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    features?: SortOrder
    imageUrl?: SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrder
    priceHalfDayInCity?: SortOrder
    priceFullDayOutCity?: SortOrder
    priceHalfDayOutCity?: SortOrder
    year?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrder
    priceHalfDayInCity?: SortOrder
    priceFullDayOutCity?: SortOrder
    priceHalfDayOutCity?: SortOrder
    year?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    features?: SortOrder
    imageUrl?: SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrder
    priceHalfDayInCity?: SortOrder
    priceFullDayOutCity?: SortOrder
    priceHalfDayOutCity?: SortOrder
    year?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    features?: SortOrder
    imageUrl?: SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrder
    priceHalfDayInCity?: SortOrder
    priceFullDayOutCity?: SortOrder
    priceHalfDayOutCity?: SortOrder
    year?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    priceFullDay?: SortOrder
    priceHalfDay?: SortOrder
    priceFullDayInCity?: SortOrder
    priceHalfDayInCity?: SortOrder
    priceFullDayOutCity?: SortOrder
    priceHalfDayOutCity?: SortOrder
    year?: SortOrder
    maxPassengers?: SortOrder
    payloadCapacity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CompanyAboutCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    vision?: SortOrder
    mission?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAboutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyAboutMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    vision?: SortOrder
    mission?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAboutMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    vision?: SortOrder
    mission?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAboutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OurAdvantageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurAdvantageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OurAdvantageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurAdvantageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurAdvantageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OurServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OurServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OurServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequirementWithDriverCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementWithDriverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequirementWithDriverMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementWithDriverMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementWithDriverSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequirementNoDriverCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoDriverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequirementNoDriverMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoDriverMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoDriverSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequirementNoteCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequirementNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoteMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequirementNoteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegulationCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegulationMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CarCreateNestedManyWithoutBrandInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutBrandInput | CarUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutBrandInput | CarUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CarUpdateManyWithWhereWithoutBrandInput | CarUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutBrandInput | CarUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutBrandInput | CarUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CarUpdateManyWithWhereWithoutBrandInput | CarUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutCarInput = {
    create?: XOR<BrandCreateWithoutCarInput, BrandUncheckedCreateWithoutCarInput>
    connectOrCreate?: BrandCreateOrConnectWithoutCarInput
    connect?: BrandWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrandUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<BrandCreateWithoutCarInput, BrandUncheckedCreateWithoutCarInput>
    connectOrCreate?: BrandCreateOrConnectWithoutCarInput
    upsert?: BrandUpsertWithoutCarInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutCarInput, BrandUpdateWithoutCarInput>, BrandUncheckedUpdateWithoutCarInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CarCreateWithoutBrandInput = {
    name: string
    slug: string
    features: string
    imageUrl?: string | null
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity?: number | null
    priceHalfDayInCity?: number | null
    priceFullDayOutCity?: number | null
    priceHalfDayOutCity?: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    slug: string
    features: string
    imageUrl?: string | null
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity?: number | null
    priceHalfDayInCity?: number | null
    priceFullDayOutCity?: number | null
    priceHalfDayOutCity?: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateOrConnectWithoutBrandInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput>
  }

  export type CarCreateManyBrandInputEnvelope = {
    data: CarCreateManyBrandInput | CarCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutBrandInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutBrandInput, CarUncheckedUpdateWithoutBrandInput>
    create: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput>
  }

  export type CarUpdateWithWhereUniqueWithoutBrandInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutBrandInput, CarUncheckedUpdateWithoutBrandInput>
  }

  export type CarUpdateManyWithWhereWithoutBrandInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutBrandInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    name?: StringFilter<"Car"> | string
    slug?: StringFilter<"Car"> | string
    features?: StringFilter<"Car"> | string
    imageUrl?: StringNullableFilter<"Car"> | string | null
    brandId?: IntFilter<"Car"> | number
    priceFullDay?: FloatFilter<"Car"> | number
    priceHalfDay?: FloatFilter<"Car"> | number
    priceFullDayInCity?: FloatNullableFilter<"Car"> | number | null
    priceHalfDayInCity?: FloatNullableFilter<"Car"> | number | null
    priceFullDayOutCity?: FloatNullableFilter<"Car"> | number | null
    priceHalfDayOutCity?: FloatNullableFilter<"Car"> | number | null
    year?: IntFilter<"Car"> | number
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    maxPassengers?: IntFilter<"Car"> | number
    payloadCapacity?: FloatNullableFilter<"Car"> | number | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type BrandCreateWithoutCarInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutCarInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutCarInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutCarInput, BrandUncheckedCreateWithoutCarInput>
  }

  export type BrandUpsertWithoutCarInput = {
    update: XOR<BrandUpdateWithoutCarInput, BrandUncheckedUpdateWithoutCarInput>
    create: XOR<BrandCreateWithoutCarInput, BrandUncheckedCreateWithoutCarInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutCarInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutCarInput, BrandUncheckedUpdateWithoutCarInput>
  }

  export type BrandUpdateWithoutCarInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyBrandInput = {
    id?: number
    name: string
    slug: string
    features: string
    imageUrl?: string | null
    priceFullDay: number
    priceHalfDay: number
    priceFullDayInCity?: number | null
    priceHalfDayInCity?: number | null
    priceFullDayOutCity?: number | null
    priceHalfDayOutCity?: number | null
    year: number
    fuelType: string
    transmission: string
    maxPassengers: number
    payloadCapacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    priceFullDay?: FloatFieldUpdateOperationsInput | number
    priceHalfDay?: FloatFieldUpdateOperationsInput | number
    priceFullDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayInCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceFullDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    priceHalfDayOutCity?: NullableFloatFieldUpdateOperationsInput | number | null
    year?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    payloadCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}