using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Registrations;

namespace AngularFor.NetDev.Controllers
{
    public class InstructorsController : JsonController
    {
        private RegistrationVmBuilder registrationVmBuilder = new RegistrationVmBuilder();
        //
        // GET: /Instructors/

        public ActionResult Index()
        {
            return Json(this.registrationVmBuilder.GetInstructorVms(), JsonRequestBehavior.AllowGet);
        }

    }
}
