export type ToolCategory =
  | 'finance-tax'
  | 'education-cbc'
  | 'utilities-energy'
  | 'government-legal'
  | 'transport-travel'
  | 'health-wellness'
  | 'business-investment'
  | 'language-learning'
  | 'data-reference'
  | 'agriculture-environment';

export interface Tool {
  slug: string;
  title: string;
  /** Concise title (<= 52 chars) used for HTML <title> tag before " | KenyaHub" suffix to prevent SERP truncation. */
  seoTitle?: string;
  shortTitle: string;
  description: string;
  category: ToolCategory;
  keywords: string[];
  updateFrequency: 'static' | 'annual' | 'periodic' | 'live';
  dataSource: string;
  isLive: boolean;
  icon: string;
  /** Curated usage score used until privacy-preserving analytics are available. */
  usageScore?: number;
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
