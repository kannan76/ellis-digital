import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/latest-news', label: 'Latest News' },
  { href: '/contact-us', label: 'Contact us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: "T&C's Page" },
  { href: '/links', label: 'Links' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/ellis_digital/',
    label: 'Instagram',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@ellis.digital',
    label: 'TikTok',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    href: 'https://uk.linkedin.com/company/ellisdigital',
    label: 'LinkedIn',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/441483912900',
    label: 'WhatsApp',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
  },
];

const FooterNavigation = () => {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      {/* Surrey Location */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">Surrey</h3>
        <address className="not-italic text-muted-foreground text-base leading-relaxed space-y-1">
          <p>The Tile Kiln</p>
          <p>Tilehouse Farm</p>
          <p>Guildford</p>
          <p>United Kingdom</p>
          <p>GU4 8AE</p>
        </address>
      </div>

      {/* London Location */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">London</h3>
        <address className="not-italic text-muted-foreground text-base leading-relaxed space-y-1">
          <p>72-74 Dean Street</p>
          <p>Soho</p>
          <p>London</p>
          <p>United Kingdom</p>
          <p>W1D 3SG</p>
        </address>
      </div>

      {/* Say Hello */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">Say Hello</h3>
        <div className="space-y-4">
          <div>
            <a 
              href="tel:+441483912900"
              className="text-accent-cyan hover:text-accent-cyan-light transition-colors duration-300 text-base font-medium block"
            >
              Surrey
            </a>
            <a 
              href="tel:+441483912900"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-base"
            >
              +44 1483 912900
            </a>
          </div>
          <div>
            <a 
              href="tel:+442071837787"
              className="text-accent-cyan hover:text-accent-cyan-light transition-colors duration-300 text-base font-medium block"
            >
              London
            </a>
            <a 
              href="tel:+442071837787"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-base"
            >
              +44 207 183 7787
            </a>
          </div>
        </div>
      </div>

      {/* Navigate */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">Navigate</h3>
        <nav>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:underline transition-colors duration-300 text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 mt-8">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;