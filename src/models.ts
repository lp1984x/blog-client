export interface IPost {
      _id?:string;
      title: string;
      desc?: string;
      photo?: string;
      username: string;
      categories?: string[];
      updatedAt?: any
    };

export interface Icats {
  _id?:string;
  name:string;
  createdAt?:any;
  updatedAt?: any;
}

export interface IUser{
  _id?: string,
  username: string,
  email: string,
  password: string,
  profilePic: string,
   
}