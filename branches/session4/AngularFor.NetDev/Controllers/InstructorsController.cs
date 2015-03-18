using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Instructors;
using AngularFor.NetDev.Models.Registrations;

namespace AngularFor.NetDev.Controllers
{
    public class InstructorsController : ApiController
    {
        private RegistrationVmBuilder registrationVmBuilder = new RegistrationVmBuilder();
        public InstructorsVm[] Get()
        {
            return this.registrationVmBuilder.GetInstructorVms();            
        }

    }
}
