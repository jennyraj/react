function solve(A)
{
    //Early returns
    if (A.length ==2)
        return 2;

     //check for all equal??

    let pv;


    var valley=[];
    var peak=[];
    for (let i=0;i < A.length;i++) {
        if (A[i] !== A[i+1]){
          pv= A[i] > A[i+1];
          if (pv)
             peak.push(i);
          else
              valley.push(i);
          break;
        }
    }


    for(let i= 0;  i< A.length; i++){
        if (pv){
            if (A[i] > A[i+1]) {
                console.log(` value ${A[i]} Peak at ${i}  `)
                if (peak.indexOf(i) === -1)
                   peak.push(i);
                pv= !pv;
            }
            else if (A[i] === A[i+1])
            {
                console.log(` value ${A[i]} Peak at SAME ${i}  `)
                if (peak.indexOf(i) === -1)
                    peak.push(i);
            }
        }
        else{
            if (A[i] < A[i+1])    {

                console.log(`at ${i} value ${A[i]} Valley at ${i}  `)
                if (valley.indexOf(i) === -1)
                   valley.push(i);
                pv = !pv;
            }
            else if (A[i] === A[i+1])
            {
                console.log(` value ${A[i]} Valley at SAME ${i}  `)
                if (valley.indexOf(i) === -1)
                    valley.push(i);
            }
        }
    }

    if (pv)
    {
        if (peak.indexOf(A.length-1) === -1)
            peak.push(A.length-1);
    }
    else {
        if (valley.indexOf(A.length-1) === -1)
            valley.push(A.length-1);
    }
    console.log(` last value ${A[A.length-1]}   ${pv? 'Peak':'valley'} `)

   for(i=0;i< peak.length;i++){
       console.log( 'P'+peak[i]);
   }

    for(i=0;i< valley.length;i++){
        console.log('V'+valley[i]);
    }
return 0;
}
