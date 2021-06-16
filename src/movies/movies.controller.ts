import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `This will return a one movie with the id: ${id}`;
  }

  @Post()
  create(): string {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
