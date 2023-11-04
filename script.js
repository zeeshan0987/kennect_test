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

let bars = [];

function displayItems() {
  const itemsContainer = document.querySelector("#display");
  
  window.items = bars;
  itemsContainer.innerHTML = "";

  for (const item of bars) {
    const itemElement = document.createElement("p");
    itemElement.textContent = item;
    itemsContainer.appendChild(itemElement);
  }
}

function generateRandomBars() {
  bars = [];
  barsContainer.innerHTML = '';
  const barCount = 50; 

  for (let i = 0; i < barCount; i++) {
    const barHeight = Math.floor(Math.random() * 300) + 50;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${barHeight}px`;
    bars.push(barHeight);
    barsContainer.appendChild(bar);
  }
 
  console.log(bars)
  displayItems();
}

function insertionSort() {
  barsContainer.innerHTML = '';
    for (let i = 1; i < bars.length; i++) {
        let currentElement = bars[i];
        let j = i - 1;
    
        while (j >= 0 && bars[j] > currentElement) {
            bars[j + 1] = bars[j];
          j--;
        }
    
        bars[j + 1] = currentElement;
      }
    for (let i = 0; i < bars.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${bars[i]}px`;
        barsContainer.appendChild(bar);
      }
    
    console.log(bars)
    displayItems();
    
  }
function selectionSort(){
  barsContainer.innerHTML = '';
  let n = bars.length;
  for (let i = 0; i < bars.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (bars[j] < bars[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = bars[i];
      bars[i] = bars[minIndex];
      bars[minIndex] = temp;
    }
  }
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${bars[i]}px`;
    barsContainer.appendChild(bar);
  }
  console.log(bars)
  displayItems()

}

function bubbleSort() {
  const n = bars.length;
  barsContainer.innerHTML = '';
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (bars[j] > bars[j + 1]) {
        const temp = bars[j];
        bars[j] = bars[j + 1];
        bars[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${bars[i]}px`;
    barsContainer.appendChild(bar);
  }
  console.log(bars)
  displayItems();
}

function partition(arr, low, high) {
	let pivot = arr[high];

	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]]; 
		}
	}

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
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
  barsContainer.innerHTML = '';
  quickSort(bars,0 ,bars.length-1)
  
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${bars[i]}px`;
    barsContainer.appendChild(bar);
  }
  console.log(bars)
  displayItems();
}

function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;


	var L = new Array(n1); 
	var R = new Array(n2);


	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	var i = 0;

	
	var j = 0;

	
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}


function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}


function startmergeSort() {
  barsContainer.innerHTML = '';
  mergeSort(bars,0 ,bars.length-1)
  
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${bars[i]}px`;
    barsContainer.appendChild(bar);
  }
  console.log(bars)
  displayItems();
}



function sort(arr) 
{ 
    let n = arr.length; 
   
        // Start with a big gap, then reduce the gap 
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) 
        { 
          
            for (let i = gap; i < n; i += 1) 
            { 
                let temp = arr[i];  
                let j; 
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) 
                    arr[j] = arr[j - gap]; 
                arr[j] = temp; 
            } 
        } 
        return arr; 
} 

function shellSort() {
  barsContainer.innerHTML = '';
  sort(bars)
  
  for (let i = 0; i < bars.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${bars[i]}px`;
    barsContainer.appendChild(bar);
  }
  console.log(bars)
  displayItems();
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