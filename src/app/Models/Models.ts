export interface navLink {
  path: string;
  title: string;
}

export interface navLinkList extends Array<navLink>{}

export interface projectInfo {
  title: string;
  imgurl: string;
  tag: string[];
  date: string;
  url: {type:string, url:string}[]
};

export interface projectList extends Array<projectInfo>{}