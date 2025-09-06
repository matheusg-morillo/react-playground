import { useRef } from 'react';

function createPromise() {
  let resolve, reject;
  new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject };
}

export const useDebounce = (func: (args: unknown[]) => Promise<unknown>, timems: number) => {
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);
  const promiseRef = useRef(createPromise());

  return (args: unknown[]) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      func(args)
        .then(promiseRef.current.resolve)
        .catch(promiseRef.current.reject);
      timeoutRef.current = null;
    }, timems)
  }
}
