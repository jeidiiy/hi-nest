import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
  Body,
} from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string): string {
    return `We are searching for a movie made after ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `This will return a one movie with the id: ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
