using AngularNewsAPI.Data.Entities;

namespace AngularNewsAPI.Models.Article
{
    public class CreateArticleDTO
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public Category Category { get; set; }
    }
}
