# selection-sort

## Instalation
After you clone this repo you need to move inside ```selection-sort``` directory and rum command

``` npm install```

> To run ```npm install``` you musst have installed **node.js**

## Description

### Example input :
```typescript
const testArray: number = [2, 5, -12, 91, 5];
selectionSort(testArray, SortDirection.DESC);
```
### Output of example input :
```typescript
[-12, 2, 5, 5, 91]
```

**selectionSort** method takes two parametrs:

 - **elementsList** -> it is the list which you want to sort
 - **direction** -> it is optional parameter which you can set as ```ASC``` or ```DESC``` (ASC is default option)

 > ASC (Ascending), DESC Descending)