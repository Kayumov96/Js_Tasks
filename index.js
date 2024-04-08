const button = document.getElementById("button");
const box = document.getElementById("box");

const color = document.getElementById("color");
const form = document.getElementById("form");
const width = document.getElementById("width");
const height = document.getElementById("height");
button.addEventListener("click", () => {
  // console.log("Button clicked", box.style);
  box.style = `
  background: ${color.value};
  height: ${height.value}px;
  width: ${width.value}px;;
  form: ${form.value}px;
  `;
  if (form.value === "") {
    box.style.borderRadius = 0;
  } else if (form.value === "circle") {
    box.style.borderRadius = "50%";
  }
});
// document.getElementById("button").addEventListener("click", () => {
//   console.log("button clicked", color.value, form, width, height);
//   box.style=`
//   background-color: ${color}.value;
//   height: ${height}.value
//   `
// result.style = `
// background-color: ${color}.value;
// width: ${width.value}px;
// height: ${height.value}px;
// `;
// if (form.value === "square") {
//   result.style.borderRadius = "0";
// } else if (form.value === "circle") {
//   result?.style.borderRadius = "50%";
// }});

// --------------------------------------------------------
// ----------

// let arr = [1, 2, 5, 3, 1];

// function testPeaks(arr) {
//   let peak = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > peak) {
//       peak.push += i;
//     }
//   }
//   console.log(peak, peak[0]);
// }
// console.log(testPeaks(arr));
// -------------------
// var isPalindrome = function (x) {
//   let str = Math.abs(x).toString();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = str.length - 1; j--; ) {
//       if (str[i] === str[j]) {
//         return true;
//       }
//       return false;
//     }
//   }
// };
// console.log(isPalindrome(121));
// ------------------
// function romanToInt(roman) {
//   const romanValues = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;
//   let prevValue = 0;

//   for (let i = 0; i < roman.length; i++) {
//     const currentValue = romanValues[roman[i]];

//     if (currentValue > prevValue) {
//       total += currentValue - 2 * prevValue;
//     } else {
//       total += currentValue;
//     }

//     prevValue = currentValue;
//   }

//   return total;
// }
// console.log(romanToInt("X" + "II"));
// ------------------

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// function addTwoNumbers(l1, l2) {
//   const dummyHead = new ListNode(0);
//   let p = l1,
//     q = l2,
//     current = dummyHead;
//   let carry = 0;

//   while (p !== null || q !== null) {
//     const x = p !== null ? p.val : 0;
//     const y = q !== null ? q.val : 0;
//     const sum = x + y + carry;
//     carry = Math.floor(sum / 10);
//     current.next = new ListNode(sum % 10);
//     current = current.next;
//     if (p !== null) p = p.next;
//     if (q !== null) q = q.next;
//   }

//   if (carry > 0) {
//     current.next = new ListNode(carry);
//   }

//   return dummyHead.next;
// }
// ------------------
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

function lengthOfLongestSubstring(s) {
  const charIndex = {};
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (char in charIndex && charIndex[char] >= start) {
      start = charIndex[char] + 1;
    }
    charIndex[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
console.log(lengthOfLongestSubstring("abaabaabssbsbbaa"));
