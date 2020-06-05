using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.Mvc;
using KisilikEnvanteriTesti.Models.EntityFramework;
    namespace KisilikEnvanteriTesti.Controllers
{
    public class KisilikEnvanteriTestiController : Controller
    {
        TestDBEntities db = new TestDBEntities();
        // GET: KisilikEnvanteriTesti
         [Authorize(Roles = "A,U")]
        public ActionResult KisilikEnvanteriTesti()
        {
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "A,U")]
       
        public ActionResult SonucKaydet(kullanici Kullanici)
        {
            string a = Request.Cookies["KullaniciID"].Value;
            var indb = db.kullanici.Find(Convert.ToInt32(a));// giriş yapan kullanıcının idsini sessionla almıştık.Burada idsi .. olan kullanıcının bilgilerini cagırıyoruz.
            if (indb != null)
            {
                indb.Sonuc = Kullanici.Sonuc;
                indb.Sure = Kullanici.Sure;//idsi.. olan kullanıcının sonun verisini java scriptten aldığımız sonuçla değiştiriyoruz.
                db.SaveChanges();//veri tabanına kaydediyoruz
                return Json("Test sonucunuz başarıyla kaydedildi.", JsonRequestBehavior.AllowGet);
            }
            else
            {
                Response.Cookies["KullaniciID"].Expires = DateTime.Now.AddDays(-2);
                FormsAuthentication.SignOut();
                Json("Zaman aşımına uğradınız.Lütfen tekrar giriş yapınız.", JsonRequestBehavior.AllowGet);
                return RedirectToAction("Login", "Security");
            }
        }

    }

}