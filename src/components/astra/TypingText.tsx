import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function TypingText({
  text,
  speed = 55,
  className,
  restartKey,
}: {
  text: string;
  speed?: number;
  className?: string;
  restartKey?: string | number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) {
      setI(text.length);
      return;
    }
    setI(0);
    const id = setInterval(() => {
      setI((n) => {
        if (n >= text.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduce, restartKey]);

  return (
    <span className={className}>
      {text.slice(0, i)}
      <span className="astra-caret" aria-hidden="true" />
    </span>
  );
}
