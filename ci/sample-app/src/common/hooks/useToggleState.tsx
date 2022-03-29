import { useState, useCallback, useMemo } from 'react';

/**
 * CUSTOM HOOK
 *
 * A simple ON/OFF boolean state
 */
const useToggleState = (initialValue = false) => {
  const [toggleState, setToggleState] = useState(initialValue as boolean);

  const toggle = useCallback(() => {
    setToggleState(prevStatus => !prevStatus);
  }, []);

  const hookReturn = useMemo(
    () => [toggleState, toggle],
    [toggleState, toggle]
  );

  return hookReturn as [boolean, () => void];
};

export default useToggleState;

// ! v1 without useCallback & useMemo
// import { useState } from 'react';

// /**
//  * CUSTOM HOOK
//  *
//  * A simple ON/OFF boolean state
//  */
// const useToggleState = (initialValue: boolean = false) => {
//   const [toggleState, setToggleState] = useState(initialValue as boolean);
//   const toggle = () => {
//     setToggleState(!toggleState);
//   };
//   return [toggleState, toggle] as [boolean, () => void];
// };

// export default useToggleState;
