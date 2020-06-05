using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KisilikEnvanteriTesti.Models.UserMail
{
    public class UserPasswordClass
    {
        [StringLength(12, MinimumLength = 6, ErrorMessage = "Şifre minimum 6, maksimum 12 karakter olmalıdır.")]
        [Required(ErrorMessage = "Şifre alanı boş geçilemez!")]
        public string Sifre2 { get; set; }
        [Compare("Sifre2", ErrorMessage = "Şifreler uyuşmuyor.")]
        public string SifreTekrar2 { get; set; }
    }
}