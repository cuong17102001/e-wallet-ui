import { create } from 'zustand'

export const useStore = create((set) => ({
  users: null,
  setUsers: (user) => set((state) => ({ users: user })),
  removeUsers: () => set({ bears: 0 }),
}))