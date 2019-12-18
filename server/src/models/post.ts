export class Post {
  id!: number;
  title!: string;
  content!: string;

  constructor(input: Post) {
    Object.assign(this, input);
}
}