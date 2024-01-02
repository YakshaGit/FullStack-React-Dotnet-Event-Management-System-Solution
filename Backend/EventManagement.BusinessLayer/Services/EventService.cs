using EventManagement.BusinessLayer.Interfaces;
using EventManagement.BusinessLayer.Services.Repository;
using EventManagement.BusinessLayer.ViewModels;
using EventManagement.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EventManagement.BusinessLayer.Services
{
    public class EventService : IEventServices
    {
        private readonly IEventRepository _eventRepository;
        public EventService(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        public async Task<IEnumerable<Event>> GetByName(string name)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Event>> GetByStatus(string status)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        public async Task<Event> GetById(long id)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Event>> GetAll()
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        public async Task<Event> Create(Event eventDetails)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        public async Task<Event> Update(long id, EventViewModel model)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }
        public async Task<Event> Delete(long id)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }
    }
}
