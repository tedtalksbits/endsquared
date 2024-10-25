/*
  ========================================
  ORGANIZATION MODEL
  ========================================
*/
export interface OrganizationModel {
  _id: string;
  name: string;
  slug: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  createdAt: Date;
  updatedAt: Date;
  members: User[];
  owner: User;
}

/*
  ========================================
  RELEASE MODEL 
  ========================================
*/

export interface ReleaseModel {
  _id: string;
  organization: string;
  name: string;
  description: string;
  notes: Note[];
  version: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
  platforms: {
    name: 'ios' | 'android' | 'web' | 'macos' | 'windows' | 'linux';
    version: string;
  }[];
  developers: User[];
  publishedAt: Date;
  tests: TestModel[];
}

/*
  ========================================
  TEST MODEL
  ========================================
*/
export interface TestModel {
  _id: string;
  testItem: string;
  steps: string[];
  expectedResult: string;
  notes: Note[];
}

export interface Note {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}

export interface User {
  _id: string;
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}
