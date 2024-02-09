import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import {Note} from '../types/noteTypes';

type NoteContextType = {
  notes: Array<Note>;
  setNotes: Dispatch<SetStateAction<Array<Note>>>;
};

export const NoteContext = createContext<NoteContextType>({
  notes: [],
  setNotes: () => new Error('Set Note function Not Implemented'),
});

export default function NoteContextProvider({
  children,
}: Readonly<{children: ReactNode}>) {
  const [notes, setNotes] = useState<Array<Note>>([]);

  const context: NoteContextType = useMemo(() => ({notes, setNotes}), [notes]);

  return (
    <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
  );
}
