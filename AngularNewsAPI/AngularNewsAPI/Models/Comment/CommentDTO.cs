namespace AngularNewsAPI.Models.Comment
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public int ArticleId { get; set; }
        public int UserId { get; set; }
        public string AuthorUsername { get; set; }
    }
}