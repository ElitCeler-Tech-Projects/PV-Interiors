import { OurServicesType, CaseStudiesType, TestimonialsType, CollectionsType, ConceptsType, ServiceCollectionsType } from "@/types";

// Home Page

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
    
];

// Services Page

const Collections: CollectionsType[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1577926606472-fc6d3a33f7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzNHx8c29mYXN8ZW58MHx8fHwxNzAyMzAxNjY1fDA&ixlib=rb-4.0.3&q=80&w=1080',
        imageText: "Curtains"
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1567016507665-356928ac6679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzOXx8c29mYXN8ZW58MHx8fHwxNzAyMzAxNjY1fDA&ixlib=rb-4.0.3&q=80&w=1080',
        imageText: "Sofa"
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw1MXx8c29mYXN8ZW58MHx8fHwxNzAyMzAyOTY5fDA&ixlib=rb-4.0.3&q=80&w=1080',
        imageText: "Lamp"
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw1NHx8c29mYXN8ZW58MHx8fHwxNzAyMzAyOTY5fDA&ixlib=rb-4.0.3&q=80&w=1080',
        imageText: "Chair"
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1520605728164-b6a5c6814203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw3Mnx8c29mYXN8ZW58MHx8fHwxNzAyMzAyOTk3fDA&ixlib=rb-4.0.3&q=80&w=1080',
        imageText: "Living Room"
    }
];

const Concepts: ConceptsType[] = [
    {
        id: 1,
        conceptImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2M3x8c29mYXN8ZW58MHx8fHwxNzAyMzAyOTk3fDA&ixlib=rb-4.0.3&q=80&w=1080',
        conceptDetail: 'At PV Interiors, we redefine modern living with our bespoke design solutions. Immerse yourself in the elegance of customized spaces that seamlessly blend contemporary aesthetics with personalized functionality, curated exclusively for you.'
    },
    {
        id: 2,
        conceptImage: 'https://images.unsplash.com/photo-1515852216175-927860d2be80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2N3x8c29mYXN8ZW58MHx8fHwxNzAyMzAyOTk3fDA&ixlib=rb-4.0.3&q=80&w=1080',
        conceptDetail: 'Discover timeless elegance with PV Interiors Classic Interior Design. Our curated approach brings sophistication to every detail, seamlessly merging refined aesthetics and enduring style. Elevate your space with a touch of classic charm that transcends trends and stands the test of time.'
    },
    {
        id: 3,
        conceptImage: 'https://images.unsplash.com/photo-1618543005334-b0904ecd4441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw3N3x8c29mYXN8ZW58MHx8fHwxNzAyMzAyOTk3fDA&ixlib=rb-4.0.3&q=80&w=1080',
        conceptDetail: "Step into a nostalgic journey with PV Interiors Retro Design. Embrace the vibrant energy and playful spirit of bygone eras, where bold colors, iconic patterns, and vintage flair converge to create spaces that celebrate the charm of the past while remaining distinctly contemporary."
    },
]

const ServiceCollections: ServiceCollectionsType[] = [
    {
        id: 1,
        collectionName: 'Kitchen',
        collectionImages: [
            'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw0fHxraXRjaGVufGVufDB8fHx8MTcwMjMxNzYxMHww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzfHxraXRjaGVufGVufDB8fHx8MTcwMjMxNzYxMHww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyfHxraXRjaGVufGVufDB8fHx8MTcwMjMxNzYxMHww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxfHxraXRjaGVufGVufDB8fHx8MTcwMjMxNzYxMHww&ixlib=rb-4.0.3&q=80&w=1080'
        ]
    },
    {
        id: 2,
        collectionName: 'Bedroom',
        collectionImages: [
            'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2fHxCZWRyb29tfGVufDB8fHx8MTcwMjMxNzk5MXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzfHxCZWRyb29tfGVufDB8fHx8MTcwMjMxNzk5MXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyfHxCZWRyb29tfGVufDB8fHx8MTcwMjMxNzk5MXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxfHxCZWRyb29tfGVufDB8fHx8MTcwMjMxNzk5MXww&ixlib=rb-4.0.3&q=80&w=1080'
        ]
    },
    {
        id: 3,
        collectionName: 'Bathroom',
        collectionImages: [
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzfHxCYXRocm9vbXxlbnwwfHx8fDE3MDIzMTgwMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHw2fHxCYXRocm9vbXxlbnwwfHx8fDE3MDIzMTgwMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1595514535116-d0401260e7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwxNXx8QmF0aHJvb218ZW58MHx8fHwxNzAyMzE4MDI2fDA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1517414628894-83d47b22f233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyN3x8QmF0aHJvb218ZW58MHx8fHwxNzAyMzE4MDcxfDA&ixlib=rb-4.0.3&q=80&w=1080'
        ]
    },
    {
        id: 4,
        collectionName: 'Living Room',
        collectionImages: [
            'https://images.unsplash.com/photo-1606654810639-76ed5d12737b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwzMnx8TGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3MDIzMTgwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1582417728413-b2347161b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyNHx8TGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3MDIzMTgwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyMnx8TGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3MDIzMTgwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQwNDF8MHwxfHNlYXJjaHwyMXx8TGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3MDIzMTgwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080'
        ]
    },
    
]

export { ourServicesHome, CaseStudiesHome, Testimonials, Collections, Concepts, ServiceCollections };