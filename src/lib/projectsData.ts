export interface Project {
  title: string;
  description: string;
  image: string;
  status: 'In Progress' | 'Live';
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'A platform that provides real-time analytics using AI for SMEs.',
    image: '/images/analytics-platform.jpg',
    status: 'Live',
  },
  {
    title: 'E-Government Portal',
    description: 'A secure portal for government services and citizen engagement.',
    image: '/images/e-government-portal.jpg',
    status: 'In Progress',
  },
  {
    title: 'Smart Inventory Management System',
    description: 'An AI-driven inventory system for enterprises to optimize stock levels.',
    image: '/images/inventory-management.jpg',
    status: 'Live',
  },
];