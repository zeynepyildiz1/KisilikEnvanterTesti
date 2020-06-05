using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using KisilikEnvanteriTesti.Models.EntityFramework;
using KisilikEnvanteriTesti.Models.UserMail;

namespace KisilikEnvanteriTesti.Controllers
{
    public class ForgotPasswordController : Controller
    {
        TestDBEntities db = new TestDBEntities();
        // GET: ForgotPassword
        [AllowAnonymous]
        [HttpGet]
        public ActionResult ForgotPassword()
        {
            return View();
        }
        [AllowAnonymous]
        [HttpPost]
        public ActionResult ForgotPassword(UserMailClass kullanici)
        {
          var mailara = db.kullanici.FirstOrDefault(m => m.Mail == kullanici.MailAdresi);
            if (ModelState.IsValid)
            {
                if (mailara != null)
                {
                    Session["Mail"] = kullanici.MailAdresi;
                    WebMail.SmtpServer = "smtp.gmail.com";
                    WebMail.SmtpPort = 587;
                    WebMail.UserName = "mailstaj@gmail.com";
                    WebMail.Password = "staj1234";
                    WebMail.EnableSsl = true;
                    WebMail.Send(
                    to: kullanici.MailAdresi, subject: "Şifre Kurtarma",
                    body: "Güvenlik kodunuz: " + RastgeleVeriUret(),
                    replyTo: kullanici.MailAdresi, isBodyHtml: true,
                    filesToAttach: null);
                    TempData["AlertMessage"] = "Guvenlik kodu gonderildi.Lutfen e-mail adresinizi kontrol ediniz.";
                    return RedirectToAction("SecurityVerification");
                }
                else if (kullanici.MailAdresi == "")
                {
                    return View();
                }
                else
                {
                    TempData["AlertMessage"] = "Geçersiz bir e posta adresi girdiniz.";
                    return View();
                }
            }
            else { return View(); }
            }
          
           
        [HttpGet]
        [AllowAnonymous]
      
        public ActionResult SecurityVerification()
        {
            if (Session["Mail"] != null && Session["deger"] != null)
                return View();

            else return HttpNotFound();
        }
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult SecurityVerification(UserMailClass guvenlik)
        {
            if (Session["Mail"] != null && Session["deger"] != null)
            {
                if (Session["deger"].ToString() == guvenlik.GuvenlikKodu)
                {
                    TempData["AlertMessage"] = "Guvenlik kodu doğru.";
                    Session["security"] = "a";
                    return RedirectToAction("ChangePassword");
                }
                else if (guvenlik.GuvenlikKodu=="")
                {
                    return View();
                }
                else
                {
                    TempData["AlertMessage"] = "Guvenlik kodu doğru değil.";
                    return View();
                }
            }
            else return HttpNotFound();
        }
        [HttpGet]
        [AllowAnonymous]
     
        public ActionResult ChangePassword()
        {
            if (Session["Mail"] != null && Session["deger"] != null && Session["security"] != null)
                return View();
            else return HttpNotFound();
        }
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ChangePassword(UserPasswordClass sifre)
        {
            if (Session["Mail"] != null && Session["deger"] != null && Session["security"] != null)
            {
                if (ModelState.IsValid)
                {
                    if (sifre.Sifre2 == sifre.SifreTekrar2)
                    {
                        string a = Session["Mail"].ToString();
                        var kullanici = db.kullanici.FirstOrDefault(m => m.Mail == a);
                        kullanici.Sifre = sifre.Sifre2;
                        db.SaveChanges();
                        TempData["AlertMessage"] = "Şifre başarıyla değiştirildi.";
                        Session.Contents.Remove("Mail");
                        Session.Contents.Remove("deger");
                        Session.Contents.Remove("security");
                        return RedirectToAction("Login", "Security");

                    }
                    else
                    {

                        return View();
                    }
                }
                else return View();
            }
            else return HttpNotFound();
        }
      
        
        public string RastgeleVeriUret()
        {
            string deger = "";
            //Türkçe karakterleri kullanmaktan vazgeçtim.
            string dizi = "ABCDEFGHIJKLMNOPRSTUVYZ0123456789";
            Random r = new Random();
            //Toplam 8 karakterden oluşan rastgele bir metin oluşturalım.
            for (int i = 0; i < 8; i++)
            {
                deger = deger + dizi[r.Next(0, 33)];
            }
            Session["deger"] = deger;
            return deger;
        }
    }
}