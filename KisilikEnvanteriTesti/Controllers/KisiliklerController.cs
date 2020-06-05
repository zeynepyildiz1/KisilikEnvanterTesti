using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KisilikEnvanteriTesti.Controllers
{
    public class KisiliklerController : Controller
    {
        // GET: Kisilikler
        [AllowAnonymous]
        public ActionResult Kisilikler()
        {
            return View();
        }
    }
}