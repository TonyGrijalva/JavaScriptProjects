using System;
namespace ShoppingCart.Models
{
    public class User
    {
        public User()
        {
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string EmailAddress { get; set; }
        public string CountryOfResidence { get; set; }


        public override string ToString()
        {
            return $"Name [{this.FirstName + " " + this.LastName}], Gender[{this.Gender}], Email [{this.EmailAddress}], Country[{this.CountryOfResidence}]";
        }
    }
}
