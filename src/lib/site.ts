// Central site configuration for the Vinet-Delpech redesign.

export const siteConfig = {
  name: "Vinet-Delpech",
  eyebrow: "Distillerie Vinet-Delpech SAS",
  tagline: "Creators of tailor-made spirits since 1777",
  description:
    "A Cognac-region distillery designing bespoke spirits, private labels, bottling solutions, and product development programs for partners around the world.",
  url: "https://www.vinet-delpech.com/en/",
  email: "contact@vinet-delpech.com",
  phone: "+33 5 46 49 10 10",
  address: "3, impasse Felix Chartier, 17520 Brie Sous Archiac, France",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

// Labels and anchors are taken from the current English Vinet-Delpech site.
// The header treatment is modeled after the Rémy Martin top navigation.
export const mainNav: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Know-how & Innovation", href: "/#know-how" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "Story", href: "/#story" },
  { label: "Contact", href: "/#contact" },
];
