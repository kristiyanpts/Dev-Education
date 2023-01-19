function Main(worker) {
  if (worker.dizziness === true) {
    let waterNeeded = 0.1 * worker.weight * worker.experience;
    worker.dizziness = false;
    worker.levelOfHydrated += waterNeeded;
  }
  return worker;
}

Main({
  weight: 95,

  experience: 3,

  levelOfHydrated: 0,

  dizziness: false,
});
