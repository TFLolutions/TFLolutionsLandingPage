export interface Service {
    iconName: string;
    title: string;
    description: string;
    color: string;
    bgStyle?: string;
}

export interface Technology {
    icon: React.ComponentType;
    name: string;
    category: string;
}

export interface SEOProps {
    title: string;
    description: string;
    keywords: string;
}

export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    selectedService: Service | null;
} 