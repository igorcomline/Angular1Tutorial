﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular1Tutorial.Controllers
{
    public class StartController : Controller
    {
        // GET: Start
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Kontakt()
        {
            return View();
        }
    }
}