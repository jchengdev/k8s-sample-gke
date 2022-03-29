import { useState, useEffect, useReducer } from 'react';

const getInitialValue = <T,>(key: string, defaultValue: T): T => {
  let initial = undefined as unknown as T;
  if (typeof window !== 'undefined') {
    // getting stored value
    const saved = window.localStorage.getItem(key);
    try {
      initial = saved !== null ? JSON.parse(saved || '') : defaultValue;
    } catch (e) {
      console.error('[useLocalStorage] JSON.parse error -> ' + e);
    }
  } // * else ignored (Server Side Rendering)
  return initial || defaultValue;
};

/**
 * CUSTOM HOOK
 *
 * Same as `useState` (state+action). Additionally, embeds `useEffect` to synchronize state `T` with a `window.localstorage`'s `key`
 *
 * In SSR the `initialState` always has the `defaultValue`
 */
const useLocalStorageState = <S,>(key: string, defaultValue: S) => {
  const [st, setST] = useState(() => {
    return getInitialValue(key, defaultValue);
  }); // * https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function

  useEffect(() => {
    try {
      // storing input name
      window.localStorage.setItem(key, JSON.stringify(st));
    } catch (e) {
      console.error('[useLocalStorageState] JSON.stringify error -> ' + e);
    }
  }, [key, st]);

  return [st, setST] as [S, (value: S) => void];
};

/**
 * CUSTOM HOOK
 *
 * Same as `useReducer` (state+dispatch). Additionally, embeds `useEffect` to synchronize state `T` with a `window.localstorage`'s `key`
 *
 * In SSR the `initialState` has always the `defaultValue`
 */
const useLocalStorageReducer = <S, A>(
  key: string,
  defaultValue: S,
  reducer: React.Reducer<S, A>
) => {
  const [st, dp] = useReducer(reducer, defaultValue, initArg => {
    return getInitialValue(key, initArg);
  });

  useEffect(() => {
    try {
      // storing input name
      window.localStorage.setItem(key, JSON.stringify(st));
    } catch (e) {
      console.error('[useLocalStorageReducer] JSON.stringify error -> ' + e);
    }
  }, [key, st]);

  return [st, dp] as [S, React.Dispatch<A>];
};

export { useLocalStorageState, useLocalStorageReducer };
