using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KisilikEnvanteriTesti.Models.UserMail
{
    public class UserMailClass
    {
        public string MailAdresi { get; set; }
        public string GuvenlikKodu {  get ; set; }
    }
}