import avatar from '../assets/images/my-avatar.webp';
import hero from '../assets/images/my-hero.webp';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://tarunbhardwaj.org',

    avatar: {
        src: avatar,
        alt: 'Tarun Bhardwaj'
    },

    title: 'Tarun Bhardwaj',

    subtitle: 'Putting into words what people feel hard to say.',

    description:
        'I write about human nature, psychology, and the patterns that shape how we think, feel, and behave.',

    image: {
        src: '/images/my-avatar.webp',
        alt: 'Tarun Bhardwaj'
    },

    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Essays',
            href: '/blog'
        },
        {
            text: 'Reading',
            href: '/reading'
        },
        {
            text: 'About',
            href: '/about'
        },
    ],

    footerNavLinks: [
        {
            text: 'Essays',
            href: '/blog'
        },
        {
            text: 'Reading',
            href: '/reading'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],

    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/tarunbhardwajj/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/tarun_bhardwaj/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/tarun_bhardwaj'
        }
    ],

    hero: {
        title: 'Welcome. Glad you found this.',

        text:
            "Most of what shapes us happens below the surface. I write about that.\n\nEssays on human nature, psychology, behaviour, and the forces that quietly shape modern life.",

        image: {
            src: hero,
            alt: 'Tarun Bhardwaj'
        },

        actions: [
            {
                text: 'Read the Essays',
                href: '/blog'
            },
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    subscribe: {
        enabled: true,

        title: 'Stay in the conversation',

        text:
            'One essay at a time. Straight to your inbox, no noise.',

        form: {
            action: '#'
        }
    },

    postsPerPage: 8
};

export default siteConfig;