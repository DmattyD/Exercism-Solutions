export const isLeap = (year) => {
  if (year % 4 !== 0) 
     return 'false' //'common year1';
     else if ((year % 4 === 0) && (year % 100 !== 0))
        return 'true' //'leap year1';
     else if ((year % 100 === 0) && (year % 400 !== 0))
         return 'false' //'common year2';
 else if (year % 400 === 0)
        return 'true' // 'leap2';
        else if ((year  % 200 === 0) && (year % 400 !== 0));
    else return 'false'} //common year3}

 console.log(isLeap(2104))