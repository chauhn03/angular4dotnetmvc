using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Accounts;

namespace AngularFor.NetDev.Controllers
{
    public class AccountController : ApiController
    {
        //
        // GET: /Account/              
        public HttpResponseMessage Save(StudentVm studentVm)
        {
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

    }
}
