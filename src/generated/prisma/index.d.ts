
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
 * Model ingredient
 * 
 */
export type ingredient = $Result.DefaultSelection<Prisma.$ingredientPayload>
/**
 * Model pantry
 * 
 */
export type pantry = $Result.DefaultSelection<Prisma.$pantryPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model shop
 * 
 */
export type shop = $Result.DefaultSelection<Prisma.$shopPayload>
/**
 * Model shoppingList
 * 
 */
export type shoppingList = $Result.DefaultSelection<Prisma.$shoppingListPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model RecipeIngredient
 * 
 */
export type RecipeIngredient = $Result.DefaultSelection<Prisma.$RecipeIngredientPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ingredient_priority: {
  alta: 'alta',
  media: 'media',
  baja: 'baja'
};

export type ingredient_priority = (typeof ingredient_priority)[keyof typeof ingredient_priority]


export const diet_restriction: {
  sin_gluten: 'sin_gluten',
  sin_lactosa: 'sin_lactosa',
  aplv: 'aplv',
  frutos_secos: 'frutos_secos',
  cacahuetes: 'cacahuetes',
  marisco: 'marisco',
  pescado: 'pescado',
  huevo: 'huevo',
  soja: 'soja',
  sesamo: 'sesamo',
  mostaza: 'mostaza',
  apio: 'apio',
  sulfitos: 'sulfitos',
  altramuces: 'altramuces',
  diabeticos: 'diabeticos',
  fodmap: 'fodmap',
  fructosa: 'fructosa',
  histamina: 'histamina',
  hiposodica: 'hiposodica',
  bajo_potasio: 'bajo_potasio',
  bajo_purinas: 'bajo_purinas',
  bajo_residuos: 'bajo_residuos',
  fenilcetonuria: 'fenilcetonuria',
  astringente: 'astringente'
};

export type diet_restriction = (typeof diet_restriction)[keyof typeof diet_restriction]


export const diet_preference: {
  none: 'none',
  vegetarian: 'vegetarian',
  lacto_vegetarian: 'lacto_vegetarian',
  ovo_vegetarian: 'ovo_vegetarian',
  vegan: 'vegan',
  pescetarian: 'pescetarian',
  keto: 'keto',
  paleo: 'paleo'
};

export type diet_preference = (typeof diet_preference)[keyof typeof diet_preference]


export const ingredient_category: {
  frutas_verduras: 'frutas_verduras',
  carnes_pescados: 'carnes_pescados',
  lacteos_huevos: 'lacteos_huevos',
  despensa_granos: 'despensa_granos',
  condimentos_aceites: 'condimentos_aceites',
  snacks_extras: 'snacks_extras'
};

export type ingredient_category = (typeof ingredient_category)[keyof typeof ingredient_category]

}

export type ingredient_priority = $Enums.ingredient_priority

export const ingredient_priority: typeof $Enums.ingredient_priority

export type diet_restriction = $Enums.diet_restriction

export const diet_restriction: typeof $Enums.diet_restriction

export type diet_preference = $Enums.diet_preference

export const diet_preference: typeof $Enums.diet_preference

export type ingredient_category = $Enums.ingredient_category

export const ingredient_category: typeof $Enums.ingredient_category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ingredients
 * const ingredients = await prisma.ingredient.findMany()
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
   * // Fetch zero or more Ingredients
   * const ingredients = await prisma.ingredient.findMany()
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
   * `prisma.ingredient`: Exposes CRUD operations for the **ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.ingredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantry`: Exposes CRUD operations for the **pantry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pantries
    * const pantries = await prisma.pantry.findMany()
    * ```
    */
  get pantry(): Prisma.pantryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.shopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **shoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.shoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeIngredient`: Exposes CRUD operations for the **RecipeIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredient.findMany()
    * ```
    */
  get recipeIngredient(): Prisma.RecipeIngredientDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    ingredient: 'ingredient',
    pantry: 'pantry',
    user: 'user',
    shop: 'shop',
    shoppingList: 'shoppingList',
    Recipe: 'Recipe',
    RecipeIngredient: 'RecipeIngredient'
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
      modelProps: "ingredient" | "pantry" | "user" | "shop" | "shoppingList" | "recipe" | "recipeIngredient"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ingredient: {
        payload: Prisma.$ingredientPayload<ExtArgs>
        fields: Prisma.ingredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          findFirst: {
            args: Prisma.ingredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          findMany: {
            args: Prisma.ingredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          create: {
            args: Prisma.ingredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          createMany: {
            args: Prisma.ingredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          delete: {
            args: Prisma.ingredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          update: {
            args: Prisma.ingredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          deleteMany: {
            args: Prisma.ingredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          upsert: {
            args: Prisma.ingredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.ingredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      pantry: {
        payload: Prisma.$pantryPayload<ExtArgs>
        fields: Prisma.pantryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pantryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pantryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>
          }
          findFirst: {
            args: Prisma.pantryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pantryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>
          }
          findMany: {
            args: Prisma.pantryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>[]
          }
          create: {
            args: Prisma.pantryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>
          }
          createMany: {
            args: Prisma.pantryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pantryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>[]
          }
          delete: {
            args: Prisma.pantryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>
          }
          update: {
            args: Prisma.pantryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>
          }
          deleteMany: {
            args: Prisma.pantryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pantryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pantryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>[]
          }
          upsert: {
            args: Prisma.pantryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pantryPayload>
          }
          aggregate: {
            args: Prisma.PantryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantry>
          }
          groupBy: {
            args: Prisma.pantryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryGroupByOutputType>[]
          }
          count: {
            args: Prisma.pantryCountArgs<ExtArgs>
            result: $Utils.Optional<PantryCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      shop: {
        payload: Prisma.$shopPayload<ExtArgs>
        fields: Prisma.shopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>
          }
          findFirst: {
            args: Prisma.shopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>
          }
          findMany: {
            args: Prisma.shopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>[]
          }
          create: {
            args: Prisma.shopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>
          }
          createMany: {
            args: Prisma.shopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>[]
          }
          delete: {
            args: Prisma.shopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>
          }
          update: {
            args: Prisma.shopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>
          }
          deleteMany: {
            args: Prisma.shopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>[]
          }
          upsert: {
            args: Prisma.shopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.shopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.shopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      shoppingList: {
        payload: Prisma.$shoppingListPayload<ExtArgs>
        fields: Prisma.shoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          findFirst: {
            args: Prisma.shoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          findMany: {
            args: Prisma.shoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>[]
          }
          create: {
            args: Prisma.shoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          createMany: {
            args: Prisma.shoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>[]
          }
          delete: {
            args: Prisma.shoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          update: {
            args: Prisma.shoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          deleteMany: {
            args: Prisma.shoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>[]
          }
          upsert: {
            args: Prisma.shoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shoppingListPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingList>
          }
          groupBy: {
            args: Prisma.shoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.shoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredient: {
        payload: Prisma.$RecipeIngredientPayload<ExtArgs>
        fields: Prisma.RecipeIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          delete: {
            args: Prisma.RecipeIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          update: {
            args: Prisma.RecipeIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          upsert: {
            args: Prisma.RecipeIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeIngredient>
          }
          groupBy: {
            args: Prisma.RecipeIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientCountAggregateOutputType> | number
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
    ingredient?: ingredientOmit
    pantry?: pantryOmit
    user?: userOmit
    shop?: shopOmit
    shoppingList?: shoppingListOmit
    recipe?: RecipeOmit
    recipeIngredient?: RecipeIngredientOmit
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
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    pantry: number
    shoppingList: number
    ingredients: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pantry?: boolean | IngredientCountOutputTypeCountPantryArgs
    shoppingList?: boolean | IngredientCountOutputTypeCountShoppingListArgs
    ingredients?: boolean | IngredientCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountPantryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pantryWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pantry: number
    shops: number
    shoppingList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pantry?: boolean | UserCountOutputTypeCountPantryArgs
    shops?: boolean | UserCountOutputTypeCountShopsArgs
    shoppingList?: boolean | UserCountOutputTypeCountShoppingListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPantryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pantryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    shoppingList: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShopCountOutputTypeCountShoppingListArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountShoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.ingredient_category | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.ingredient_category | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredient to aggregate.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type ingredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithAggregationInput | ingredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: ingredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    name: string
    category: $Enums.ingredient_category | null
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends ingredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type ingredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    pantry?: boolean | ingredient$pantryArgs<ExtArgs>
    shoppingList?: boolean | ingredient$shoppingListArgs<ExtArgs>
    ingredients?: boolean | ingredient$ingredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type ingredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type ingredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type ingredientSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type ingredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["ingredient"]>
  export type ingredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pantry?: boolean | ingredient$pantryArgs<ExtArgs>
    shoppingList?: boolean | ingredient$shoppingListArgs<ExtArgs>
    ingredients?: boolean | ingredient$ingredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ingredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ingredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ingredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredient"
    objects: {
      pantry: Prisma.$pantryPayload<ExtArgs>[]
      shoppingList: Prisma.$shoppingListPayload<ExtArgs>[]
      ingredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: $Enums.ingredient_category | null
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type ingredientGetPayload<S extends boolean | null | undefined | ingredientDefaultArgs> = $Result.GetResult<Prisma.$ingredientPayload, S>

  type ingredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface ingredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredient'], meta: { name: 'ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {ingredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredientFindUniqueArgs>(args: SelectSubset<T, ingredientFindUniqueArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredientFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredientFindFirstArgs>(args?: SelectSubset<T, ingredientFindFirstArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredientFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ingredientFindManyArgs>(args?: SelectSubset<T, ingredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {ingredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends ingredientCreateArgs>(args: SelectSubset<T, ingredientCreateArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {ingredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredientCreateManyArgs>(args?: SelectSubset<T, ingredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {ingredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingredientCreateManyAndReturnArgs>(args?: SelectSubset<T, ingredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {ingredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends ingredientDeleteArgs>(args: SelectSubset<T, ingredientDeleteArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {ingredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredientUpdateArgs>(args: SelectSubset<T, ingredientUpdateArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {ingredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredientDeleteManyArgs>(args?: SelectSubset<T, ingredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredientUpdateManyArgs>(args: SelectSubset<T, ingredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {ingredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends ingredientUpdateManyAndReturnArgs>(args: SelectSubset<T, ingredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {ingredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends ingredientUpsertArgs>(args: SelectSubset<T, ingredientUpsertArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends ingredientCountArgs>(
      args?: Subset<T, ingredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientGroupByArgs} args - Group by arguments.
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
      T extends ingredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredientGroupByArgs['orderBy'] }
        : { orderBy?: ingredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredient model
   */
  readonly fields: ingredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pantry<T extends ingredient$pantryArgs<ExtArgs> = {}>(args?: Subset<T, ingredient$pantryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingList<T extends ingredient$shoppingListArgs<ExtArgs> = {}>(args?: Subset<T, ingredient$shoppingListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredients<T extends ingredient$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, ingredient$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ingredient model
   */
  interface ingredientFieldRefs {
    readonly id: FieldRef<"ingredient", 'Int'>
    readonly name: FieldRef<"ingredient", 'String'>
    readonly category: FieldRef<"ingredient", 'ingredient_category'>
  }
    

  // Custom InputTypes
  /**
   * ingredient findUnique
   */
  export type ingredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient findUniqueOrThrow
   */
  export type ingredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient findFirst
   */
  export type ingredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient findFirstOrThrow
   */
  export type ingredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient findMany
   */
  export type ingredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient create
   */
  export type ingredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredient.
     */
    data: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>
  }

  /**
   * ingredient createMany
   */
  export type ingredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredients.
     */
    data: ingredientCreateManyInput | ingredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredient createManyAndReturn
   */
  export type ingredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * The data used to create many ingredients.
     */
    data: ingredientCreateManyInput | ingredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredient update
   */
  export type ingredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredient.
     */
    data: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>
    /**
     * Choose, which ingredient to update.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient updateMany
   */
  export type ingredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
  }

  /**
   * ingredient updateManyAndReturn
   */
  export type ingredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
  }

  /**
   * ingredient upsert
   */
  export type ingredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredient to update in case it exists.
     */
    where: ingredientWhereUniqueInput
    /**
     * In case the ingredient found by the `where` argument doesn't exist, create a new ingredient with this data.
     */
    create: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>
    /**
     * In case the ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>
  }

  /**
   * ingredient delete
   */
  export type ingredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter which ingredient to delete.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient deleteMany
   */
  export type ingredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients to delete
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to delete.
     */
    limit?: number
  }

  /**
   * ingredient.pantry
   */
  export type ingredient$pantryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    where?: pantryWhereInput
    orderBy?: pantryOrderByWithRelationInput | pantryOrderByWithRelationInput[]
    cursor?: pantryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * ingredient.shoppingList
   */
  export type ingredient$shoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    where?: shoppingListWhereInput
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    cursor?: shoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ingredient.ingredients
   */
  export type ingredient$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * ingredient without action
   */
  export type ingredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
  }


  /**
   * Model pantry
   */

  export type AggregatePantry = {
    _count: PantryCountAggregateOutputType | null
    _avg: PantryAvgAggregateOutputType | null
    _sum: PantrySumAggregateOutputType | null
    _min: PantryMinAggregateOutputType | null
    _max: PantryMaxAggregateOutputType | null
  }

  export type PantryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
  }

  export type PantrySumAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
  }

  export type PantryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
    category: $Enums.ingredient_category | null
  }

  export type PantryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
    category: $Enums.ingredient_category | null
  }

  export type PantryCountAggregateOutputType = {
    id: number
    userId: number
    ingredientId: number
    category: number
    _all: number
  }


  export type PantryAvgAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
  }

  export type PantrySumAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
  }

  export type PantryMinAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    category?: true
  }

  export type PantryMaxAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    category?: true
  }

  export type PantryCountAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    category?: true
    _all?: true
  }

  export type PantryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pantry to aggregate.
     */
    where?: pantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pantries to fetch.
     */
    orderBy?: pantryOrderByWithRelationInput | pantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pantries
    **/
    _count?: true | PantryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PantryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PantrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryMaxAggregateInputType
  }

  export type GetPantryAggregateType<T extends PantryAggregateArgs> = {
        [P in keyof T & keyof AggregatePantry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantry[P]>
      : GetScalarType<T[P], AggregatePantry[P]>
  }




  export type pantryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pantryWhereInput
    orderBy?: pantryOrderByWithAggregationInput | pantryOrderByWithAggregationInput[]
    by: PantryScalarFieldEnum[] | PantryScalarFieldEnum
    having?: pantryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryCountAggregateInputType | true
    _avg?: PantryAvgAggregateInputType
    _sum?: PantrySumAggregateInputType
    _min?: PantryMinAggregateInputType
    _max?: PantryMaxAggregateInputType
  }

  export type PantryGroupByOutputType = {
    id: number
    userId: number
    ingredientId: number
    category: $Enums.ingredient_category | null
    _count: PantryCountAggregateOutputType | null
    _avg: PantryAvgAggregateOutputType | null
    _sum: PantrySumAggregateOutputType | null
    _min: PantryMinAggregateOutputType | null
    _max: PantryMaxAggregateOutputType | null
  }

  type GetPantryGroupByPayload<T extends pantryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryGroupByOutputType[P]>
            : GetScalarType<T[P], PantryGroupByOutputType[P]>
        }
      >
    >


  export type pantrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    category?: boolean
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantry"]>

  export type pantrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    category?: boolean
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantry"]>

  export type pantrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    category?: boolean
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantry"]>

  export type pantrySelectScalar = {
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    category?: boolean
  }

  export type pantryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ingredientId" | "category", ExtArgs["result"]["pantry"]>
  export type pantryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type pantryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type pantryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $pantryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pantry"
    objects: {
      ingredient: Prisma.$ingredientPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      ingredientId: number
      category: $Enums.ingredient_category | null
    }, ExtArgs["result"]["pantry"]>
    composites: {}
  }

  type pantryGetPayload<S extends boolean | null | undefined | pantryDefaultArgs> = $Result.GetResult<Prisma.$pantryPayload, S>

  type pantryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pantryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryCountAggregateInputType | true
    }

  export interface pantryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pantry'], meta: { name: 'pantry' } }
    /**
     * Find zero or one Pantry that matches the filter.
     * @param {pantryFindUniqueArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pantryFindUniqueArgs>(args: SelectSubset<T, pantryFindUniqueArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pantry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pantryFindUniqueOrThrowArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pantryFindUniqueOrThrowArgs>(args: SelectSubset<T, pantryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pantryFindFirstArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pantryFindFirstArgs>(args?: SelectSubset<T, pantryFindFirstArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pantryFindFirstOrThrowArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pantryFindFirstOrThrowArgs>(args?: SelectSubset<T, pantryFindFirstOrThrowArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pantries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pantryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pantries
     * const pantries = await prisma.pantry.findMany()
     * 
     * // Get first 10 Pantries
     * const pantries = await prisma.pantry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryWithIdOnly = await prisma.pantry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pantryFindManyArgs>(args?: SelectSubset<T, pantryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pantry.
     * @param {pantryCreateArgs} args - Arguments to create a Pantry.
     * @example
     * // Create one Pantry
     * const Pantry = await prisma.pantry.create({
     *   data: {
     *     // ... data to create a Pantry
     *   }
     * })
     * 
     */
    create<T extends pantryCreateArgs>(args: SelectSubset<T, pantryCreateArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pantries.
     * @param {pantryCreateManyArgs} args - Arguments to create many Pantries.
     * @example
     * // Create many Pantries
     * const pantry = await prisma.pantry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pantryCreateManyArgs>(args?: SelectSubset<T, pantryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pantries and returns the data saved in the database.
     * @param {pantryCreateManyAndReturnArgs} args - Arguments to create many Pantries.
     * @example
     * // Create many Pantries
     * const pantry = await prisma.pantry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pantries and only return the `id`
     * const pantryWithIdOnly = await prisma.pantry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pantryCreateManyAndReturnArgs>(args?: SelectSubset<T, pantryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pantry.
     * @param {pantryDeleteArgs} args - Arguments to delete one Pantry.
     * @example
     * // Delete one Pantry
     * const Pantry = await prisma.pantry.delete({
     *   where: {
     *     // ... filter to delete one Pantry
     *   }
     * })
     * 
     */
    delete<T extends pantryDeleteArgs>(args: SelectSubset<T, pantryDeleteArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pantry.
     * @param {pantryUpdateArgs} args - Arguments to update one Pantry.
     * @example
     * // Update one Pantry
     * const pantry = await prisma.pantry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pantryUpdateArgs>(args: SelectSubset<T, pantryUpdateArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pantries.
     * @param {pantryDeleteManyArgs} args - Arguments to filter Pantries to delete.
     * @example
     * // Delete a few Pantries
     * const { count } = await prisma.pantry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pantryDeleteManyArgs>(args?: SelectSubset<T, pantryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pantryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pantries
     * const pantry = await prisma.pantry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pantryUpdateManyArgs>(args: SelectSubset<T, pantryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantries and returns the data updated in the database.
     * @param {pantryUpdateManyAndReturnArgs} args - Arguments to update many Pantries.
     * @example
     * // Update many Pantries
     * const pantry = await prisma.pantry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pantries and only return the `id`
     * const pantryWithIdOnly = await prisma.pantry.updateManyAndReturn({
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
    updateManyAndReturn<T extends pantryUpdateManyAndReturnArgs>(args: SelectSubset<T, pantryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pantry.
     * @param {pantryUpsertArgs} args - Arguments to update or create a Pantry.
     * @example
     * // Update or create a Pantry
     * const pantry = await prisma.pantry.upsert({
     *   create: {
     *     // ... data to create a Pantry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pantry we want to update
     *   }
     * })
     */
    upsert<T extends pantryUpsertArgs>(args: SelectSubset<T, pantryUpsertArgs<ExtArgs>>): Prisma__pantryClient<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pantries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pantryCountArgs} args - Arguments to filter Pantries to count.
     * @example
     * // Count the number of Pantries
     * const count = await prisma.pantry.count({
     *   where: {
     *     // ... the filter for the Pantries we want to count
     *   }
     * })
    **/
    count<T extends pantryCountArgs>(
      args?: Subset<T, pantryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pantry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantryAggregateArgs>(args: Subset<T, PantryAggregateArgs>): Prisma.PrismaPromise<GetPantryAggregateType<T>>

    /**
     * Group by Pantry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pantryGroupByArgs} args - Group by arguments.
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
      T extends pantryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pantryGroupByArgs['orderBy'] }
        : { orderBy?: pantryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pantryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pantry model
   */
  readonly fields: pantryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pantry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pantryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends ingredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ingredientDefaultArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pantry model
   */
  interface pantryFieldRefs {
    readonly id: FieldRef<"pantry", 'Int'>
    readonly userId: FieldRef<"pantry", 'Int'>
    readonly ingredientId: FieldRef<"pantry", 'Int'>
    readonly category: FieldRef<"pantry", 'ingredient_category'>
  }
    

  // Custom InputTypes
  /**
   * pantry findUnique
   */
  export type pantryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * Filter, which pantry to fetch.
     */
    where: pantryWhereUniqueInput
  }

  /**
   * pantry findUniqueOrThrow
   */
  export type pantryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * Filter, which pantry to fetch.
     */
    where: pantryWhereUniqueInput
  }

  /**
   * pantry findFirst
   */
  export type pantryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * Filter, which pantry to fetch.
     */
    where?: pantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pantries to fetch.
     */
    orderBy?: pantryOrderByWithRelationInput | pantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pantries.
     */
    cursor?: pantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * pantry findFirstOrThrow
   */
  export type pantryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * Filter, which pantry to fetch.
     */
    where?: pantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pantries to fetch.
     */
    orderBy?: pantryOrderByWithRelationInput | pantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pantries.
     */
    cursor?: pantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * pantry findMany
   */
  export type pantryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * Filter, which pantries to fetch.
     */
    where?: pantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pantries to fetch.
     */
    orderBy?: pantryOrderByWithRelationInput | pantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pantries.
     */
    cursor?: pantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pantries.
     */
    skip?: number
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * pantry create
   */
  export type pantryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * The data needed to create a pantry.
     */
    data: XOR<pantryCreateInput, pantryUncheckedCreateInput>
  }

  /**
   * pantry createMany
   */
  export type pantryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pantries.
     */
    data: pantryCreateManyInput | pantryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pantry createManyAndReturn
   */
  export type pantryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * The data used to create many pantries.
     */
    data: pantryCreateManyInput | pantryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pantry update
   */
  export type pantryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * The data needed to update a pantry.
     */
    data: XOR<pantryUpdateInput, pantryUncheckedUpdateInput>
    /**
     * Choose, which pantry to update.
     */
    where: pantryWhereUniqueInput
  }

  /**
   * pantry updateMany
   */
  export type pantryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pantries.
     */
    data: XOR<pantryUpdateManyMutationInput, pantryUncheckedUpdateManyInput>
    /**
     * Filter which pantries to update
     */
    where?: pantryWhereInput
    /**
     * Limit how many pantries to update.
     */
    limit?: number
  }

  /**
   * pantry updateManyAndReturn
   */
  export type pantryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * The data used to update pantries.
     */
    data: XOR<pantryUpdateManyMutationInput, pantryUncheckedUpdateManyInput>
    /**
     * Filter which pantries to update
     */
    where?: pantryWhereInput
    /**
     * Limit how many pantries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pantry upsert
   */
  export type pantryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * The filter to search for the pantry to update in case it exists.
     */
    where: pantryWhereUniqueInput
    /**
     * In case the pantry found by the `where` argument doesn't exist, create a new pantry with this data.
     */
    create: XOR<pantryCreateInput, pantryUncheckedCreateInput>
    /**
     * In case the pantry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pantryUpdateInput, pantryUncheckedUpdateInput>
  }

  /**
   * pantry delete
   */
  export type pantryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    /**
     * Filter which pantry to delete.
     */
    where: pantryWhereUniqueInput
  }

  /**
   * pantry deleteMany
   */
  export type pantryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pantries to delete
     */
    where?: pantryWhereInput
    /**
     * Limit how many pantries to delete.
     */
    limit?: number
  }

  /**
   * pantry without action
   */
  export type pantryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
  }


  /**
   * Model user
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
    username: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    refreshToken: number
    avatar: number
    stats: number
    settings: number
    dietRestrictions: number
    dietPreferences: number
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
    username?: true
    email?: true
    password?: true
    refreshToken?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    refreshToken?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    refreshToken?: true
    avatar?: true
    stats?: true
    settings?: true
    dietRestrictions?: true
    dietPreferences?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
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
    username: string
    email: string
    password: string
    refreshToken: string | null
    avatar: string | null
    stats: JsonValue | null
    settings: JsonValue | null
    dietRestrictions: $Enums.diet_restriction[]
    dietPreferences: $Enums.diet_preference[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    avatar?: boolean
    stats?: boolean
    settings?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
    pantry?: boolean | user$pantryArgs<ExtArgs>
    shops?: boolean | user$shopsArgs<ExtArgs>
    shoppingList?: boolean | user$shoppingListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    avatar?: boolean
    stats?: boolean
    settings?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    avatar?: boolean
    stats?: boolean
    settings?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    avatar?: boolean
    stats?: boolean
    settings?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "refreshToken" | "avatar" | "stats" | "settings" | "dietRestrictions" | "dietPreferences", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pantry?: boolean | user$pantryArgs<ExtArgs>
    shops?: boolean | user$shopsArgs<ExtArgs>
    shoppingList?: boolean | user$shoppingListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      pantry: Prisma.$pantryPayload<ExtArgs>[]
      shops: Prisma.$shopPayload<ExtArgs>[]
      shoppingList: Prisma.$shoppingListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      refreshToken: string | null
      avatar: string | null
      stats: Prisma.JsonValue | null
      settings: Prisma.JsonValue | null
      dietRestrictions: $Enums.diet_restriction[]
      dietPreferences: $Enums.diet_preference[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pantry<T extends user$pantryArgs<ExtArgs> = {}>(args?: Subset<T, user$pantryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pantryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shops<T extends user$shopsArgs<ExtArgs> = {}>(args?: Subset<T, user$shopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingList<T extends user$shoppingListArgs<ExtArgs> = {}>(args?: Subset<T, user$shoppingListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly refreshToken: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly stats: FieldRef<"user", 'Json'>
    readonly settings: FieldRef<"user", 'Json'>
    readonly dietRestrictions: FieldRef<"user", 'diet_restriction[]'>
    readonly dietPreferences: FieldRef<"user", 'diet_preference[]'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.pantry
   */
  export type user$pantryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pantry
     */
    select?: pantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the pantry
     */
    omit?: pantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pantryInclude<ExtArgs> | null
    where?: pantryWhereInput
    orderBy?: pantryOrderByWithRelationInput | pantryOrderByWithRelationInput[]
    cursor?: pantryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * user.shops
   */
  export type user$shopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    where?: shopWhereInput
    orderBy?: shopOrderByWithRelationInput | shopOrderByWithRelationInput[]
    cursor?: shopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * user.shoppingList
   */
  export type user$shoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    where?: shoppingListWhereInput
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    cursor?: shoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    name: string | null
    name_normalized: string | null
    userId: number | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    name_normalized: string | null
    userId: number | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    name_normalized: number
    userId: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    name_normalized?: true
    userId?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    name_normalized?: true
    userId?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    name_normalized?: true
    userId?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shop to aggregate.
     */
    where?: shopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopOrderByWithRelationInput | shopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type shopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopWhereInput
    orderBy?: shopOrderByWithAggregationInput | shopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: shopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    name: string
    name_normalized: string | null
    userId: number
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends shopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type shopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    name_normalized?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    shoppingList?: boolean | shop$shoppingListArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type shopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    name_normalized?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type shopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    name_normalized?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type shopSelectScalar = {
    id?: boolean
    name?: boolean
    name_normalized?: boolean
    userId?: boolean
  }

  export type shopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "name_normalized" | "userId", ExtArgs["result"]["shop"]>
  export type shopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    shoppingList?: boolean | shop$shoppingListArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type shopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type shopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $shopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shop"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      shoppingList: Prisma.$shoppingListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      name_normalized: string | null
      userId: number
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type shopGetPayload<S extends boolean | null | undefined | shopDefaultArgs> = $Result.GetResult<Prisma.$shopPayload, S>

  type shopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface shopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shop'], meta: { name: 'shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {shopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shopFindUniqueArgs>(args: SelectSubset<T, shopFindUniqueArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shopFindUniqueOrThrowArgs>(args: SelectSubset<T, shopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shopFindFirstArgs>(args?: SelectSubset<T, shopFindFirstArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shopFindFirstOrThrowArgs>(args?: SelectSubset<T, shopFindFirstOrThrowArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shopFindManyArgs>(args?: SelectSubset<T, shopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {shopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends shopCreateArgs>(args: SelectSubset<T, shopCreateArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {shopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shopCreateManyArgs>(args?: SelectSubset<T, shopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {shopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shopCreateManyAndReturnArgs>(args?: SelectSubset<T, shopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {shopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends shopDeleteArgs>(args: SelectSubset<T, shopDeleteArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {shopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shopUpdateArgs>(args: SelectSubset<T, shopUpdateArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {shopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shopDeleteManyArgs>(args?: SelectSubset<T, shopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shopUpdateManyArgs>(args: SelectSubset<T, shopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {shopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
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
    updateManyAndReturn<T extends shopUpdateManyAndReturnArgs>(args: SelectSubset<T, shopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {shopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends shopUpsertArgs>(args: SelectSubset<T, shopUpsertArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends shopCountArgs>(
      args?: Subset<T, shopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopGroupByArgs} args - Group by arguments.
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
      T extends shopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shopGroupByArgs['orderBy'] }
        : { orderBy?: shopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shop model
   */
  readonly fields: shopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shoppingList<T extends shop$shoppingListArgs<ExtArgs> = {}>(args?: Subset<T, shop$shoppingListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the shop model
   */
  interface shopFieldRefs {
    readonly id: FieldRef<"shop", 'Int'>
    readonly name: FieldRef<"shop", 'String'>
    readonly name_normalized: FieldRef<"shop", 'String'>
    readonly userId: FieldRef<"shop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * shop findUnique
   */
  export type shopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * Filter, which shop to fetch.
     */
    where: shopWhereUniqueInput
  }

  /**
   * shop findUniqueOrThrow
   */
  export type shopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * Filter, which shop to fetch.
     */
    where: shopWhereUniqueInput
  }

  /**
   * shop findFirst
   */
  export type shopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * Filter, which shop to fetch.
     */
    where?: shopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopOrderByWithRelationInput | shopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shops.
     */
    cursor?: shopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * shop findFirstOrThrow
   */
  export type shopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * Filter, which shop to fetch.
     */
    where?: shopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopOrderByWithRelationInput | shopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shops.
     */
    cursor?: shopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * shop findMany
   */
  export type shopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * Filter, which shops to fetch.
     */
    where?: shopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopOrderByWithRelationInput | shopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shops.
     */
    cursor?: shopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * shop create
   */
  export type shopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * The data needed to create a shop.
     */
    data: XOR<shopCreateInput, shopUncheckedCreateInput>
  }

  /**
   * shop createMany
   */
  export type shopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shops.
     */
    data: shopCreateManyInput | shopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shop createManyAndReturn
   */
  export type shopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * The data used to create many shops.
     */
    data: shopCreateManyInput | shopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shop update
   */
  export type shopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * The data needed to update a shop.
     */
    data: XOR<shopUpdateInput, shopUncheckedUpdateInput>
    /**
     * Choose, which shop to update.
     */
    where: shopWhereUniqueInput
  }

  /**
   * shop updateMany
   */
  export type shopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shops.
     */
    data: XOR<shopUpdateManyMutationInput, shopUncheckedUpdateManyInput>
    /**
     * Filter which shops to update
     */
    where?: shopWhereInput
    /**
     * Limit how many shops to update.
     */
    limit?: number
  }

  /**
   * shop updateManyAndReturn
   */
  export type shopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * The data used to update shops.
     */
    data: XOR<shopUpdateManyMutationInput, shopUncheckedUpdateManyInput>
    /**
     * Filter which shops to update
     */
    where?: shopWhereInput
    /**
     * Limit how many shops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shop upsert
   */
  export type shopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * The filter to search for the shop to update in case it exists.
     */
    where: shopWhereUniqueInput
    /**
     * In case the shop found by the `where` argument doesn't exist, create a new shop with this data.
     */
    create: XOR<shopCreateInput, shopUncheckedCreateInput>
    /**
     * In case the shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shopUpdateInput, shopUncheckedUpdateInput>
  }

  /**
   * shop delete
   */
  export type shopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    /**
     * Filter which shop to delete.
     */
    where: shopWhereUniqueInput
  }

  /**
   * shop deleteMany
   */
  export type shopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shops to delete
     */
    where?: shopWhereInput
    /**
     * Limit how many shops to delete.
     */
    limit?: number
  }

  /**
   * shop.shoppingList
   */
  export type shop$shoppingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    where?: shoppingListWhereInput
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    cursor?: shoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shop without action
   */
  export type shopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
  }


  /**
   * Model shoppingList
   */

  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _avg: ShoppingListAvgAggregateOutputType | null
    _sum: ShoppingListSumAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
    shopId: number | null
  }

  export type ShoppingListSumAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
    shopId: number | null
  }

  export type ShoppingListMinAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
    shopId: number | null
    bought: boolean | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    ingredientId: number | null
    shopId: number | null
    bought: boolean | null
  }

  export type ShoppingListCountAggregateOutputType = {
    id: number
    userId: number
    ingredientId: number
    shopId: number
    bought: number
    _all: number
  }


  export type ShoppingListAvgAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    shopId?: true
  }

  export type ShoppingListSumAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    shopId?: true
  }

  export type ShoppingListMinAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    shopId?: true
    bought?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    shopId?: true
    bought?: true
  }

  export type ShoppingListCountAggregateInputType = {
    id?: true
    userId?: true
    ingredientId?: true
    shopId?: true
    bought?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shoppingList to aggregate.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type shoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shoppingListWhereInput
    orderBy?: shoppingListOrderByWithAggregationInput | shoppingListOrderByWithAggregationInput[]
    by: ShoppingListScalarFieldEnum[] | ShoppingListScalarFieldEnum
    having?: shoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _avg?: ShoppingListAvgAggregateInputType
    _sum?: ShoppingListSumAggregateInputType
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }

  export type ShoppingListGroupByOutputType = {
    id: number
    userId: number
    ingredientId: number
    shopId: number | null
    bought: boolean | null
    _count: ShoppingListCountAggregateOutputType | null
    _avg: ShoppingListAvgAggregateOutputType | null
    _sum: ShoppingListSumAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends shoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type shoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    shopId?: boolean
    bought?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    shop?: boolean | shoppingList$shopArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type shoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    shopId?: boolean
    bought?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    shop?: boolean | shoppingList$shopArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type shoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    shopId?: boolean
    bought?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    shop?: boolean | shoppingList$shopArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type shoppingListSelectScalar = {
    id?: boolean
    userId?: boolean
    ingredientId?: boolean
    shopId?: boolean
    bought?: boolean
  }

  export type shoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ingredientId" | "shopId" | "bought", ExtArgs["result"]["shoppingList"]>
  export type shoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    shop?: boolean | shoppingList$shopArgs<ExtArgs>
  }
  export type shoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    shop?: boolean | shoppingList$shopArgs<ExtArgs>
  }
  export type shoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
    shop?: boolean | shoppingList$shopArgs<ExtArgs>
  }

  export type $shoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shoppingList"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      ingredient: Prisma.$ingredientPayload<ExtArgs>
      shop: Prisma.$shopPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      ingredientId: number
      shopId: number | null
      bought: boolean | null
    }, ExtArgs["result"]["shoppingList"]>
    composites: {}
  }

  type shoppingListGetPayload<S extends boolean | null | undefined | shoppingListDefaultArgs> = $Result.GetResult<Prisma.$shoppingListPayload, S>

  type shoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListCountAggregateInputType | true
    }

  export interface shoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shoppingList'], meta: { name: 'shoppingList' } }
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {shoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shoppingListFindUniqueArgs>(args: SelectSubset<T, shoppingListFindUniqueArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shoppingListFindUniqueOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, shoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shoppingListFindFirstArgs>(args?: SelectSubset<T, shoppingListFindFirstArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListFindFirstOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, shoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shoppingListFindManyArgs>(args?: SelectSubset<T, shoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingList.
     * @param {shoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
     */
    create<T extends shoppingListCreateArgs>(args: SelectSubset<T, shoppingListCreateArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingLists.
     * @param {shoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shoppingListCreateManyArgs>(args?: SelectSubset<T, shoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingLists and returns the data saved in the database.
     * @param {shoppingListCreateManyAndReturnArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, shoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingList.
     * @param {shoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
     */
    delete<T extends shoppingListDeleteArgs>(args: SelectSubset<T, shoppingListDeleteArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingList.
     * @param {shoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shoppingListUpdateArgs>(args: SelectSubset<T, shoppingListUpdateArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingLists.
     * @param {shoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shoppingListDeleteManyArgs>(args?: SelectSubset<T, shoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shoppingListUpdateManyArgs>(args: SelectSubset<T, shoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists and returns the data updated in the database.
     * @param {shoppingListUpdateManyAndReturnArgs} args - Arguments to update many ShoppingLists.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.updateManyAndReturn({
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
    updateManyAndReturn<T extends shoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, shoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingList.
     * @param {shoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends shoppingListUpsertArgs>(args: SelectSubset<T, shoppingListUpsertArgs<ExtArgs>>): Prisma__shoppingListClient<$Result.GetResult<Prisma.$shoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends shoppingListCountArgs>(
      args?: Subset<T, shoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): Prisma.PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shoppingListGroupByArgs} args - Group by arguments.
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
      T extends shoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shoppingListGroupByArgs['orderBy'] }
        : { orderBy?: shoppingListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shoppingList model
   */
  readonly fields: shoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends ingredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ingredientDefaultArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends shoppingList$shopArgs<ExtArgs> = {}>(args?: Subset<T, shoppingList$shopArgs<ExtArgs>>): Prisma__shopClient<$Result.GetResult<Prisma.$shopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the shoppingList model
   */
  interface shoppingListFieldRefs {
    readonly id: FieldRef<"shoppingList", 'Int'>
    readonly userId: FieldRef<"shoppingList", 'Int'>
    readonly ingredientId: FieldRef<"shoppingList", 'Int'>
    readonly shopId: FieldRef<"shoppingList", 'Int'>
    readonly bought: FieldRef<"shoppingList", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * shoppingList findUnique
   */
  export type shoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList findUniqueOrThrow
   */
  export type shoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList findFirst
   */
  export type shoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shoppingLists.
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList findFirstOrThrow
   */
  export type shoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingList to fetch.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shoppingLists.
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList findMany
   */
  export type shoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter, which shoppingLists to fetch.
     */
    where?: shoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shoppingLists to fetch.
     */
    orderBy?: shoppingListOrderByWithRelationInput | shoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shoppingLists.
     */
    cursor?: shoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shoppingLists.
     */
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * shoppingList create
   */
  export type shoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a shoppingList.
     */
    data: XOR<shoppingListCreateInput, shoppingListUncheckedCreateInput>
  }

  /**
   * shoppingList createMany
   */
  export type shoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shoppingLists.
     */
    data: shoppingListCreateManyInput | shoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shoppingList createManyAndReturn
   */
  export type shoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many shoppingLists.
     */
    data: shoppingListCreateManyInput | shoppingListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shoppingList update
   */
  export type shoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a shoppingList.
     */
    data: XOR<shoppingListUpdateInput, shoppingListUncheckedUpdateInput>
    /**
     * Choose, which shoppingList to update.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList updateMany
   */
  export type shoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shoppingLists.
     */
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyInput>
    /**
     * Filter which shoppingLists to update
     */
    where?: shoppingListWhereInput
    /**
     * Limit how many shoppingLists to update.
     */
    limit?: number
  }

  /**
   * shoppingList updateManyAndReturn
   */
  export type shoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * The data used to update shoppingLists.
     */
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyInput>
    /**
     * Filter which shoppingLists to update
     */
    where?: shoppingListWhereInput
    /**
     * Limit how many shoppingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shoppingList upsert
   */
  export type shoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the shoppingList to update in case it exists.
     */
    where: shoppingListWhereUniqueInput
    /**
     * In case the shoppingList found by the `where` argument doesn't exist, create a new shoppingList with this data.
     */
    create: XOR<shoppingListCreateInput, shoppingListUncheckedCreateInput>
    /**
     * In case the shoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shoppingListUpdateInput, shoppingListUncheckedUpdateInput>
  }

  /**
   * shoppingList delete
   */
  export type shoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
    /**
     * Filter which shoppingList to delete.
     */
    where: shoppingListWhereUniqueInput
  }

  /**
   * shoppingList deleteMany
   */
  export type shoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shoppingLists to delete
     */
    where?: shoppingListWhereInput
    /**
     * Limit how many shoppingLists to delete.
     */
    limit?: number
  }

  /**
   * shoppingList.shop
   */
  export type shoppingList$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shop
     */
    select?: shopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shop
     */
    omit?: shopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopInclude<ExtArgs> | null
    where?: shopWhereInput
  }

  /**
   * shoppingList without action
   */
  export type shoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shoppingList
     */
    select?: shoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shoppingList
     */
    omit?: shoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shoppingListInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
    preparationTime: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
    preparationTime: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    preparationTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    preparationTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    preparationSteps: number
    preparationTime: number
    dietRestrictions: number
    dietPreferences: number
    nutritionInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
    preparationTime?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
    preparationTime?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    preparationTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    preparationTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    preparationSteps?: true
    preparationTime?: true
    dietRestrictions?: true
    dietPreferences?: true
    nutritionInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    preparationSteps: string[]
    preparationTime: number | null
    dietRestrictions: $Enums.diet_restriction[]
    dietPreferences: $Enums.diet_preference[]
    nutritionInfo: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    preparationSteps?: boolean
    preparationTime?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
    nutritionInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    preparationSteps?: boolean
    preparationTime?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
    nutritionInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    preparationSteps?: boolean
    preparationTime?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
    nutritionInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    preparationSteps?: boolean
    preparationTime?: boolean
    dietRestrictions?: boolean
    dietPreferences?: boolean
    nutritionInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "preparationSteps" | "preparationTime" | "dietRestrictions" | "dietPreferences" | "nutritionInfo" | "createdAt" | "updatedAt", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      ingredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      preparationSteps: string[]
      preparationTime: number | null
      dietRestrictions: $Enums.diet_restriction[]
      dietPreferences: $Enums.diet_preference[]
      nutritionInfo: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'Int'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly preparationSteps: FieldRef<"Recipe", 'String[]'>
    readonly preparationTime: FieldRef<"Recipe", 'Int'>
    readonly dietRestrictions: FieldRef<"Recipe", 'diet_restriction[]'>
    readonly dietPreferences: FieldRef<"Recipe", 'diet_preference[]'>
    readonly nutritionInfo: FieldRef<"Recipe", 'Json'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredient
   */

  export type AggregateRecipeIngredient = {
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  export type RecipeIngredientAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type RecipeIngredientSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    quantity: number | null
  }

  export type RecipeIngredientMinAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    quantity: number | null
    unit: string | null
  }

  export type RecipeIngredientMaxAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    quantity: number | null
    unit: string | null
  }

  export type RecipeIngredientCountAggregateOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    quantity: number
    unit: number
    _all: number
  }


  export type RecipeIngredientAvgAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
  }

  export type RecipeIngredientSumAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
  }

  export type RecipeIngredientMinAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
  }

  export type RecipeIngredientMaxAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
  }

  export type RecipeIngredientCountAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    _all?: true
  }

  export type RecipeIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredient to aggregate.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type GetRecipeIngredientAggregateType<T extends RecipeIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredient[P]>
      : GetScalarType<T[P], AggregateRecipeIngredient[P]>
  }




  export type RecipeIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithAggregationInput | RecipeIngredientOrderByWithAggregationInput[]
    by: RecipeIngredientScalarFieldEnum[] | RecipeIngredientScalarFieldEnum
    having?: RecipeIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientCountAggregateInputType | true
    _avg?: RecipeIngredientAvgAggregateInputType
    _sum?: RecipeIngredientSumAggregateInputType
    _min?: RecipeIngredientMinAggregateInputType
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type RecipeIngredientGroupByOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    quantity: number | null
    unit: string | null
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  type GetRecipeIngredientGroupByPayload<T extends RecipeIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectScalar = {
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
  }

  export type RecipeIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "ingredientId" | "quantity" | "unit", ExtArgs["result"]["recipeIngredient"]>
  export type RecipeIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | ingredientDefaultArgs<ExtArgs>
  }

  export type $RecipeIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredient"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$ingredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipeId: number
      ingredientId: number
      quantity: number | null
      unit: string | null
    }, ExtArgs["result"]["recipeIngredient"]>
    composites: {}
  }

  type RecipeIngredientGetPayload<S extends boolean | null | undefined | RecipeIngredientDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientPayload, S>

  type RecipeIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeIngredientCountAggregateInputType | true
    }

  export interface RecipeIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredient'], meta: { name: 'RecipeIngredient' } }
    /**
     * Find zero or one RecipeIngredient that matches the filter.
     * @param {RecipeIngredientFindUniqueArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeIngredientFindUniqueArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeIngredientFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeIngredientFindFirstArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeIngredientFindManyArgs>(args?: SelectSubset<T, RecipeIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeIngredient.
     * @param {RecipeIngredientCreateArgs} args - Arguments to create a RecipeIngredient.
     * @example
     * // Create one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.create({
     *   data: {
     *     // ... data to create a RecipeIngredient
     *   }
     * })
     * 
     */
    create<T extends RecipeIngredientCreateArgs>(args: SelectSubset<T, RecipeIngredientCreateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeIngredients.
     * @param {RecipeIngredientCreateManyArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeIngredientCreateManyArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeIngredients and returns the data saved in the database.
     * @param {RecipeIngredientCreateManyAndReturnArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeIngredient.
     * @param {RecipeIngredientDeleteArgs} args - Arguments to delete one RecipeIngredient.
     * @example
     * // Delete one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredient
     *   }
     * })
     * 
     */
    delete<T extends RecipeIngredientDeleteArgs>(args: SelectSubset<T, RecipeIngredientDeleteArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeIngredient.
     * @param {RecipeIngredientUpdateArgs} args - Arguments to update one RecipeIngredient.
     * @example
     * // Update one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeIngredientUpdateArgs>(args: SelectSubset<T, RecipeIngredientUpdateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeIngredientDeleteManyArgs>(args?: SelectSubset<T, RecipeIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeIngredientUpdateManyArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients and returns the data updated in the database.
     * @param {RecipeIngredientUpdateManyAndReturnArgs} args - Arguments to update many RecipeIngredients.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeIngredient.
     * @param {RecipeIngredientUpsertArgs} args - Arguments to update or create a RecipeIngredient.
     * @example
     * // Update or create a RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredient we want to update
     *   }
     * })
     */
    upsert<T extends RecipeIngredientUpsertArgs>(args: SelectSubset<T, RecipeIngredientUpsertArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredient.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientCountArgs>(
      args?: Subset<T, RecipeIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeIngredientAggregateArgs>(args: Subset<T, RecipeIngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientAggregateType<T>>

    /**
     * Group by RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientGroupByArgs} args - Group by arguments.
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
      T extends RecipeIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredient model
   */
  readonly fields: RecipeIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends ingredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ingredientDefaultArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecipeIngredient model
   */
  interface RecipeIngredientFieldRefs {
    readonly id: FieldRef<"RecipeIngredient", 'Int'>
    readonly recipeId: FieldRef<"RecipeIngredient", 'Int'>
    readonly ingredientId: FieldRef<"RecipeIngredient", 'Int'>
    readonly quantity: FieldRef<"RecipeIngredient", 'Float'>
    readonly unit: FieldRef<"RecipeIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredient findUnique
   */
  export type RecipeIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findUniqueOrThrow
   */
  export type RecipeIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findFirst
   */
  export type RecipeIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findFirstOrThrow
   */
  export type RecipeIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findMany
   */
  export type RecipeIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient create
   */
  export type RecipeIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredient.
     */
    data: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
  }

  /**
   * RecipeIngredient createMany
   */
  export type RecipeIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredient createManyAndReturn
   */
  export type RecipeIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient update
   */
  export type RecipeIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredient.
     */
    data: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredient to update.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient updateMany
   */
  export type RecipeIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
  }

  /**
   * RecipeIngredient updateManyAndReturn
   */
  export type RecipeIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient upsert
   */
  export type RecipeIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredient to update in case it exists.
     */
    where: RecipeIngredientWhereUniqueInput
    /**
     * In case the RecipeIngredient found by the `where` argument doesn't exist, create a new RecipeIngredient with this data.
     */
    create: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
    /**
     * In case the RecipeIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
  }

  /**
   * RecipeIngredient delete
   */
  export type RecipeIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredient to delete.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient deleteMany
   */
  export type RecipeIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to delete.
     */
    limit?: number
  }

  /**
   * RecipeIngredient without action
   */
  export type RecipeIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
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


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const PantryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ingredientId: 'ingredientId',
    category: 'category'
  };

  export type PantryScalarFieldEnum = (typeof PantryScalarFieldEnum)[keyof typeof PantryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    refreshToken: 'refreshToken',
    avatar: 'avatar',
    stats: 'stats',
    settings: 'settings',
    dietRestrictions: 'dietRestrictions',
    dietPreferences: 'dietPreferences'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    name_normalized: 'name_normalized',
    userId: 'userId'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ingredientId: 'ingredientId',
    shopId: 'shopId',
    bought: 'bought'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    preparationSteps: 'preparationSteps',
    preparationTime: 'preparationTime',
    dietRestrictions: 'dietRestrictions',
    dietPreferences: 'dietPreferences',
    nutritionInfo: 'nutritionInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const RecipeIngredientScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    unit: 'unit'
  };

  export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'ingredient_category'
   */
  export type Enumingredient_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ingredient_category'>
    


  /**
   * Reference to a field of type 'ingredient_category[]'
   */
  export type ListEnumingredient_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ingredient_category[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'diet_restriction[]'
   */
  export type ListEnumdiet_restrictionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'diet_restriction[]'>
    


  /**
   * Reference to a field of type 'diet_restriction'
   */
  export type Enumdiet_restrictionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'diet_restriction'>
    


  /**
   * Reference to a field of type 'diet_preference[]'
   */
  export type ListEnumdiet_preferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'diet_preference[]'>
    


  /**
   * Reference to a field of type 'diet_preference'
   */
  export type Enumdiet_preferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'diet_preference'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ingredientWhereInput = {
    AND?: ingredientWhereInput | ingredientWhereInput[]
    OR?: ingredientWhereInput[]
    NOT?: ingredientWhereInput | ingredientWhereInput[]
    id?: IntFilter<"ingredient"> | number
    name?: StringFilter<"ingredient"> | string
    category?: Enumingredient_categoryNullableFilter<"ingredient"> | $Enums.ingredient_category | null
    pantry?: PantryListRelationFilter
    shoppingList?: ShoppingListListRelationFilter
    ingredients?: RecipeIngredientListRelationFilter
  }

  export type ingredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    pantry?: pantryOrderByRelationAggregateInput
    shoppingList?: shoppingListOrderByRelationAggregateInput
    ingredients?: RecipeIngredientOrderByRelationAggregateInput
  }

  export type ingredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ingredientWhereInput | ingredientWhereInput[]
    OR?: ingredientWhereInput[]
    NOT?: ingredientWhereInput | ingredientWhereInput[]
    name?: StringFilter<"ingredient"> | string
    category?: Enumingredient_categoryNullableFilter<"ingredient"> | $Enums.ingredient_category | null
    pantry?: PantryListRelationFilter
    shoppingList?: ShoppingListListRelationFilter
    ingredients?: RecipeIngredientListRelationFilter
  }, "id">

  export type ingredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: ingredientCountOrderByAggregateInput
    _avg?: ingredientAvgOrderByAggregateInput
    _max?: ingredientMaxOrderByAggregateInput
    _min?: ingredientMinOrderByAggregateInput
    _sum?: ingredientSumOrderByAggregateInput
  }

  export type ingredientScalarWhereWithAggregatesInput = {
    AND?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[]
    OR?: ingredientScalarWhereWithAggregatesInput[]
    NOT?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ingredient"> | number
    name?: StringWithAggregatesFilter<"ingredient"> | string
    category?: Enumingredient_categoryNullableWithAggregatesFilter<"ingredient"> | $Enums.ingredient_category | null
  }

  export type pantryWhereInput = {
    AND?: pantryWhereInput | pantryWhereInput[]
    OR?: pantryWhereInput[]
    NOT?: pantryWhereInput | pantryWhereInput[]
    id?: IntFilter<"pantry"> | number
    userId?: IntFilter<"pantry"> | number
    ingredientId?: IntFilter<"pantry"> | number
    category?: Enumingredient_categoryNullableFilter<"pantry"> | $Enums.ingredient_category | null
    ingredient?: XOR<IngredientScalarRelationFilter, ingredientWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type pantryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    category?: SortOrderInput | SortOrder
    ingredient?: ingredientOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type pantryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pantryWhereInput | pantryWhereInput[]
    OR?: pantryWhereInput[]
    NOT?: pantryWhereInput | pantryWhereInput[]
    userId?: IntFilter<"pantry"> | number
    ingredientId?: IntFilter<"pantry"> | number
    category?: Enumingredient_categoryNullableFilter<"pantry"> | $Enums.ingredient_category | null
    ingredient?: XOR<IngredientScalarRelationFilter, ingredientWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type pantryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: pantryCountOrderByAggregateInput
    _avg?: pantryAvgOrderByAggregateInput
    _max?: pantryMaxOrderByAggregateInput
    _min?: pantryMinOrderByAggregateInput
    _sum?: pantrySumOrderByAggregateInput
  }

  export type pantryScalarWhereWithAggregatesInput = {
    AND?: pantryScalarWhereWithAggregatesInput | pantryScalarWhereWithAggregatesInput[]
    OR?: pantryScalarWhereWithAggregatesInput[]
    NOT?: pantryScalarWhereWithAggregatesInput | pantryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pantry"> | number
    userId?: IntWithAggregatesFilter<"pantry"> | number
    ingredientId?: IntWithAggregatesFilter<"pantry"> | number
    category?: Enumingredient_categoryNullableWithAggregatesFilter<"pantry"> | $Enums.ingredient_category | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    refreshToken?: StringNullableFilter<"user"> | string | null
    avatar?: StringNullableFilter<"user"> | string | null
    stats?: JsonNullableFilter<"user">
    settings?: JsonNullableFilter<"user">
    dietRestrictions?: Enumdiet_restrictionNullableListFilter<"user">
    dietPreferences?: Enumdiet_preferenceNullableListFilter<"user">
    pantry?: PantryListRelationFilter
    shops?: ShopListRelationFilter
    shoppingList?: ShoppingListListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    stats?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    dietRestrictions?: SortOrder
    dietPreferences?: SortOrder
    pantry?: pantryOrderByRelationAggregateInput
    shops?: shopOrderByRelationAggregateInput
    shoppingList?: shoppingListOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    refreshToken?: StringNullableFilter<"user"> | string | null
    avatar?: StringNullableFilter<"user"> | string | null
    stats?: JsonNullableFilter<"user">
    settings?: JsonNullableFilter<"user">
    dietRestrictions?: Enumdiet_restrictionNullableListFilter<"user">
    dietPreferences?: Enumdiet_preferenceNullableListFilter<"user">
    pantry?: PantryListRelationFilter
    shops?: ShopListRelationFilter
    shoppingList?: ShoppingListListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    stats?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    dietRestrictions?: SortOrder
    dietPreferences?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    stats?: JsonNullableWithAggregatesFilter<"user">
    settings?: JsonNullableWithAggregatesFilter<"user">
    dietRestrictions?: Enumdiet_restrictionNullableListFilter<"user">
    dietPreferences?: Enumdiet_preferenceNullableListFilter<"user">
  }

  export type shopWhereInput = {
    AND?: shopWhereInput | shopWhereInput[]
    OR?: shopWhereInput[]
    NOT?: shopWhereInput | shopWhereInput[]
    id?: IntFilter<"shop"> | number
    name?: StringFilter<"shop"> | string
    name_normalized?: StringNullableFilter<"shop"> | string | null
    userId?: IntFilter<"shop"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    shoppingList?: ShoppingListListRelationFilter
  }

  export type shopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    name_normalized?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: userOrderByWithRelationInput
    shoppingList?: shoppingListOrderByRelationAggregateInput
  }

  export type shopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name_normalized?: shopUserIdName_normalizedCompoundUniqueInput
    AND?: shopWhereInput | shopWhereInput[]
    OR?: shopWhereInput[]
    NOT?: shopWhereInput | shopWhereInput[]
    name?: StringFilter<"shop"> | string
    name_normalized?: StringNullableFilter<"shop"> | string | null
    userId?: IntFilter<"shop"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    shoppingList?: ShoppingListListRelationFilter
  }, "id" | "userId_name_normalized">

  export type shopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    name_normalized?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: shopCountOrderByAggregateInput
    _avg?: shopAvgOrderByAggregateInput
    _max?: shopMaxOrderByAggregateInput
    _min?: shopMinOrderByAggregateInput
    _sum?: shopSumOrderByAggregateInput
  }

  export type shopScalarWhereWithAggregatesInput = {
    AND?: shopScalarWhereWithAggregatesInput | shopScalarWhereWithAggregatesInput[]
    OR?: shopScalarWhereWithAggregatesInput[]
    NOT?: shopScalarWhereWithAggregatesInput | shopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shop"> | number
    name?: StringWithAggregatesFilter<"shop"> | string
    name_normalized?: StringNullableWithAggregatesFilter<"shop"> | string | null
    userId?: IntWithAggregatesFilter<"shop"> | number
  }

  export type shoppingListWhereInput = {
    AND?: shoppingListWhereInput | shoppingListWhereInput[]
    OR?: shoppingListWhereInput[]
    NOT?: shoppingListWhereInput | shoppingListWhereInput[]
    id?: IntFilter<"shoppingList"> | number
    userId?: IntFilter<"shoppingList"> | number
    ingredientId?: IntFilter<"shoppingList"> | number
    shopId?: IntNullableFilter<"shoppingList"> | number | null
    bought?: BoolNullableFilter<"shoppingList"> | boolean | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, ingredientWhereInput>
    shop?: XOR<ShopNullableScalarRelationFilter, shopWhereInput> | null
  }

  export type shoppingListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    bought?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    ingredient?: ingredientOrderByWithRelationInput
    shop?: shopOrderByWithRelationInput
  }

  export type shoppingListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_ingredientId?: shoppingListUserIdIngredientIdCompoundUniqueInput
    AND?: shoppingListWhereInput | shoppingListWhereInput[]
    OR?: shoppingListWhereInput[]
    NOT?: shoppingListWhereInput | shoppingListWhereInput[]
    userId?: IntFilter<"shoppingList"> | number
    ingredientId?: IntFilter<"shoppingList"> | number
    shopId?: IntNullableFilter<"shoppingList"> | number | null
    bought?: BoolNullableFilter<"shoppingList"> | boolean | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, ingredientWhereInput>
    shop?: XOR<ShopNullableScalarRelationFilter, shopWhereInput> | null
  }, "id" | "userId_ingredientId">

  export type shoppingListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    bought?: SortOrderInput | SortOrder
    _count?: shoppingListCountOrderByAggregateInput
    _avg?: shoppingListAvgOrderByAggregateInput
    _max?: shoppingListMaxOrderByAggregateInput
    _min?: shoppingListMinOrderByAggregateInput
    _sum?: shoppingListSumOrderByAggregateInput
  }

  export type shoppingListScalarWhereWithAggregatesInput = {
    AND?: shoppingListScalarWhereWithAggregatesInput | shoppingListScalarWhereWithAggregatesInput[]
    OR?: shoppingListScalarWhereWithAggregatesInput[]
    NOT?: shoppingListScalarWhereWithAggregatesInput | shoppingListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shoppingList"> | number
    userId?: IntWithAggregatesFilter<"shoppingList"> | number
    ingredientId?: IntWithAggregatesFilter<"shoppingList"> | number
    shopId?: IntNullableWithAggregatesFilter<"shoppingList"> | number | null
    bought?: BoolNullableWithAggregatesFilter<"shoppingList"> | boolean | null
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: IntFilter<"Recipe"> | number
    name?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    preparationSteps?: StringNullableListFilter<"Recipe">
    preparationTime?: IntNullableFilter<"Recipe"> | number | null
    dietRestrictions?: Enumdiet_restrictionNullableListFilter<"Recipe">
    dietPreferences?: Enumdiet_preferenceNullableListFilter<"Recipe">
    nutritionInfo?: JsonNullableFilter<"Recipe">
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    ingredients?: RecipeIngredientListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    preparationSteps?: SortOrder
    preparationTime?: SortOrderInput | SortOrder
    dietRestrictions?: SortOrder
    dietPreferences?: SortOrder
    nutritionInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ingredients?: RecipeIngredientOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    preparationSteps?: StringNullableListFilter<"Recipe">
    preparationTime?: IntNullableFilter<"Recipe"> | number | null
    dietRestrictions?: Enumdiet_restrictionNullableListFilter<"Recipe">
    dietPreferences?: Enumdiet_preferenceNullableListFilter<"Recipe">
    nutritionInfo?: JsonNullableFilter<"Recipe">
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    ingredients?: RecipeIngredientListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    preparationSteps?: SortOrder
    preparationTime?: SortOrderInput | SortOrder
    dietRestrictions?: SortOrder
    dietPreferences?: SortOrder
    nutritionInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe"> | number
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    preparationSteps?: StringNullableListFilter<"Recipe">
    preparationTime?: IntNullableWithAggregatesFilter<"Recipe"> | number | null
    dietRestrictions?: Enumdiet_restrictionNullableListFilter<"Recipe">
    dietPreferences?: Enumdiet_preferenceNullableListFilter<"Recipe">
    nutritionInfo?: JsonNullableWithAggregatesFilter<"Recipe">
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type RecipeIngredientWhereInput = {
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    id?: IntFilter<"RecipeIngredient"> | number
    recipeId?: IntFilter<"RecipeIngredient"> | number
    ingredientId?: IntFilter<"RecipeIngredient"> | number
    quantity?: FloatNullableFilter<"RecipeIngredient"> | number | null
    unit?: StringNullableFilter<"RecipeIngredient"> | string | null
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, ingredientWhereInput>
  }

  export type RecipeIngredientOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredient?: ingredientOrderByWithRelationInput
  }

  export type RecipeIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    recipeId_ingredientId?: RecipeIngredientRecipeIdIngredientIdCompoundUniqueInput
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    recipeId?: IntFilter<"RecipeIngredient"> | number
    ingredientId?: IntFilter<"RecipeIngredient"> | number
    quantity?: FloatNullableFilter<"RecipeIngredient"> | number | null
    unit?: StringNullableFilter<"RecipeIngredient"> | string | null
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, ingredientWhereInput>
  }, "id" | "recipeId_ingredientId">

  export type RecipeIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    _count?: RecipeIngredientCountOrderByAggregateInput
    _avg?: RecipeIngredientAvgOrderByAggregateInput
    _max?: RecipeIngredientMaxOrderByAggregateInput
    _min?: RecipeIngredientMinOrderByAggregateInput
    _sum?: RecipeIngredientSumOrderByAggregateInput
  }

  export type RecipeIngredientScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    recipeId?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    ingredientId?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    quantity?: FloatNullableWithAggregatesFilter<"RecipeIngredient"> | number | null
    unit?: StringNullableWithAggregatesFilter<"RecipeIngredient"> | string | null
  }

  export type ingredientCreateInput = {
    name: string
    category?: $Enums.ingredient_category | null
    pantry?: pantryCreateNestedManyWithoutIngredientInput
    shoppingList?: shoppingListCreateNestedManyWithoutIngredientInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput
  }

  export type ingredientUncheckedCreateInput = {
    id?: number
    name: string
    category?: $Enums.ingredient_category | null
    pantry?: pantryUncheckedCreateNestedManyWithoutIngredientInput
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutIngredientInput
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type ingredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    pantry?: pantryUpdateManyWithoutIngredientNestedInput
    shoppingList?: shoppingListUpdateManyWithoutIngredientNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    pantry?: pantryUncheckedUpdateManyWithoutIngredientNestedInput
    shoppingList?: shoppingListUncheckedUpdateManyWithoutIngredientNestedInput
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type ingredientCreateManyInput = {
    id?: number
    name: string
    category?: $Enums.ingredient_category | null
  }

  export type ingredientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type ingredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type pantryCreateInput = {
    category?: $Enums.ingredient_category | null
    ingredient: ingredientCreateNestedOneWithoutPantryInput
    user: userCreateNestedOneWithoutPantryInput
  }

  export type pantryUncheckedCreateInput = {
    id?: number
    userId: number
    ingredientId: number
    category?: $Enums.ingredient_category | null
  }

  export type pantryUpdateInput = {
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    ingredient?: ingredientUpdateOneRequiredWithoutPantryNestedInput
    user?: userUpdateOneRequiredWithoutPantryNestedInput
  }

  export type pantryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type pantryCreateManyInput = {
    id?: number
    userId: number
    ingredientId: number
    category?: $Enums.ingredient_category | null
  }

  export type pantryUpdateManyMutationInput = {
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type pantryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryCreateNestedManyWithoutUserInput
    shops?: shopCreateNestedManyWithoutUserInput
    shoppingList?: shoppingListCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUncheckedCreateNestedManyWithoutUserInput
    shops?: shopUncheckedCreateNestedManyWithoutUserInput
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUpdateManyWithoutUserNestedInput
    shops?: shopUpdateManyWithoutUserNestedInput
    shoppingList?: shoppingListUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUncheckedUpdateManyWithoutUserNestedInput
    shops?: shopUncheckedUpdateManyWithoutUserNestedInput
    shoppingList?: shoppingListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
  }

  export type shopCreateInput = {
    name: string
    name_normalized?: string | null
    user: userCreateNestedOneWithoutShopsInput
    shoppingList?: shoppingListCreateNestedManyWithoutShopInput
  }

  export type shopUncheckedCreateInput = {
    id?: number
    name: string
    name_normalized?: string | null
    userId: number
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutShopInput
  }

  export type shopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutShopsNestedInput
    shoppingList?: shoppingListUpdateManyWithoutShopNestedInput
  }

  export type shopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    shoppingList?: shoppingListUncheckedUpdateManyWithoutShopNestedInput
  }

  export type shopCreateManyInput = {
    id?: number
    name: string
    name_normalized?: string | null
    userId: number
  }

  export type shopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type shoppingListCreateInput = {
    bought?: boolean | null
    user: userCreateNestedOneWithoutShoppingListInput
    ingredient: ingredientCreateNestedOneWithoutShoppingListInput
    shop?: shopCreateNestedOneWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateInput = {
    id?: number
    userId: number
    ingredientId: number
    shopId?: number | null
    bought?: boolean | null
  }

  export type shoppingListUpdateInput = {
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: userUpdateOneRequiredWithoutShoppingListNestedInput
    ingredient?: ingredientUpdateOneRequiredWithoutShoppingListNestedInput
    shop?: shopUpdateOneWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type shoppingListCreateManyInput = {
    id?: number
    userId: number
    ingredientId: number
    shopId?: number | null
    bought?: boolean | null
  }

  export type shoppingListUpdateManyMutationInput = {
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type shoppingListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RecipeCreateInput = {
    name: string
    description?: string | null
    preparationSteps?: RecipeCreatepreparationStepsInput | string[]
    preparationTime?: number | null
    dietRestrictions?: RecipeCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeCreatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    preparationSteps?: RecipeCreatepreparationStepsInput | string[]
    preparationTime?: number | null
    dietRestrictions?: RecipeCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeCreatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preparationSteps?: RecipeUpdatepreparationStepsInput | string[]
    preparationTime?: NullableIntFieldUpdateOperationsInput | number | null
    dietRestrictions?: RecipeUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeUpdatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preparationSteps?: RecipeUpdatepreparationStepsInput | string[]
    preparationTime?: NullableIntFieldUpdateOperationsInput | number | null
    dietRestrictions?: RecipeUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeUpdatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    preparationSteps?: RecipeCreatepreparationStepsInput | string[]
    preparationTime?: number | null
    dietRestrictions?: RecipeCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeCreatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preparationSteps?: RecipeUpdatepreparationStepsInput | string[]
    preparationTime?: NullableIntFieldUpdateOperationsInput | number | null
    dietRestrictions?: RecipeUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeUpdatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preparationSteps?: RecipeUpdatepreparationStepsInput | string[]
    preparationTime?: NullableIntFieldUpdateOperationsInput | number | null
    dietRestrictions?: RecipeUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeUpdatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateInput = {
    quantity?: number | null
    unit?: string | null
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    ingredient: ingredientCreateNestedOneWithoutIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateInput = {
    id?: number
    recipeId: number
    ingredientId: number
    quantity?: number | null
    unit?: string | null
  }

  export type RecipeIngredientUpdateInput = {
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: ingredientUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientCreateManyInput = {
    id?: number
    recipeId: number
    ingredientId: number
    quantity?: number | null
    unit?: string | null
  }

  export type RecipeIngredientUpdateManyMutationInput = {
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type Enumingredient_categoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ingredient_category | Enumingredient_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumingredient_categoryNullableFilter<$PrismaModel> | $Enums.ingredient_category | null
  }

  export type PantryListRelationFilter = {
    every?: pantryWhereInput
    some?: pantryWhereInput
    none?: pantryWhereInput
  }

  export type ShoppingListListRelationFilter = {
    every?: shoppingListWhereInput
    some?: shoppingListWhereInput
    none?: shoppingListWhereInput
  }

  export type RecipeIngredientListRelationFilter = {
    every?: RecipeIngredientWhereInput
    some?: RecipeIngredientWhereInput
    none?: RecipeIngredientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pantryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shoppingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ingredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ingredientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ingredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ingredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ingredientSumOrderByAggregateInput = {
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

  export type Enumingredient_categoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ingredient_category | Enumingredient_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumingredient_categoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ingredient_category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumingredient_categoryNullableFilter<$PrismaModel>
    _max?: NestedEnumingredient_categoryNullableFilter<$PrismaModel>
  }

  export type IngredientScalarRelationFilter = {
    is?: ingredientWhereInput
    isNot?: ingredientWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type pantryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    category?: SortOrder
  }

  export type pantryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
  }

  export type pantryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    category?: SortOrder
  }

  export type pantryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    category?: SortOrder
  }

  export type pantrySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Enumdiet_restrictionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.diet_restriction[] | ListEnumdiet_restrictionFieldRefInput<$PrismaModel> | null
    has?: $Enums.diet_restriction | Enumdiet_restrictionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.diet_restriction[] | ListEnumdiet_restrictionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.diet_restriction[] | ListEnumdiet_restrictionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Enumdiet_preferenceNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.diet_preference[] | ListEnumdiet_preferenceFieldRefInput<$PrismaModel> | null
    has?: $Enums.diet_preference | Enumdiet_preferenceFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.diet_preference[] | ListEnumdiet_preferenceFieldRefInput<$PrismaModel>
    hasSome?: $Enums.diet_preference[] | ListEnumdiet_preferenceFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ShopListRelationFilter = {
    every?: shopWhereInput
    some?: shopWhereInput
    none?: shopWhereInput
  }

  export type shopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    avatar?: SortOrder
    stats?: SortOrder
    settings?: SortOrder
    dietRestrictions?: SortOrder
    dietPreferences?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    avatar?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    avatar?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type shopUserIdName_normalizedCompoundUniqueInput = {
    userId: number
    name_normalized: string
  }

  export type shopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_normalized?: SortOrder
    userId?: SortOrder
  }

  export type shopAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type shopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_normalized?: SortOrder
    userId?: SortOrder
  }

  export type shopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    name_normalized?: SortOrder
    userId?: SortOrder
  }

  export type shopSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ShopNullableScalarRelationFilter = {
    is?: shopWhereInput | null
    isNot?: shopWhereInput | null
  }

  export type shoppingListUserIdIngredientIdCompoundUniqueInput = {
    userId: number
    ingredientId: number
  }

  export type shoppingListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    bought?: SortOrder
  }

  export type shoppingListAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
  }

  export type shoppingListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    bought?: SortOrder
  }

  export type shoppingListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    bought?: SortOrder
  }

  export type shoppingListSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preparationSteps?: SortOrder
    preparationTime?: SortOrder
    dietRestrictions?: SortOrder
    dietPreferences?: SortOrder
    nutritionInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
    preparationTime?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preparationTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preparationTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
    preparationTime?: SortOrder
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

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type RecipeIngredientRecipeIdIngredientIdCompoundUniqueInput = {
    recipeId: number
    ingredientId: number
  }

  export type RecipeIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type RecipeIngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type RecipeIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type RecipeIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type RecipeIngredientSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
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

  export type pantryCreateNestedManyWithoutIngredientInput = {
    create?: XOR<pantryCreateWithoutIngredientInput, pantryUncheckedCreateWithoutIngredientInput> | pantryCreateWithoutIngredientInput[] | pantryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutIngredientInput | pantryCreateOrConnectWithoutIngredientInput[]
    createMany?: pantryCreateManyIngredientInputEnvelope
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
  }

  export type shoppingListCreateNestedManyWithoutIngredientInput = {
    create?: XOR<shoppingListCreateWithoutIngredientInput, shoppingListUncheckedCreateWithoutIngredientInput> | shoppingListCreateWithoutIngredientInput[] | shoppingListUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutIngredientInput | shoppingListCreateOrConnectWithoutIngredientInput[]
    createMany?: shoppingListCreateManyIngredientInputEnvelope
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
  }

  export type RecipeIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type pantryUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<pantryCreateWithoutIngredientInput, pantryUncheckedCreateWithoutIngredientInput> | pantryCreateWithoutIngredientInput[] | pantryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutIngredientInput | pantryCreateOrConnectWithoutIngredientInput[]
    createMany?: pantryCreateManyIngredientInputEnvelope
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
  }

  export type shoppingListUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<shoppingListCreateWithoutIngredientInput, shoppingListUncheckedCreateWithoutIngredientInput> | shoppingListCreateWithoutIngredientInput[] | shoppingListUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutIngredientInput | shoppingListCreateOrConnectWithoutIngredientInput[]
    createMany?: shoppingListCreateManyIngredientInputEnvelope
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumingredient_categoryFieldUpdateOperationsInput = {
    set?: $Enums.ingredient_category | null
  }

  export type pantryUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<pantryCreateWithoutIngredientInput, pantryUncheckedCreateWithoutIngredientInput> | pantryCreateWithoutIngredientInput[] | pantryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutIngredientInput | pantryCreateOrConnectWithoutIngredientInput[]
    upsert?: pantryUpsertWithWhereUniqueWithoutIngredientInput | pantryUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: pantryCreateManyIngredientInputEnvelope
    set?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    disconnect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    delete?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    update?: pantryUpdateWithWhereUniqueWithoutIngredientInput | pantryUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: pantryUpdateManyWithWhereWithoutIngredientInput | pantryUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: pantryScalarWhereInput | pantryScalarWhereInput[]
  }

  export type shoppingListUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<shoppingListCreateWithoutIngredientInput, shoppingListUncheckedCreateWithoutIngredientInput> | shoppingListCreateWithoutIngredientInput[] | shoppingListUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutIngredientInput | shoppingListCreateOrConnectWithoutIngredientInput[]
    upsert?: shoppingListUpsertWithWhereUniqueWithoutIngredientInput | shoppingListUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: shoppingListCreateManyIngredientInputEnvelope
    set?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    disconnect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    delete?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    update?: shoppingListUpdateWithWhereUniqueWithoutIngredientInput | shoppingListUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: shoppingListUpdateManyWithWhereWithoutIngredientInput | shoppingListUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
  }

  export type RecipeIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pantryUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<pantryCreateWithoutIngredientInput, pantryUncheckedCreateWithoutIngredientInput> | pantryCreateWithoutIngredientInput[] | pantryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutIngredientInput | pantryCreateOrConnectWithoutIngredientInput[]
    upsert?: pantryUpsertWithWhereUniqueWithoutIngredientInput | pantryUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: pantryCreateManyIngredientInputEnvelope
    set?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    disconnect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    delete?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    update?: pantryUpdateWithWhereUniqueWithoutIngredientInput | pantryUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: pantryUpdateManyWithWhereWithoutIngredientInput | pantryUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: pantryScalarWhereInput | pantryScalarWhereInput[]
  }

  export type shoppingListUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<shoppingListCreateWithoutIngredientInput, shoppingListUncheckedCreateWithoutIngredientInput> | shoppingListCreateWithoutIngredientInput[] | shoppingListUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutIngredientInput | shoppingListCreateOrConnectWithoutIngredientInput[]
    upsert?: shoppingListUpsertWithWhereUniqueWithoutIngredientInput | shoppingListUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: shoppingListCreateManyIngredientInputEnvelope
    set?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    disconnect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    delete?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    update?: shoppingListUpdateWithWhereUniqueWithoutIngredientInput | shoppingListUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: shoppingListUpdateManyWithWhereWithoutIngredientInput | shoppingListUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type ingredientCreateNestedOneWithoutPantryInput = {
    create?: XOR<ingredientCreateWithoutPantryInput, ingredientUncheckedCreateWithoutPantryInput>
    connectOrCreate?: ingredientCreateOrConnectWithoutPantryInput
    connect?: ingredientWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPantryInput = {
    create?: XOR<userCreateWithoutPantryInput, userUncheckedCreateWithoutPantryInput>
    connectOrCreate?: userCreateOrConnectWithoutPantryInput
    connect?: userWhereUniqueInput
  }

  export type ingredientUpdateOneRequiredWithoutPantryNestedInput = {
    create?: XOR<ingredientCreateWithoutPantryInput, ingredientUncheckedCreateWithoutPantryInput>
    connectOrCreate?: ingredientCreateOrConnectWithoutPantryInput
    upsert?: ingredientUpsertWithoutPantryInput
    connect?: ingredientWhereUniqueInput
    update?: XOR<XOR<ingredientUpdateToOneWithWhereWithoutPantryInput, ingredientUpdateWithoutPantryInput>, ingredientUncheckedUpdateWithoutPantryInput>
  }

  export type userUpdateOneRequiredWithoutPantryNestedInput = {
    create?: XOR<userCreateWithoutPantryInput, userUncheckedCreateWithoutPantryInput>
    connectOrCreate?: userCreateOrConnectWithoutPantryInput
    upsert?: userUpsertWithoutPantryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPantryInput, userUpdateWithoutPantryInput>, userUncheckedUpdateWithoutPantryInput>
  }

  export type userCreatedietRestrictionsInput = {
    set: $Enums.diet_restriction[]
  }

  export type userCreatedietPreferencesInput = {
    set: $Enums.diet_preference[]
  }

  export type pantryCreateNestedManyWithoutUserInput = {
    create?: XOR<pantryCreateWithoutUserInput, pantryUncheckedCreateWithoutUserInput> | pantryCreateWithoutUserInput[] | pantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutUserInput | pantryCreateOrConnectWithoutUserInput[]
    createMany?: pantryCreateManyUserInputEnvelope
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
  }

  export type shopCreateNestedManyWithoutUserInput = {
    create?: XOR<shopCreateWithoutUserInput, shopUncheckedCreateWithoutUserInput> | shopCreateWithoutUserInput[] | shopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopCreateOrConnectWithoutUserInput | shopCreateOrConnectWithoutUserInput[]
    createMany?: shopCreateManyUserInputEnvelope
    connect?: shopWhereUniqueInput | shopWhereUniqueInput[]
  }

  export type shoppingListCreateNestedManyWithoutUserInput = {
    create?: XOR<shoppingListCreateWithoutUserInput, shoppingListUncheckedCreateWithoutUserInput> | shoppingListCreateWithoutUserInput[] | shoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutUserInput | shoppingListCreateOrConnectWithoutUserInput[]
    createMany?: shoppingListCreateManyUserInputEnvelope
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
  }

  export type pantryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<pantryCreateWithoutUserInput, pantryUncheckedCreateWithoutUserInput> | pantryCreateWithoutUserInput[] | pantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutUserInput | pantryCreateOrConnectWithoutUserInput[]
    createMany?: pantryCreateManyUserInputEnvelope
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
  }

  export type shopUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<shopCreateWithoutUserInput, shopUncheckedCreateWithoutUserInput> | shopCreateWithoutUserInput[] | shopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopCreateOrConnectWithoutUserInput | shopCreateOrConnectWithoutUserInput[]
    createMany?: shopCreateManyUserInputEnvelope
    connect?: shopWhereUniqueInput | shopWhereUniqueInput[]
  }

  export type shoppingListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<shoppingListCreateWithoutUserInput, shoppingListUncheckedCreateWithoutUserInput> | shoppingListCreateWithoutUserInput[] | shoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutUserInput | shoppingListCreateOrConnectWithoutUserInput[]
    createMany?: shoppingListCreateManyUserInputEnvelope
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdatedietRestrictionsInput = {
    set?: $Enums.diet_restriction[]
    push?: $Enums.diet_restriction | $Enums.diet_restriction[]
  }

  export type userUpdatedietPreferencesInput = {
    set?: $Enums.diet_preference[]
    push?: $Enums.diet_preference | $Enums.diet_preference[]
  }

  export type pantryUpdateManyWithoutUserNestedInput = {
    create?: XOR<pantryCreateWithoutUserInput, pantryUncheckedCreateWithoutUserInput> | pantryCreateWithoutUserInput[] | pantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutUserInput | pantryCreateOrConnectWithoutUserInput[]
    upsert?: pantryUpsertWithWhereUniqueWithoutUserInput | pantryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pantryCreateManyUserInputEnvelope
    set?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    disconnect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    delete?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    update?: pantryUpdateWithWhereUniqueWithoutUserInput | pantryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pantryUpdateManyWithWhereWithoutUserInput | pantryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pantryScalarWhereInput | pantryScalarWhereInput[]
  }

  export type shopUpdateManyWithoutUserNestedInput = {
    create?: XOR<shopCreateWithoutUserInput, shopUncheckedCreateWithoutUserInput> | shopCreateWithoutUserInput[] | shopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopCreateOrConnectWithoutUserInput | shopCreateOrConnectWithoutUserInput[]
    upsert?: shopUpsertWithWhereUniqueWithoutUserInput | shopUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shopCreateManyUserInputEnvelope
    set?: shopWhereUniqueInput | shopWhereUniqueInput[]
    disconnect?: shopWhereUniqueInput | shopWhereUniqueInput[]
    delete?: shopWhereUniqueInput | shopWhereUniqueInput[]
    connect?: shopWhereUniqueInput | shopWhereUniqueInput[]
    update?: shopUpdateWithWhereUniqueWithoutUserInput | shopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shopUpdateManyWithWhereWithoutUserInput | shopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shopScalarWhereInput | shopScalarWhereInput[]
  }

  export type shoppingListUpdateManyWithoutUserNestedInput = {
    create?: XOR<shoppingListCreateWithoutUserInput, shoppingListUncheckedCreateWithoutUserInput> | shoppingListCreateWithoutUserInput[] | shoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutUserInput | shoppingListCreateOrConnectWithoutUserInput[]
    upsert?: shoppingListUpsertWithWhereUniqueWithoutUserInput | shoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shoppingListCreateManyUserInputEnvelope
    set?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    disconnect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    delete?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    update?: shoppingListUpdateWithWhereUniqueWithoutUserInput | shoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shoppingListUpdateManyWithWhereWithoutUserInput | shoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
  }

  export type pantryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<pantryCreateWithoutUserInput, pantryUncheckedCreateWithoutUserInput> | pantryCreateWithoutUserInput[] | pantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pantryCreateOrConnectWithoutUserInput | pantryCreateOrConnectWithoutUserInput[]
    upsert?: pantryUpsertWithWhereUniqueWithoutUserInput | pantryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pantryCreateManyUserInputEnvelope
    set?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    disconnect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    delete?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    connect?: pantryWhereUniqueInput | pantryWhereUniqueInput[]
    update?: pantryUpdateWithWhereUniqueWithoutUserInput | pantryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pantryUpdateManyWithWhereWithoutUserInput | pantryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pantryScalarWhereInput | pantryScalarWhereInput[]
  }

  export type shopUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<shopCreateWithoutUserInput, shopUncheckedCreateWithoutUserInput> | shopCreateWithoutUserInput[] | shopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopCreateOrConnectWithoutUserInput | shopCreateOrConnectWithoutUserInput[]
    upsert?: shopUpsertWithWhereUniqueWithoutUserInput | shopUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shopCreateManyUserInputEnvelope
    set?: shopWhereUniqueInput | shopWhereUniqueInput[]
    disconnect?: shopWhereUniqueInput | shopWhereUniqueInput[]
    delete?: shopWhereUniqueInput | shopWhereUniqueInput[]
    connect?: shopWhereUniqueInput | shopWhereUniqueInput[]
    update?: shopUpdateWithWhereUniqueWithoutUserInput | shopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shopUpdateManyWithWhereWithoutUserInput | shopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shopScalarWhereInput | shopScalarWhereInput[]
  }

  export type shoppingListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<shoppingListCreateWithoutUserInput, shoppingListUncheckedCreateWithoutUserInput> | shoppingListCreateWithoutUserInput[] | shoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutUserInput | shoppingListCreateOrConnectWithoutUserInput[]
    upsert?: shoppingListUpsertWithWhereUniqueWithoutUserInput | shoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shoppingListCreateManyUserInputEnvelope
    set?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    disconnect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    delete?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    update?: shoppingListUpdateWithWhereUniqueWithoutUserInput | shoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shoppingListUpdateManyWithWhereWithoutUserInput | shoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutShopsInput = {
    create?: XOR<userCreateWithoutShopsInput, userUncheckedCreateWithoutShopsInput>
    connectOrCreate?: userCreateOrConnectWithoutShopsInput
    connect?: userWhereUniqueInput
  }

  export type shoppingListCreateNestedManyWithoutShopInput = {
    create?: XOR<shoppingListCreateWithoutShopInput, shoppingListUncheckedCreateWithoutShopInput> | shoppingListCreateWithoutShopInput[] | shoppingListUncheckedCreateWithoutShopInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutShopInput | shoppingListCreateOrConnectWithoutShopInput[]
    createMany?: shoppingListCreateManyShopInputEnvelope
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
  }

  export type shoppingListUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<shoppingListCreateWithoutShopInput, shoppingListUncheckedCreateWithoutShopInput> | shoppingListCreateWithoutShopInput[] | shoppingListUncheckedCreateWithoutShopInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutShopInput | shoppingListCreateOrConnectWithoutShopInput[]
    createMany?: shoppingListCreateManyShopInputEnvelope
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutShopsNestedInput = {
    create?: XOR<userCreateWithoutShopsInput, userUncheckedCreateWithoutShopsInput>
    connectOrCreate?: userCreateOrConnectWithoutShopsInput
    upsert?: userUpsertWithoutShopsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutShopsInput, userUpdateWithoutShopsInput>, userUncheckedUpdateWithoutShopsInput>
  }

  export type shoppingListUpdateManyWithoutShopNestedInput = {
    create?: XOR<shoppingListCreateWithoutShopInput, shoppingListUncheckedCreateWithoutShopInput> | shoppingListCreateWithoutShopInput[] | shoppingListUncheckedCreateWithoutShopInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutShopInput | shoppingListCreateOrConnectWithoutShopInput[]
    upsert?: shoppingListUpsertWithWhereUniqueWithoutShopInput | shoppingListUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: shoppingListCreateManyShopInputEnvelope
    set?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    disconnect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    delete?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    update?: shoppingListUpdateWithWhereUniqueWithoutShopInput | shoppingListUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: shoppingListUpdateManyWithWhereWithoutShopInput | shoppingListUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
  }

  export type shoppingListUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<shoppingListCreateWithoutShopInput, shoppingListUncheckedCreateWithoutShopInput> | shoppingListCreateWithoutShopInput[] | shoppingListUncheckedCreateWithoutShopInput[]
    connectOrCreate?: shoppingListCreateOrConnectWithoutShopInput | shoppingListCreateOrConnectWithoutShopInput[]
    upsert?: shoppingListUpsertWithWhereUniqueWithoutShopInput | shoppingListUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: shoppingListCreateManyShopInputEnvelope
    set?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    disconnect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    delete?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    connect?: shoppingListWhereUniqueInput | shoppingListWhereUniqueInput[]
    update?: shoppingListUpdateWithWhereUniqueWithoutShopInput | shoppingListUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: shoppingListUpdateManyWithWhereWithoutShopInput | shoppingListUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutShoppingListInput = {
    create?: XOR<userCreateWithoutShoppingListInput, userUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: userCreateOrConnectWithoutShoppingListInput
    connect?: userWhereUniqueInput
  }

  export type ingredientCreateNestedOneWithoutShoppingListInput = {
    create?: XOR<ingredientCreateWithoutShoppingListInput, ingredientUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: ingredientCreateOrConnectWithoutShoppingListInput
    connect?: ingredientWhereUniqueInput
  }

  export type shopCreateNestedOneWithoutShoppingListInput = {
    create?: XOR<shopCreateWithoutShoppingListInput, shopUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: shopCreateOrConnectWithoutShoppingListInput
    connect?: shopWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type userUpdateOneRequiredWithoutShoppingListNestedInput = {
    create?: XOR<userCreateWithoutShoppingListInput, userUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: userCreateOrConnectWithoutShoppingListInput
    upsert?: userUpsertWithoutShoppingListInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutShoppingListInput, userUpdateWithoutShoppingListInput>, userUncheckedUpdateWithoutShoppingListInput>
  }

  export type ingredientUpdateOneRequiredWithoutShoppingListNestedInput = {
    create?: XOR<ingredientCreateWithoutShoppingListInput, ingredientUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: ingredientCreateOrConnectWithoutShoppingListInput
    upsert?: ingredientUpsertWithoutShoppingListInput
    connect?: ingredientWhereUniqueInput
    update?: XOR<XOR<ingredientUpdateToOneWithWhereWithoutShoppingListInput, ingredientUpdateWithoutShoppingListInput>, ingredientUncheckedUpdateWithoutShoppingListInput>
  }

  export type shopUpdateOneWithoutShoppingListNestedInput = {
    create?: XOR<shopCreateWithoutShoppingListInput, shopUncheckedCreateWithoutShoppingListInput>
    connectOrCreate?: shopCreateOrConnectWithoutShoppingListInput
    upsert?: shopUpsertWithoutShoppingListInput
    disconnect?: shopWhereInput | boolean
    delete?: shopWhereInput | boolean
    connect?: shopWhereUniqueInput
    update?: XOR<XOR<shopUpdateToOneWithWhereWithoutShoppingListInput, shopUpdateWithoutShoppingListInput>, shopUncheckedUpdateWithoutShoppingListInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeCreatepreparationStepsInput = {
    set: string[]
  }

  export type RecipeCreatedietRestrictionsInput = {
    set: $Enums.diet_restriction[]
  }

  export type RecipeCreatedietPreferencesInput = {
    set: $Enums.diet_preference[]
  }

  export type RecipeIngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeUpdatepreparationStepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecipeUpdatedietRestrictionsInput = {
    set?: $Enums.diet_restriction[]
    push?: $Enums.diet_restriction | $Enums.diet_restriction[]
  }

  export type RecipeUpdatedietPreferencesInput = {
    set?: $Enums.diet_preference[]
    push?: $Enums.diet_preference | $Enums.diet_preference[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecipeIngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type ingredientCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<ingredientCreateWithoutIngredientsInput, ingredientUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ingredientCreateOrConnectWithoutIngredientsInput
    connect?: ingredientWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type ingredientUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<ingredientCreateWithoutIngredientsInput, ingredientUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ingredientCreateOrConnectWithoutIngredientsInput
    upsert?: ingredientUpsertWithoutIngredientsInput
    connect?: ingredientWhereUniqueInput
    update?: XOR<XOR<ingredientUpdateToOneWithWhereWithoutIngredientsInput, ingredientUpdateWithoutIngredientsInput>, ingredientUncheckedUpdateWithoutIngredientsInput>
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

  export type NestedEnumingredient_categoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ingredient_category | Enumingredient_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumingredient_categoryNullableFilter<$PrismaModel> | $Enums.ingredient_category | null
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

  export type NestedEnumingredient_categoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ingredient_category | Enumingredient_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ingredient_category[] | ListEnumingredient_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumingredient_categoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ingredient_category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumingredient_categoryNullableFilter<$PrismaModel>
    _max?: NestedEnumingredient_categoryNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type pantryCreateWithoutIngredientInput = {
    category?: $Enums.ingredient_category | null
    user: userCreateNestedOneWithoutPantryInput
  }

  export type pantryUncheckedCreateWithoutIngredientInput = {
    id?: number
    userId: number
    category?: $Enums.ingredient_category | null
  }

  export type pantryCreateOrConnectWithoutIngredientInput = {
    where: pantryWhereUniqueInput
    create: XOR<pantryCreateWithoutIngredientInput, pantryUncheckedCreateWithoutIngredientInput>
  }

  export type pantryCreateManyIngredientInputEnvelope = {
    data: pantryCreateManyIngredientInput | pantryCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type shoppingListCreateWithoutIngredientInput = {
    bought?: boolean | null
    user: userCreateNestedOneWithoutShoppingListInput
    shop?: shopCreateNestedOneWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateWithoutIngredientInput = {
    id?: number
    userId: number
    shopId?: number | null
    bought?: boolean | null
  }

  export type shoppingListCreateOrConnectWithoutIngredientInput = {
    where: shoppingListWhereUniqueInput
    create: XOR<shoppingListCreateWithoutIngredientInput, shoppingListUncheckedCreateWithoutIngredientInput>
  }

  export type shoppingListCreateManyIngredientInputEnvelope = {
    data: shoppingListCreateManyIngredientInput | shoppingListCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientCreateWithoutIngredientInput = {
    quantity?: number | null
    unit?: string | null
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutIngredientInput = {
    id?: number
    recipeId: number
    quantity?: number | null
    unit?: string | null
  }

  export type RecipeIngredientCreateOrConnectWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientCreateManyIngredientInputEnvelope = {
    data: RecipeIngredientCreateManyIngredientInput | RecipeIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type pantryUpsertWithWhereUniqueWithoutIngredientInput = {
    where: pantryWhereUniqueInput
    update: XOR<pantryUpdateWithoutIngredientInput, pantryUncheckedUpdateWithoutIngredientInput>
    create: XOR<pantryCreateWithoutIngredientInput, pantryUncheckedCreateWithoutIngredientInput>
  }

  export type pantryUpdateWithWhereUniqueWithoutIngredientInput = {
    where: pantryWhereUniqueInput
    data: XOR<pantryUpdateWithoutIngredientInput, pantryUncheckedUpdateWithoutIngredientInput>
  }

  export type pantryUpdateManyWithWhereWithoutIngredientInput = {
    where: pantryScalarWhereInput
    data: XOR<pantryUpdateManyMutationInput, pantryUncheckedUpdateManyWithoutIngredientInput>
  }

  export type pantryScalarWhereInput = {
    AND?: pantryScalarWhereInput | pantryScalarWhereInput[]
    OR?: pantryScalarWhereInput[]
    NOT?: pantryScalarWhereInput | pantryScalarWhereInput[]
    id?: IntFilter<"pantry"> | number
    userId?: IntFilter<"pantry"> | number
    ingredientId?: IntFilter<"pantry"> | number
    category?: Enumingredient_categoryNullableFilter<"pantry"> | $Enums.ingredient_category | null
  }

  export type shoppingListUpsertWithWhereUniqueWithoutIngredientInput = {
    where: shoppingListWhereUniqueInput
    update: XOR<shoppingListUpdateWithoutIngredientInput, shoppingListUncheckedUpdateWithoutIngredientInput>
    create: XOR<shoppingListCreateWithoutIngredientInput, shoppingListUncheckedCreateWithoutIngredientInput>
  }

  export type shoppingListUpdateWithWhereUniqueWithoutIngredientInput = {
    where: shoppingListWhereUniqueInput
    data: XOR<shoppingListUpdateWithoutIngredientInput, shoppingListUncheckedUpdateWithoutIngredientInput>
  }

  export type shoppingListUpdateManyWithWhereWithoutIngredientInput = {
    where: shoppingListScalarWhereInput
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyWithoutIngredientInput>
  }

  export type shoppingListScalarWhereInput = {
    AND?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
    OR?: shoppingListScalarWhereInput[]
    NOT?: shoppingListScalarWhereInput | shoppingListScalarWhereInput[]
    id?: IntFilter<"shoppingList"> | number
    userId?: IntFilter<"shoppingList"> | number
    ingredientId?: IntFilter<"shoppingList"> | number
    shopId?: IntNullableFilter<"shoppingList"> | number | null
    bought?: BoolNullableFilter<"shoppingList"> | boolean | null
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeIngredientScalarWhereInput = {
    AND?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    OR?: RecipeIngredientScalarWhereInput[]
    NOT?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    id?: IntFilter<"RecipeIngredient"> | number
    recipeId?: IntFilter<"RecipeIngredient"> | number
    ingredientId?: IntFilter<"RecipeIngredient"> | number
    quantity?: FloatNullableFilter<"RecipeIngredient"> | number | null
    unit?: StringNullableFilter<"RecipeIngredient"> | string | null
  }

  export type ingredientCreateWithoutPantryInput = {
    name: string
    category?: $Enums.ingredient_category | null
    shoppingList?: shoppingListCreateNestedManyWithoutIngredientInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput
  }

  export type ingredientUncheckedCreateWithoutPantryInput = {
    id?: number
    name: string
    category?: $Enums.ingredient_category | null
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutIngredientInput
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type ingredientCreateOrConnectWithoutPantryInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutPantryInput, ingredientUncheckedCreateWithoutPantryInput>
  }

  export type userCreateWithoutPantryInput = {
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    shops?: shopCreateNestedManyWithoutUserInput
    shoppingList?: shoppingListCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPantryInput = {
    id?: number
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    shops?: shopUncheckedCreateNestedManyWithoutUserInput
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPantryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPantryInput, userUncheckedCreateWithoutPantryInput>
  }

  export type ingredientUpsertWithoutPantryInput = {
    update: XOR<ingredientUpdateWithoutPantryInput, ingredientUncheckedUpdateWithoutPantryInput>
    create: XOR<ingredientCreateWithoutPantryInput, ingredientUncheckedCreateWithoutPantryInput>
    where?: ingredientWhereInput
  }

  export type ingredientUpdateToOneWithWhereWithoutPantryInput = {
    where?: ingredientWhereInput
    data: XOR<ingredientUpdateWithoutPantryInput, ingredientUncheckedUpdateWithoutPantryInput>
  }

  export type ingredientUpdateWithoutPantryInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    shoppingList?: shoppingListUpdateManyWithoutIngredientNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateWithoutPantryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    shoppingList?: shoppingListUncheckedUpdateManyWithoutIngredientNestedInput
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type userUpsertWithoutPantryInput = {
    update: XOR<userUpdateWithoutPantryInput, userUncheckedUpdateWithoutPantryInput>
    create: XOR<userCreateWithoutPantryInput, userUncheckedCreateWithoutPantryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPantryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPantryInput, userUncheckedUpdateWithoutPantryInput>
  }

  export type userUpdateWithoutPantryInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    shops?: shopUpdateManyWithoutUserNestedInput
    shoppingList?: shoppingListUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPantryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    shops?: shopUncheckedUpdateManyWithoutUserNestedInput
    shoppingList?: shoppingListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type pantryCreateWithoutUserInput = {
    category?: $Enums.ingredient_category | null
    ingredient: ingredientCreateNestedOneWithoutPantryInput
  }

  export type pantryUncheckedCreateWithoutUserInput = {
    id?: number
    ingredientId: number
    category?: $Enums.ingredient_category | null
  }

  export type pantryCreateOrConnectWithoutUserInput = {
    where: pantryWhereUniqueInput
    create: XOR<pantryCreateWithoutUserInput, pantryUncheckedCreateWithoutUserInput>
  }

  export type pantryCreateManyUserInputEnvelope = {
    data: pantryCreateManyUserInput | pantryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type shopCreateWithoutUserInput = {
    name: string
    name_normalized?: string | null
    shoppingList?: shoppingListCreateNestedManyWithoutShopInput
  }

  export type shopUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    name_normalized?: string | null
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutShopInput
  }

  export type shopCreateOrConnectWithoutUserInput = {
    where: shopWhereUniqueInput
    create: XOR<shopCreateWithoutUserInput, shopUncheckedCreateWithoutUserInput>
  }

  export type shopCreateManyUserInputEnvelope = {
    data: shopCreateManyUserInput | shopCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type shoppingListCreateWithoutUserInput = {
    bought?: boolean | null
    ingredient: ingredientCreateNestedOneWithoutShoppingListInput
    shop?: shopCreateNestedOneWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateWithoutUserInput = {
    id?: number
    ingredientId: number
    shopId?: number | null
    bought?: boolean | null
  }

  export type shoppingListCreateOrConnectWithoutUserInput = {
    where: shoppingListWhereUniqueInput
    create: XOR<shoppingListCreateWithoutUserInput, shoppingListUncheckedCreateWithoutUserInput>
  }

  export type shoppingListCreateManyUserInputEnvelope = {
    data: shoppingListCreateManyUserInput | shoppingListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pantryUpsertWithWhereUniqueWithoutUserInput = {
    where: pantryWhereUniqueInput
    update: XOR<pantryUpdateWithoutUserInput, pantryUncheckedUpdateWithoutUserInput>
    create: XOR<pantryCreateWithoutUserInput, pantryUncheckedCreateWithoutUserInput>
  }

  export type pantryUpdateWithWhereUniqueWithoutUserInput = {
    where: pantryWhereUniqueInput
    data: XOR<pantryUpdateWithoutUserInput, pantryUncheckedUpdateWithoutUserInput>
  }

  export type pantryUpdateManyWithWhereWithoutUserInput = {
    where: pantryScalarWhereInput
    data: XOR<pantryUpdateManyMutationInput, pantryUncheckedUpdateManyWithoutUserInput>
  }

  export type shopUpsertWithWhereUniqueWithoutUserInput = {
    where: shopWhereUniqueInput
    update: XOR<shopUpdateWithoutUserInput, shopUncheckedUpdateWithoutUserInput>
    create: XOR<shopCreateWithoutUserInput, shopUncheckedCreateWithoutUserInput>
  }

  export type shopUpdateWithWhereUniqueWithoutUserInput = {
    where: shopWhereUniqueInput
    data: XOR<shopUpdateWithoutUserInput, shopUncheckedUpdateWithoutUserInput>
  }

  export type shopUpdateManyWithWhereWithoutUserInput = {
    where: shopScalarWhereInput
    data: XOR<shopUpdateManyMutationInput, shopUncheckedUpdateManyWithoutUserInput>
  }

  export type shopScalarWhereInput = {
    AND?: shopScalarWhereInput | shopScalarWhereInput[]
    OR?: shopScalarWhereInput[]
    NOT?: shopScalarWhereInput | shopScalarWhereInput[]
    id?: IntFilter<"shop"> | number
    name?: StringFilter<"shop"> | string
    name_normalized?: StringNullableFilter<"shop"> | string | null
    userId?: IntFilter<"shop"> | number
  }

  export type shoppingListUpsertWithWhereUniqueWithoutUserInput = {
    where: shoppingListWhereUniqueInput
    update: XOR<shoppingListUpdateWithoutUserInput, shoppingListUncheckedUpdateWithoutUserInput>
    create: XOR<shoppingListCreateWithoutUserInput, shoppingListUncheckedCreateWithoutUserInput>
  }

  export type shoppingListUpdateWithWhereUniqueWithoutUserInput = {
    where: shoppingListWhereUniqueInput
    data: XOR<shoppingListUpdateWithoutUserInput, shoppingListUncheckedUpdateWithoutUserInput>
  }

  export type shoppingListUpdateManyWithWhereWithoutUserInput = {
    where: shoppingListScalarWhereInput
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutShopsInput = {
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryCreateNestedManyWithoutUserInput
    shoppingList?: shoppingListCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutShopsInput = {
    id?: number
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUncheckedCreateNestedManyWithoutUserInput
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutShopsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutShopsInput, userUncheckedCreateWithoutShopsInput>
  }

  export type shoppingListCreateWithoutShopInput = {
    bought?: boolean | null
    user: userCreateNestedOneWithoutShoppingListInput
    ingredient: ingredientCreateNestedOneWithoutShoppingListInput
  }

  export type shoppingListUncheckedCreateWithoutShopInput = {
    id?: number
    userId: number
    ingredientId: number
    bought?: boolean | null
  }

  export type shoppingListCreateOrConnectWithoutShopInput = {
    where: shoppingListWhereUniqueInput
    create: XOR<shoppingListCreateWithoutShopInput, shoppingListUncheckedCreateWithoutShopInput>
  }

  export type shoppingListCreateManyShopInputEnvelope = {
    data: shoppingListCreateManyShopInput | shoppingListCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutShopsInput = {
    update: XOR<userUpdateWithoutShopsInput, userUncheckedUpdateWithoutShopsInput>
    create: XOR<userCreateWithoutShopsInput, userUncheckedCreateWithoutShopsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutShopsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutShopsInput, userUncheckedUpdateWithoutShopsInput>
  }

  export type userUpdateWithoutShopsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUpdateManyWithoutUserNestedInput
    shoppingList?: shoppingListUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUncheckedUpdateManyWithoutUserNestedInput
    shoppingList?: shoppingListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type shoppingListUpsertWithWhereUniqueWithoutShopInput = {
    where: shoppingListWhereUniqueInput
    update: XOR<shoppingListUpdateWithoutShopInput, shoppingListUncheckedUpdateWithoutShopInput>
    create: XOR<shoppingListCreateWithoutShopInput, shoppingListUncheckedCreateWithoutShopInput>
  }

  export type shoppingListUpdateWithWhereUniqueWithoutShopInput = {
    where: shoppingListWhereUniqueInput
    data: XOR<shoppingListUpdateWithoutShopInput, shoppingListUncheckedUpdateWithoutShopInput>
  }

  export type shoppingListUpdateManyWithWhereWithoutShopInput = {
    where: shoppingListScalarWhereInput
    data: XOR<shoppingListUpdateManyMutationInput, shoppingListUncheckedUpdateManyWithoutShopInput>
  }

  export type userCreateWithoutShoppingListInput = {
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryCreateNestedManyWithoutUserInput
    shops?: shopCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutShoppingListInput = {
    id?: number
    username: string
    email: string
    password: string
    refreshToken?: string | null
    avatar?: string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userCreatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUncheckedCreateNestedManyWithoutUserInput
    shops?: shopUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutShoppingListInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutShoppingListInput, userUncheckedCreateWithoutShoppingListInput>
  }

  export type ingredientCreateWithoutShoppingListInput = {
    name: string
    category?: $Enums.ingredient_category | null
    pantry?: pantryCreateNestedManyWithoutIngredientInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput
  }

  export type ingredientUncheckedCreateWithoutShoppingListInput = {
    id?: number
    name: string
    category?: $Enums.ingredient_category | null
    pantry?: pantryUncheckedCreateNestedManyWithoutIngredientInput
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type ingredientCreateOrConnectWithoutShoppingListInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutShoppingListInput, ingredientUncheckedCreateWithoutShoppingListInput>
  }

  export type shopCreateWithoutShoppingListInput = {
    name: string
    name_normalized?: string | null
    user: userCreateNestedOneWithoutShopsInput
  }

  export type shopUncheckedCreateWithoutShoppingListInput = {
    id?: number
    name: string
    name_normalized?: string | null
    userId: number
  }

  export type shopCreateOrConnectWithoutShoppingListInput = {
    where: shopWhereUniqueInput
    create: XOR<shopCreateWithoutShoppingListInput, shopUncheckedCreateWithoutShoppingListInput>
  }

  export type userUpsertWithoutShoppingListInput = {
    update: XOR<userUpdateWithoutShoppingListInput, userUncheckedUpdateWithoutShoppingListInput>
    create: XOR<userCreateWithoutShoppingListInput, userUncheckedCreateWithoutShoppingListInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutShoppingListInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutShoppingListInput, userUncheckedUpdateWithoutShoppingListInput>
  }

  export type userUpdateWithoutShoppingListInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUpdateManyWithoutUserNestedInput
    shops?: shopUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stats?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    dietRestrictions?: userUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: userUpdatedietPreferencesInput | $Enums.diet_preference[]
    pantry?: pantryUncheckedUpdateManyWithoutUserNestedInput
    shops?: shopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ingredientUpsertWithoutShoppingListInput = {
    update: XOR<ingredientUpdateWithoutShoppingListInput, ingredientUncheckedUpdateWithoutShoppingListInput>
    create: XOR<ingredientCreateWithoutShoppingListInput, ingredientUncheckedCreateWithoutShoppingListInput>
    where?: ingredientWhereInput
  }

  export type ingredientUpdateToOneWithWhereWithoutShoppingListInput = {
    where?: ingredientWhereInput
    data: XOR<ingredientUpdateWithoutShoppingListInput, ingredientUncheckedUpdateWithoutShoppingListInput>
  }

  export type ingredientUpdateWithoutShoppingListInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    pantry?: pantryUpdateManyWithoutIngredientNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateWithoutShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    pantry?: pantryUncheckedUpdateManyWithoutIngredientNestedInput
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type shopUpsertWithoutShoppingListInput = {
    update: XOR<shopUpdateWithoutShoppingListInput, shopUncheckedUpdateWithoutShoppingListInput>
    create: XOR<shopCreateWithoutShoppingListInput, shopUncheckedCreateWithoutShoppingListInput>
    where?: shopWhereInput
  }

  export type shopUpdateToOneWithWhereWithoutShoppingListInput = {
    where?: shopWhereInput
    data: XOR<shopUpdateWithoutShoppingListInput, shopUncheckedUpdateWithoutShoppingListInput>
  }

  export type shopUpdateWithoutShoppingListInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutShopsNestedInput
  }

  export type shopUncheckedUpdateWithoutShoppingListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeIngredientCreateWithoutRecipeInput = {
    quantity?: number | null
    unit?: string | null
    ingredient: ingredientCreateNestedOneWithoutIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutRecipeInput = {
    id?: number
    ingredientId: number
    quantity?: number | null
    unit?: string | null
  }

  export type RecipeIngredientCreateOrConnectWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientCreateManyRecipeInputEnvelope = {
    data: RecipeIngredientCreateManyRecipeInput | RecipeIngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    name: string
    description?: string | null
    preparationSteps?: RecipeCreatepreparationStepsInput | string[]
    preparationTime?: number | null
    dietRestrictions?: RecipeCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeCreatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    description?: string | null
    preparationSteps?: RecipeCreatepreparationStepsInput | string[]
    preparationTime?: number | null
    dietRestrictions?: RecipeCreatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeCreatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type ingredientCreateWithoutIngredientsInput = {
    name: string
    category?: $Enums.ingredient_category | null
    pantry?: pantryCreateNestedManyWithoutIngredientInput
    shoppingList?: shoppingListCreateNestedManyWithoutIngredientInput
  }

  export type ingredientUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    category?: $Enums.ingredient_category | null
    pantry?: pantryUncheckedCreateNestedManyWithoutIngredientInput
    shoppingList?: shoppingListUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type ingredientCreateOrConnectWithoutIngredientsInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutIngredientsInput, ingredientUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preparationSteps?: RecipeUpdatepreparationStepsInput | string[]
    preparationTime?: NullableIntFieldUpdateOperationsInput | number | null
    dietRestrictions?: RecipeUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeUpdatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preparationSteps?: RecipeUpdatepreparationStepsInput | string[]
    preparationTime?: NullableIntFieldUpdateOperationsInput | number | null
    dietRestrictions?: RecipeUpdatedietRestrictionsInput | $Enums.diet_restriction[]
    dietPreferences?: RecipeUpdatedietPreferencesInput | $Enums.diet_preference[]
    nutritionInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingredientUpsertWithoutIngredientsInput = {
    update: XOR<ingredientUpdateWithoutIngredientsInput, ingredientUncheckedUpdateWithoutIngredientsInput>
    create: XOR<ingredientCreateWithoutIngredientsInput, ingredientUncheckedCreateWithoutIngredientsInput>
    where?: ingredientWhereInput
  }

  export type ingredientUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: ingredientWhereInput
    data: XOR<ingredientUpdateWithoutIngredientsInput, ingredientUncheckedUpdateWithoutIngredientsInput>
  }

  export type ingredientUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    pantry?: pantryUpdateManyWithoutIngredientNestedInput
    shoppingList?: shoppingListUpdateManyWithoutIngredientNestedInput
  }

  export type ingredientUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    pantry?: pantryUncheckedUpdateManyWithoutIngredientNestedInput
    shoppingList?: shoppingListUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type pantryCreateManyIngredientInput = {
    id?: number
    userId: number
    category?: $Enums.ingredient_category | null
  }

  export type shoppingListCreateManyIngredientInput = {
    id?: number
    userId: number
    shopId?: number | null
    bought?: boolean | null
  }

  export type RecipeIngredientCreateManyIngredientInput = {
    id?: number
    recipeId: number
    quantity?: number | null
    unit?: string | null
  }

  export type pantryUpdateWithoutIngredientInput = {
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    user?: userUpdateOneRequiredWithoutPantryNestedInput
  }

  export type pantryUncheckedUpdateWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type pantryUncheckedUpdateManyWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type shoppingListUpdateWithoutIngredientInput = {
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: userUpdateOneRequiredWithoutShoppingListNestedInput
    shop?: shopUpdateOneWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type shoppingListUncheckedUpdateManyWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RecipeIngredientUpdateWithoutIngredientInput = {
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pantryCreateManyUserInput = {
    id?: number
    ingredientId: number
    category?: $Enums.ingredient_category | null
  }

  export type shopCreateManyUserInput = {
    id?: number
    name: string
    name_normalized?: string | null
  }

  export type shoppingListCreateManyUserInput = {
    id?: number
    ingredientId: number
    shopId?: number | null
    bought?: boolean | null
  }

  export type pantryUpdateWithoutUserInput = {
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
    ingredient?: ingredientUpdateOneRequiredWithoutPantryNestedInput
  }

  export type pantryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type pantryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    category?: NullableEnumingredient_categoryFieldUpdateOperationsInput | $Enums.ingredient_category | null
  }

  export type shopUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    shoppingList?: shoppingListUpdateManyWithoutShopNestedInput
  }

  export type shopUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
    shoppingList?: shoppingListUncheckedUpdateManyWithoutShopNestedInput
  }

  export type shopUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    name_normalized?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shoppingListUpdateWithoutUserInput = {
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ingredient?: ingredientUpdateOneRequiredWithoutShoppingListNestedInput
    shop?: shopUpdateOneWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type shoppingListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type shoppingListCreateManyShopInput = {
    id?: number
    userId: number
    ingredientId: number
    bought?: boolean | null
  }

  export type shoppingListUpdateWithoutShopInput = {
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: userUpdateOneRequiredWithoutShoppingListNestedInput
    ingredient?: ingredientUpdateOneRequiredWithoutShoppingListNestedInput
  }

  export type shoppingListUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type shoppingListUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    bought?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RecipeIngredientCreateManyRecipeInput = {
    id?: number
    ingredientId: number
    quantity?: number | null
    unit?: string | null
  }

  export type RecipeIngredientUpdateWithoutRecipeInput = {
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    ingredient?: ingredientUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
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