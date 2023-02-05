export interface IPost {
      _id?:string;
      title: string;
      desc?: string;
      photo?: string;
      username: string;
      categories?: string[];
      updatedAt?: any
    };