using AngularNewsAPI.Data;
using AngularNewsAPI.Data.Entities;
using AngularNewsAPI.Models.Article;
using Microsoft.EntityFrameworkCore;

namespace AngularNewsAPI.Service
{
    public class ArticleService : IArticleService
    {
        private readonly AngularNewsDbContext _context;
        public ArticleService(AngularNewsDbContext context)
        {
            _context = context;
        }
        private ArticleDTO MapToResponseDto(Article article)
        {
            return new ArticleDTO
            {
                Id = article.Id,
                Title = article.Title,
                Body = article.Body,
                PublishedAt = article.PublishedAt,
                Views = article.Views,
                Rating = article.Rating,
                Category = article.Category,
                AuthorId = article.AuthorId,
                AuthorName = $"{article.Author.FirstName} {article.Author.LastName}"
            };
        }
        public async Task<ArticleDTO> CreateArticleAsync(CreateArticleDTO dto, int authorId)
        {
            var newArticle = new Article
            {
                Title = dto.Title,
                Body = dto.Body,
                Category = dto.Category,
                AuthorId = authorId,
                PublishedAt = DateTime.UtcNow,
                Views = 0,
                Rating = 0,
            };

            _context.Articles.Add(newArticle);
            await _context.SaveChangesAsync();

            
            await _context.Entry(newArticle).Reference(a => a.Author).LoadAsync();

            return MapToResponseDto(newArticle);
        }

        public async Task<bool> DeleteArticleAsync(int id, int authorId)
        {
            var article = await _context.Articles
               .FirstOrDefaultAsync(a => a.Id == id);

            if (article == null || article.AuthorId != authorId)
            {
                return false; // Статията не е намерена или потребителят не е автор
            }

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<ArticleDTO>> GetAllArticlesAsync()
        {
            var articles = await _context.Articles
               .Include(a => a.Author) // Включваме автора за AuthorUsername
               .ToListAsync();

            return articles.Select(MapToResponseDto);
        }

        public async Task<ArticleDTO?> GetArticleByIdAsync(int id)
        {
            var article = await _context.Articles
               .Include(a => a.Author) // Включваме автора за AuthorUsername
               .FirstOrDefaultAsync(a => a.Id == id);

            return MapToResponseDto(article);
        }

        public async Task<IEnumerable<ArticleDTO>> GetArticlesByAuthorAsync(int authorId)
        {
            var articles = await _context.Articles
                .Include(a => a.Author)
                .Where(a => a.AuthorId == authorId)
                .OrderByDescending(a => a.PublishedAt)
                .ToListAsync();

            return articles.Select(MapToResponseDto);
        }

        public async Task<IEnumerable<ArticleDTO>> GetRecentArticlesAsync(int count = 10)
        {
            var articles = await _context.Articles
                .Include(a => a.Author)
                .OrderByDescending(a => a.PublishedAt)
                .Take(count)
                .ToListAsync();

            return articles.Select(MapToResponseDto);
        }

        public async Task<ArticleDTO?> UpdateArticleAsync(EditArticleDTO dto, int authorId)
        {
            var article = await _context.Articles
               .Include(a => a.Author)
               .FirstOrDefaultAsync(a => a.Id == dto.Id);

            if (article == null || article.AuthorId != authorId)
            {
                return null; 
            }

            article.Title = dto.Title;
            article.Body = dto.Body;
            article.Category = dto.Category;

            await _context.SaveChangesAsync();
            return MapToResponseDto(article);
        }
    }
}
