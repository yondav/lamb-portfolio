import sdk from '@lamb/gqlsdk';
import { useRouter } from 'next/router';
import type { Session } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';
import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Nullable<T> = T | null | undefined;

type Pending<T> = T | 'pending';

type PartialDeep<K> = {
  [attr in keyof K]?: K[attr] extends object ? PartialDeep<K[attr]> : K[attr];
};

interface AuthContextState {
  adminRequest: Nullable<boolean>;
  isPreview: Nullable<boolean>;
  isVerified: Nullable<boolean>;
  session: Nullable<Session>;
  authenticate(): Promise<void>;
}

// interface AuthContext {
//   data: AuthContextState;
//   update(payload: PartialDeep<AuthContextState>): void;
// }

const INITIAL_STATE: AuthContextState = {
  adminRequest: undefined,
  isPreview: undefined,
  isVerified: undefined,
  session: undefined,
  authenticate: async () => null as unknown as Promise<void>,
};

const AuthContext = createContext(INITIAL_STATE);

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AuthContextState>(INITIAL_STATE);

  const { data: session } = useSession();

  const router = useRouter();
  const { getUser } = sdk();

  const authenticate = useCallback(async () => {
    try {
      await signIn('google', {
        callbackUrl: process.env.NEXT_PUBLIC_LOCATION,
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const verifyUser = useCallback(async () => {
    try {
      if (!session?.user?.name || !session?.user?.email) return false;

      const { allUser } = await getUser({
        name: session.user?.name,
        email: session.user?.email,
        verified: true,
      });

      if (!!allUser[0]) setData(prev => ({ ...prev, isVerified: true }));
      else {
        setData(prev => ({ ...prev, isVerified: false }));
        await signOut();
      }
    } catch (err) {
      console.error(err);
    }
  }, [getUser, session]);

  useEffect(() => {
    if (session) verifyUser();
  }, [session]);

  useEffect(() => {
    if (session === null && router.isPreview) router.push('/api/exit-preview');
  }, [router, session]);

  const value: AuthContextState = useMemo(
    () => ({
      ...data,
      adminRequest: Object.keys(router.query)
        .map(qp => qp.toLowerCase())
        .includes(process.env.NEXT_PUBLIC_ADMIN_QUERY_SECRET as string),
      isPreview: router.isPreview,
      session,
      authenticate,
    }),
    [authenticate, data, router, session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
