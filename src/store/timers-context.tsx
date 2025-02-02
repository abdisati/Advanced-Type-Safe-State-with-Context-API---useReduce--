import React, { createContext, useReducer } from "react";
import { useContext } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimerState = {
  isRunning: true,
  timers: [],
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

  return timersCtx;
}

type TimersContextProviderProps = {
  children: React.ReactNode;
};

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;
function timersReducer(state: TimerState, action: Action): TimerState {
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    };
  }
  return state;
}

export default function TimersContextProvider(
  props: TimersContextProviderProps
) {
  const [timerState, dispatch] = useReducer(timersReducer, initialState);

  const { children } = props;

  const ctx: TimersContextValue = {
    isRunning: timerState.isRunning,
    timers: timerState.timers,
    addTimer: (timerData) => {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer: () => {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimer: () => {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
