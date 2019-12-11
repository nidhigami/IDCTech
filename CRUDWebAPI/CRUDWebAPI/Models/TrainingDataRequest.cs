using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUDWebAPI.Models
{
    public class TrainingDataRequest
    {
        public string name { get; set; }
    public DateTime? startDate { get; set; }
        public DateTime? endDate { get; set; }
        

    }
}