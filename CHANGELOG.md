function solve(A) {
    //Early returns
    if (A.length == 2)
        return 2;

    let nodes = [];

    debugger;

    for (let i = 0; i < A.length; i++) {

        if (isPeak(i)) {
            console.log(`Peak ${i}`);
            let node = nodes.find(x => x.indexes.includes(i))

            if (typeof node !== 'undefined') {
                node.indexes.push(i);
            } else {
                nodes.push({
                    type: 'P',
                    indexes: [i]
                });
            }
        }
        else if (isValley(i)) {
            console.log(`Valley ${i}`);

            let node = nodes.find(x => x.indexes.includes(i))

            if (typeof node !== 'undefined') {
                node.indexes.push(i);
            } else {
                nodes.push({
                    type: 'V',
                    indexes: [i]
                });
            }
        }
    }
    return ' FINAL: ' + findResults();

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

            if (i === nodes.length - 1)
                nextPeak = {type: 'P', indexes: [nodes.length-1]}
            else nextPeak = nodes[i + 1];

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
        let left = A[i - 1];
        let right = A[i + 1];

        //to Pass: GREATER than LEFT /RIGHT NEIGHBORS!
        if ( (i-1) >= 0 && num < left) {
            return false;
        }

        if ((i+1) < A.length && num < right) {
            return false;
        }
        return true;
    }

    function isValley(i) {
        let num = A[i];
        let left = A[i - 1];
        let right = A[i + 1];

        //to Pass: smaller than LEFT /RIGHT NEIGHBORS!
        if ( (i-1) >= 0 && num > left) {
            return false;
        }

        if ((i+1) < A.length && num > right) {
            return false;
        }
        return true;
    }


}
