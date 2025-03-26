export interface Project {
    id: string;
    name: string;
    lastUpdated: string;
    details: {
      isServerOn: boolean;
      type: string;
      features: string[];
    };
  }