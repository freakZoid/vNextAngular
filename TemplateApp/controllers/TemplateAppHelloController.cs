using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using TemplateApp.models;

namespace TemplateApp.controllers
{
    [Route("api/[controller]")]
    public class TemplateAppHelloController
    {
        [HttpGet]
        public string SayHi(string name)
        {
            return string.Format("Hello World, {0}", name);
        }
    }
}