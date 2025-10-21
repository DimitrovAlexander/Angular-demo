using AngularNewsAPI.Data.Entities;

namespace AngularNewsAPI.Service
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}
