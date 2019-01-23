import * as React from 'react';
import isEmpty from 'lodash/isEmpty';

export const hasContent = (content: any): boolean => {
  return !isEmpty(content);
};

// Used for testing
export const sleep = async (ms: number): Promise<{}> =>
  new Promise((resolve) => setTimeout(resolve, ms));


// Used for testing
export const sleepBetween = async (min: number, max: number): Promise<{}> => {
  const minimum = min * 1000;
  const maximum = max * 1000;
  const timeout = Math.random() * (maximum - minimum) + minimum;
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
