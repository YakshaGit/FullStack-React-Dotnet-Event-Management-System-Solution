using EventManagement.BusinessLayer.ViewModels;
using EventManagement.DataLayer;
using EventManagement.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventManagement.BusinessLayer.Services.Repository
{
    public class EventRepository : IEventRepository
    {
        private readonly EventManagementDbContext _DbContext;
        public EventRepository(EventManagementDbContext DbContext)
        {
            _DbContext = DbContext;
        }

        public async Task<Event> GetById(long id)
        {
            //Write Your Code Here
            throw new NotImplementedException();
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

        public async Task<Event> Update(long eventId, EventViewModel model)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }

        public async Task<Event> Delete(long eventId)
        {
            //Write Your Code Here
            throw new NotImplementedException();
        }
    }
}
