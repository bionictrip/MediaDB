using System;
using System.Collections.Generic;

namespace MovieDB.MovieDBShared
{
    public partial class Movie
    {
        public long ID { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Type { get; set; }
    }
}
