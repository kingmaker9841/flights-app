import { Link } from "react-router";

const FOOTER_LINKS = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Privacy",
    to: "/privacy",
  },
  {
    label: "Terms",
    to: "/terms",
  },
  {
    label: "Join user studies",
    to: "/user-studies",
  },
  {
    label: "Feedback",
    to: "/feedback",
  },
  {
    label: "Help Centre",
    to: "/help",
  },
];

const FooterLink = ({ to, label }) => (
  <Link to={to} className="hover:text-blue hover:underline transition-colors">
    {label}
  </Link>
);

const FooterLinks = () => (
  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
    {FOOTER_LINKS.map((link) => (
      <FooterLink key={link.label} to={link.to} label={link.label} />
    ))}
  </div>
);

function Footer() {
  return (
    <footer className="border-t border-gray-border bg-gray-bg">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
