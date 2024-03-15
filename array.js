//question 1 ==

/*Write a program to print all the numbers from the given array using a loop.*/

const input = require("readline-sync");

let n = input.questionInt("enter the length of array:");

let arr = []
for(let i = 0; i<n; i++)
{
  arr[i] = input.question("enter the element no.:");
} 
for(i = 0; i<n; i++)
{
  console.log(arr[i]);
}



//question 2 ==

/*Write a program to create an array of natural numbers till 20 and print it.*/


const input = require("readline-sync");
let n = input.questionInt("enter the lenght of array:");
 
let arr = []
for(let i = 0; i<n; i++)
{
 arr[i] = [i+1]
}
  console.log(arr);


//question 3 ==

/*Write a program to reverse the array and print the reversed array.*/



const input = require("readline-sync");
let n = input.questionInt("enter the lenght of array:");

let arr = []
for(let i = 0; i<n; i++)
{
  arr[i] = input.question("enter the number of element no.:");
}
for(let i = n-1; i>=0; i--)
{   
console.log(arr[i]);
} 


//question 4 ==

/*Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.*/



const input = require("readline-sync");

let n = input.questionInt("Enter the number of elements: ");
let arr = [];
let c = 0;
let t = input.questionInt("enter the target no.:");



for (let i = 0; i < n; i++) 
{
       arr[i] = input.questionInt("enter the element no. : ")

       if(arr[i]==t)
 {
        c++;
        i++;
        console.log("yes");
 } else
 {
         console.log("no");
 }
}


//question 5 ==

 /*
Write a program to print the sum of all the odd numbers and even numbers in the given array.
Note: In the output, you should print odd numbers sum and even numbers sum in this order only.
*/

const input = require("readline-sync");
let n = input.questionInt("enter the length of the array:");
let arr = [];
let es = 0;
let os = 0;
for(let i = 0; i<n; i++)
{
   arr[i] = input.questionInt("enter the element no. : ")
}

for(i =0; i<n; i++)
{
  if(arr[i]%2==0)
  {
    es = es+arr[i]
  } else
  {
    os = os +arr[i]
  }
} console.log(es);
  console.log(os) ;



//question 6 ===
/*
Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.
*/




const input = require("readline-sync");
let n = input.questionInt("enter the length of the number: ");
let arr = [];


for (let i = 0; i < n; i++) 
{
  arr[i] = input.questionInt("enter the element no.");
}

for (let i = 0; i < n; i++) 
{
  let co = 1;

  
  for (let j = i + 1; j < n; j++)
   {
    if (arr[i] == arr[j]) 
    {
      co++;
     
      for (let k = j; k < n; k++)  
      {
        arr[k] = arr[k + 1];
      }
         n =n-1;
      
    }
      
  }
    if(co>1)
    {
      console.log(arr[i]);
    }
    
}






//question 7 ===
/*Write a program to take N numbers from the user and print the frequency of every number*/ 




const input = require("readline-sync");
let n = input.questionInt("enter the length of the number: ");
let arr = [];


for (let i = 0; i < n; i++) 
{
  arr[i] = input.questionInt("enter the element no.");
}

for (let i = 0; i < n; i++) 
{
  let co = 1;

  
  for (let j = i + 1; j < n; j++)
   {
    if (arr[i] == arr[j]) 
    {
      co++;
      let k=j;
      
      for (let k = j; k < n; k++) 
      {
        arr[k] = arr[k + 1];
      }
         n =n-1;
      
    }
       co = co;
  }
    if(co>1)
    {
      console.log(arr[i]);
    }
}



//question 8 ===
/*Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)
 */

const input = require("readline-sync");

let n = input.questionInt("enter the length of the array:");
let m = input.questionInt("enter the length of the array:");

let a =[];
let b=[];
let d=[];

for(let i=0;i<n;i++)
{
  a[i]=input.questionInt("enter the element num");
}

for(let j=0; j<m;j++)
{
  b[j]=input.questionInt("enter the element num:");
}

let i =0;
let j =0;
let k=0;

while(k+n+m)
{
  while(i<n)
  {
    while(j<m)
    {
      if(a[i]<b[j])
      {
        console.log(a[i])
        i++;
        k++;
      } else
      {
         console.log(b[j])
         j++;
         k++;
      }
    }
  }
}




//question 9 ==
  
/*
Write a program to take value N from the user and print the following pattern based on the user input.
array = [2, 3, 5, 2, 1]
>>
>>>
>>>>>
>>
>
*/


const input = require("readline-sync");
let n = input.questionInt("Enter the length of the array: ");
let arr = [];
let c = "";

for (let i = 0; i < n; i++) {
  arr[i] = input.questionInt("enter the element");
}

for (let i = 0; i < n; i++) {
  let f = arr[i];
  for (let j = 0; j < f; j++) {
    c += "> ";
  }
  c += "\n";
}

console.log(c);


