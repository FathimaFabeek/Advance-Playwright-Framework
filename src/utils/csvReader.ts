import * as fs from 'fs';
import * as path from "path";

export interface TestDataRow {//to read each row in csv file
    [key: string]: string;
}

export function readCSV(filePath: string): TestDataRow[] {//it will return the raw of data pair
    let fullPath = path.resolve(filePath);
    let content = fs.readFileSync(fullPath, 'utf-8');//taking content from each row
    let lines = content.trim().split("\n");//after each row there is a separation to next line. we can check how many lines there


    // First Line is headers
    let headers = lines[0].split(",");//each line with coma, then will get the column also
      // Remaining Lines are data
    let data: TestDataRow[] = [];
    for(let i=1;i< lines.length;i++){//first row o fdata
        let values = lines[i].split(',');
        let row: TestDataRow = {};
        for (let j = 0; j < headers.length; j++) {//in each row how many column data
            row[headers[j].trim()] = values[j]?.trim() || "";//key value pairs
        }
         data.push(row);
    }
        return data;

}