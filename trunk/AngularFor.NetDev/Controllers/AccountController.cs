using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Accounts;

namespace AngularFor.NetDev.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Save(StudentVm studentVm)
        {
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

    }
}
