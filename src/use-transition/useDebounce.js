import { useRef } from 'react';

function createPromise() {
  let resolve, reject;
  new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject };
}

export const useDebounce = (func, timems) => {
  const timeoutRef = useRef(null);
  const promiseRef = useRef(createPromise());

  return (args) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      func(args)
        .then(promiseRef.current.resolve)
        .catch(promiseRef.current.reject);
      timeoutRef.current = null;
    }, timems)
  }
}
