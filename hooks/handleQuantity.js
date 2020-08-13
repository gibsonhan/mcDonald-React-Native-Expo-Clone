import { useState } from 'react';

export default (type) => {
  const [quantity, setQuanity] = useState(0);

  return type === 'increase'
    ? setQuanity((prev) => prev + 1)
    : setQuanity((prev) => {
        return prev === 0 ? 0 : prev - 1;
      });
};
