using MovieDB.MovieDBShared;
using MovieDBRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieDBApi.Controllers
{
    public class MoviesController : ApiController
    {
        MovieRepository mr = new MovieRepository();
        [HttpGet]
        public IQueryable<Movie> Get()
        {
            return mr.Retrieve();
        }
    }
}
