using System.ComponentModel;
using System.Text.Json;

namespace AngularNewsAPI.Data.Entities
{
    public enum Category
    {
        Technology,
        Health,
        Sports,
        Entertainment,
        Business,
        Science,
        World
    }
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedAt { get; set; }
        public int Views { get; set; }
        public int Rating { get; set; }
        public List<Comment> Comments { get; set; }
        public Category Category { get; set; }
        public int AuthorId { get; set; }
        public User Author { get; set; }
    }
}