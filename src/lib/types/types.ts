export type ProjectProps = {
    title: string;
    images: { 
        src: string;
        alt: string 
    }[];
    description: string;
    tags: string[];
    imagesClass: string;
    gitHubUrl?: string | undefined;
    hasCaseStudy: boolean;
}