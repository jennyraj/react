//Nodes added; still duplicate needs to be fixed

function solve(A) {
    //Early returns
    if (A.length == 2)
        return 2;

    let nodes = [];

    for (let i = 0; i < A.length; i++) {

        if (isValley(i)) {
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

        } else if (isPeak(i)) {
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
        else console.log(`Cannot decide: ${i} ${A[i]}`)
    }
    return ' FINAL: '+ findResults();

    function findResults() {
        let maxDiff = 0;

        let prevPeak;
        let nextPeak;

        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].type ==='P')
                continue;

            if (i===0)
                prevPeak={type:'P' ,indexes:[0]}
            else
                prevPeak=nodes[i-1];

            if (i=== nodes.length -1)
                nextPeak={type: 'P', indexes: [0]}
            else nextPeak=nodes[i+1];

            let diff = Math.abs(Math.max(...nextPeak.indexes)  - Math.min(... prevPeak.indexes));

            console.log(`diff ${diff} for node ${i}  `);
            if (diff > maxDiff )
                maxDiff = diff
        }
        maxDiff= maxDiff + 1;
        console.log('Max Diff ' + maxDiff);
        return maxDiff;
    }

    //TODO When elements are SAME At the BEGIN/END??
    function isPeak(i) {
        let num = A[i];
        let left = i - 1;
        let right = i + 1;

        //to Pass: GREATER than LEFT /RIGHT NEIGHBORS!
        if (left >= 0 && num < A[left]) {
            return false;
        }

        if (right < A.length && num < A[right]) {
            return false;
        }
        return true;
    }

    function isValley(i) {
        let num = A[i];
        let left = i - 1;
        let right = i + 1;

        //TO pass: SMALLER than LEFT /RIGHT NEIGHBORS!
        if (left >= 0 && num > A[left]) {
            return false;
        }

        if (right < A.length && num > A[right]) {
            return false;
        }
        return true;
    }


}
