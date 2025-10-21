using AngularNewsAPI.Models.Comment;

namespace AngularNewsAPI.Service
{
    public interface ICommentService
    {
        Task<CommentDTO> AddCommentAsync(CreateCommentDTO dto);
        Task<bool> DeleteCommentAsync(int commentId);
        Task<IEnumerable<CommentDTO>> GetCommentsByArticleIdAsync(int articleId);

    }
}
