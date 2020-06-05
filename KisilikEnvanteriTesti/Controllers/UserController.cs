using KisilikEnvanteriTesti.Models.AdminUserModel;
using KisilikEnvanteriTesti.Models.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
namespace KisilikEnvanteriTesti.Controllers
{
    [Authorize(Roles = "A")]
    public class UserController : Controller
    {
        // GET: AddAdmin
        TestDBEntities db = new TestDBEntities();
        
        public ActionResult UserSelect()
        {
            var model = db.kullanici.Include(m => m.Sehirler).ToList();
            db.SaveChanges();
            return View(model);
        }

        public ActionResult GoruntuleKullanici(int id)
        {

            var kullanici = db.kullanici.Where(m => m.KullaniciID == id).FirstOrDefault();
            kullanici.Yetki = "A";
            db.SaveChanges();
            return RedirectToAction("UserSelect");

        }
        public ActionResult GoruntuleYonetici(int id)
        {

            var kullanici = db.kullanici.Where(m => m.KullaniciID == id).FirstOrDefault();
            kullanici.Yetki = "U";
            db.SaveChanges();
            return RedirectToAction("UserSelect");

        }

    }
}