// src/structural/adapter/Adapter.ts
// Наш інтерфейс
interface ModernPrinter {
    printText(text: string): void;
}

// Сторонній старий клас
class OldLegacyPrinter {
    oldPrint(lines: string[]) {
        console.log("Legacy Print: " + lines.join("\n"));
    }
}

export class PrinterAdapter implements ModernPrinter {
    constructor(private legacyPrinter: OldLegacyPrinter) {}

    printText(text: string): void {
        // Адаптуємо рядок під формат масиву, який хоче старий принтер
        this.legacyPrinter.oldPrint([text]);
    }
}
