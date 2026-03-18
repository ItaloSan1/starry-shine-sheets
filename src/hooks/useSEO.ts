import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

const SITE_NAME = 'Eskimo Auto & Truck Parts';
const BASE_URL = 'https://www.eskimoautoandtruckparts.com';

function setMetaTag(property: string, content: string, isOG = false) {
  const attr = isOG ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO({ title, description, canonical, ogType = 'website' }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);

    const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname}`;
    setCanonical(canonicalUrl);

    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', SITE_NAME, true);
  }, [title, description, canonical, ogType]);
}
