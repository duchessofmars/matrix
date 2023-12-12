import { Link } from "react-router-dom";
import "../blocks/main.css"
import {GPU} from "gpu.js"
import MatrixVis from "./MatrixVis";


const Main = () => {
  
    
  const generateMatrices = () => {
    const matrices = [[], []]
    const pix = 800;
    for (let y = 0; y < pix; y++){
      matrices[0].push([])
      matrices[1].push([])
      for (let x = 0; x < pix; x++){
        matrices[0][y].push(Math.random())
        matrices[1][y].push(Math.random())
      }
    }
    return matrices
  }
  const gpu = new GPU();
  const multiplyMatrix = gpu.createKernel(function(a, b) {
    let sum = 0;
    for (let i = 0; i < 800; i++) {
      sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
  }).setOutput([800, 800])

  
  const matrices = generateMatrices()
  const out = multiplyMatrix(matrices[0], matrices[1])
  const out1 = out.map((x, y)=> [[x][y]])


  // Get the dimensions of the result matrix
  const numRows = out.length;
  const numCols = out[0].length;
  
  // Initialize an array to hold the rows of the result matrix
  const resultMatrixRows = [];
  
  // Iterate over the rows of the result matrix
  for (let i = 0; i < numRows; i++) {
    // Initialize an array to hold the elements of the current row
    const currentRow = [];
  
    // Iterate over the columns of the result matrix
    for (let j = 0; j < numCols; j++) {
      // Push the current element to the current row array
      currentRow.push(out[i][j]);
    }
  
    // Push the current row array to the resultMatrixRows array
    resultMatrixRows.push(currentRow);
  }
  
  // Print each row of the result matrix
  //resultMatrixRows.forEach(row => console.log(row));
  



    return(<>
        
        <MatrixVis className="main" matrix={resultMatrixRows} />
        </>

    );
}
export default Main;