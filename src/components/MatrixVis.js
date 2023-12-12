import "../blocks/vis.css"
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


const MatrixVis = ({ matrix }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Example dimensions
    const cellSize = 5;
    const margin = { top: 2, right: 2, bottom: 2, left: 2 };

    // Create a scale for x and y based on the matrix size
    const xScale = d3.scaleLinear().domain([0, matrix[0].length]).range([margin.left, cellSize * matrix[0].length + margin.left]);
    const yScale = d3.scaleLinear().domain([0, matrix.length]).range([margin.top, cellSize * matrix.length + margin.top]);

    // Create cells and fill them with matrix values
    svg
      .selectAll('rect')
      .data(matrix.flat())
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i % matrix[0].length))
      .attr('y', (d, i) => yScale(Math.floor(i / matrix[0].length)))
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('fill', d => d3.interpolateBlues(d / 9)) // Adjust the color scale based on your data range

  }, [matrix]);

  return (
    <div className="matrix">
    <svg className='matrix__vis' ref={svgRef}></svg>
    </div>


  );
};


export default MatrixVis;