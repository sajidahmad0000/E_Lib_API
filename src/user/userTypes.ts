export interface User {
  _id: string; // this is how mongoose saves id for each entry with underscore _is
  name: string;
  email: string;
  password: string;
}
