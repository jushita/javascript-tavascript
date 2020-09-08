function trap(heights) {
    let landArea = 0;
    let leftMaxHeight = 0;
    let leftMaxArea = 0;

    for(let i =0; i< heights.length; i++) {
        landArea += heights[i];
        leftMaxHeight += Math.max(leftMaxHeight, heights[i]);
        leftMaxArea += Math.max(leftMaxArea, leftMaxHeight);
    }

    let rightMaxHeight = 0;
    let rightMaxArea = 0;
    
    for(let i = heights.length; i >= 0; i--) {
        rightMaxHeight += Math.max(rightMaxHeight, heights[i]);
        rightMaxArea += Math.max(rightMaxHeight, rightMaxArea);
    }
    
    let boundedArea = landArea * leftMaxHeight;
    let leftVoid = boundedArea - leftMaxArea;
    let rightvoid = boundedArea - rightMaxArea;
    return boundedArea-leftVoid-rightvoid - landArea;
}