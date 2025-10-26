import { useState, useEffect, useRef } from 'react';
import type { ModalOptions, UseModalReturn } from "../types/modal.ts";

function getBrowserScrollbarWidth(): number {
    return window.innerWidth - document.documentElement.clientWidth;
}

/**
 * Хук для управления состоянием модального окна
 * @param options - Опции с колбэками onOpen и onClose
 * @returns Объект с состоянием и методами управления модальным окном
 */
export function useModal(options: ModalOptions = {}): UseModalReturn {
    const [isOpen, setIsOpen] = useState(false);
    const scrollbarWidthRef = useRef(0);
    const isInitialMount = useRef(true);

    // Получаем ширину скроллбара при монтировании
    useEffect(() => {
        scrollbarWidthRef.current = getBrowserScrollbarWidth();
    }, []);

    // Управляем блокировкой скролла и вызовом колбэков
    useEffect(() => {
        const html = document.documentElement;

        if (isOpen) {
            html.style.paddingRight = `${scrollbarWidthRef.current}px`;
            html.style.overflow = 'hidden';

            if (!isInitialMount.current) {
                options.onOpen?.();
            }
        } else {
            html.style.removeProperty('padding-right');
            html.style.removeProperty('overflow');

            if (!isInitialMount.current) {
                options.onClose?.();
            }
        }

        if (isInitialMount.current) {
            isInitialMount.current = false;
        }

        // Cleanup при размонтировании
        return () => {
            html.style.removeProperty('padding-right');
            html.style.removeProperty('overflow');
        };
    }, [isOpen, options]);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prev => !prev);

    return { isOpen, open, close, toggle };
}