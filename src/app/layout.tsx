import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';

/* ─── Fonts: loaded via next/font (auto-preloaded, no render blocking) ─── */
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['300', '400', '500', '600', '700', '800'],
    preload: true,
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
    weight: ['400', '500', '600', '700'],
    preload: true,
});

export const viewport: Viewport = {
    themeColor: '#020d02',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL(personalInfo.siteUrl),
    title: {
        default: `${personalInfo.name} - ${personalInfo.title}`,
        template: `%s | ${personalInfo.name}`,
    },
    description: personalInfo.description,
    keywords: [
        'desarrollador web',
        'full stack',
        'next.js',
        'react',
        'typescript',
        'kotlin',
        'android',
        'portafolio',
    ],
    authors: [{ name: personalInfo.name }],
    creator: personalInfo.name,
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: personalInfo.siteUrl,
        title: `${personalInfo.name} - ${personalInfo.title}`,
        description: personalInfo.description,
        siteName: personalInfo.name,
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: `${personalInfo.name} - Portafolio`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${personalInfo.name} - ${personalInfo.title}`,
        description: personalInfo.description,
        images: ['/og-image.jpg'],
        creator: '@tuusuario',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'tu-codigo-de-verificacion',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}