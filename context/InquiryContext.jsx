'use client';

import { createContext, useContext, useState } from 'react';

const InquiryContext = createContext(null);

export function InquiryProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) =>
      prev.find((i) => i.name === item.name) ? prev : [...prev, item]
    );
  };
  const removeItem = (name) =>
    setItems((prev) => prev.filter((i) => i.name !== name));
  const clearItems = () => setItems([]);

  return (
    <InquiryContext.Provider value={{ items, addItem, removeItem, clearItems }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider');
  return ctx;
}