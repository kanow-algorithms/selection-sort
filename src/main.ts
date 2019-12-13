import {SortDirection} from "./Enums";

function selectionSort(elementsList: number[], direction: SortDirection = SortDirection.ASC): void {
    const condition: (comparedElement: number, minValue: number) => boolean = direction === SortDirection.ASC ? ascendingCondition : descendingCondition;
    for (let i: number = 0; i < elementsList.length; i++) {
        let minValueIndex: number = i;
        for (let j: number = i + 1; j < elementsList.length; j++) {
            minValueIndex = condition(elementsList[j], elementsList[minValueIndex]) ? minValueIndex : j;
        }
        swapTwoValuesOfArray(elementsList, i, minValueIndex);
    }
}

function swapTwoValuesOfArray(array: number[], sourceValueIndex: number, valueToSwapIndex: number) {
    const tempValue: number = array[sourceValueIndex];
    array[sourceValueIndex] = array[valueToSwapIndex];
    array[valueToSwapIndex] = tempValue;
}

const ascendingCondition: (comparedElement: number, minValue: number) => boolean = (comparedElement: number, minValue: number) => comparedElement > minValue;
const descendingCondition: (comparedElement: number, minValue: number) => boolean = (comparedElement: number, minValue: number) => comparedElement < minValue;
