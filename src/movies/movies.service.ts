import { Injectable, NotFoundException } from '@nestjs/common';

import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    // 실제 서비스에선 DB 쿼리가 적힘
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie whit ID ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string): void {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id, 10));
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
