/**
 * @module Root Layout
 * @purpose Provides the HTML document structure and metadata for all pages in the application
 * @context Next.js App Router root layout that wraps all page components
 * @dependencies next/Metadata for SEO and document head configuration, globals.css for base styles
 * @exports RootLayout, metadata
 */

import type { Metadata } from "next";
import "./globals.css";

/**
 * Document metadata for SEO and browser display
 *
 * @purpose Configures page title and description shown in search results and browser tabs
 * @sideeffects Sets HTML <title> and <meta> tags in document head
 */
export const metadata: Metadata = {
  title: "NeuroTwin - Create Your Digital Persona",
  description:
    "Experience the future of AI-powered digital personas. Create, interact, and explore digital versions of anyone.",
};

/**
 * RootLayout
 *
 * Root layout component that wraps all pages with HTML document structure.
 *
 * @param children - Child page components rendered inside the body
 * @returns HTML document with language set to English and global styles applied
 *
 * @remarks This is a Server Component by default in Next.js 16. Styles are globally applied via globals.css.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
