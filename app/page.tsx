import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import SelectedWork from '@/components/SelectedWork';
import Philosophy from '@/components/Philosophy';
import ContactCta from '@/components/ContactCta';
import Footer from '@/components/Footer';

export default function HomePage() {
  return <main><Nav /><Hero /><Expertise /><SelectedWork /><Philosophy /><ContactCta /><Footer /></main>;
}
