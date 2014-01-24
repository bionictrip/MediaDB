using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using MovieDB.MovieDBRepository;
using MovieDB.MovieDBShared;

namespace MovieDBScanner
{
    public class MoviesDBScanner
    {
        string extensions = ".avi .mp4 .mkv .ogv .ogm";
        string directories = @"d:\stufff\;c:\stufff\;g:\video\;f:\video\";
        MoviesDBContext mdb = new MoviesDBContext();
        private MoviesDBContext _moviesDbContext;

        public MoviesDBContext MoviesDbContext
        {
            get { return _moviesDbContext; }
            set { _moviesDbContext = value; }
        }
        
        
        static void Main(string[] args)
        {
            
            MoviesDBScanner mds = new MoviesDBScanner();

        }

        public MoviesDBScanner()
        {
            Movie[] movies = GetMovies();
            mdb.Database.ExecuteSqlCommand("delete from Movie;DBCC CHECKIDENT('Movie', RESEED, 0)");
            mdb.SaveChanges();
            //_moviesDbContext.Configuration();
            foreach(Movie movie in movies)
            {
                Console.WriteLine("Adding {0} from {1}...", movie.Name, movie.Location);
                mdb.Movies.Add(movie);
            }
            try
            {
                Console.WriteLine("Saving...");
                mdb.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public Movie[] GetMovies()
        {
            Movie[] m;
            string[] directories = this.directories.Split(';');
            List<Movie> lm = new List<Movie>();
            List<FileInfo> fi = new List<FileInfo>();
            foreach(string directory in directories)
            {
                DirectoryInfo d = new DirectoryInfo(directory);
                fi = d.GetFiles("*.*", SearchOption.AllDirectories).Where(file => !file.Extension.Equals("")
                    && extensions.Contains(file.Extension)).Concat<FileInfo>(fi).ToList();
            }
            
            
            foreach (FileInfo f in fi)
            {
                lm.Add(new Movie() { Name = f.Name, Location = f.DirectoryName, Type = f.Extension });
            }
            m = lm.ToArray();
            return m;
        }
    }
}
