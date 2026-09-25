import type { Project } from '../types/portfolio';

export const projectCategories = ['All', 'Mobile', 'AI', 'Web', 'Fintech'] as const;

export const projects: Project[] = [
{
  id: 'p1',
  title: 'Campus Smart',
  category: 'Mobile',
  tags: ['React', 'Ionic', 'Node.js', 'Firebase'],
  description:
  'A student-facing mobile app for campus life — class schedules, notifications, and campus services in one place, built for thousands of concurrent weekly users.',
  image: "/52f9cba3-3190-4a93-b763-44a0a2ab021a.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p2',
  title: 'AI Conversational Chatbot',
  category: 'AI',
  tags: ['OpenAI', 'Node.js', 'React', 'MongoDB'],
  description:
  'An AI-powered conversational assistant using OpenAI models to handle user queries, contributing to a 40% lift in user engagement.',
  image: "/d4b3a033-def9-4cee-94e1-3c26d2088696.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p3',
  title: 'Healthcare Management System',
  category: 'Web',
  tags: ['Laravel', 'MySQL', 'React'],
  description:
  'A Laravel and React healthcare platform for managing patient records, appointments, and clinical workflows for enterprise care providers.',
  image: "/2fe057b8-afde-408e-a5cc-42a0a234fd7d.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p4',
  title: 'Kasuwa24',
  category: 'Mobile',
  tags: ['E-commerce', 'Mobile App', 'Payment Integration'],
  description:
  'A full-featured e-commerce mobile app with integrated payment processing, built for a fast and reliable shopping experience.',
  image: "/55cbdfdf-d0cd-4de4-a366-a6b475d5a31e.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p5',
  title: 'AgriBusiness Cluster',
  category: 'Mobile',
  tags: ['Mobile Platform', 'Supply Chain'],
  description:
  'A mobile platform connecting agricultural supply chains, helping producers and buyers coordinate logistics in real time.',
  image: "/97943188-8b53-47ac-8cae-7e47f9f5328a.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p6',
  title: 'CensonoPay',
  category: 'Fintech',
  tags: ['School Payment Platform'],
  description:
  'A school payment platform supporting over 1,000 simultaneous transactions, built for reliability at scale.',
  image: "/c3261b64-3c47-4871-bbe4-ae21e1c34858.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p7',
  title: 'SSP Ledger',
  category: 'Fintech',
  tags: ['Financial Management System'],
  description:
  "A financial management system for tracking transactions, balances, and reporting across an organization's ledger.",
  image: "/5d63feee-02e5-4083-8704-6db0bc230bde.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p8',
  title: 'Anakazo SCCP',
  category: 'Web',
  tags: ['Procurement Platform'],
  description:
  'A procurement platform streamlining vendor management and purchase order workflows for enterprise operations.',
  image: "/1503f9ab-39a5-4607-a439-6e4348df4911.jpg",
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
  image: "/5055e93c-b440-4471-97fa-43f340563f5f.jpg",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p10',
  title: 'Censono Tech Website',
  category: 'Web',
  tags: ['Corporate Website'],
  description:
  "A corporate website for Censono Tech, showcasing the company's products and services to enterprise clients.",
  image: "/bbf1f73f-360d-4fee-ba47-3f1453d73840.jpg",
  githubUrl: '#',
  demoUrl: '#'
}];