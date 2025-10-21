using Microsoft.EntityFrameworkCore;

namespace AngularNewsAPI.Data
{
    public class AngularNewsDbContext : DbContext
    {
        public DbSet<Entities.User> Users { get; set; }
        public DbSet<Entities.Article> Articles { get; set; }
        public DbSet<Entities.Comment> Comments { get; set; }
        public AngularNewsDbContext(DbContextOptions<AngularNewsDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Entities.Article>()
                .HasOne(a => a.Author)
                .WithMany(u => u.Articles)
                .HasForeignKey(a => a.AuthorId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Entities.Comment>()
                .HasOne(c => c.Article)
                .WithMany(a => a.Comments)
                .HasForeignKey(c => c.ArticleId)
                .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Entities.Article>()
                .Property(a => a.Category)
                .HasConversion<string>();

        }
    }
}
