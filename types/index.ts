export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface Stats {
  clients: number
  projects: number
  experience: number
  satisfaction: number
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  content: string
  date: string
  platform: "Google"
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
}

export interface Project {
  id: string
  clientName: string
  services: ProjectService[]
  completedDate: string
  status: "completed" | "ongoing"
}

export interface ProjectService {
  type: "web-design" | "social-media" | "digital-marketing"
  title: string
  details: WebDesignDetails | SocialMediaDetails | DigitalMarketingDetails
}

export interface WebDesignDetails {
  screenshots: string[]
  technologies: string[]
  features: string[]
  url?: string
}

export interface SocialMediaDetails {
  platforms: string[]
  images: string[]
  metrics: {
    followersGrowth: string
    engagementRate: string
    reachIncrease: string
  }
}

export interface DigitalMarketingDetails {
  budget: string
  roi: string
  roas: string
  costPerLead: string
  conversions: string
  platforms: string[]
}
