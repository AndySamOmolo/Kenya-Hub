export type ToolCategory =
  | 'finance-tax'
  | 'education-cbc'
  | 'utilities-energy'
  | 'government-legal'
  | 'transport-travel'
  | 'health-wellness'
  | 'business-investment'
  | 'data-reference'
  | 'agriculture-environment';

export interface Tool {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: ToolCategory;
  keywords: string[];
  updateFrequency: 'static' | 'annual' | 'periodic' | 'live';
  dataSource: string;
  isLive: boolean;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  tags: string[];
  readTime: number;
  coverImage?: string;
  content?: string;
}
