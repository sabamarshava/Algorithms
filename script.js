/////////////////////////////////////////////////////////////////////////ლაინეარ სერჩი
/* var array = [34, 1, 5, 2, 92, 3, 10, 45]; //8


function linearSearch(arr, target) {
    for (let index = 0; index < array.length; index++) {
        if (arr[index] === target) {
            return target
        }
    }
    return -1
}

linearSearch(array, -5); */
////////////////////////////////////////////////////////////////////////////////მცირე მნიშვნელობის პოვნა
/* var numbers = [34, 88, 5, 2, 92, 3, 10, -5, 10, -1, -100]; //O ხარისხად n

function findMinValue(array) {
    var minValue = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] < minValue ){
            minValue = array[index];
        }
    }
    return minValue;
}

console.log(findMinValue(numbers)); 


//////////////////////////////////////////////////////////////////////////////////მაქსიმუმის პოვნა
var numbers = [34, 88, 5, 2, 92, 3, 10, -5, 10, -1, -100]; //8

function findMaxValue(array) {
    var MaxValue = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > MaxValue ){
            MaxValue = array[index];
        }
    }
    return MaxValue;
}

console.log(findMaxValue(numbers)); 
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////მაქსიმუმი მნიშვნელობის პოვნა და მისი ინდექსი

/* var numebrs = [-14, 0, 0, -100, -400, -10000];

function findMaxValue(arr) {
    var maxValue = arr[0];
    var maxValueIndex = 0;
    for (let index = 1; index < arr.length; index++){
        if(arr[index] > arr[0] ) {
            maxValue = arr[index];
            maxValueIndex = index;
        }
    }
    return {maxValue, maxValueIndex};

    
}

console.log(findMaxValue(numebrs)); */



//საშუალოს პოვნა

/* var numebrs = [100];


function avarageNumbers(numb) {
    var sum = 0;
    for(var i = 0; i < numb.length; i++) {
        sum = sum + numb[i];
        var avarage = sum / numb.length
    }
    return avarage;
}

console.log(avarageNumbers(numebrs));
 */


 ////////////////////////////////////////////////////////////////////////////////////////////////bubbleSort ცუდი ხერხით///////////////////////////////
/* // Creating the bblSort function
function bblSort(arr) {
  
    for (var i = 0; i < arr.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
  
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
  
    // Print the sorted array
    console.log(arr);
}
  
// This is our unsorted array
var array = [59, 4, 17, 102, -1, 0, 12];
  
// Now pass this array to the bblSort() function
bblSort(array); */

////////////////////////////////////////////////////////////////////////bubbleSort///////////////////////////////////////////////////////////
/* function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while(swapped)
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);
 */
/////////////////////////////////////////////ამოცანა//////////////////////////////////////////jaxos davaleba////////////////////////////////////////////////
/* მოცემულია მთელი რიცხვების  მასივი [43, 0, 42, 7, 928, 69, 442, -1, 68].
იპოვე ამ მასივში მინიმუმ რიცხვის რიგით მეორე და მაქსიმუმის რიგით მესამე */

/* const arr = [43, 0, 42, 7, 928, 69, 442, -1, 68];

function sortArray(array) {
    let swapped;
    do {swapped = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp;
                swapped = true
            }
        }
        
    } while (swapped);
}

sortArray(arr);
console.log(arr);
console.log(arr[1], arr[arr.length - 2]);
 */


/////////////////////////////////////////////////////////////////////binarySearch//////////////////////////////////////////////////////////////
/* function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        }
        else {
            leftIndex = middleIndex + 1
        }
    }
    return -1 
}

console.log(binarySearch([-8, 12, 77, 200, 201], 77)); */


                                                                        //Array-ზე უკუღმა გადარბნება

/* newArray = []

ageArray= [-10, 23, 200, 15, 24, 27];
for(i = ageArray.length - 1; i >= 0; i--){
    newArray = newArray + " " + ageArray[i];
}

console.log(newArray); */

/* function recursiveFactorial(n) {
    if (n === 0) {
      return 1
    }
    return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(5)); */