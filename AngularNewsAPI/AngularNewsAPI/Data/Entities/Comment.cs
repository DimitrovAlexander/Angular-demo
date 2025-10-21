namespace AngularNewsAPI.Data.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public int ArticleId { get; set; }
        public Article Article { get; set; }
        public string Username { get; set; }

    }
}