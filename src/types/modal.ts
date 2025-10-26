export interface ModalOptions {
    onOpen?: () => void;
    onClose?: () => void;
}

export interface UseModalReturn {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    backdropBlur?: boolean;
    className?: string;
}