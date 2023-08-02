/*

Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

*/

var autoCastExample = "Robert";
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = 0.0266;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = false;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = { myname: "Test Me" };
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = 25166665;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = undefined;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = true;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = "Robert Jr.";
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = null;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = {};
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);
autoCastExample = -32767;
console.log(
  `Variable Value: ${autoCastExample} and Type: ${typeof autoCastExample}`
);

/*
OUTPUT
Variable Value: Robert and Type: string
Variable Value: 0.0266 and Type: number
Variable Value: false and Type: boolean
Variable Value: [object Object] and Type: object
Variable Value: 25166665 and Type: number
Variable Value: undefined and Type: undefined
Variable Value: true and Type: boolean
Variable Value: Robert Jr. and Type: string
Variable Value: null and Type: object
Variable Value: [object Object] and Type: object
Variable Value: -32767 and Type: number
*/
