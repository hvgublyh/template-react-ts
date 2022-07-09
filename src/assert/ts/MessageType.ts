

interface Experience {
  startTime: string;
  endTime: string;
  company: string;
  position: string;
  project: Project[];
}

interface Project {
  name: string;
  tech: string[];
  introduce: string;
  duty: string;
}

interface Education {
  startTime: string;
  endTime: string;
  school: string;
}

interface Header {
  name: string;
  messages: string[];
}

export interface Message {
  header: Header;
  educations: Education[];
  skills: string[];
  experiences: Experience[];
}

