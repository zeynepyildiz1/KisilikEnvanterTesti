using KisilikEnvanteriTesti.Models.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace KisilikEnvanteriTesti.Models.UserModel
{
    public class UserModelClass
    {
       
        public int KullaniciID { get; set; }
      
        public string KullaniciAdi { get; set; }
        
        public string Sifre { get; set; }
        [RegularExpression(@"^[a-z0-9_-]{6,25}$", ErrorMessage= "Kullanıcı adı yalnızca küçük harf, rakam veya özel semboller(kısa çizgi, alt çizgi)içerebilir.\nKullanıcı adı az 6 en çok 25 karakter olmalıdır.")]
        [Required(ErrorMessage = "Kullanıcı adı alanı alanı boş geçilemez!")]
        public string SKullaniciAdi { get; set; }
        [StringLength(12, MinimumLength = 6, ErrorMessage = "Şifre minimum 6, maksimum 12 karakter olmalıdır.")]
        [Required(ErrorMessage = "Şifre alanı boş geçilemez!")]
        public string SSifre { get; set; }
        [Compare("SSifre", ErrorMessage = "Şifreler uyuşmuyor.")]
        public string SSifreTekrar { get; set; }
        [Required(ErrorMessage = "Ad alanı boş geçilemez!")]
        public string Ad { get; set; }
        [Required(ErrorMessage = "Soyad alanı boş geçilemez!")]
        public string Soyad { get; set; }
        [EmailAddress(ErrorMessage = "Lütfen geçerli bir e-mail adresi giriniz.")]
        [Required(ErrorMessage = "Mail alanı boş geçilemez!")]
        public string Mail { get; set; }
        public Nullable<int> SehirID { get; set; }
        public IEnumerable<Sehirler> Sehirler { get; set; }
        [Required(ErrorMessage = "Doğum tarihi alanı boş geçilemez!")]
        public Nullable<System.DateTime> DogumTarihi { get; set; }
       
        public Nullable<bool> Cinsiyet { get; set; }
        
        public Nullable<bool> MedeniHal { get; set; }
        public string Sonuc { get; set; }
        public string Yetki { get; set; }
        [RegularExpression(@"^(05(\d{9}))$", ErrorMessage = "Lütfen geçerli bir telefon numarası giriniz.")]

        [Required(ErrorMessage = "Tel alanı boş geçilemez!")]
        public string Tel { get; set; }


    }
}