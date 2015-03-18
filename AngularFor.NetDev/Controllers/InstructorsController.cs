using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Registrations;

namespace AngularFor.NetDev.Controllers
{
    public class InstructorsController : Controller
    {
        public ActionResult Index()
        {
            return this.View();
        }

    }
}
