using KisilikEnvanteriTesti.Models.EntityFramework;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KisilikEnvanteriTesti.Models.AdminUserModel
{
    public class AdminUserClass
    {
        TestDBEntities db = new TestDBEntities();
        
        public int KullaniciID { get; set; }
        public string KullaniciAdi { get; set; }
        public string Sifre { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public string Mail { get; set; }
        public string Tel { get; set; }
        public Nullable<int> SehirID { get; set; }
        public Nullable<System.DateTime> DogumTarihi { get; set; }
        public Nullable<bool> Cinsiyet { get; set; }
        public Nullable<bool> MedeniHal { get; set; }
        public string Sonuc { get; set; }
        public string Yetki { get; set; }
        public IEnumerable<Sehirler> Sehirler { get; set; }

    }
}