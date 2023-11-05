const barsContainer = document.getElementById('bars-container');
const randomizeButton = document.getElementById('randomize');
const insertionSortButton = document.getElementById('insertionSort');
const selectionSortButton = document.getElementById('selectionSort');
const bubbleSortButton = document.getElementById('bubbleSort');
const quickSortButton = document.getElementById('quickSort');
const mergeSortButton = document.getElementById('mergeSort');
const shellSortButton = document.getElementById('shellSort');
const changeSizeButton = document.getElementById('changeSize');
const display = document.getElementById('display');
const bod = document.getElementById('body') 
let bars = [];

function displayItems() {
  barsContainer.innerHTML = '';
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${bars[i].height}px`;
    const textElement = document.createElement('span');
    textElement.innerText = bars[i].height;
    textElement.classList.add('array-numbers')
    bar.appendChild(textElement);
    barsContainer.appendChild(bar);
  }
}
let size =50
function generateRandomBars() {
  bars = [];
  barsContainer.innerHTML = '';
  const barCount = size; 

  for (let i = 0; i < barCount; i++) {
    // const barHeight = Math.floor(Math.random() * 300) + 50;
    // const bar = document.createElement('div');
    // bar.classList.add('bar');
    // bar.style.height = `${barHeight}px`;
    // bars.push(barHeight);
    // barsContainer.appendChild(bar);
    const barHeight = Math.floor(Math.random() * 300) + 50;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    
    bar.style.height = `${barHeight}px`;
    
    // Create and append a text element to display the value
    const textElement = document.createElement('span');
    textElement.innerText = barHeight;
    textElement.classList.add('array-numbers')
    bar.appendChild(textElement);
    
    bars.push({ height: barHeight, element: bar, textElement });
    barsContainer.appendChild(bar);
  }
 
  console.log(bars)
  displayItems();
}

function insertionSort() {
  // barsContainer.innerHTML = '';
    for (let i = 1; i < bars.length; i++) {
        let currentElement = bars[i].height;
        let j = i - 1;
    
        while (j >= 0 && bars[j].height > currentElement) {
            bars[j + 1].height = bars[j].height;
          j--;
        }
    
        bars[j + 1].height = currentElement;
      }
    // for (let i = 0; i < bars.length; i++) {
    //     const bar = document.createElement('div');
    //     bar.classList.add('bar');
    //     bar.style.height = `${bars[i].height}px`;
    //     const textElement = document.createElement('span');
    //     textElement.innerText = bars[i].height;
    //     textElement.classList.add('array-numbers')
    //     bar.appendChild(textElement);
    //     barsContainer.appendChild(bar);
    //   }
    
    // console.log(bars)
    displayItems();
    
  }
function selectionSort(){
  barsContainer.innerHTML = '';
  let n = bars.length;
  for (let i = 0; i < bars.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (bars[j].height < bars[minIndex].height) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = bars[i].height;
      bars[i].height = bars[minIndex].height;
      bars[minIndex].height = temp;
    }
  }
  // for (let i = 0; i < bars.length; i++) {
  //   const bar = document.createElement('div');
  //   bar.classList.add('bar');
  //   bar.style.height = `${bars[i]}px`;
  //   barsContainer.appendChild(bar);
  // }
  // console.log(bars)
  displayItems()

}

function bubbleSort() {
  const n = bars.length;
  barsContainer.innerHTML = '';
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (bars[j].height > bars[j + 1].height) {
        const temp = bars[j].height;
        bars[j].height = bars[j + 1].height;
        bars[j + 1].height = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  // for (let i = 0; i < bars.length; i++) {
  //   const bar = document.createElement('div');
  //   bar.classList.add('bar');
  //   bar.style.height = `${bars[i]}px`;
  //   barsContainer.appendChild(bar);
  // }
  console.log(bars)
  displayItems();
}

function partition(arr, low, high) {
	let pivot = arr[high].height;

	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j].height < pivot) {
			i++;
			[arr[i].height, arr[j].height] = [arr[j].height, arr[i].height]; 
		}
	}

	[arr[i + 1].height, arr[high].height] = [arr[high].height, arr[i + 1].height]; 
	return i + 1; 
}

function quickSort(arr, low, high) {
	if (low < high) {
		let pi = partition(arr, low, high);
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

function startquicksort() {
  // barsContainer.innerHTML = '';
  quickSort(bars,0 ,bars.length-1)
  
  // for (let i = 0; i < bars.length; i++) {
  //   const bar = document.createElement('div');
  //   bar.classList.add('bar');
  //   bar.style.height = `${bars[i]}px`;
  //   barsContainer.appendChild(bar);
  // }
  console.log(bars)
  displayItems();
}

function mergeSortInPlace(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
      const middle = Math.floor((start + end) / 2);

     
      mergeSortInPlace(arr, start, middle);
      mergeSortInPlace(arr, middle + 1, end);
      mergeInPlace(arr, start, middle, end);
  }
}


function mergeInPlace(arr, start, middle, end) {
  const leftHalf = arr.slice(start, middle + 1);
  const rightHalf = arr.slice(middle + 1, end + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let arrIndex = start;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
      if (leftHalf[leftIndex].height < rightHalf[rightIndex].height) {
          arr[arrIndex] = leftHalf[leftIndex];
          leftIndex++;
      } else {
          arr[arrIndex] = rightHalf[rightIndex];
          rightIndex++;
      }
      arrIndex++;
  }

  while (leftIndex < leftHalf.length) {
      arr[arrIndex] = leftHalf[leftIndex];
      leftIndex++;
      arrIndex++;
  }

  while (rightIndex < rightHalf.length) {
      arr[arrIndex] = rightHalf[rightIndex];
      rightIndex++;
      arrIndex++;
  }
}


function startmergeSort() {
  // barsContainer.innerHTML = '';
  mergeSortInPlace(bars)
  
  // for (let i = 0; i < bars.length; i++) {
  //   const bar = document.createElement('div');
  //   bar.classList.add('bar');
  //   bar.style.height = `${bars[i]}px`;
  //   barsContainer.appendChild(bar);
  // }
  console.log(bars)
  displayItems();
}



function shellSortInPlace(arr) {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
      for (let i = gap; i < n; i++) {
          const temp = arr[i];
          let j = i;

          while (j >= gap && arr[j - gap].height > temp.height) {
              arr[j] = arr[j - gap];
              j -= gap;
          }

          arr[j] = temp;
      }

      gap = Math.floor(gap / 2);
  }
}

function shellSort() {
  // barsContainer.innerHTML = '';
  shellSortInPlace(bars)
  
  // for (let i = 0; i < bars.length; i++) {
  //   const bar = document.createElement('div');
  //   bar.classList.add('bar');
  //   bar.style.height = `${bars[i]}px`;
  //   barsContainer.appendChild(bar);
  // }
  console.log(bars)
  displayItems();
}
// Function to change the size of bars based on user input


function changeSize() {

    const widthInput = document.getElementById("widthInput").value;

    const heightInput = document.getElementById("heightInput").value;
    console.log(widthInput)
    console.log(heightInput)
    let x = document.getElementById("bars-container");
    x.style.width = `${widthInput}px`;
    x.style.height = `${heightInput}px`;
    // bod.element.style.width=`${widthInput}px`
    // body.element.style.height=`${heightInput}px`
    // body.element.style.width=`${widthInput}px`
  

    // bar.element.style.width = widthInput + "px";

    // bar.element.style.height = bar.value * (heightInput / 100) + "px";

    

}

generateRandomBars();
displayItems();
randomizeButton.addEventListener('click', generateRandomBars);
insertionSortButton.addEventListener('click', insertionSort);
selectionSortButton.addEventListener('click',selectionSort);
bubbleSortButton.addEventListener('click',bubbleSort)
quickSortButton.addEventListener('click',startquicksort)
mergeSortButton.addEventListener('click',startmergeSort)
shellSortButton.addEventListener('click',shellSort)
changeSizeButton.addEventListener('click',changeSize)