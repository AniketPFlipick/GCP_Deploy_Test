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
        return Ok("Hello World from API!");
    }
}