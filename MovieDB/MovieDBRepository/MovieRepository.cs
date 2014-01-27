using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieDB.MovieDBShared;
using MovieDB.MovieDBRepository;

namespace MovieDBRepository
{
    
    public class MovieRepository
    {
        MoviesDBContext mdbc = new MoviesDBContext();
        public IQueryable<Movie> Retrieve()
        {
            return from movie in mdbc.Movies
                   select movie;
        }
    }
}
