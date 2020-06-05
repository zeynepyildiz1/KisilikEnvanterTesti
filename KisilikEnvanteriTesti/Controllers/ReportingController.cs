using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KisilikEnvanteriTesti.Models.EntityFramework;
namespace KisilikEnvanteriTesti.Controllers
{
    public class ReportingController : Controller
    {
        // GET: Reporting
        TestDBEntities db = new TestDBEntities();
        public ActionResult Reporting()
        {
            return View();
        }
        public ActionResult FemaleGetData()
        {
            int INTJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "INTJ").Count();
            int INTP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "INTP").Count();
            int ENTJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ENTJ").Count();
            int ENTP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ENTP").Count();
            int INFJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "INFJ").Count();
            int INFP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc ==  "NFP").Count(); 
            int ENFJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ENFJ").Count();
            int ENFP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ENFP").Count();
            int ISTJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ISTJ").Count();
            int ISFJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ISFJ").Count();
            int ESTJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ESTJ").Count();
            int ESFJ = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ESFJ").Count();
            int ISTP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ISTP").Count();
            int ISFP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ISFP").Count();
            int ESTP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ESTP").Count();
            int ESFP = db.kullanici.Where(x => x.Cinsiyet == true && x.Sonuc == "ESFP").Count();
            Ratio obj = new Ratio();
            obj.INTJ = INTJ;
            obj.INTP = INTP;
            obj.ENTJ = ENTJ;
            obj.ENTP = ENTP;
            obj.INFJ = INFJ;
            obj.INFP = INFP;
            obj.ENFJ = ENFJ;
            obj.ENFP = ENFP;
            obj.ISTJ = ISTJ;
            obj.ISFJ = ISFJ;
            obj.ESTJ = ESTJ;
            obj.ESFJ = ESFJ;
            obj.ISTP = ISTP;
            obj.ISFP = ISFP;
            obj.ESTP = ESTP;
            obj.ESFP = ESFP;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public ActionResult MaleGetData()
        {
            int INTJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "INTJ").Count();
            int INTP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "INTP").Count();
            int ENTJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ENTJ").Count();
            int ENTP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ENTP").Count();
            int INFJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "INFJ").Count();
            int INFP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "NFP").Count();
            int ENFJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ENFJ").Count();
            int ENFP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ENFP").Count();
            int ISTJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ISTJ").Count();
            int ISFJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ISFJ").Count();
            int ESTJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ESTJ").Count();
            int ESFJ = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ESFJ").Count();
            int ISTP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ISTP").Count();
            int ISFP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ISFP").Count();
            int ESTP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ESTP").Count();
            int ESFP = db.kullanici.Where(x => x.Cinsiyet == false && x.Sonuc == "ESFP").Count();
            Ratio obj = new Ratio();
            obj.INTJ = INTJ;
            obj.INTP = INTP;
            obj.ENTJ = ENTJ;
            obj.ENTP = ENTP;
            obj.INFJ = INFJ;
            obj.INFP = INFP;
            obj.ENFJ = ENFJ;
            obj.ENFP = ENFP;
            obj.ISTJ = ISTJ;
            obj.ISFJ = ISFJ;
            obj.ESTJ = ESTJ;
            obj.ESFJ = ESFJ;
            obj.ISTP = ISTP;
            obj.ISFP = ISFP;
            obj.ESTP = ESTP;
            obj.ESFP = ESFP;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
    public ActionResult Under20GetData()
        {
            int INTJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "INTJ").Count();
            int INTP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "INTP").Count();
            int ENTJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ENTJ").Count();
            int ENTP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ENTP").Count();
            int INFJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "INFJ").Count();
            int INFP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "NFP").Count();
            int ENFJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ENFJ").Count();
            int ENFP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ENFP").Count();
            int ISTJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ISTJ").Count();
            int ISFJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ISFJ").Count();
            int ESTJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ESTJ").Count();
            int ESFJ = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ESFJ").Count();
            int ISTP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ISTP").Count();
            int ISFP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ISFP").Count();
            int ESTP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ESTP").Count();
            int ESFP = db.kullanici.Where(x => (DateTime.Now.Year-x.DogumTarihi.Value.Year) <20 && x.Sonuc == "ESFP").Count();
            Ratio obj = new Ratio();
            obj.INTJ = INTJ;
            obj.INTP = INTP;
            obj.ENTJ = ENTJ;
            obj.ENTP = ENTP;
            obj.INFJ = INFJ;
            obj.INFP = INFP;
            obj.ENFJ = ENFJ;
            obj.ENFP = ENFP;
            obj.ISTJ = ISTJ;
            obj.ISFJ = ISFJ;
            obj.ESTJ = ESTJ;
            obj.ESFJ = ESFJ;
            obj.ISTP = ISTP;
            obj.ISFP = ISFP;
            obj.ESTP = ESTP;
            obj.ESFP = ESFP;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Over20GetData()
        {
            int INTJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "INTJ").Count();
            int INTP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "INTP").Count();
            int ENTJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ENTJ").Count();
            int ENTP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ENTP").Count();
            int INFJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "INFJ").Count();
            int INFP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "NFP").Count();
            int ENFJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ENFJ").Count();
            int ENFP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ENFP").Count();
            int ISTJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ISTJ").Count();
            int ISFJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ISFJ").Count();
            int ESTJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ESTJ").Count();
            int ESFJ = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ESFJ").Count();
            int ISTP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ISTP").Count();
            int ISFP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ISFP").Count();
            int ESTP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ESTP").Count();
            int ESFP = db.kullanici.Where(x => (DateTime.Now.Year - x.DogumTarihi.Value.Year)>= 20 && x.Sonuc == "ESFP").Count();
            Ratio obj = new Ratio();
            obj.INTJ = INTJ;
            obj.INTP = INTP;
            obj.ENTJ = ENTJ;
            obj.ENTP = ENTP;
            obj.INFJ = INFJ;
            obj.INFP = INFP;
            obj.ENFJ = ENFJ;
            obj.ENFP = ENFP;
            obj.ISTJ = ISTJ;
            obj.ISFJ = ISFJ;
            obj.ESTJ = ESTJ;
            obj.ESFJ = ESFJ;
            obj.ISTP = ISTP;
            obj.ISFP = ISFP;
            obj.ESTP = ESTP;
            obj.ESFP = ESFP;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public class Ratio
        {
            public int INTJ { get; set; }
            public int INTP { get; set; }
            public int ENTJ { get; set; }
            public int ENTP { get; set; }
            public int INFJ { get; set; }
            public int INFP { get; set; }
            public int ENFJ { get; set; }
            public int ENFP { get; set; }
            public int ISTJ { get; set; }
            public int ISFJ { get; set; }
            public int ESTJ { get; set; }
            public int ESFJ { get; set; }
            public int ISTP { get; set; }
            public int ISFP { get; set; }
            public int ESTP { get; set; }
            public int ESFP { get; set; }
        }
    }
}