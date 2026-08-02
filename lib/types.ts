export interface Resource {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  fileUrl: string;
  galleryUrls?: string[];
  featured: boolean;
}

export interface Course {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  level: string;
  image: string;
  audience: string;
  curriculum: string[];
}

export interface Teacher {
  id: string;
  name: string;
  gender: "male" | "female";
  languages: string[];
  specialization: string;
  experienceYears: number;
  image: string;
  bio: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
}

export interface TrialSubmission {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  preferredTime: string;
  country: string;
  message?: string;
  website?: string;
}
