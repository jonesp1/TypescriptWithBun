function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(message);
    }
}

function detectInfiniteLoop(maxIteration: number): void {
    let iterationCount = 0;

    while (true) {
        iterationCount++;

        let randomValue = Math.random();

        // if (randomValue > 0.99) {
        //     console.log("Loop exited succesfully after", iterationCount, "iterations. ");
        //     break;
        // }

        // assert(iterationCount <= maxIteration, "Potential infinite loop detected");
        
    }
}


    detectInfiniteLoop(1000);
