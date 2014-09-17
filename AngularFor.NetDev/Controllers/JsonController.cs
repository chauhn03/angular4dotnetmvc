using System;
using System.Net;
using System.Reflection;
using System.Web.Http.Controllers;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularFor.NetDev.Controllers
{
    public class JsonController : Controller
    {
        protected new ActionResult Json(object data, JsonRequestBehavior behavior = JsonRequestBehavior.DenyGet)
        {
            var jsonSerizalierSettings = new JsonSerializerSettings() { ContractResolver = new CamelCasePropertyNamesContractResolver()};

            if (this.Request.RequestType == WebRequestMethods.Http.Get && behavior == JsonRequestBehavior.DenyGet)
            {
                throw  new InvalidOperationException("Get is no permitted for this request");
            }

            var jsonResult = new ContentResult()
            {
                Content =  JsonConvert.SerializeObject(data, jsonSerizalierSettings),
                ContentType =  "application/json"
            };

            return jsonResult;
        }
    }
}