import React, { createContext } from "react";
import { useContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (!timersCtx) {
    throw new Error("TimersContext is null - that should not be the case!");
  }
}

type TimersContextProviderProps = {
  children: React.ReactNode;
};

export default function TimersContextProvider(
  props: TimersContextProviderProps
) {
  const { children } = props;

  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer: (timerData) => {},
    startTimer: () => {},
    stopTimer: () => {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
