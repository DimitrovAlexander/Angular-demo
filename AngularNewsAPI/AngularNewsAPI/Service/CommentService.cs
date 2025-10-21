using AngularNewsAPI.Data;
using AngularNewsAPI.Data.Entities;
using AngularNewsAPI.Models.Comment;
using Microsoft.EntityFrameworkCore;

namespace AngularNewsAPI.Service
{
    public class CommentService : ICommentService
    {
        private readonly AngularNewsDbContext _context;

        public CommentService(AngularNewsDbContext context)
        {
            _context = context;
        }

        private CommentDTO MapToResponseDto(Comment comment)
        {
            return new CommentDTO
            {
                Id = comment.Id,
                Content = comment.Content,
                CreatedAt = comment.CreatedAt,
                ArticleId = comment.ArticleId,
                AuthorUsername = comment.Username
            };
        }

        public async Task<CommentDTO> AddCommentAsync(CreateCommentDTO dto)
        {
            // Проверка дали статията съществува
            var articleExists = await _context.Articles.AnyAsync(a => a.Id == dto.ArticleId);
            if (!articleExists)
            {
                // В реално приложение: хвърляне на NotFoundException
                throw new Exception("Article not found.");
            }

            var newComment = new Comment
            {
                Content = dto.Content,
                ArticleId = dto.ArticleId,
                Username = dto.AuthorName,
                CreatedAt = DateTime.UtcNow
            };

            _context.Comments.Add(newComment);
            await _context.SaveChangesAsync();


            

            return MapToResponseDto(newComment);
        }

        public async Task<bool> DeleteCommentAsync(int commentId)
        {
            var comment = await _context.Comments
                .FirstOrDefaultAsync(c => c.Id == commentId);

            if (comment == null)
            {
                return false; 
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<CommentDTO>> GetCommentsByArticleIdAsync(int articleId)
        {
            var comments = await _context.Comments
                .Where(c => c.ArticleId == articleId)
                .OrderBy(c => c.CreatedAt)
                .ToListAsync();

            return comments.Select(MapToResponseDto);
        }
    }
}
