using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CRUDWebAPI.Models;
using CRUDWebAPI.Data;
using System.Web.Http.Cors;

namespace CRUDWebAPI.Controllers
{
    [RoutePrefix ("api/training")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TrainingDataController : ApiController

    {
        [HttpPost]
        [Route ("save")]
        public TrainingDataResponse Post ([FromBody] TrainingDataRequest request)
        {
            TrainingDataResponse response = new TrainingDataResponse();
            response.hasError = true;
            response.message = "Something went wrong!";

            if (request == null) return response;

            if(String.IsNullOrEmpty(request.name) || !request.startDate.HasValue || !request.endDate.HasValue)
            {
                response.message = "Required fields are missing. Please enter valid data!";
                return response;
            }

            if(DateTime.Compare(request.endDate.Value, request.startDate.Value) < 0)
            {
                response.message = "End Date is earlier than Start Date. Please enter valid data!";
                return response;
            }

            if(true) //saveTrainingData(request))
            {

                using (var context = new TrainingDatabaseEntities())
                {
                    var entity = new Training()
                    {
                        Name = request.name,
                        StartDate = request.startDate.Value,
                        EndDate = request.endDate.Value
                    };

                    context.Trainings.Add(entity);
                    context.SaveChanges();

                }

                response.hasError = false;
                response.message = "Training record successfully saved.";
            }
            /*else
            {
                response.message = "Save failed! Please try again later!";
            }*/
            return response;
        }

    }
}
