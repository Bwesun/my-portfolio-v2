import type { Project } from '../types/portfolio';

export const projectCategories = ['All', 'Mobile', 'AI', 'Web', 'Fintech'] as const;

export const projects: Project[] = [
{
  id: 'p1',
  title: 'Campus Smart',
  category: 'Mobile',
  tags: ['React', 'Ionic'],
  description:
  'A student-facing mobile app for campus life — class schedules, notifications, and campus services in one place, built for thousands of concurrent weekly users.',
  image: "/project_images/campussmart_ad.png",
  githubUrl: 'https://play.google.com/store/apps/details?id=tecetel.campus.smart&pcampaignid=web_share',
  demoUrl: 'https://play.google.com/store/apps/details?id=tecetel.campus.smart&pcampaignid=web_share'
},
{
  id: 'p2',
  title: 'AI Conversational Chatbot',
  category: 'AI',
  tags: ['OpenAI', 'Laravel', 'MySQL', 'Bootstrap'],
  description:
  'An AI-powered conversational assistant using OpenAI models to handle user queries, contributing to a 40% lift in user engagement.',
  image: "/project_images/chat.png",
  githubUrl: 'https://github.com/Bwesun/ai-chat',
  demoUrl: 'https://github.com/Bwesun/ai-chat'
},
{
  id: 'p3',
  title: 'Healthcare Management System',
  category: 'Web',
  tags: ['Node/Express.js', 'MongoDB', 'React'],
  description:
  'A React healthcare platform for managing patient records, appointments, and clinical workflows for enterprise care providers.',
  image: "/project_images/medical.png",
  githubUrl: 'https://medical.zaptrance.ng',
  demoUrl: 'https://medical.zaptrance.ng'
},
{
  id: 'p4',
  title: 'Kasuwa24',
  category: 'Mobile',
  tags: ['E-commerce', 'Mobile App', 'Payment Integration'],
  description:
  'A full-featured e-commerce mobile app with integrated payment processing, built for a fast and reliable shopping experience.',
  image: "/project_images/kasuwa24_ad.png",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p5',
  title: 'AgriBusiness Cluster',
  category: 'Mobile',
  tags: ['Mobile Platform', 'Supply Chain', 'Cross-platform'],
  description:
  'A mobile platform connecting agricultural supply chains, helping producers and buyers coordinate logistics in real time.',
  image: "/project_images/hortinigeria_ad.png",
  githubUrl: 'https://github.com/Bwesun/HortiConnect',
  demoUrl: 'https://github.com/Bwesun/HortiConnect'
},
{
  id: 'p6',
  title: 'CensonoPay',
  category: 'Fintech',
  tags: ['School Payment Platform'],
  description:
  'A school payment platform supporting over 1,000 simultaneous transactions, built for reliability at scale.',
  image: "/project_images/censonopay.png",
  githubUrl: 'https://github.com/Bwesun/censonopay',
  demoUrl: 'https://github.com/Bwesun/censonopay'
},
{
  id: 'p7',
  title: 'Financial Management System',
  category: 'Fintech',
  tags: ['Financial Management System'],
  description:
  "A financial management system for tracking transactions, balances, and reporting across an organization's ledger.",
  image: "/project_images/finance.png",
  githubUrl: 'https://github.com/Bwesun/sspledger',
  demoUrl: 'https://github.com/Bwesun/sspledger'
},
{
  id: 'p8',
  title: 'Anakazo SCCP',
  category: 'Web',
  tags: ['Procurement Platform'],
  description:
  'A procurement platform streamlining vendor management and purchase order workflows for enterprise operations.',
  image: "/project_images/anakazo_ad.png",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p9',
  title: 'NOUN Website',
  category: 'Web',
  tags: ['Enterprise Website'],
  description:
  'An enterprise website for a large public university, built for performance under high concurrent traffic.',
  image: "/project_images/nou.png",
  githubUrl: 'https://nou.edu.ng',
  demoUrl: 'https://nou.edu.ng'
},
{
  id: 'p10',
  title: 'Censono Tech Website',
  category: 'Web',
  tags: ['Corporate Website'],
  description:
  "A corporate website for Censono Tech, showcasing the company's products and services to enterprise clients.",
  image: "/project_images/censono.png",
  githubUrl: 'https://censonotech.com.ng/',
  demoUrl: 'https://censonotech.com.ng/'
}];