import * as React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from '../../pages/Loading';

// TODO: Type this better
const useAsyncComponent = (component: React.ReactNode) => {
  return Loadable({
    loader: () => component as Promise<{}>,
    loading: () => <LoadingPage />,
    render: (Component: any, props) => (
      <Component<React.ReactNode> {...props} />
    ),
  });
};

export { useAsyncComponent };
