export interface Wilder {
    result: any;
    _id: string;
    name: string;
    city: string;
    description?: string;
    skills?: Skill[];
  }
  
  export interface Skill {
    title: string;
    votes: number;
    _id: string;
  }