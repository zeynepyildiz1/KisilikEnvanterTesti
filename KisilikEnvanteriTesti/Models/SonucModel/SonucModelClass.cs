using KisilikEnvanteriTesti.Models.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KisilikEnvanteriTesti.Models.SonucModel
{
    public class SonucModelClass
    {
        
        public int KullaniciID { get; set; }
       
        public string KullaniciAdi { get; set; }
       
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
    
        public virtual Sehirler Sehirler { get; set; }
        public int HKullaniciID { get; set; }
        public string HAd { get; set; }
        public string HSoyad { get; set; }
        public string HMail { get; set; }
        public string HTel { get; set; }
        public Nullable<int> HSehirID { get; set; }
        public Nullable<System.DateTime> HDogumTarihi { get; set; }
        public Nullable<bool> HCinsiyet { get; set; }
        public Nullable<bool> HMedeniHal { get; set; }
        public string HSonuc { get; set; }
        public virtual Sehirler HSehirler { get; set; }
    }
}