using AngularNewsAPI.Data.Entities;
using AngularNewsAPI.Models.Comment;

namespace AngularNewsAPI.Models.Article
{
    public class ArticleDTO
    {

        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedAt { get; set; }
        public int Views { get; set; }
        public int Rating { get; set; }
        public Category Category { get; set; }
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public List<CommentDTO> Comments { get; set; }
    }
}
