export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
}

export interface SocialLink {
    platform: 'Facebook' | 'Instagram' | 'TikTok';
    url: string;
    icon: any; // Lucide icon component type
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}