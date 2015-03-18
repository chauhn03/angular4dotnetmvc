using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using AngularFor.NetDev.Models.Courses;
using AngularFor.NetDev.Models.Registrations;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularFor.NetDev.Controllers
{
    public class CoursesController : ApiController
    {
        private  RegistrationVmBuilder registrationVmBuilder = new RegistrationVmBuilder();

        //
        // GET: /Courses/
        public CourseVm[] Get()
        {
            return this.registrationVmBuilder.GetCourseVms();
        }        
    }  
}
