import React, { useState, useCallback } from 'react';
import { AppState, AppAction, initialState } from './stateReducer';

export const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState(),
  dispatch: () => {},
});
