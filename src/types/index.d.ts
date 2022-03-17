export interface wilder {
    _id: string;
    name: string;
    city: string;
    description?: string;
    skills?: skill[];
  }
  
  export interface skill {
    title: string;
    votes: number;
  }