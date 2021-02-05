const dispatcher = {
  states: [],
  next: 0,
  reset() {
    dispatcher.states = [];
    dispatcher.next = 0;
  },
  useState(initialValue) {
    if (dispatcher.next === dispatcher.states.length) {
      const value = typeof initialValue === 'function' ? initialValue() : initialValue;
      const state = {
        value,
        setState(newValue) {
          state.value = newValue;
          dispatcher.next = 0;
        },
      };
      dispatcher.states.push(state);
    }
    const state = dispatcher.states[dispatcher.next];
    dispatcher.next += 1;
    return [state.value, state.setState];
  },
};

export default dispatcher.useState;

export { dispatcher };
