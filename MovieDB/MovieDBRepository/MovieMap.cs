using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using MovieDB.MovieDBShared;

namespace MovieDB.MovieDBRepository
{
    public class MovieMap : EntityTypeConfiguration<Movie>
    {
        public MovieMap()
        {
            // Primary Key
            this.HasKey(t => t.ID);

            // Properties
            this.Property(t => t.ID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity)
                .IsRequired();

            this.Property(t => t.Name)
                .HasMaxLength(500);

            this.Property(t => t.Location)
                .HasMaxLength(5000);

            this.Property(t => t.Type)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Movie");
            this.Property(t => t.ID).HasColumnName("ID");
            this.Property(t => t.Name).HasColumnName("Name");
            this.Property(t => t.Location).HasColumnName("Location");
            this.Property(t => t.Type).HasColumnName("Type");
        }
    }
}
