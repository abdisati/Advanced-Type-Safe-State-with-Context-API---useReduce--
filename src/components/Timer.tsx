import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer(props: TimerProps) {
  const { name, duration } = props;
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemaining] = useState(duration * 1000);

  if (remainingTime <= 0 && interval.current !== null) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    interval.current = setInterval(() => {
      setRemaining((prevTime) => prevTime - 50);
    }, 50);
    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current);
      }
    };
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
