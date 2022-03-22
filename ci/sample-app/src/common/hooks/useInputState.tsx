import { useState, useCallback, useMemo } from 'react';

/**
 * CUSTOM HOOK
 *
 * Reduce boilerplate for controlled form input changes (standard typing)
 */
const useInputState = (initialValue = '') => {
  const [value, setValue] = useState(initialValue as string);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const resetInput = useCallback(() => {
    setValue('');
  }, []);

  const hookReturn = useMemo(
    () => ({ state: { value }, actions: { handleChange, resetInput } }),
    [value, handleChange, resetInput]
  );

  return hookReturn;
};

export default useInputState;

// ! v1 without useCallback & useMemo
// import { useState } from 'react';

// /**
//  * CUSTOM HOOK
//  *
//  * Reduce boilerplate for controlled form input changes (standard typing)
//  */
// const useInputState = (initialValue: string = '') => {
//   const [value, setValue] = useState(initialValue as string);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };
//   const resetInput = () => {
//     setValue('');
//   };
//   return { state: { value }, actions: { handleChange, resetInput } };
// };

// export default useInputState;
