import { atom } from 'jotai';
import axios, { AxiosError } from 'axios';
import { authAtom } from '../../auth/model/auth.state';
import { API } from '../api/api';
import { User } from './user.model';

export const profileAtom = atom<UserState>({
  profile: null,
  isLoading: false,
  error: null,
});

export const loadProfileAtom = atom(
  async (get) => {
    return get(profileAtom);
  },
  async (get, set) => {
    const { access_token } = await get(authAtom);
    set(profileAtom, {
      isLoading: true,
      profile: null,
      error: null,
    });
    try {
      const { data } = await axios.get<User>(API.profile, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      set(profileAtom, {
        isLoading: false,
        profile: data,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(profileAtom, {
          isLoading: false,
          profile: null,
          error: error.response?.data.message,
        });
      }
    }
  }
);

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}
