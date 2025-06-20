import excel from 'exceljs'
import { type Worksheet } from 'exceljs';
import {test, expect} from '@playwright/test'


//readonly sheet: Worksheet

test('get data from excel', async({page}) => {
    
    
    let sheet: Worksheet;
    const book= new excel.Workbook()
   await book.xlsx.readFile('./Testdata.xlsx')

sheet=  await book.getWorksheet('Sheet1')! //(use non-null assertion ! this tell TS i know its not undefined)
let data:string= await sheet.getRow(1).getCell(1).toString()
console.log(data);
// await page.goto(data)
// await page.locator().fill(data)


    
});

test('write data into excel', async({page}) => {
    const book = new excel.Workbook()
    await book.xlsx.readFile('./Testdata.xlsx')
      let sheet= book.addWorksheet('Sheet3');
      sheet.getRow(5).getCell(5).value= 'Hello World';
      await book.xlsx.writeFile('./Testdata.xlsx');

    
});

//addworksheet will add only one row
//getworksheet will add the row you specify