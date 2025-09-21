import { create } from 'zustand'


type FilterState = {
  items: any[];
  filter: string;
  setItems: (items: any[]) => void;
  remove: (id: string) => void;
  changeActive: (itemActive:string) => void;
  setFilter : (newFilter:  'All' | 'Active' | 'Inactive') => void;
};

export const useFilter = create<FilterState>((set) => ({
    items : [],
    filter: 'All',
    setItems: (items:any[]) => set({items : items}),
    remove : (itemRemove:string) => set((state:any) => ({
        items: state.items.filter((item:any) => item.name !== itemRemove)
    })),
    changeActive : (itemActive:string) => set((state:any) => ({
      items: state.items.map((item:any) => item.name === itemActive ? {...item , isActive : !item.isActive } : item)
    })),

    setFilter: (newFilter : 'All' | 'Active' | 'Inactive') => set({filter : newFilter}),
}));