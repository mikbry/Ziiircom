const dispatcher = {
  states: [],
  next: 0,
  useState(initialValue) {
    if (dispatcher.next === dispatcher.states.length) {
      const state = {
        value: initialValue,
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
