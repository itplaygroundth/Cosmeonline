export interface User {
  code: string;
  name: string;
  address?: {
    street?: string;
    postcode?: string;
  }
}