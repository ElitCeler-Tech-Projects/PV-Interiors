export interface OurServicesType {
    id: number,
    imageText: string,
    mainImage: string,
    smallLoadImage: string,
    serviceReference: string
}

export interface CaseStudiesType {
    id: number,
    imageText: string,
    mainImage: string,
    smallLoadImage: string,
    serviceReference: string
}

export interface TestimonialsType {
    id: number,
    reviewNo: number,
    reviewAbout: string,
    curstomerPic: string,
    customerReview: string,
}

export interface CollectionsType {
    id: number,
    image: string,
    imageText: string
}

export interface ConceptsType {
    id: number,
    conceptImage: string,
    conceptDetail: string
}

export type ServiceCollectionsType = {
    id: number,
    collectionName: string,
    collectionImages: string[]
}

export interface GalleryType {
    id: number,
    imageText: string,
    mainImage: string,
}

export interface CaseStudyType {
    id: number,
    afterPic: string,
    beforePic: string,
    studyTitle: string,
    studyDescription: string
}