//This file is my HomeController.cs file 
using Microsoft.AspNetCore.Mvc;
using Mission04_mh2323.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_mh2323.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //method for get
        [HttpGet]
        public IActionResult calc()
        {
            return View();
        }

        //method for post
        [HttpPost]
        public IActionResult calc(calcModel model)
        {
            return View();
        }
    }
}
