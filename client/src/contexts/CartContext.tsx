import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { services, type ServiceItem } from '@/data/services';

type CartItem = ServiceItem & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  totalQuantity: number;
  fixedSubtotal: number;
  quoteItemCount: number;
  addItem: (service: ServiceItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setCartOpen: (open: boolean) => void;
};

const STORAGE_KEY = 'dequan-cart';
const CartContext = createContext<CartContextValue | undefined>(undefined);

function getInitialItems(): CartItem[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsedItems = stored ? JSON.parse(stored) : [];

    return parsedItems
      .map((storedItem: { id: string; quantity: number }) => {
        const service = services.find((item) => item.id === storedItem.id);
        return service
          ? {
              ...service,
              quantity: Math.max(1, Math.min(Number(storedItem.quantity) || 1, 99)),
            }
          : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialItems);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedItems = items.map(({ id, quantity }) => ({ id, quantity }));
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedItems));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    const fixedSubtotal = items.reduce(
      (total, item) => total + (item.price ? item.price * item.quantity : 0),
      0
    );
    const quoteItemCount = items.filter((item) => !item.price).length;

    return {
      items,
      isCartOpen,
      totalQuantity,
      fixedSubtotal,
      quoteItemCount,
      addItem: (service) => {
        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.id === service.id);

          if (existingItem) {
            return currentItems.map((item) =>
              item.id === service.id
                ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
                : item
            );
          }

          return [...currentItems, { ...service, quantity: 1 }];
        });
      },
      updateQuantity: (id, quantity) => {
        setItems((currentItems) =>
          currentItems
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, Math.min(quantity, 99)) }
                : item
            )
            .filter((item) => item.quantity > 0)
        );
      },
      removeItem: (id) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      },
      clearCart: () => setItems([]),
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      setCartOpen,
    };
  }, [isCartOpen, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
