export class Post {
    _id?: string;
    title: string;
    content: string;
    createdAt?: Date;
  
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
      this.createdAt = new Date();
    }
  }