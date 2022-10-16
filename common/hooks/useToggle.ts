import { useState } from 'react';

const useToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive((value) => !value);
  };

  return {
    toggle,
    isActive,
  };
};

export default useToggle;
