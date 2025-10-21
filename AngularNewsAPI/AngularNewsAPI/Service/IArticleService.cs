using AngularNewsAPI.Models.Article;

namespace AngularNewsAPI.Service
{
    public interface IArticleService
    {
        Task<ArticleDTO> CreateArticleAsync(CreateArticleDTO dto, int authorId);
        Task<ArticleDTO?> UpdateArticleAsync(EditArticleDTO dto, int authorId);
        Task<bool> DeleteArticleAsync(int id, int authorId);
        Task<ArticleDTO?> GetArticleByIdAsync(int id);
        Task<IEnumerable<ArticleDTO>> GetAllArticlesAsync();
        Task<IEnumerable<ArticleDTO>> GetRecentArticlesAsync(int count = 10);
        Task<IEnumerable<ArticleDTO>> GetArticlesByAuthorAsync(int authorId);
    }
}
