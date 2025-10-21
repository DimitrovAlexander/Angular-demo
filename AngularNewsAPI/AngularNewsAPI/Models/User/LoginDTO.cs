namespace AngularNewsAPI.Models.User
{
    public class LoginDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; internal set; }
        public string LastName { get; internal set; }
    }
}
