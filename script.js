//Create a function named Run within our script.js page.
//Currently it accepts no parameters and does nothing.
//It is very exciting.


function Run()
{
  alert("Hello! I am working!!!!!!!");

  var point1 = theJSON.data[0];
  var point2 = theJSON.data[1];
  var point3 = theJSON.data[2];
  var point4 = theJSON.data[3];
  var point5 = theJSON.data[4];


  var data = [point1, point2, point3, point4, point5];

  console.log(data);



  var topLeftPoint = findTopLeft(data);
  var topRightPoint = findTopRight(data);
  var bottomLeftPoint = findBottomLeft(data);
  var bottomRightPoint = findBottomRight(data);

  // make an output object containing the corner points
  var boundingBox =
  {
      topLeft: topLeftPoint,
      topRight: topRightPoint,
      bottomLeft: bottomLeftPoint,
      bottomRight: bottomRightPoint
  }

  console.log("Bounding box computed for Alex.wave.king@tamu.edu: ");
  console.log(boundingBox);

}




//Functions for finding the corners of the data points
function findTopLeft(listofpoints)
{
  var topLeftPoint;

  listofpoints.forEach(

    element => {
      if (topLeftPoint == null){
        topLeftPoint = element;
      }

      else
      {
        if (element.lat < topLeftPoint.lat)
        {
          topLeftPoint = element;
        }
      }



    }
  );
  console.log(topLeftPoint);
}

function findTopRight()
{


}

function findBottomLeft()
{


}

function findBottomRight()
{


}
