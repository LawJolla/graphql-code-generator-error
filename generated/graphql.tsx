type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  user?: Maybe<User>;
};

export type User = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};
export type UserFragFragment = { __typename?: "User" } & Pick<User, "name">;

export type UserQueryVariables = {};

export type UserQuery = { __typename?: "Query" } & {
  user: Maybe<{ __typename?: "User" } & Pick<User, "id"> & UserFragFragment>;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export const UserFragFragmentDoc = gql`
  fragment UserFrag on User {
    name
  }
`;
export const UserDocument = gql`
  query user {
    user {
      id
      ...UserFrag
    }
  }
  ${UserFragFragmentDoc}
`;

export class UserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UserQuery, UserQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UserQuery, UserQueryVariables>
        query={UserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type UserProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<UserQuery, UserQueryVariables>
> &
  TChildProps;
export function withUser<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UserQuery,
        UserQueryVariables,
        UserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    UserQuery,
    UserQueryVariables,
    UserProps<TChildProps>
  >(UserDocument, operationOptions);
}
