using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularFor.NetDev.Models.Courses;
using AngularFor.NetDev.Models.Instructors;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularFor.NetDev.Models.Registrations
{
    public class RegistrationVmBuilder
    {
        public CourseVm[] GetCourseVms()
        {
            var courses = new[]
            {
                new CourseVm {Number = "Number 1", Name = "Name 1", Instructor = "Instructor 1"},
                new CourseVm {Number = "Number 2", Name = "Name 2", Instructor = "Instructor 2"},
                new CourseVm {Number = "Number 3", Name = "Name 3", Instructor = "Instructor 3"},
                new CourseVm {Number = "Number 4", Name = "Name 4", Instructor = "Instructor 4"},
                new CourseVm {Number = "Number 5", Name = "Name 5", Instructor = "Instructor 5"}
            };

            return courses;
        }

        public InstructorsVm[] GetInstructorVms()
        {
            var instructors = new[]
            {
                new InstructorsVm {Name = "Name 1", Email = "Email 1", RoomNumber = 1},
                new InstructorsVm {Name = "Name 2", Email = "Email 2", RoomNumber = 2},
                new InstructorsVm {Name = "Name 3", Email = "Email 3", RoomNumber = 3},
                new InstructorsVm {Name = "Name 4", Email = "Email 4", RoomNumber = 4},
                new InstructorsVm {Name = "Name 5", Email = "Email 5", RoomNumber = 5}
            };

            return instructors;
        }
    }
}