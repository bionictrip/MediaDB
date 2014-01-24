using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MovieDBWeb.Startup))]
namespace MovieDBWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
