export class Post {
    constructor(
      public title: string,
      public content: string,
      public authorId: number,
      public id?: number,
    ) {}
  }