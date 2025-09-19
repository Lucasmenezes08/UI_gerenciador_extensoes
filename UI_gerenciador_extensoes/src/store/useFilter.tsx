import { create } from 'zustand'

export const useFilter = create((set:any) => ({
    status: 'All',

    handleState : (state:string) => set(() => ({status : state})),
}))