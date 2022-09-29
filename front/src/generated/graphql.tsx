import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateRetrospectDto = {
  content: Scalars['String'];
  date: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteRetrospect: Scalars['Boolean'];
  updateRetrospect: Retrospect;
  writeRetrospect: Retrospect;
};


export type MutationDeleteRetrospectArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateRetrospectArgs = {
  body: UpdateRetrospectDto;
};


export type MutationWriteRetrospectArgs = {
  body: CreateRetrospectDto;
};

export type Query = {
  __typename?: 'Query';
  getAll: Array<Retrospect>;
  getOne: Retrospect;
};


export type QueryGetOneArgs = {
  id: Scalars['Float'];
};

export type Retrospect = {
  __typename?: 'Retrospect';
  content: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type UpdateRetrospectDto = {
  content: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type GetAllRetrospectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRetrospectQuery = { __typename?: 'Query', getAll: Array<{ __typename?: 'Retrospect', id: number, title: string, content: string, date: string }> };

export type GetOneRetrospectQueryVariables = Exact<{
  postId: Scalars['Float'];
}>;


export type GetOneRetrospectQuery = { __typename?: 'Query', getOne: { __typename?: 'Retrospect', id: number, title: string, content: string, date: string } };


export const GetAllRetrospectDocument = gql`
    query GetAllRetrospect {
  getAll {
    id
    title
    content
    date
  }
}
    `;

export function useGetAllRetrospectQuery(options?: Omit<Urql.UseQueryArgs<GetAllRetrospectQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllRetrospectQuery, GetAllRetrospectQueryVariables>({ query: GetAllRetrospectDocument, ...options });
};
export const GetOneRetrospectDocument = gql`
    query GetOneRetrospect($postId: Float!) {
  getOne(id: $postId) {
    id
    title
    content
    date
  }
}
    `;

export function useGetOneRetrospectQuery(options: Omit<Urql.UseQueryArgs<GetOneRetrospectQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOneRetrospectQuery, GetOneRetrospectQueryVariables>({ query: GetOneRetrospectDocument, ...options });
};