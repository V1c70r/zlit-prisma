// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  person: (where?: PersonWhereInput) => Promise<boolean>;
  planet: (where?: PlanetWhereInput) => Promise<boolean>;
  starship: (where?: StarshipWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  person: (where: PersonWhereUniqueInput) => PersonNullablePromise;
  persons: (args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Person>;
  personsConnection: (args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PersonConnectionPromise;
  planet: (where: PlanetWhereUniqueInput) => PlanetNullablePromise;
  planets: (args?: {
    where?: PlanetWhereInput;
    orderBy?: PlanetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Planet>;
  planetsConnection: (args?: {
    where?: PlanetWhereInput;
    orderBy?: PlanetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PlanetConnectionPromise;
  starship: (where: StarshipWhereUniqueInput) => StarshipNullablePromise;
  starships: (args?: {
    where?: StarshipWhereInput;
    orderBy?: StarshipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Starship>;
  starshipsConnection: (args?: {
    where?: StarshipWhereInput;
    orderBy?: StarshipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => StarshipConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPerson: (data: PersonCreateInput) => PersonPromise;
  updatePerson: (args: {
    data: PersonUpdateInput;
    where: PersonWhereUniqueInput;
  }) => PersonPromise;
  updateManyPersons: (args: {
    data: PersonUpdateManyMutationInput;
    where?: PersonWhereInput;
  }) => BatchPayloadPromise;
  upsertPerson: (args: {
    where: PersonWhereUniqueInput;
    create: PersonCreateInput;
    update: PersonUpdateInput;
  }) => PersonPromise;
  deletePerson: (where: PersonWhereUniqueInput) => PersonPromise;
  deleteManyPersons: (where?: PersonWhereInput) => BatchPayloadPromise;
  createPlanet: (data: PlanetCreateInput) => PlanetPromise;
  updatePlanet: (args: {
    data: PlanetUpdateInput;
    where: PlanetWhereUniqueInput;
  }) => PlanetPromise;
  updateManyPlanets: (args: {
    data: PlanetUpdateManyMutationInput;
    where?: PlanetWhereInput;
  }) => BatchPayloadPromise;
  upsertPlanet: (args: {
    where: PlanetWhereUniqueInput;
    create: PlanetCreateInput;
    update: PlanetUpdateInput;
  }) => PlanetPromise;
  deletePlanet: (where: PlanetWhereUniqueInput) => PlanetPromise;
  deleteManyPlanets: (where?: PlanetWhereInput) => BatchPayloadPromise;
  createStarship: (data: StarshipCreateInput) => StarshipPromise;
  updateStarship: (args: {
    data: StarshipUpdateInput;
    where: StarshipWhereUniqueInput;
  }) => StarshipPromise;
  updateManyStarships: (args: {
    data: StarshipUpdateManyMutationInput;
    where?: StarshipWhereInput;
  }) => BatchPayloadPromise;
  upsertStarship: (args: {
    where: StarshipWhereUniqueInput;
    create: StarshipCreateInput;
    update: StarshipUpdateInput;
  }) => StarshipPromise;
  deleteStarship: (where: StarshipWhereUniqueInput) => StarshipPromise;
  deleteManyStarships: (where?: StarshipWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  person: (
    where?: PersonSubscriptionWhereInput
  ) => PersonSubscriptionPayloadSubscription;
  planet: (
    where?: PlanetSubscriptionWhereInput
  ) => PlanetSubscriptionPayloadSubscription;
  starship: (
    where?: StarshipSubscriptionWhereInput
  ) => StarshipSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Episode = "NEWHOPE" | "EMPIRE" | "JEDI";

export type StarshipOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "speed_ASC"
  | "speed_DESC";

export type PersonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "gender_ASC"
  | "gender_DESC"
  | "isDroid_ASC"
  | "isDroid_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updated_ASC"
  | "updated_DESC"
  | "firstAppersIn_ASC"
  | "firstAppersIn_DESC";

export type Gender = "MALE" | "FEMALE";

export type PlanetOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "mass_ASC"
  | "mass_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PlanetCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  mass?: Maybe<Int>;
}

export type PersonWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface StarshipUpdateWithWhereUniqueNestedInput {
  where: StarshipWhereUniqueInput;
  data: StarshipUpdateDataInput;
}

export interface StarshipWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  speed?: Maybe<Int>;
  speed_not?: Maybe<Int>;
  speed_in?: Maybe<Int[] | Int>;
  speed_not_in?: Maybe<Int[] | Int>;
  speed_lt?: Maybe<Int>;
  speed_lte?: Maybe<Int>;
  speed_gt?: Maybe<Int>;
  speed_gte?: Maybe<Int>;
  AND?: Maybe<StarshipWhereInput[] | StarshipWhereInput>;
  OR?: Maybe<StarshipWhereInput[] | StarshipWhereInput>;
  NOT?: Maybe<StarshipWhereInput[] | StarshipWhereInput>;
}

export interface PersonUpdateManyInput {
  create?: Maybe<PersonCreateInput[] | PersonCreateInput>;
  update?: Maybe<
    | PersonUpdateWithWhereUniqueNestedInput[]
    | PersonUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | PersonUpsertWithWhereUniqueNestedInput[]
    | PersonUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<PersonWhereUniqueInput[] | PersonWhereUniqueInput>;
  connect?: Maybe<PersonWhereUniqueInput[] | PersonWhereUniqueInput>;
  set?: Maybe<PersonWhereUniqueInput[] | PersonWhereUniqueInput>;
  disconnect?: Maybe<PersonWhereUniqueInput[] | PersonWhereUniqueInput>;
  deleteMany?: Maybe<PersonScalarWhereInput[] | PersonScalarWhereInput>;
  updateMany?: Maybe<
    | PersonUpdateManyWithWhereNestedInput[]
    | PersonUpdateManyWithWhereNestedInput
  >;
}

export interface StarshipUpdateDataInput {
  name?: Maybe<String>;
  coordinates?: Maybe<StarshipUpdatecoordinatesInput>;
  speed?: Maybe<Int>;
}

export interface PersonCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  gender?: Maybe<Gender>;
  isDroid?: Maybe<Boolean>;
  firstAppersIn?: Maybe<Episode>;
  appersIn?: Maybe<PersonCreateappersInInput>;
  starships?: Maybe<StarshipCreateManyInput>;
  friends?: Maybe<PersonCreateManyInput>;
  planet?: Maybe<PlanetCreateOneInput>;
}

export interface PersonWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  gender?: Maybe<Gender>;
  gender_not?: Maybe<Gender>;
  gender_in?: Maybe<Gender[] | Gender>;
  gender_not_in?: Maybe<Gender[] | Gender>;
  isDroid?: Maybe<Boolean>;
  isDroid_not?: Maybe<Boolean>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updated?: Maybe<DateTimeInput>;
  updated_not?: Maybe<DateTimeInput>;
  updated_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updated_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updated_lt?: Maybe<DateTimeInput>;
  updated_lte?: Maybe<DateTimeInput>;
  updated_gt?: Maybe<DateTimeInput>;
  updated_gte?: Maybe<DateTimeInput>;
  firstAppersIn?: Maybe<Episode>;
  firstAppersIn_not?: Maybe<Episode>;
  firstAppersIn_in?: Maybe<Episode[] | Episode>;
  firstAppersIn_not_in?: Maybe<Episode[] | Episode>;
  starships_every?: Maybe<StarshipWhereInput>;
  starships_some?: Maybe<StarshipWhereInput>;
  starships_none?: Maybe<StarshipWhereInput>;
  friends_every?: Maybe<PersonWhereInput>;
  friends_some?: Maybe<PersonWhereInput>;
  friends_none?: Maybe<PersonWhereInput>;
  planet?: Maybe<PlanetWhereInput>;
  AND?: Maybe<PersonWhereInput[] | PersonWhereInput>;
  OR?: Maybe<PersonWhereInput[] | PersonWhereInput>;
  NOT?: Maybe<PersonWhereInput[] | PersonWhereInput>;
}

export interface PersonCreateappersInInput {
  set?: Maybe<Episode[] | Episode>;
}

export interface PlanetSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PlanetWhereInput>;
  AND?: Maybe<PlanetSubscriptionWhereInput[] | PlanetSubscriptionWhereInput>;
  OR?: Maybe<PlanetSubscriptionWhereInput[] | PlanetSubscriptionWhereInput>;
  NOT?: Maybe<PlanetSubscriptionWhereInput[] | PlanetSubscriptionWhereInput>;
}

export interface StarshipCreateManyInput {
  create?: Maybe<StarshipCreateInput[] | StarshipCreateInput>;
  connect?: Maybe<StarshipWhereUniqueInput[] | StarshipWhereUniqueInput>;
}

export interface StarshipUpdateManyMutationInput {
  name?: Maybe<String>;
  coordinates?: Maybe<StarshipUpdatecoordinatesInput>;
  speed?: Maybe<Int>;
}

export interface StarshipCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  coordinates?: Maybe<StarshipCreatecoordinatesInput>;
  speed?: Maybe<Int>;
}

export interface PlanetUpdateManyMutationInput {
  name?: Maybe<String>;
  mass?: Maybe<Int>;
}

export interface StarshipCreatecoordinatesInput {
  set?: Maybe<Float[] | Float>;
}

export type PlanetWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface PersonCreateManyInput {
  create?: Maybe<PersonCreateInput[] | PersonCreateInput>;
  connect?: Maybe<PersonWhereUniqueInput[] | PersonWhereUniqueInput>;
}

export interface PersonUpdateManyDataInput {
  name?: Maybe<String>;
  gender?: Maybe<Gender>;
  isDroid?: Maybe<Boolean>;
  firstAppersIn?: Maybe<Episode>;
  appersIn?: Maybe<PersonUpdateappersInInput>;
}

export interface PlanetCreateOneInput {
  create?: Maybe<PlanetCreateInput>;
  connect?: Maybe<PlanetWhereUniqueInput>;
}

export interface PersonScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  gender?: Maybe<Gender>;
  gender_not?: Maybe<Gender>;
  gender_in?: Maybe<Gender[] | Gender>;
  gender_not_in?: Maybe<Gender[] | Gender>;
  isDroid?: Maybe<Boolean>;
  isDroid_not?: Maybe<Boolean>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updated?: Maybe<DateTimeInput>;
  updated_not?: Maybe<DateTimeInput>;
  updated_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updated_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updated_lt?: Maybe<DateTimeInput>;
  updated_lte?: Maybe<DateTimeInput>;
  updated_gt?: Maybe<DateTimeInput>;
  updated_gte?: Maybe<DateTimeInput>;
  firstAppersIn?: Maybe<Episode>;
  firstAppersIn_not?: Maybe<Episode>;
  firstAppersIn_in?: Maybe<Episode[] | Episode>;
  firstAppersIn_not_in?: Maybe<Episode[] | Episode>;
  AND?: Maybe<PersonScalarWhereInput[] | PersonScalarWhereInput>;
  OR?: Maybe<PersonScalarWhereInput[] | PersonScalarWhereInput>;
  NOT?: Maybe<PersonScalarWhereInput[] | PersonScalarWhereInput>;
}

export interface PlanetUpdateOneInput {
  create?: Maybe<PlanetCreateInput>;
  update?: Maybe<PlanetUpdateDataInput>;
  upsert?: Maybe<PlanetUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<PlanetWhereUniqueInput>;
}

export interface PersonUpsertWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput;
  update: PersonUpdateDataInput;
  create: PersonCreateInput;
}

export interface PersonUpdateInput {
  name?: Maybe<String>;
  gender?: Maybe<Gender>;
  isDroid?: Maybe<Boolean>;
  firstAppersIn?: Maybe<Episode>;
  appersIn?: Maybe<PersonUpdateappersInInput>;
  starships?: Maybe<StarshipUpdateManyInput>;
  friends?: Maybe<PersonUpdateManyInput>;
  planet?: Maybe<PlanetUpdateOneInput>;
}

export interface PlanetUpdateDataInput {
  name?: Maybe<String>;
  mass?: Maybe<Int>;
}

export interface PersonUpdateappersInInput {
  set?: Maybe<Episode[] | Episode>;
}

export interface PlanetWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  mass?: Maybe<Int>;
  mass_not?: Maybe<Int>;
  mass_in?: Maybe<Int[] | Int>;
  mass_not_in?: Maybe<Int[] | Int>;
  mass_lt?: Maybe<Int>;
  mass_lte?: Maybe<Int>;
  mass_gt?: Maybe<Int>;
  mass_gte?: Maybe<Int>;
  AND?: Maybe<PlanetWhereInput[] | PlanetWhereInput>;
  OR?: Maybe<PlanetWhereInput[] | PlanetWhereInput>;
  NOT?: Maybe<PlanetWhereInput[] | PlanetWhereInput>;
}

export interface StarshipUpdateManyInput {
  create?: Maybe<StarshipCreateInput[] | StarshipCreateInput>;
  update?: Maybe<
    | StarshipUpdateWithWhereUniqueNestedInput[]
    | StarshipUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | StarshipUpsertWithWhereUniqueNestedInput[]
    | StarshipUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<StarshipWhereUniqueInput[] | StarshipWhereUniqueInput>;
  connect?: Maybe<StarshipWhereUniqueInput[] | StarshipWhereUniqueInput>;
  set?: Maybe<StarshipWhereUniqueInput[] | StarshipWhereUniqueInput>;
  disconnect?: Maybe<StarshipWhereUniqueInput[] | StarshipWhereUniqueInput>;
  deleteMany?: Maybe<StarshipScalarWhereInput[] | StarshipScalarWhereInput>;
  updateMany?: Maybe<
    | StarshipUpdateManyWithWhereNestedInput[]
    | StarshipUpdateManyWithWhereNestedInput
  >;
}

export interface StarshipUpdateInput {
  name?: Maybe<String>;
  coordinates?: Maybe<StarshipUpdatecoordinatesInput>;
  speed?: Maybe<Int>;
}

export interface PersonUpdateDataInput {
  name?: Maybe<String>;
  gender?: Maybe<Gender>;
  isDroid?: Maybe<Boolean>;
  firstAppersIn?: Maybe<Episode>;
  appersIn?: Maybe<PersonUpdateappersInInput>;
  starships?: Maybe<StarshipUpdateManyInput>;
  friends?: Maybe<PersonUpdateManyInput>;
  planet?: Maybe<PlanetUpdateOneInput>;
}

export interface PersonUpdateManyMutationInput {
  name?: Maybe<String>;
  gender?: Maybe<Gender>;
  isDroid?: Maybe<Boolean>;
  firstAppersIn?: Maybe<Episode>;
  appersIn?: Maybe<PersonUpdateappersInInput>;
}

export interface PersonUpdateWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput;
  data: PersonUpdateDataInput;
}

export type StarshipWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface StarshipUpdatecoordinatesInput {
  set?: Maybe<Float[] | Float>;
}

export interface StarshipSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<StarshipWhereInput>;
  AND?: Maybe<
    StarshipSubscriptionWhereInput[] | StarshipSubscriptionWhereInput
  >;
  OR?: Maybe<StarshipSubscriptionWhereInput[] | StarshipSubscriptionWhereInput>;
  NOT?: Maybe<
    StarshipSubscriptionWhereInput[] | StarshipSubscriptionWhereInput
  >;
}

export interface StarshipUpdateManyDataInput {
  name?: Maybe<String>;
  coordinates?: Maybe<StarshipUpdatecoordinatesInput>;
  speed?: Maybe<Int>;
}

export interface StarshipUpdateManyWithWhereNestedInput {
  where: StarshipScalarWhereInput;
  data: StarshipUpdateManyDataInput;
}

export interface StarshipScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  speed?: Maybe<Int>;
  speed_not?: Maybe<Int>;
  speed_in?: Maybe<Int[] | Int>;
  speed_not_in?: Maybe<Int[] | Int>;
  speed_lt?: Maybe<Int>;
  speed_lte?: Maybe<Int>;
  speed_gt?: Maybe<Int>;
  speed_gte?: Maybe<Int>;
  AND?: Maybe<StarshipScalarWhereInput[] | StarshipScalarWhereInput>;
  OR?: Maybe<StarshipScalarWhereInput[] | StarshipScalarWhereInput>;
  NOT?: Maybe<StarshipScalarWhereInput[] | StarshipScalarWhereInput>;
}

export interface StarshipUpsertWithWhereUniqueNestedInput {
  where: StarshipWhereUniqueInput;
  update: StarshipUpdateDataInput;
  create: StarshipCreateInput;
}

export interface PersonSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PersonWhereInput>;
  AND?: Maybe<PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput>;
  OR?: Maybe<PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput>;
  NOT?: Maybe<PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput>;
}

export interface PlanetUpsertNestedInput {
  update: PlanetUpdateDataInput;
  create: PlanetCreateInput;
}

export interface PersonUpdateManyWithWhereNestedInput {
  where: PersonScalarWhereInput;
  data: PersonUpdateManyDataInput;
}

export interface PlanetUpdateInput {
  name?: Maybe<String>;
  mass?: Maybe<Int>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface StarshipPreviousValues {
  id: ID_Output;
  name: String;
  coordinates: Float[];
  speed: Int;
}

export interface StarshipPreviousValuesPromise
  extends Promise<StarshipPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  coordinates: () => Promise<Float[]>;
  speed: () => Promise<Int>;
}

export interface StarshipPreviousValuesSubscription
  extends Promise<AsyncIterator<StarshipPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  coordinates: () => Promise<AsyncIterator<Float[]>>;
  speed: () => Promise<AsyncIterator<Int>>;
}

export interface PersonEdge {
  node: Person;
  cursor: String;
}

export interface PersonEdgePromise extends Promise<PersonEdge>, Fragmentable {
  node: <T = PersonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PersonEdgeSubscription
  extends Promise<AsyncIterator<PersonEdge>>,
    Fragmentable {
  node: <T = PersonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Starship {
  id: ID_Output;
  name: String;
  coordinates: Float[];
  speed: Int;
}

export interface StarshipPromise extends Promise<Starship>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  coordinates: () => Promise<Float[]>;
  speed: () => Promise<Int>;
}

export interface StarshipSubscription
  extends Promise<AsyncIterator<Starship>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  coordinates: () => Promise<AsyncIterator<Float[]>>;
  speed: () => Promise<AsyncIterator<Int>>;
}

export interface StarshipNullablePromise
  extends Promise<Starship | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  coordinates: () => Promise<Float[]>;
  speed: () => Promise<Int>;
}

export interface StarshipSubscriptionPayload {
  mutation: MutationType;
  node: Starship;
  updatedFields: String[];
  previousValues: StarshipPreviousValues;
}

export interface StarshipSubscriptionPayloadPromise
  extends Promise<StarshipSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StarshipPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StarshipPreviousValuesPromise>() => T;
}

export interface StarshipSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StarshipSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StarshipSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StarshipPreviousValuesSubscription>() => T;
}

export interface PersonPreviousValues {
  id: ID_Output;
  name: String;
  gender?: Gender;
  isDroid: Boolean;
  createdAt: DateTimeOutput;
  updated: DateTimeOutput;
  firstAppersIn: Episode;
  appersIn: Episode[];
}

export interface PersonPreviousValuesPromise
  extends Promise<PersonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  gender: () => Promise<Gender>;
  isDroid: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updated: () => Promise<DateTimeOutput>;
  firstAppersIn: () => Promise<Episode>;
  appersIn: () => Promise<Episode[]>;
}

export interface PersonPreviousValuesSubscription
  extends Promise<AsyncIterator<PersonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<Gender>>;
  isDroid: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updated: () => Promise<AsyncIterator<DateTimeOutput>>;
  firstAppersIn: () => Promise<AsyncIterator<Episode>>;
  appersIn: () => Promise<AsyncIterator<Episode[]>>;
}

export interface AggregatePerson {
  count: Int;
}

export interface AggregatePersonPromise
  extends Promise<AggregatePerson>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePersonSubscription
  extends Promise<AsyncIterator<AggregatePerson>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PlanetPreviousValues {
  id: ID_Output;
  name: String;
  mass: Int;
}

export interface PlanetPreviousValuesPromise
  extends Promise<PlanetPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Int>;
}

export interface PlanetPreviousValuesSubscription
  extends Promise<AsyncIterator<PlanetPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  mass: () => Promise<AsyncIterator<Int>>;
}

export interface StarshipConnection {
  pageInfo: PageInfo;
  edges: StarshipEdge[];
}

export interface StarshipConnectionPromise
  extends Promise<StarshipConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StarshipEdge>>() => T;
  aggregate: <T = AggregateStarshipPromise>() => T;
}

export interface StarshipConnectionSubscription
  extends Promise<AsyncIterator<StarshipConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StarshipEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStarshipSubscription>() => T;
}

export interface AggregateStarship {
  count: Int;
}

export interface AggregateStarshipPromise
  extends Promise<AggregateStarship>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStarshipSubscription
  extends Promise<AsyncIterator<AggregateStarship>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PlanetEdge {
  node: Planet;
  cursor: String;
}

export interface PlanetEdgePromise extends Promise<PlanetEdge>, Fragmentable {
  node: <T = PlanetPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlanetEdgeSubscription
  extends Promise<AsyncIterator<PlanetEdge>>,
    Fragmentable {
  node: <T = PlanetSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Person {
  id: ID_Output;
  name: String;
  gender?: Gender;
  isDroid: Boolean;
  createdAt: DateTimeOutput;
  updated: DateTimeOutput;
  firstAppersIn: Episode;
  appersIn: Episode[];
}

export interface PersonPromise extends Promise<Person>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  gender: () => Promise<Gender>;
  isDroid: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updated: () => Promise<DateTimeOutput>;
  firstAppersIn: () => Promise<Episode>;
  appersIn: () => Promise<Episode[]>;
  starships: <T = FragmentableArray<Starship>>(args?: {
    where?: StarshipWhereInput;
    orderBy?: StarshipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  friends: <T = FragmentableArray<Person>>(args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  planet: <T = PlanetPromise>() => T;
}

export interface PersonSubscription
  extends Promise<AsyncIterator<Person>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<Gender>>;
  isDroid: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updated: () => Promise<AsyncIterator<DateTimeOutput>>;
  firstAppersIn: () => Promise<AsyncIterator<Episode>>;
  appersIn: () => Promise<AsyncIterator<Episode[]>>;
  starships: <T = Promise<AsyncIterator<StarshipSubscription>>>(args?: {
    where?: StarshipWhereInput;
    orderBy?: StarshipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  friends: <T = Promise<AsyncIterator<PersonSubscription>>>(args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  planet: <T = PlanetSubscription>() => T;
}

export interface PersonNullablePromise
  extends Promise<Person | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  gender: () => Promise<Gender>;
  isDroid: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updated: () => Promise<DateTimeOutput>;
  firstAppersIn: () => Promise<Episode>;
  appersIn: () => Promise<Episode[]>;
  starships: <T = FragmentableArray<Starship>>(args?: {
    where?: StarshipWhereInput;
    orderBy?: StarshipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  friends: <T = FragmentableArray<Person>>(args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  planet: <T = PlanetPromise>() => T;
}

export interface PersonSubscriptionPayload {
  mutation: MutationType;
  node: Person;
  updatedFields: String[];
  previousValues: PersonPreviousValues;
}

export interface PersonSubscriptionPayloadPromise
  extends Promise<PersonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PersonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PersonPreviousValuesPromise>() => T;
}

export interface PersonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PersonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PersonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PersonPreviousValuesSubscription>() => T;
}

export interface PlanetSubscriptionPayload {
  mutation: MutationType;
  node: Planet;
  updatedFields: String[];
  previousValues: PlanetPreviousValues;
}

export interface PlanetSubscriptionPayloadPromise
  extends Promise<PlanetSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlanetPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlanetPreviousValuesPromise>() => T;
}

export interface PlanetSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlanetSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlanetSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlanetPreviousValuesSubscription>() => T;
}

export interface Planet {
  id: ID_Output;
  name: String;
  mass: Int;
}

export interface PlanetPromise extends Promise<Planet>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Int>;
}

export interface PlanetSubscription
  extends Promise<AsyncIterator<Planet>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  mass: () => Promise<AsyncIterator<Int>>;
}

export interface PlanetNullablePromise
  extends Promise<Planet | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  mass: () => Promise<Int>;
}

export interface PersonConnection {
  pageInfo: PageInfo;
  edges: PersonEdge[];
}

export interface PersonConnectionPromise
  extends Promise<PersonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PersonEdge>>() => T;
  aggregate: <T = AggregatePersonPromise>() => T;
}

export interface PersonConnectionSubscription
  extends Promise<AsyncIterator<PersonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PersonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePersonSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PlanetConnection {
  pageInfo: PageInfo;
  edges: PlanetEdge[];
}

export interface PlanetConnectionPromise
  extends Promise<PlanetConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlanetEdge>>() => T;
  aggregate: <T = AggregatePlanetPromise>() => T;
}

export interface PlanetConnectionSubscription
  extends Promise<AsyncIterator<PlanetConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlanetEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlanetSubscription>() => T;
}

export interface AggregatePlanet {
  count: Int;
}

export interface AggregatePlanetPromise
  extends Promise<AggregatePlanet>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlanetSubscription
  extends Promise<AsyncIterator<AggregatePlanet>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface StarshipEdge {
  node: Starship;
  cursor: String;
}

export interface StarshipEdgePromise
  extends Promise<StarshipEdge>,
    Fragmentable {
  node: <T = StarshipPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StarshipEdgeSubscription
  extends Promise<AsyncIterator<StarshipEdge>>,
    Fragmentable {
  node: <T = StarshipSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Episode",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Starship",
    embedded: false
  },
  {
    name: "Planet",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
