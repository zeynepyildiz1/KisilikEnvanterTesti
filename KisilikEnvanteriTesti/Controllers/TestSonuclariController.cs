using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KisilikEnvanteriTesti.Models.EntityFramework;
using System.Data.Entity;
namespace KisilikEnvanteriTesti.Controllers
{
    public class TestSonuclariController : Controller
    {
        TestDBEntities db = new TestDBEntities();
        [Authorize(Roles = "A")]
        // GET: TestSonuclari
        public ActionResult TestSonuclari()
        {
            var model = db.kullanici.Include(m => m.Sehirler).Where(m=>m.Sonuc!=null).ToList();
            db.SaveChanges();
            return View(model);
        }
    }
}