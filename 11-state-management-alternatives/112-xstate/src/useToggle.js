import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "active",
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      on: { TOGGLE: "inactive" }
    }
  }
});

export const useToggle = () => {
  const [current, send] = useMachine(toggleMachine);
  const active = current.matches("active");

  const toggle = () => send("TOGGLE");

  return {
    active,
    toggle
  }
}