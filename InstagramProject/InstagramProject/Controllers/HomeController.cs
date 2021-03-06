﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using InstagramProject.Models;
using ShoppingCart.Models;

namespace InstagramProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Registration()
        {
            return View();
        }

        public IActionResult Image()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult LogUser(string User, string Password)
        {
            //Code to save into a database
            string result = $"The user is {User} and the password is {Password}";

            return Content(result);
        }

        public IActionResult SaveUser([FromBody] User user)
        {
            return Content(user.ToString());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
