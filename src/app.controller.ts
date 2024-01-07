import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Post {
  author : string;
  title : string;
  content : string;
  likecount : number;
  commentCount : number;
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPost(): Post {
    return {
      author : '작가',
      title : '제목' ,
      content : '내용' , 
      likecount : 1 ,
      commentCount : 9999,
    };
  }
}
