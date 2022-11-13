import { useState } from 'react';

const useToggle = (initalValue: boolean = false) => {
  const [isActive, setIsActive] = useState(initalValue);

  const toggle = (newValue?: boolean) => {
    if (!newValue) {
      setIsActive((value) => !value);
      return;
    }
    setIsActive(newValue);
  };

  return {
    toggle,
    isActive,
  };
};

export default useToggle;
