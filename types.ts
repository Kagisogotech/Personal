
export interface Certificate {
    title: string;
    issuer: string;
    imageUrl: string;
    pdfUrl: string;
    verificationUrl: string;
}

export interface Skill {
    name: string;
    level: number;
}

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
    docUrl: string;
}
