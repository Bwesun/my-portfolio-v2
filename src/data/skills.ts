import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
{
  id: 'frontend',
  title: 'Frontend',
  icon: 'code',
  skills: [
  { name: 'React', level: 96 },
  { name: 'Next.js', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML', level: 98 },
  { name: 'CSS', level: 95 },
  { name: 'Bootstrap', level: 85 }]

},
{
  id: 'backend',
  title: 'Backend',
  icon: 'server',
  skills: [
  { name: 'Node.js', level: 92 },
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 88 },
  { name: 'REST APIs', level: 95 },
  { name: 'Authentication', level: 90 },
  { name: 'MongoDB', level: 87 },
  { name: 'MySQL', level: 90 },
  { name: 'Firebase', level: 85 }]

},
{
  id: 'mobile',
  title: 'Mobile',
  icon: 'smartphone',
  skills: [
  { name: 'Ionic React', level: 92 },
  { name: 'Android', level: 80 },
  { name: 'Cross Platform', level: 88 }]

},
{
  id: 'ai',
  title: 'AI',
  icon: 'sparkles',
  skills: [
  { name: 'OpenAI APIs', level: 90 },
  { name: 'AI Chatbots', level: 88 },
  { name: 'Prompt Engineering', level: 92 },
  { name: 'System Integration', level: 85 }]

},
{
  id: 'tools',
  title: 'Tools',
  icon: 'wrench',
  skills: [
  { name: 'Git', level: 95 },
  { name: 'GitHub', level: 95 },
  { name: 'VS Code', level: 98 },
  { name: 'WordPress', level: 85 },
  { name: 'cPanel', level: 88 },
  { name: 'Jira', level: 82 }]

}];