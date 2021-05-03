function solve(A) {
    //Early returns
    if (A.length == 2)
        return 2;

    let nodes = [];

    debugger;

    for (let i = 0; i < A.length; i++) {

        if (isPeak(i)) {
           CheckInsert(i, 'P', A[i]);
        } else {

            if (isValley(i)) {
               CheckInsert(i, 'V', A[i]);
            }
        }
    }
    return ' FINAL: ' + findResults();

//------------------------------------
    function CheckInsert(i, type, val) {
        if (i > 0) {
            let prev = nodes[nodes.length - 1];
            if (prev.type === type &&
                prev.value === val) {
                nodes[nodes.length - 1].indexes.push(i);

                console.log('Resusing '+type)
                return;
            }

        }
        console.log('Adding '+type)
        nodes.push({
            type: type,
            indexes: [i],
            value: A[i]
        });
        return;
    }

    function findResults() {
        let maxDiff = 0;

        let prevPeak;
        let nextPeak;

        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].type === 'P')
                continue;

            if (i === 0)
                prevPeak = {type: 'P', indexes: [0]}
            else
                prevPeak = nodes[i - 1];

            if (i === nodes.length - 1) //at end
                nextPeak =  nodes[i]; //use current
            else if (i < nodes.length - 1)
                nextPeak = nodes[i + 1];
            else prevPeak = {type: 'P', indexes: [0]}

            let diff = Math.abs(Math.max(...nextPeak.indexes) - Math.min(...prevPeak.indexes));

            console.log(`diff ${diff} for node ${i}  `);
            if (diff > maxDiff)
                maxDiff = diff
        }
        maxDiff = maxDiff + 1;
        console.log('Max Diff ' + maxDiff);
        return maxDiff;
    }

//TODO When elements are SAME At the BEGIN/END??
    function isPeak(i) {
        let num = A[i];

        //to Pass: GREATER than LEFT /RIGHT NEIGHBORS!
        if ((i - 1) >= 0 && num < A[i - 1] ) { //LEFT
            return false;
        }

        if ((i + 1) < A.length && num < A[i + 1] ) { //RIGHT
            return false;
        }
        return true;
    }

    function isValley(i) {
        let num = A[i];

        //to Pass: GREATER than LEFT /RIGHT NEIGHBORS!
        if ((i - 1) >= 0 && num > A[i - 1] ) { //LEFT
            return false;
        }

        if ((i + 1) < A.length && num > A[i + 1] ) { //RIGHT
            return false;
        }
        return true;
    }

}
