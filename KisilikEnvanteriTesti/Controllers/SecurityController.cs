using KisilikEnvanteriTesti.Models.EntityFramework;
using KisilikEnvanteriTesti.Models.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace KisilikEnvanteriTesti.Controllers
{
    public class SecurityController : Controller
    {
        // GET: Security
        TestDBEntities db = new TestDBEntities();
       [AllowAnonymous][HttpGet]
        public ActionResult Login() //Sayfa yüklenirken dropdownliste şehirlei atarak sayfayı çalıştırıyor.
        {
            if (((User.IsInRole("A")) || (User.IsInRole("U"))))
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                var model = new UserModelClass()
                {
                    Sehirler = db.Sehirler.ToList()
                };
                return View("Login", model);
            }
        }
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Login(kullanici kullanici)
        {
            if (kullanici.KullaniciAdi!=null||kullanici.Sifre!=null)
            {
                var kullaniciindb = db.kullanici.FirstOrDefault(m => m.KullaniciAdi == kullanici.KullaniciAdi && m.Sifre == kullanici.Sifre);//veri tabanında bu kullanıcı adı ve şifresi olan kullanıcı var mı?
                if (kullaniciindb != null)//varsa index sayfasına git
                {
                    FormsAuthentication.SetAuthCookie(kullaniciindb.KullaniciAdi, false);
                    Response.Cookies["KullaniciID"].Value = kullaniciindb.KullaniciID.ToString();
                    Response.Cookies["KullaniciID"].Expires = DateTime.Now.AddDays(2);
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    var model = new UserModelClass()
                    {
                        Sehirler = db.Sehirler.ToList()
                    };

                    ViewBag.Mesaj = "Hatalı kullanıcı adı veya parola.";//Eğer yoksa bu uyarıyı ver
                    return View("Login", model);
                }
            }
            else
            {
                var model = new UserModelClass()
                {
                    Sehirler = db.Sehirler.ToList()
                };
                ViewBag.Mesaj = "Kullanıcı adı ve parola kısmı boş geçilemez.";
                return View("Login", model);
            }
        }
        [Authorize(Roles = "A,U")]
        public ActionResult Logout()
        {
            Response.Cookies["KullaniciID"].Expires = DateTime.Now.AddDays(-2);
            FormsAuthentication.SignOut();
            Session.RemoveAll();
            return RedirectToAction("Login", "Security");
        }
        [HttpPost]
        [AllowAnonymous][ValidateAntiForgeryToken]
        public ActionResult Signup(UserModelClass KullaniciModel)
        {
 var kullaniciindb = db.kullanici.FirstOrDefault(m => m.KullaniciAdi == KullaniciModel.SKullaniciAdi  );
                var mailindb= db.kullanici.FirstOrDefault(m => m.Mail == KullaniciModel.Mail);
            if (ModelState.IsValid)
            {
                if (kullaniciindb == null&& mailindb==null) //Kayıt olmak için girilen kullanıcı adı ve e mail veri tabanında yoksa kaydet
                {
                    kullanici k = new kullanici();
                    k.Ad = KullaniciModel.Ad;
                    k.Soyad = KullaniciModel.Soyad;
                    k.KullaniciAdi = KullaniciModel.SKullaniciAdi;

                    k.Sifre = KullaniciModel.SSifre;
                    k.Mail = KullaniciModel.Mail;
                    k.Tel = KullaniciModel.Tel;
                    k.SehirID = KullaniciModel.SehirID;

                    k.DogumTarihi = KullaniciModel.DogumTarihi;
                    k.Cinsiyet = KullaniciModel.Cinsiyet;
                    k.MedeniHal = KullaniciModel.MedeniHal;
                    k.Yetki = "U";
                    db.kullanici.Add(k);
                    db.SaveChanges();
                    TempData["AlertMessage"] = "Başarıyla kayıt olundu.";
                    return RedirectToAction("Login"); 
                }
                else //Varsa uyarı ver
                {
                    var model = new UserModelClass()
                    {
                        Sehirler = db.Sehirler.ToList()
                    };
                    if(kullaniciindb!=null)
                    ViewBag.Mesaj2 = "Bu kullanıcı adı daha önce alınmış!.";
                    if (mailindb != null)
                        ViewBag.Mesaj2 = "Bu e-posta adresi daha önce alınmış!.";
                    return View("Login", model);
                }
            }
            else
            {
                var model = new UserModelClass()
                {
                    Sehirler = db.Sehirler.ToList()
                };
                return View("Login", model);

            }
            }
         
            }
        }
  