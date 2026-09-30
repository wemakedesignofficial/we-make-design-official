import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Studio from '@/components/Studio';
import FeaturedHeader from '@/components/FeaturedHeader';
import ProjectGrid from '@/components/ProjectGrid';
import Process from '@/components/Process';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() { return <main><Nav/><Hero/><Studio/><section className="featured" id="work" style={{ backgroundImage: "linear-gradient(110deg,rgba(12,11,10,.96),rgba(12,11,10,.89)),url('/assets/studio.jpg')", backgroundPosition: 'center 46%', backgroundSize: 'cover' }}><FeaturedHeader/><ProjectGrid/></section><Process/><Testimonial/><CTA/><Footer/></main>; }

