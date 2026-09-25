import type { Project } from '../types/portfolio';

export const projectCategories = ['All', 'Mobile', 'AI', 'Web', 'Fintech'] as const;

export const projects: Project[] = [
{
  id: 'p1',
  title: 'NCAT Parts Traceability System',
  category: 'Mobile',
  tags: ['Enterprise Software', 'React'],
  description:
  'An enterprise aviation inventory, storage, work order execution, and fleet maintenance management platform.',
  image: "/project_images/ncatpts.png",
  githubUrl: 'https://ncat.zaptrance.ng',
  demoUrl: 'https://ncat.zaptrance.ng'
},
{
  id: 'p2',
  title: 'Campus Smart',
  category: 'Mobile',
  tags: ['Educational', 'React', 'AI Chatbot', 'Ionic'],
  description:
  'A student-facing mobile app for campus life — class schedules, notifications, and campus services in one place, built for thousands of concurrent weekly users.',
  image: "/project_images/campussmart_ad.png",
  githubUrl: 'https://play.google.com/store/apps/details?id=tecetel.campus.smart&pcampaignid=web_share',
  demoUrl: 'https://play.google.com/store/apps/details?id=tecetel.campus.smart&pcampaignid=web_share'
},
{
  id: 'p3',
  title: 'Healthcare Management System',
  category: 'Web',
  tags: ['Healthcare', 'Node/Express.js', 'React', 'MongoDB'],
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
  tags: ['E-commerce', 'Mobile App', 'Payment Integration', 'Ionic React', 'Paystack', 'Cross-platform'],
  description:
  'A full-featured e-commerce mobile app with integrated payment processing, built for a fast and reliable shopping experience.',
  image: "/project_images/kasuwa24_ad.png",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p5',
  title: 'CensonoPay',
  category: 'Fintech',
  tags: ['School Payment Platform', 'Ionic React', 'Node.js', 'Express.js', 'Firebase', 'Paystack', 'Cross-platform'],
  description:
  'A school payment platform supporting over 1,000 simultaneous transactions, built for reliability at scale.',
  image: "/project_images/censonopay.png",
  githubUrl: 'https://github.com/Bwesun/censonopay',
  demoUrl: 'https://github.com/Bwesun/censonopay'
},
{
  id: 'p6',
  title: 'AgriBusiness Cluster',
  category: 'Mobile',
  tags: ['Mobile Platform', 'Marketplace', 'Agriculture', 'Ionic React', 'PostgreSQL', 'Node.js/Express.js', 'Cross-platform'],
  description:
  'A mobile platform connecting agricultural supply chains, helping producers and buyers coordinate logistics in real time.',
  image: "/project_images/hortinigeria_ad.png",
  githubUrl: 'https://github.com/Bwesun/HortiConnect',
  demoUrl: 'https://github.com/Bwesun/HortiConnect'
},
{
  id: 'p7',
  title: 'Financial Management System',
  category: 'Fintech',
  tags: ['Financial Management System', 'PHP', 'MySQL', 'Bootstrap'],
  description:
  "A financial management system for tracking transactions, balances, and reporting across an organization's ledger.",
  image: "/project_images/finance.png",
  githubUrl: 'https://github.com/Bwesun/Financial-Management-System',
  demoUrl: 'https://github.com/Bwesun/Financial-Management-System'
},
{
  id: 'p8',
  title: 'SSP Ledger',
  category: 'Web',
  tags: ['Electronic Ledger System', 'Agriculture', 'React', 'Node.js', 'Express.js', 'PostgreSQL'],
  description:
  "A web-based agricultural management platform for digitizing SSP registration and field-service records.",
  image: "/project_images/sspledger.png",
  githubUrl: 'https://github.com/Bwesun/sspledger',
  demoUrl: 'https://github.com/Bwesun/sspledger'
},
{
  id: 'p9',
  title: 'Anakazo SCCP',
  category: 'Mobile',
  tags: ['Procurement & Supply-chain Platform', 'Marketplace', 'Ionic React', 'Node.js', 'Express.js', 'MongoDB', 'Cross-platform', 'Push Notifications', 'Whatsapp Messages Integration'],
  description:
  'A procurement platform streamlining vendor management and purchase order workflows for enterprise operations.',
  image: "/project_images/anakazo_ad.png",
  githubUrl: '#',
  demoUrl: '#'
},
{
  id: 'p10',
  title: 'NOUN Website',
  category: 'Web',
  tags: ['Enterprise Website', 'Wordpress'],
  description:
  'An enterprise website for a large public university, built for performance under high concurrent traffic.',
  image: "/project_images/nou.png",
  githubUrl: 'https://nou.edu.ng',
  demoUrl: 'https://nou.edu.ng'
},
{
  id: 'p11',
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
  id: 'p12',
  title: 'Censono Tech Website',
  category: 'Web',
  tags: ['Corporate Website', 'Wordpress', 'Enterprise Website'],
  description:
  "A corporate website for Censono Tech, showcasing the company's products and services to enterprise clients.",
  image: "/project_images/censono.png",
  githubUrl: 'https://censonotech.com.ng/',
  demoUrl: 'https://censonotech.com.ng/'
}];