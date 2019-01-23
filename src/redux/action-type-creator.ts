type IActions<T> = T[];

interface IStringIndex<U> {
  [key: string]: U;
}

// TODO: Type this better. If done correctly it should be able to get autocomplete/intellisense
export const createActionTypes = <T, U>(
  namespace: T,
  actions: IActions<U>
): IStringIndex<U> => {
  return actions.reduce(
    (result: IStringIndex<U>, action: U): IStringIndex<U> => {
      (result as any)[action] = `${namespace}/${action}`;
      (result as any)[`${action}_PENDING`] = `${namespace}/${action}_PENDING`;
      (result as any)[
        `${action}_FULFILLED`
      ] = `${namespace}/${action}_FULFILLED`;
      (result as any)[`${action}_REJECTED`] = `${namespace}/${action}_REJECTED`;
      return result;
    },
    {} as IStringIndex<U>
  );
};
