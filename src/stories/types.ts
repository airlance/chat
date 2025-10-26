export interface IStory {
    id: string | number;
    name: string;
    avatar: string;
    hasNewStory?: boolean;
}

export interface StoriesProps {
    stories: IStory[];
    title?: string;
    onAddStory?: () => void;
}