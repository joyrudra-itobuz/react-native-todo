import React from 'react';
import {Dispatch, ReactNode, createContext, useMemo, useState} from 'react';

export type Profile = {
  name?: string;
  email: string;
  profileImage: string;
  phoneNumber?: string;
  accessToken: string;
};

type UserContextType = {
  profile: Profile | null;
  setProfile: Dispatch<React.SetStateAction<Profile | null>>;
};

export const UserContext = createContext<UserContextType>({
  profile: null,
  setProfile: () => new Error('Function Not Implemented!'),
});

export function UserContextProvider({children}: {children: ReactNode}) {
  const [profile, setProfile] = useState<Profile | null>(null);

  const context: UserContextType = useMemo(
    () => ({
      profile,
      setProfile,
    }),
    [profile],
  );

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}
