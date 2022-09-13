const reverseLines = str => str.split(/\r?\n/).reverse().join('\n');

reverseLines(`one
two
three`);