﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace KisilikEnvanteriTesti.Models.EntityFramework
{
    using System;
    using System.Collections.Generic;
    
    public partial class kullanici
    {
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
        public string Sure { get; set; }
    
        public virtual Sehirler Sehirler { get; set; }
    }
}
