import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon, GithubIcon, LinkedinIcon, Loader2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

type FormState = 'idle' | 'submitting' | 'success';

const inputClass =
'w-full rounded-xl border border-border bg-bg-soft/60 px-4 py-3 text-sm text-text placeholder:text-muted/70 outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent/60 focus:ring-2 focus:ring-accent/20';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const emptyForm: FormData = { name: '', email: '', company: '', subject: '', message: '' };

export function Contact() {
  const [status, setStatus] = useState<FormState>('idle');
  const [form, setForm] = useState<FormData>(emptyForm);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
    setForm(emptyForm);
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative bg-bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Build Something"
          title="Get In Touch"
          description="Have a product idea, a role, or a system that needs to scale? I'd love to hear about it." />
        
        <div className="grid gap-10 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-2">
            <GlassCard className="flex h-full flex-col justify-between p-8" hover={false}>
              <div className="space-y-6">
                <ContactRow icon={<MailIcon className="h-4 w-4" />} label="Email" value="hello@maturjoshua.dev" href="mailto:hello@maturjoshua.dev" />
                <ContactRow icon={<PhoneIcon className="h-4 w-4" />} label="Phone" value="+234 800 000 0000" href="tel:+2348000000000" />
                <ContactRow icon={<MapPinIcon className="h-4 w-4" />} label="Location" value="Nigeria (Remote-friendly)" />
              </div>
              <div className="mt-10 flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-accent-light">
                  
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-accent-light">
                  
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:col-span-3">
            <GlassCard className="p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input required value={form.name} onChange={handleChange('name')} type="text" className={inputClass} placeholder="Your name" />
                  </Field>
                  <Field label="Email" required>
                    <input required value={form.email} onChange={handleChange('email')} type="email" className={inputClass} placeholder="you@company.com" />
                  </Field>
                  <Field label="Company">
                    <input value={form.company} onChange={handleChange('company')} type="text" className={inputClass} placeholder="Company (optional)" />
                  </Field>
                  <Field label="Subject">
                    <input value={form.subject} onChange={handleChange('subject')} type="text" className={inputClass} placeholder="What's this about?" />
                  </Field>
                </div>
                <Field label="Message" required>
                  <textarea
                    required
                    value={form.message}
                    onChange={handleChange('message')}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..." />
                  
                </Field>
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-[background-color,box-shadow,opacity] duration-200 hover:bg-accent-dark hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                  
                  {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" />}
                  {status === 'success' && <CheckCircle2Icon className="h-4 w-4" />}
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                </motion.button>
                {status === 'success' &&
                <p className="text-sm text-accent-light">Thanks for reaching out — I'll get back to you shortly.</p>
                }
              </form>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>);

}

function ContactRow({ icon, label, value, href }: {icon: React.ReactNode;label: string;value: string;href?: string;}) {
  const content =
  <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
        <p className="text-sm font-medium text-text">{value}</p>
      </div>
    </div>;

  return href ?
  <a href={href} className="block transition-opacity duration-200 hover:opacity-80">
      {content}
    </a> :

  content;

}

function Field({ label, required, children }: {label: string;required?: boolean;children: React.ReactNode;}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">
        {label}
        {required && <span className="text-accent-light"> *</span>}
      </span>
      {children}
    </label>);

}