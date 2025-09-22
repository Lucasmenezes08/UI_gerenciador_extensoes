import { create } from 'zustand'


type FilterState = {
  items: any[];
  filter: string;
  currentTheme : 'dark' | 'light';
  setItems: (items: any[]) => void;
  remove: (id: string) => void;
  changeActive: (itemActive:string) => void;
  setFilter : (newFilter:  'All' | 'Active' | 'Inactive') => void;
  setTheme : (newTheme: 'dark' | 'light') => void;
};

export const useFilter = create<FilterState>((set) => ({
    items : [],
    filter: 'All',
    currentTheme : 'dark',
    setItems: (items:any[]) => set({items : items}),
    remove : (itemRemove:string) => set((state:any) => ({
        items: state.items.filter((item:any) => item.name !== itemRemove)
    })),
    changeActive : (itemActive:string) => set((state:any) => ({
      items: state.items.map((item:any) => item.name === itemActive ? {...item , isActive : !item.isActive } : item)
    })),

    setFilter: (newFilter : 'All' | 'Active' | 'Inactive') => set({filter : newFilter}),

    setTheme: (newTheme : 'dark' | 'light') => set({currentTheme : newTheme}),
}));