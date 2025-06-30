function getBusinessAddress(business) {
   const {address} = business;

   const {street, number, zipCode} = address;

   return `${street}, number ${number}, ${zipCode}` 
}


console.log(getBusinessAddress())