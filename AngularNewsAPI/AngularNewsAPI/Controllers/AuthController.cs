using System.Security.Cryptography;
using System.Text;
using AngularNewsAPI.Data;
using AngularNewsAPI.Data.Entities;
using AngularNewsAPI.Models.User;
using AngularNewsAPI.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularNewsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AngularNewsDbContext _context;
        private readonly IJwtService _jwtService;
        public AuthController(AngularNewsDbContext context, IJwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Login([FromBody] LoginDTO request)
        {
            if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            {
                return BadRequest("User with this email doesn't exist");
            }
            string passwordHash = HashPassword(request.Password);
            var user = new User
            {
                Email = request.Email,
                PasswordHash = passwordHash.ToString(),
                Role = "User",
                FirstName = request.FirstName,
                LastName = request.LastName,

            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(new { message = "User registered successfully" });

        }
        [HttpPost("login")]
        public async Task<IActionResult> Register([FromBody] LoginDTO request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null || user.PasswordHash != HashPassword(request.Password))
            {
                return BadRequest("Invalid email or password");
            }
            var token = _jwtService.GenerateToken(user);
            return Ok(new { token });
        }

        private string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }
    }
}

