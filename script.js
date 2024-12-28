const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);
	return blob.size;
};

console.log(byteSize("hello world"));
console.log(byteSize("안녕하세요"));
console.log(byteSize(""));

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
