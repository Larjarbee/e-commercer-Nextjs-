import Links from '@/components/header/Links';
import Hero from '@/components/hero/Hero';
import Section from '@/components/section/Section';

export default function Home() {
  return (
    <main className='space-y-5'>
      <Links />
      <Hero />
      <Section />
    </main>
  );
}
