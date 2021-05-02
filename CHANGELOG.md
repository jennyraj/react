function solve(A)
{
    //Early returns
    if (A.length ==2)
        return 2;

    let valley=[];
    let peak=[];
    for(let i= 0;  i< A.length; i++){

        if (isValley(i)) {
            console.log(`Valley ${i}`);
            valley.push(i);
        }

        else if (isPeak(i)) {
            console.log(`Peak ${i}`);
            peak.push(i);
        }
    }
    findResults();

    function findResults() {
        let diff =0;
        
        for (let i = 0; i < valley.length; i++) {
            let x1 = findPrev(peak, valley[i]);
            var x2 = findNext(peak, valley[i]);
            console.log(`diff ${x1} ${x2} ${x1 - x2}`);
            if ( Math.abs(x1-x2) > diff)
                diff= Math.abs(x1-x2);
       }
        console.log('Max Diff '+ (diff+1));
    }
    //TODO When elements are SAME At the BEGIN/END??
    function isPeak(i)
    {
        let num=A[i];
        let left=i-1;
        let right=i+1;

        //to Pass: GREATER than LEFT /RIGHT NEIGHBORS!
        if (left >= 0 &&   num < A[left])
        {
            return false;
        }

        if (right < A.length && num < A[right] )
        {
            return false;
        }
        return true;
    }

    function isValley(i)
    {
        let num=A[i];
        let left=i-1;
        let right=i+1;

        //TO pass: SMALLER than LEFT /RIGHT NEIGHBORS!
        if (left >= 0 &&   num > A[left])
        {
            return false;
        }

        if (right < A.length && num > A[right] )
        {
            return false;
        }
        return true;
    }

    function findPrev(peak, indx)
    {
        if (indx ===0)
            return 0;
        for(let i=indx; i>-1;i--)
        {
            if (peak[i] < indx)
                return peak[i];
        }
    }

    function findNext(peak,indx)
    {
        if (indx > peak.length-1)
            return 0;
        for(let i=indx; i <peak.length;i++)
        {
            if (peak[i] > indx)
                return peak[i];
        }
    }
}
