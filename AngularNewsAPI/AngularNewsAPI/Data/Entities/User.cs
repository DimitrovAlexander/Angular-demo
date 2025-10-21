namespace AngularNewsAPI.Data.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Role { get; set; } // e.g., "Admin", "User"
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<Article> Articles { get; set; }

    }
}
