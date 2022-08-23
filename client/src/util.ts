export interface Project {
  name: string;
  cover: string;
  artist: string;
  id: string;
  active: boolean;
  levels:string[];
  details:{
    title:string;
    description:string
  }
}

