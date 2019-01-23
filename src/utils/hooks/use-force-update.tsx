import * as React from 'react';

type IForceUpdate = React.Dispatch<React.SetStateAction<null>>;

// nice util to hold on to
export const useForceUpdate = (): IForceUpdate => React.useState(null)[1];
