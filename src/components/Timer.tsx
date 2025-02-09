import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer(props: TimerProps) {
  const { name, duration } = props;
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemaining] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemaining((prevTime) => {
          if (prevTime <= 0) {
            return 0;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current !== null) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration} value={remainingTime / 1000} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
