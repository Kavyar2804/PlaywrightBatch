import excel from 'exceljs'
import { type Worksheet } from 'exceljs';
import {test, expect} from '@playwright/test'


//readonly sheet: Worksheet

test('get data from excel', async({page}) => {
    
    let sheet: Worksheet;
    const book= new excel.Workbook()
   await book.xlsx.readFile('./Testdata.xlsx')

sheet=  await book.getWorksheet('Sheet1')! //(use non-null assertion ! this tell TS i know its not undefined)
let lastrow:any= sheet.rowCount
console.log(`Total rows in the sheet: ${lastrow}`);


for(let i=1; i<=lastrow; i++)   //fetching mutiple values from single column
    {
    const value:any = sheet.getRow(i).getCell(1).toString()
    console.log(value)
} 

})