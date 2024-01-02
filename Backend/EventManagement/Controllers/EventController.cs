using EventManagement.BusinessLayer.Interfaces;
using EventManagement.BusinessLayer.ViewModels;
using EventManagement.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventManagaement.Controllers
{
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventServices _eventServices;

        public EventController(IEventServices eventServices)
        {
            _eventServices = eventServices;
        }

      
        /// <summary>
        /// Create a new event
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("events")]
        public async Task<IActionResult> Register([FromBody] EventViewModel model)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        /// <summary>
        /// Update a existing Event
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("events/{id}")]
        public async Task<IActionResult> UpdateEvent(long id, [FromBody] EventViewModel model)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }


        /// <summary>
        /// Delete a existing Event
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("event/{id}")]
        public async Task<IActionResult> DeleteEvent(long id)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        /// <summary>
        /// Get Event by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("event/{id}")]
        public async Task<IActionResult> GetEventById(long id)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        /// <summary>
        /// Get Event By Status
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("events/searchByStatus")]
        public async Task<IEnumerable<Event>> GetEventByStatus([FromQuery] string status)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        /// <summary>
        /// Get Event By Name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("events/searchByName")]
        public async Task<IEnumerable<Event>> GetEventByName([FromQuery] string name)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        /// <summary>
        /// List All Events
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("events")]
        public async Task<IEnumerable<Event>> ListAllEvents()
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }
       
    }
}
