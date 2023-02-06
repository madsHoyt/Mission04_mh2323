using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_mh2323.Models
{
    public class calcModel
    {
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int GroupProject { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Final { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Intex { get; set; } 
    }
}
