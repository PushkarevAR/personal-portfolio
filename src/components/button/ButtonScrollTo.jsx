import React from "react";

import { scrollTo } from "../../utils/scrollTo";

const ButtonScrollTo = ({ toId, toRef, duration, children, menu }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration, menu });

  return <button onClick={handleClick}>{children}</button>;
};

export default ButtonScrollTo;
