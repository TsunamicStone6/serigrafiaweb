/**
 * useModal Hook
 * Single Responsibility: Modal state management
 * Interface Segregation: Simple, focused interface
 */

'use client';

import { useState, useCallback } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = useCallback((index: number = 0) => {
    setSelectedIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSelectedIndex(null);
  }, []);

  const next = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? prev + 1 : 0));
  }, []);

  const prev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
  }, []);

  return {
    isOpen,
    selectedIndex,
    open,
    close,
    next,
    prev,
  };
}
