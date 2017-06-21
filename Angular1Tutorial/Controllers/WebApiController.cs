using Angular1Tutorial.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular1Tutorial.Controllers
{
    public class WebApiController : ApiController
    {
        public IEnumerable<Fruit> Get() {
            Fruit mango = new Fruit
            {
                Id = 3,
                Name = "Mango",
                Price = 3.87
            };

            List<Fruit> fruits = new List<Fruit> {

                new Fruit{ Id = 1,
                Name = "Apple",
                Price = 2.34 },

                new Fruit{ Id = 2,
                Name = "Watermelon",
                Price = 1.94 },

                mango,

                new Fruit{ Id = 4,
                Name = "Banana",
                Price = 0 }

            };
           

            return fruits.AsEnumerable<Fruit>();
        }
    }
}
