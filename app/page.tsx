import { Bike, Clock3, Facebook, Instagram, MapPin, Medal, MonitorSmartphone, PartyPopper, Pizza, ShoppingBag, Store, Twitter, Users } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Chicken Parm", description: "Baked chicken, tomato sauce and melted cheese.", price: "19", image: "/images/chicken-parm.jpg" },
  { name: "Chicken Alfredo", description: "Creamy alfredo sauce, chicken and parmesan.", price: "20", image: "/images/chicken-alfredo.jpg" },
  { name: "Spaghetti & Meatballs", description: "Classic tomato sauce with handmade meatballs.", price: "18", image: "/images/spaghetti-meatballs.jpg" },
  { name: "Baked Mac & Cheese", description: "Four-cheese comfort food with a golden crust.", price: "16", image: "/images/baked-mac-cheese.jpg" },
];

const features = [
  { label: "Easy ordering", icon: MonitorSmartphone }, { label: "Curbside pickup", icon: Store },
  { label: "We cater events", icon: PartyPopper }, { label: "Loyalty perks", icon: ShoppingBag },
  { label: "Always fresh", icon: Pizza }, { label: "Award winning", icon: Medal },
];

function BrandLogo({ small = false }: { small?: boolean }) {
  return <a className={`brand-logo ${small ? "brand-logo--small" : ""}`} href="#home" aria-label="Crust Pizza Co. home"><span>CRUST</span><small>PIZZA CO.</small></a>;
}

function Header() {
  return <header className="site-header" id="home">
    <nav className="nav-left" aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#menu">Menu</a><a href="#locations">Locations</a><a href="#order">Order Online</a></nav>
    <BrandLogo />
    <nav className="nav-right" aria-label="Secondary navigation"><a href="#about">About</a><a href="#contact">Contact</a><a className="social social--orange" href="#community" aria-label="Instagram"><Instagram size={15} /></a><a className="social" href="#community" aria-label="Twitter"><Twitter size={15} fill="currentColor" /></a><a href="tel:+15550114400">Call Now</a></nav>
  </header>;
}

function HeroSection() {
  return <section className="hero" aria-labelledby="hero-title">
    <Image src="/images/hero-shared-pizza.jpg" alt="Friends sharing a freshly baked pizza" fill priority sizes="(max-width: 760px) 100vw, 1060px" />
    <span className="hero-tape" aria-hidden="true" />
    <div className="hero-panel"><h1 id="hero-title">FOR DELICIOUS,<br />MADE-FROM<br />SCRATCH PIZZAS</h1><p>Made with love. Baked fresh to order.</p></div>
    <a className="pill hero-cta" href="#order">Order Online</a>
  </section>;
}

function MenuSection() {
  return <section className="section" id="menu" aria-labelledby="menu-heading">
    <h2 className="section-title" id="menu-heading">Our Menu</h2>
    <div className="menu-grid">{menuItems.map((item) => <article className="menu-card" key={item.name}>
      <div className="menu-photo"><Image src={item.image} alt={item.name} fill sizes="(max-width: 760px) 50vw, 250px" /></div>
      <div className="menu-copy"><h3>{item.name}</h3><p>{item.description}</p><span className="price" aria-label={`${item.price} dollars`}>{item.price}</span></div>
    </article>)}</div>
    <div className="center"><a className="pill" href="#order">View Our Complete Menu</a></div>
  </section>;
}

function AboutSection() {
  return <section className="about section-rule" id="about" aria-labelledby="about-heading">
    <div className="about-copy"><h2 className="display-title" id="about-heading">Home of the<br />Chicago-Style<br />Thin Crust Pizza</h2><p>Our signature pies start with handmade dough, bright tomato sauce and the best ingredients we can find.</p><div className="action-row"><a className="pill" href="#story">Learn More</a><a className="text-link" href="#locations">See Locations</a></div></div>
    <div className="feature-grid">{features.map(({ label, icon: Icon }) => <div className="feature" key={label}><span><Icon size={30} strokeWidth={1.6} /></span><small>{label}</small></div>)}</div>
    <div className="team-polaroid"><Image src="/images/restaurant-team.jpg" alt="Crust Pizza Co. restaurant team" fill sizes="330px" /><div className="polaroid-strip" aria-hidden="true" /></div>
  </section>;
}

function WaysToEnjoySection() {
  return <section className="section section-rule" id="order" aria-labelledby="ways-heading">
    <h2 className="section-title" id="ways-heading">Ways to Enjoy</h2>
    <div className="ways-layout">
      <div className="pizza-showcase"><Image src="/images/pepperoni-pizza.jpg" alt="Whole pepperoni pizza" fill sizes="(max-width: 760px) 100vw, 520px" /><div className="pizza-stamp"><strong>CRUST</strong><span>PIZZA CO.</span></div></div>
      <div className="promo-grid">
        <article className="promo-card"><span className="promo-icon"><Medal size={37} /></span><h3>Award-Winning<br />Pizza &amp; Service</h3><p>Scratch-made favorites served with genuine neighborhood hospitality.</p><a className="pill" href="#about">Learn More</a></article>
        <article className="promo-card"><span className="promo-icon"><Pizza size={37} /></span><h3>Kids Eat Free<br />Tuesdays!</h3><p>The deal parents love and the dinner kids look forward to all week.</p><a className="pill" href="#locations">Find Your Crust Pizza</a></article>
      </div>
    </div>
  </section>;
}

const gallery = [["/images/chicken-parm.jpg", "Fresh pizza with herbs"], ["/images/pizza-preparation.jpg", "Pizza being prepared"], ["/images/friends-at-restaurant.jpg", "Friends enjoying a restaurant meal"], ["/images/pepperoni-pizza.jpg", "Pepperoni pizza"], ["/images/pizza-table.jpg", "Pizza served at a table"], ["/images/pizza-box.jpg", "Fresh pizza ready to serve"]];

function CommunityGallerySection() {
  return <section className="community-gallery" id="community">
    <div className="community-copy"><p className="handle">@yourbrandhandle</p><h2>Let&apos;s Work Together<br />For Our Community</h2><p>We support local teams, schools and neighborhood organizations.</p><div className="community-art" aria-hidden="true"><Users size={48} /><span>GOOD FOOD<br />GOOD PEOPLE</span></div></div>
    <div className="gallery-card"><h2 className="section-title">Why Choose Us</h2><div className="gallery-grid">{gallery.map(([src, alt]) => <div className="gallery-image" key={src + alt}><Image src={src} alt={alt} fill sizes="160px" /></div>)}</div></div>
  </section>;
}

function FranchiseSection() {
  return <section className="franchise section-rule" id="contact">
    <div className="franchise-copy"><h2>Want to Own Your Own<br />Crust Pizza Co.?</h2><p>Bring our neighborhood pizza experience to your community.</p><a className="pill" href="mailto:franchise@crustpizza.example">Submit a Request</a></div>
    <div className="storefront"><Image src="/images/restaurant-storefront.jpg" alt="Warmly lit restaurant storefront" fill sizes="410px" /></div>
    <div className="request" id="locations"><h2>Submit a Request</h2><div className="request-actions"><a href="#locations"><MapPin size={22} /><span>Locations</span></a><a href="tel:+15550114400"><Clock3 size={22} /><span>Get Hours</span></a><a href="mailto:hello@crustpizza.example"><Bike size={22} /><span>Franchise</span></a></div></div>
  </section>;
}

function Footer() {
  return <footer className="footer"><BrandLogo small /><h2>Want to Place an<br />Order Now?</h2><nav aria-label="Footer navigation"><a href="#menu">Menu</a><a href="#contact">Catering</a><a href="#contact">Careers</a><a href="#contact">Commissions</a><a href="#">Privacy</a><a href="#">Terms</a></nav><div className="footer-social"><a href="#community" aria-label="Facebook"><Facebook size={15} /></a><a href="#community" aria-label="Instagram"><Instagram size={15} /></a></div></footer>;
}

export default function Home() {
  return <main className="page-shell"><Header /><HeroSection /><MenuSection /><AboutSection /><WaysToEnjoySection /><CommunityGallerySection /><FranchiseSection /><Footer /></main>;
}
