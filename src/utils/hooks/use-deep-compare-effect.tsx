import * as React from 'react';
import isEqual from 'lodash/isEqual';

// From kent C Dodds - don't think it's needed anymore but a nice util
function usePrevious(value: any) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function useDeepCompareEffect(callback: any, inputs: any[]) {
  const cleanupRef = React.useRef(undefined);
  const previousInputs = usePrevious(inputs);

  React.useEffect(() => {
    if (!isEqual(previousInputs, inputs)) {
      cleanupRef.current = callback();
    }
    return cleanupRef.current;
  });
}

export { useDeepCompareEffect };
