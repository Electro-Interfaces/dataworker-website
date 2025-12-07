import { ReactNode } from 'react';

// Module for tabs component
export interface SystemModule {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
  illustration?: ReactNode;
}

// CTA Link
export interface CTALink {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

// Hero Section Props
export interface ProductHeroProps {
  title: string;
  titleAccent: string;
  badge?: string;
  badgeColor?: 'green' | 'blue' | 'purple';
  description: string;
  subdescription?: string;
  illustration?: ReactNode;
  ctaLink?: CTALink;
}

// Module Tabs Props
export interface ModuleTabsProps {
  title: string;
  subtitle?: string;
  modules: SystemModule[];
}

// CTA Section Props
export interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLink: CTALink;
  secondaryLink?: CTALink;
  bgColor?: 'white' | 'gray';
}

// Advantage/Feature card
export interface AdvantageCard {
  icon: ReactNode;
  title: string;
  description: string;
}

// Section with gradient background
export interface GradientSectionProps {
  children: ReactNode;
  className?: string;
  withPattern?: boolean;
  patternId?: string;
}
