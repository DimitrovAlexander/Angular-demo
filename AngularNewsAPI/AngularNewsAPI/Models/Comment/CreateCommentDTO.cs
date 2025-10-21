namespace AngularNewsAPI.Models.Comment
{
    public class CreateCommentDTO
    {
        public string Content { get; set; }
        public int ArticleId { get; set; }
        public string AuthorName { get; set; }
    }
}
