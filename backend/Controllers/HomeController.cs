using Microsoft.AspNetCore.Mvc;

namespace MyApp.Controllers;

[ApiController]
[Route("api")]
public class HomeController : ControllerBase
{
    [HttpGet]
    [Route("hello")]
    public IActionResult Hello()
    {
        Console.WriteLine($"API called: /api/hello from {HttpContext.Connection.RemoteIpAddress}");
        return Ok("Hello World from API!");
    }
}