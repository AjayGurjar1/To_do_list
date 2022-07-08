exports.getDate=function() { 
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const today  = new Date();
  
 
             return today.toLocaleDateString("en-US", options);  // Saturday, September 17, 2016
             }

exports.getDateHindi=function() { 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();


     return today.toLocaleDateString("hi-IN", options);  //शुक्रवार, 8 जुलाई 2022
    
     }