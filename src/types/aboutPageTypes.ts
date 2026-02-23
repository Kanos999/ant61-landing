export interface TeamMember {
  name: string;
  role: string;
  imageURL: string;
}

export interface HistoryCard {
    id: number;
  date: string;
  description: string;
  media?: string;
}