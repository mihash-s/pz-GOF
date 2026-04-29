import { Database } from "./src/creational/singleton/Database";
import { CloudLoggerFactory } from "./src/creational/factory-method/Loggers";
import { PrinterAdapter } from "./src/structural/adapter/Adapter";
import { ComputerFacade } from "./src/structural/facade/ComputerFacade";
import { ShoppingCart, PayPalPayment, CryptoPayment } from "./src/behavioral/strategy/PaymentStrategy";
import { NewsAgency, NewsChannel } from "./src/behavioral/observer/NewsAgency";

console.log("--- 1. SINGLETON ---");
const db1 = Database.getInstance();
const db2 = Database.getInstance();
db1.query("SELECT * FROM users");
console.log("Are instances equal?", db1 === db2);

console.log("\n--- 2. FACTORY METHOD ---");
const loggerFactory = new CloudLoggerFactory();
loggerFactory.output("System Boot");

console.log("\n--- 3. ADAPTER ---");
const adapter = new PrinterAdapter({ oldPrint: (l) => console.log("Legacy Output:", l) } as any);
adapter.printText("Hello Design Patterns!");

console.log("\n--- 4. FACADE ---");
new ComputerFacade().start();

console.log("\n--- 5. STRATEGY ---");
const cart = new ShoppingCart(new PayPalPayment());
cart.checkout(100);
cart.setStrategy(new CryptoPayment());
cart.checkout(200);

console.log("\n--- 6. OBSERVER ---");
const agency = new NewsAgency();
agency.subscribe(new NewsChannel("BBC"));
agency.subscribe(new NewsChannel("CNN"));
agency.notify("TypeScript is awesome!");
