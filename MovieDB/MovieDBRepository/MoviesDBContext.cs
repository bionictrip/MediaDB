using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using MovieDB.MovieDBShared;

namespace MovieDB.MovieDBRepository
{
    public partial class MoviesDBContext : DbContext
    {
        static MoviesDBContext()
        {
            Database.SetInitializer<MoviesDBContext>(null);
        }

        public MoviesDBContext()
            : base("Name=MoviesDBContext")
        {
        }

        public DbSet<Movie> Movies { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new MovieMap());
        }
    }
}
