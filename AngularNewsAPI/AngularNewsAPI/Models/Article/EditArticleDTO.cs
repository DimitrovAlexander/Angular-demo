using AngularNewsAPI.Data.Entities;

namespace AngularNewsAPI.Models.Article
{
    public class EditArticleDTO
    {
        public int Id { get; set; } 
        public string Title { get; set; }
        public string Body { get; set; }
        public Category Category { get; set; }
    }
}
