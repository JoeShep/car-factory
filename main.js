
// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {}

	return newChassisObject
}

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

// The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.
const addWheels = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheels = 4

	// Return the chassis that now has a body property on it
	return chassisObject
}

// The addEngine() function should have a parameter for the incoming chassis object. It should add a new property to that object named engine with a value of "4.8L". The function should return the chassis object.
const addEngine = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.engine = "4.8L"

	// Return the chassis that now has a body property on it
	return chassisObject
}

// The addSteeringWheel() function should have a parameter for the incoming chassis object. It should add a new property to that object named steeringWheel with a value of "Tilting". The function should return the chassis object.
const addSteeringWheel = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.steeringWheel = "Tilting"

	// Return the chassis that now has a body property on it
	return chassisObject
}


// The addDriveTrain() function should have a parameter for the incoming chassis object. It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.
const addDriveTrain = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.driveTrain = "Two wheel drive"

	// Return the chassis that now has a body property on it
	return chassisObject
}


// Make sure you invoke each function, store the returned object in a variable, and then use console.log() to ensure that each of your little minions is doing its job correctly.

const buildCar = () => {
  const chassis = createChassis()
  const chassisBody = addBody(chassis)
  const chassisWheels = addWheels(chassisBody)
  const chassisEngine = addEngine(chassisWheels)
  const chassisSteering = addSteeringWheel(chassisEngine)
  const chassisDrive = addDriveTrain(chassisSteering) 

  return chassisDrive
}

const carLot = []

for ( let i = 0; i < 50; i++) {
  carLot.push(buildCar())
} 
