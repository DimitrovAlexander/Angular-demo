using AngularNewsAPI.Models.Article;
using AngularNewsAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AngularNewsAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly IArticleService _articleService;

        public ArticlesController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        // Helper, за да вземем AuthorId от токена
        private int GetAuthorId()
        {
            // В реално приложение: ClaimsPrincipal.FindFirst(ClaimTypes.NameIdentifier)?.Value
            // Засега симулираме, че потребител с ID=1 е логнат
            return 1;
        }

        // GET: api/Articles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArticleDTO>>> GetAll()
        {
            var articles = await _articleService.GetAllArticlesAsync();
            return Ok(articles);
        }

        // GET: api/Articles/recent 
        [HttpGet("recent")]
        public async Task<ActionResult<IEnumerable<ArticleDTO>>> GetRecent()
        {
            var articles = await _articleService.GetRecentArticlesAsync();
            return Ok(articles);
        }

        // GET: api/Articles/author/{id}
        [HttpGet("author/{id}")]
        public async Task<ActionResult<IEnumerable<ArticleDTO>>> GetByAuthor(int id)
        {
            var articles = await _articleService.GetArticlesByAuthorAsync(id);
            return Ok(articles);
        }

        // POST: api/Articles
        [Authorize] // Този метод изисква логнат потребител
        [HttpPost]
        public async Task<ActionResult<ArticleDTO>> Create([FromBody] CreateArticleDTO dto)
        {
            var authorId = GetAuthorId(); // Вземаме ID-то от JWT токена
            var article = await _articleService.CreateArticleAsync(dto, authorId);

            return CreatedAtAction(nameof(GetAll), new { id = article.Id }, article);
        }

        // PUT: api/Articles/5
        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<ArticleDTO>> Update(int id, [FromBody] EditArticleDTO dto)
        {
            if (id != dto.Id) return BadRequest("ID в URL и ID в тялото не съвпадат.");

            var authorId = GetAuthorId();
            var updatedArticle = await _articleService.UpdateArticleAsync(dto, authorId);

            if (updatedArticle == null)
            {
                return Forbid(); // 403 Forbidden - Потребителят не е автор или постът не съществува
            }

            return Ok(updatedArticle);
        }

        // DELETE: api/Articles/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var authorId = GetAuthorId();
            var deleted = await _articleService.DeleteArticleAsync(id, authorId);

            if (!deleted)
            {
                return Forbid(); // 403 Forbidden
            }

            return NoContent(); // 204 No Content
        }
    }
}
