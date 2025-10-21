using AngularNewsAPI.Models.Comment;
using AngularNewsAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AngularNewsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly ICommentService _commentService;

        public CommentsController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        // Helper, за да вземем UserId от токена (симулация)
       

        // GET: api/Comments/article/5
        // Връща всички коментари за дадена статия
        [HttpGet("article/{articleId}")]
        public async Task<ActionResult<IEnumerable<CommentDTO>>> GetByArticleId(int articleId)
        {
            var comments = await _commentService.GetCommentsByArticleIdAsync(articleId);
            return Ok(comments);
        }

        // POST: api/Comments
        [Authorize] // Изисква логнат потребител
        [HttpPost]
        public async Task<ActionResult<CommentDTO>> AddComment([FromBody] CreateCommentDTO dto)
        {
            try
            {
               // Вземаме ID-то на потребителя от токена
                var comment = await _commentService.AddCommentAsync(dto);

                return CreatedAtAction(nameof(GetByArticleId), new { articleId = comment.ArticleId }, comment);
            }
            catch (Exception ex)
            {
                // Логираме грешката (напр. "Article not found.")
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Comments/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var deleted = await _commentService.DeleteCommentAsync(id);

            if (!deleted)
            {
                // 403 Forbidden - Ако потребителят не е автор
                // или 404 Not Found - Ако коментарът не съществува
                return Forbid();
            }

            return NoContent(); // 204 No Content
        }
    }
}
