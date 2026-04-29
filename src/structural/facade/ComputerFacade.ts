// src/structural/facade/ComputerFacade.ts
class CPU { freeze() {} jump() {} execute() { console.log("CPU executing..."); } }
class Memory { load() { console.log("Memory loading..."); } }

export class ComputerFacade {
    private cpu = new CPU();
    private memory = new Memory();

    start() {
        console.log("Facade: Starting computer...");
        this.cpu.freeze();
        this.memory.load();
        this.cpu.jump();
        this.cpu.execute();
        console.log("Computer is ready!");
    }
}
