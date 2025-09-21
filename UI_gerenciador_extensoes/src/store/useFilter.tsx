import { create } from 'zustand'


type FilterState = {
  items: any[];
  setItems: (items: any[]) => void;
  remove: (id: string) => void;
};

export const useFilter = create<FilterState>((set) => ({
    items : [],
    setItems: (items:any[]) => set({items : items}),
    remove : (itemRemove:string) => set((state:any) => ({
        items: state.items.filter((item:any) => item.name !== itemRemove)
    })),
}));