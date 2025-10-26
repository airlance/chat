import { useRef, useEffect } from 'react';
import type { ModalProps } from '../types/modal';
import { createPortal } from 'react-dom';

/**
 * Компонент модального окна
 */
export function Modal({
                          isOpen,
                          onClose,
                          children,
                          backdropBlur = true,
                          className = ''
                      }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Обработка клика по оверлею
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Обработка нажатия Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalContent = (
        <div
            ref={modalRef}
            className={`modal fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 ${
                isOpen ? 'show' : ''
            }`}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`modal-overlay absolute inset-0 bg-slate-900/60 ${
                    backdropBlur ? 'backdrop-blur-sm' : ''
                }`}
                onClick={handleOverlayClick}
                aria-hidden="true"
            />
            <div className={`modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5 ${className}`}>
                {children}
            </div>
        </div>
    )

    return createPortal(modalContent, document.body);
}