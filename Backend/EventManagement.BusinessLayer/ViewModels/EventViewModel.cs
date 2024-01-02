using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text;

namespace EventManagement.BusinessLayer.ViewModels
{
    public class EventViewModel
    {
        [Key]
        public long Id { get; set; }
        
        public string Name { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }
    }
}
