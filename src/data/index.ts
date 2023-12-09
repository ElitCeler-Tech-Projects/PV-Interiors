import { OurServicesType, CaseStudiesType, TestimonialsType } from "@/types";

const ourServicesHome: OurServicesType[] = [
    {
        id: 1,
        imageText: 'Decorations',
        mainImage: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyfHxkZWNvcmF0aW9uc3xlbnwwfHx8fDE3MDIxMTU1OTh8MA&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/services'
    },
    {
        id: 2,
        imageText: 'Interior Design',
        mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3MDIxMTU3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/services'
    },
    {
        id: 3,
        imageText: 'Concept',
        mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBpbnRlcmlvcnxlbnwwfHx8fDE3MDIxMTU3NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/services'
    },  
];

const CaseStudiesHome: CaseStudiesType[] = [
    {
        id: 1,
        imageText: 'Kitchens',
        mainImage: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw0fHxLaXRjaGVufGVufDB8fHx8MTcwMjEyMTg4MXww&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/projects'
    },
    {
        id: 2,
        imageText: 'Bedrooms',
        mainImage: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2fHxCZWRyb29tc3xlbnwwfHx8fDE3MDIxMjE4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/projects'
    },
    {
        id: 3,
        imageText: 'Bathroom',
        mainImage: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyfHxCYXRocm9vbXxlbnwwfHx8fDE3MDIxMjE5MTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/projects'
    },
    {
        id: 4,
        imageText: 'Living Room',
        mainImage: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw0fHxMaXZpbmclMjByb29tfGVufDB8fHx8MTcwMjEyMTk0NXww&ixlib=rb-4.0.3&q=80&w=1080',
        smallLoadImage: '',
        serviceReference: '/projects'
    },
    
];

const Testimonials: TestimonialsType[] = [
    {
        id: 1,
        reviewNo: 1,
        reviewAbout: 'https://images.unsplash.com/photo-1616137557258-95cdec177e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw1M3x8aW50ZXJpb3JzfGVufDB8fHx8MTcwMjEyNDg1NHww&ixlib=rb-4.0.3&q=80&w=1080',
        curstomerPic: 'https://images.unsplash.com/photo-1625595234473-c00c86c73353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw0Mnx8cG90cmFpdHN8ZW58MHx8fHwxNzAyMTI1NzAwfDA&ixlib=rb-4.0.3&q=80&w=1080',
        customerReview: 'Ask field identity pale nest queen asleep compound anything remember brass want replied note smoke its meant feel must swept window stopped congress fifth.'
    },
    {
        id: 2,
        reviewNo: 2,
        reviewAbout: 'https://images.unsplash.com/photo-1616137303871-05ce745f9cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2Mnx8aW50ZXJpb3JzfGVufDB8fHx8MTcwMjEyNzMyOXww&ixlib=rb-4.0.3&q=80&w=1080',
        curstomerPic: 'https://images.unsplash.com/photo-1585929511893-ea79c683cfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw1MHx8cG90cmFpdHN8ZW58MHx8fHwxNzAyMTI1NzAwfDA&ixlib=rb-4.0.3&q=80&w=1080',
        customerReview: 'Support highest fence source physical mud successful without organized hot trap box advice best ball block frog fur kitchen corner hidden being society rhythm.'
    },
    {
        id: 3,
        reviewNo: 3,
        reviewAbout: 'https://images.unsplash.com/photo-1616137507072-f7276b168614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw3MXx8aW50ZXJpb3JzfGVufDB8fHx8MTcwMjEyNzMyOXww&ixlib=rb-4.0.3&q=80&w=1080',
        curstomerPic: 'https://images.unsplash.com/photo-1601299124348-6a43706a155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzNnx8aW5kaWFuJTIwY2hpbGR8ZW58MHx8fHwxNzAyMTI1NzQxfDA&ixlib=rb-4.0.3&q=80&w=1080',
        customerReview: 'Distant sport engineer tide president path softly bad fast whose ability war season rather sudden outside automobile separate soap lie occasionally slope scientist characteristic.'
    },
    {
        id: 4,
        reviewNo: 4,
        reviewAbout: 'https://images.unsplash.com/photo-1609879938030-31acdeded104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw3Mnx8aW50ZXJpb3JzfGVufDB8fHx8MTcwMjEyNzMyOXww&ixlib=rb-4.0.3&q=80&w=1080',
        curstomerPic: 'https://images.unsplash.com/photo-1603477216408-0a3946caafc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2Mnx8aW5kaWFuJTIwY2hpbGR8ZW58MHx8fHwxNzAyMTI1NzczfDA&ixlib=rb-4.0.3&q=80&w=1080',
        customerReview: 'Saw star season forest swim library favorite winter compass excited chosen began nearest sing ordinary mistake frighten experiment drive darkness speak statement walk jungle.'
    },
    
]


export { ourServicesHome, CaseStudiesHome, Testimonials };