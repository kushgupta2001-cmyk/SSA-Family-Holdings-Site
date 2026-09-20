export type PageRoute = 'home' | 'about' | 'investments' | 'portfolio' | 'contact';

export interface LeadershipMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  linkedin: string;
  image: string;
}

export interface InquiryFormData {
  fullName: string;
  institutionalEmail: string;
  investmentArea: 'Private Markets' | 'Public Markets' | 'Real Estate';
  message: string;
}

export interface StrategicPillar {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: 'Private Markets' | 'Strategic Real Estate' | 'Public Markets';
  sector: string;
  vintage: string;
  location: string;
  status: 'Active Holding' | 'Strategic Core' | 'Growth Phase';
  thesis: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  imageUrl: string;
}
