using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Registrations;

namespace AngularFor.NetDev.Controllers
{
    public class RegistrationsController : Controller
    {
        private RegistrationVmBuilder registrationVmBuilder = new RegistrationVmBuilder();
        //
        // GET: /Registrations/

        public ActionResult Index()
        {
            return View(this.registrationVmBuilder.BuildRegistrationVm());
        }

    }
}
