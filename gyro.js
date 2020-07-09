
  let sensor = new Accelerometer();
  sensor.start();

  sensor.onreading = () => {
    console.log("Acceleration along X-axis: " + sensor.x);
    console.log("Acceleration along Y-axis: " + sensor.y);
    console.log("Acceleration along Z-axis: " + sensor.z);
  }

  sensor.onerror = event => console.log(event.error.name, event.error.message);


  // // let sensor2 = new GravitySensor({
  // //   frequency: 5,
  // //   referenceFrame: "screen"
  // // });

  // // sensor2.onreading = () => {
  // //   if (sensor2.y >= 9.8) {
  // //     console.log("Web page is perpendicular to the ground.");
  // //   }
  // // }

  // sensor2.start();

  const shakeThreshold = 25;

  let sensor1 = new LinearAccelerationSensor({
    frequency: 60
  });

  sensor1.addEventListener('reading', () => {
    if (sensor1.x > shakeThreshold) {
      console.log("Shake detected.");
    }
  });

  sensor1.start();

  let acl = new Accelerometer({
    frequency: 60
  });

  acl.addEventListener('reading', () => {
    console.log("Acceleration along the X-axis " + acl.x);
    console.log("Acceleration along the Y-axis " + acl.y);
    console.log("Acceleration along the Z-axis " + acl.z);
  });

  acl.start();

  function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Do something awesome.
  }

  window.addEventListener("devicemotion", handleMotionEvent, true);
