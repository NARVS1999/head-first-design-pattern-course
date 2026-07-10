```markdown
# 📘 Head First Design Patterns (2nd Edition) – Course Lesson Guide  
*Isang Taglish na gabay sa pag-aaral ng design patterns mula sa aklat nina Eric Freeman at Elisabeth Robson*

---

## 📌 Paano Gamitin ang Gabay na Ito
Ang course na ito ay hinati sa **6 phases**, at ang bawat phase ay may **2–3 lessons**.  
Bawat lesson ay may:

- 🎯 **Layunin (Objectives)**
- 🧠 **Core Concepts**
- 🧪 **Code Snippet** (Java)
- ✍️ **Pagsubok (Exercise)**
- 💡 **Design Principle in Taglish**

Basahin nang sunod-sunod o tumalon ayon sa kailangan mo. Copy-paste friendly ang format!

---

## PHASE 1 – PUNDASYON AT PAGSISIMULA  
*Chapters 1–2: Intro to Design Patterns, Observer Pattern*

### Lesson 1.1: Welcome to Design Patterns  
**📖 Chapter 1 – Intro to Design Patterns**

🎯 **Layunin**  
- Maunawaan kung *bakit* kailangan ang design patterns.  
- Makilala ang mga OO basics na ginagamit sa libro (inheritance, polymorphism, etc.).  
- Matutunan ang unang design principle.

🧠 **Core Concepts**  
- Ang **pattern** ay isang tested na solusyon sa paulit-ulit na problema sa software design.  
- Hindi ito code na pwedeng i-copy-paste lang; it’s a **template** or idea.  
- Lahat ng patterns ay may trade-offs – kailangan mong pumili ng tama depende sa sitwasyon.

🔑 **Unang Design Principle**  
> *“Identify the aspects of your application that vary and separate them from what stays the same.”*  
> **Sa Taglish:** Hanapin mo yung mga bahagi ng code na madalas magbago, at ihiwalay mo sila para hindi maapektuhan ang stable na code.

🧪 **Sample idea (pseudocode)**  
```java
// Instead of hardcoding behavior, use an interface
interface QuackBehavior {
    void quack();
}
class Duck {
    QuackBehavior quackBehavior;
    void performQuack() {
        quackBehavior.quack();
    }
}
```

✍️ **Pagsubok**  
- Maglista ng 3 scenarios sa isang maliit na app (e.g., online store) kung saan may nagbabago (varying) at dapat ihiwalay. Ipaliwanag bakit.

---

### Lesson 1.2: The Observer Pattern – Huwag Mong Miss ang Update!  
**📖 Chapter 2 – Keeping your Objects in the Know**

🎯 **Layunin**  
- Ipaliwanag ang one-to-many dependency sa pagitan ng objects.  
- Ma-implement ang sariling Observer pattern gamit ang interfaces.

🧠 **Core Concepts**  
- **Subject (Observable)** – ang source ng data/events.  
- **Observer** – mga nag-a-abang ng update mula sa Subject.  
- Loose coupling: Alam lang ng Subject na may observers, pero hindi niya alam ang konkretong klase nila.

🔑 **Design Principle**  
> *“Strive for loosely coupled designs between objects that interact.”*  
> **Sa Taglish:** Gawing maluwag ang koneksyon ng mga nag-uusap na objects – para pwede mong baguhin ang isa nang hindi masyadong apektado ang isa.

🧪 **Simpleng code**  
```java
interface Subject {
    void registerObserver(Observer o);
    void notifyObservers();
}
interface Observer {
    void update(float temp, float humidity);
}
```

✍️ **Pagsubok**  
- Gumawa ng WeatherStation simulator: Subject = WeatherData, Observers = Display devices (phone, tablet). I-drawing ang sequence ng update.

---

## PHASE 2 – DECORATOR AT FACTORY: PAGANDA AT PAGGAWA NG OBJECTS  
*Chapters 3–4*

### Lesson 2.1: Decorator Pattern – Dinadagdagan ng Powers  
**📖 Chapter 3 – Decorating Objects**

🎯 **Layunin**  
- Paano magdagdag ng behavior sa objects nang hindi gumagamit ng inheritance.  
- Ma-appreciate ang *Open/Closed Principle*.

🧠 **Core Concepts**  
- Binebalot (wrap) mo ang isang object sa loob ng isa pang object na may parehong interface.  
- Recursive composition ang tawag sa technique na ito.  
- Halimbawa: Beverage (base) + CondimentDecorators (Mocha, Whip).

🔑 **Design Principle**  
> *“Classes should be open for extension, but closed for modification.”*  
> **Sa Taglish:** Pwedeng dagdagan ang features ng isang klase, pero hindi mo kailangang baguhin ang existing code nito.

🧪 **Sample**  
```java
Beverage beverage = new DarkRoast();
beverage = new Mocha(beverage);
beverage = new Whip(beverage);
System.out.println(beverage.cost()); // nag-accumulate
```

✍️ **Pagsubok**  
- Magdesign ng decorator para sa isang Pizza app: Base = ThinCrust, Toppings = Cheese, Pepperoni. I-compute ang total price.

---

### Lesson 2.2: Factory Patterns – Simple, Method, at Abstract  
**📖 Chapter 4 – Baking with OO Goodness**

🎯 **Layunin**  
- Maunawaan ang tatlong factory: Simple Factory, Factory Method, Abstract Factory.  
- Makita kung paano ini-encapsulate ang object creation.

🧠 **Core Concepts**  
- **Simple Factory**: Isang klase na may paraan para gumawa ng objects, parang helper.  
- **Factory Method**: Subclasses ang nagde-decide kung anong object ang gagawin.  
- **Abstract Factory**: Interface para sa family of related objects.  
- Ginagamit kapag iba-iba ang concrete classes pero may parehong interface.

🔑 **Design Principle**  
> *“Depend upon abstractions. Do not depend upon concrete classes.”*  
> **Sa Taglish:** Ang code mo dapat nakadepende sa interfaces o abstract classes, hindi sa mga konkretong implementation.

🧪 **Sample (Factory Method)**  
```java
abstract class PizzaStore {
    abstract Pizza createPizza(String type);
    public Pizza orderPizza(String type) {
        Pizza pizza = createPizza(type);
        pizza.prepare();
        return pizza;
    }
}
```

✍️ **Pagsubok**  
- Gumawa ng app na pwedeng mag-produce ng “EmailNotification” o “SMSNotification” gamit ang Factory Method.

---

## PHASE 3 – SINGLETON AT COMMAND: IISA LANG AT PAG-UUTOS  
*Chapters 5–6*

### Lesson 3.1: Singleton – One and Only One  
**📖 Chapter 5 – One of a Kind Objects**

🎯 **Layunin**  
- Tiyaking iisa lang ang instance ng isang klase sa buong application.  
- Matutunan ang iba’t ibang implementation (eager, lazy, double-checked locking).

🧠 **Core Concepts**  
- Private constructor.  
- Static method (`getInstance()`) na nagbabalik ng iisang instance.  
- Thread safety issues.

🧪 **Sample (thread-safe)**  
```java
public class Singleton {
    private static volatile Singleton uniqueInstance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (uniqueInstance == null) {
            synchronized (Singleton.class) {
                if (uniqueInstance == null) {
                    uniqueInstance = new Singleton();
                }
            }
        }
        return uniqueInstance;
    }
}
```

✍️ **Pagsubok**  
- Patunayan na iisa lang ang instance sa pamamagitan ng pag-print ng hashcode sa dalawang tawag ng getInstance().

---

### Lesson 3.2: Command Pattern – I-encapsulate ang mga Request  
**📖 Chapter 6 – Encapsulating Invocation**

🎯 **Layunin**  
- Gawing object ang isang request o aksyon.  
- I-decouple ang sender ng request mula sa receiver.

🧠 **Core Concepts**  
- **Command** interface may `execute()` method.  
- **Invoker** (e.g., RemoteControl) – nag-iimbak at nagta-trigger ng commands.  
- **Receiver** – ang talagang gagawa ng trabaho.  
- Pwede ring mag-implement ng undo.

🧪 **Sample**  
```java
interface Command { void execute(); }
class LightOnCommand implements Command {
    Light light;
    void execute() { light.on(); }
}
```

✍️ **Pagsubok**  
- Magdisenyo ng universal remote na may on/off, undo button para sa TV at Sound System.

---

## PHASE 4 – ADAPTER, FACADE, TEMPLATE METHOD: MAG-ADAPT AT MAG-ORGANIZE  
*Chapters 7–8*

### Lesson 4.1: Adapter & Facade – Pagkakabagay at Simpleng Interface  
**📖 Chapter 7 – Being Adaptive**

🎯 **Layunin**  
- **Adapter**: Baguhin ang interface ng isang klase para maging compatible sa iba.  
- **Facade**: Magbigay ng pinag-isang interface para sa isang komplikadong subsystem.

🧠 **Core Concepts**  
- Adapter: Parang power plug converter. Object at Class adapter.  
- Facade: Hindi binabawasan ang functionality; nagbibigay lang ng mas simpleng tawagan.  
- Principle of Least Knowledge (Law of Demeter).

🔑 **Design Principle**  
> *“Principle of Least Knowledge – talk only to your immediate friends.”*  
> **Sa Taglish:** Makipag-usap lang sa mga direktang kaibigan mong objects, huwag sa kaibigan ng kaibigan.

🧪 **Sample (Adapter)**  
```java
interface Turkey { void gobble(); }
class TurkeyAdapter implements Duck {
    Turkey turkey;
    void quack() { turkey.gobble(); }
}
```

✍️ **Pagsubok**  
- Gumawa ng Facade para sa Home Theater system (Projector, Amplifier, Player). Yung `watchMovie()` ay i-on lahat.

---

### Lesson 4.2: Template Method – Algorithm na may Plugable Steps  
**📖 Chapter 8 – Encapsulating Algorithms**

🎯 **Layunin**  
- I-define ang skeleton ng algorithm sa isang method, ipaubaya sa subclasses ang ilang steps.  
- Maiwasan ang code duplication.

🧠 **Core Concepts**  
- Abstract `templateMethod()` na final (hindi ma-override).  
- Abstract at concrete primitive operations.  
- Hook methods – optional steps na pwedeng i-override.

🔑 **Design Principle**  
> *“The Hollywood Principle: Don’t call us, we’ll call you.”*  
> **Sa Taglish:** Hayaan mong ang high-level component ang tumawag sa low-level, hindi baliktad.

🧪 **Sample**  
```java
abstract class CaffeineBeverage {
    final void prepareRecipe() {
        boilWater();
        brew();
        pourInCup();
        if (customerWantsCondiments()) addCondiments();
    }
    abstract void brew();
    boolean customerWantsCondiments() { return true; } // hook
}
```

✍️ **Pagsubok**  
- Gumawa ng template para sa DataExporter (PDF, CSV, Excel) na may pare-parehong export steps.

---

## PHASE 5 – ITERATOR, COMPOSITE, STATE: KOLEKSYON AT UGALI  
*Chapters 9–10*

### Lesson 5.1: Iterator & Composite – Isang Traversal, Iisang Tree  
**📖 Chapter 9 – Well-Managed Collections**

🎯 **Layunin**  
- **Iterator**: Ibigay ang paraan para ma-access ang elements ng collection nang hindi ini-expose ang underlying structure.  
- **Composite**: Gawing iisang interface ang individual objects at groups (tree structure).

🧠 **Core Concepts**  
- Iterator: `hasNext()`, `next()`. Hiwalay ang traversal logic.  
- Composite: Component interface, Leaf, Composite. Recursive traversal.  
- Single Responsibility Principle.

🔑 **Design Principle**  
> *“A class should have only one reason to change.”*  
> **Sa Taglish:** Dapat iisa lang ang dahilan para baguhin ang isang klase – isang responsibilidad lang.

🧪 **Sample (Composite)**  
```java
interface MenuComponent { void print(); }
class MenuItem implements MenuComponent { ... }
class Menu implements MenuComponent {
    List<MenuComponent> components;
    void print() { for (MenuComponent c : components) c.print(); }
}
```

✍️ **Pagsubok**  
- Gumawa ng menu system (Restaurant Menu > Breakfast, Lunch > Items) gamit ang Composite at i-print lahat gamit ang Iterator.

---

### Lesson 5.2: State Pattern – Nagbabago ang Ugali  
**📖 Chapter 10 – The State of Things**

🎯 **Layunin**  
- Payagan ang object na baguhin ang behavior kapag nagbago ang internal state.  
- Maiwasan ang maraming if-else o switch.

🧠 **Core Concepts**  
- I-encapsulate ang bawat state bilang isang klase na nagpapatupad ng iisang interface.  
- Context class nagdi-delegate sa current state object.  
- Transitions: state mismo ang pwedeng mag-set ng next state.

🧪 **Sample**  
```java
interface State { void insertQuarter(); void ejectQuarter(); }
class HasQuarterState implements State {
    GumballMachine machine;
    void insertQuarter() { /* ... */ machine.setState(machine.getSoldState()); }
}
```

✍️ **Pagsubok**  
- I-model ang states ng isang online order: Placed, Paid, Shipped, Delivered. Gumamit ng State pattern para sa actions.

---

## PHASE 6 – PROXY, COMPOUND, AT REAL-WORLD PATTERNS  
*Chapters 11–13*

### Lesson 6.1: Proxy Pattern – Kinokontrol ang Access  
**📖 Chapter 11 – Controlling Object Access**

🎯 **Layunin**  
- Gumawa ng surrogate o placeholder para sa ibang object para kontrolin ang access.  
- Matutunan ang Remote, Virtual, at Protection Proxy.

🧠 **Core Concepts**  
- Subject interface, RealSubject, Proxy (na may parehong interface).  
- Remote Proxy (Java RMI), Virtual Proxy (lazy loading), Protection Proxy (access control).

🧪 **Sample idea (Virtual Proxy)**  
```java
class ImageProxy implements Icon {
    ImageIcon realImage;
    void paintIcon(...) {
        if (realImage == null) realImage = new ImageIcon(url);
        realImage.paintIcon(...);
    }
}
```

✍️ **Pagsubok**  
- I-implement ang Protection Proxy para sa isang “Secret File” na hihingi ng password bago ma-access.

---

### Lesson 6.2: Compound Patterns – Patterns na Nagtutulungan  
**📖 Chapter 12 – Patterns of Patterns**

🎯 **Layunin**  
- Makita kung paano pinagsasama-sama ang maraming pattern sa iisang application.  
- Ma-reinforce ang lahat ng naunang patterns.

🧠 **Core Concepts**  
- MVC (Model-View-Controller) bilang compound pattern: Observer, Strategy, Composite.  
- Ang Model (Observable), View (Observer), Controller (Strategy).

🧪 **Simpleng MVC**  
```java
// Model
class BeatModel {
    int bpm;
    void setBPM(int bpm) { this.bpm = bpm; notifyObservers(); }
}
// View
interface BeatObserver { void updateBeat(); }
// Controller
class BeatController { 
    void increaseBPM() { model.setBPM(model.getBPM() + 1); }
}
```

✍️ **Pagsubok**  
- I-identify ang patterns na ginamit sa DJ Beat application mula sa libro. Magdagdag ng sariling feature.

---

### Lesson 6.3: Real-World Patterns & Leftovers  
**📖 Chapter 13 – Patterns in the Real World & Appendix**

🎯 **Layunin**  
- Makita ang design patterns sa tunay na mundo: libraries, frameworks.  
- Mabilis na masuri ang iba pang patterns (Bridge, Builder, Chain of Responsibility, etc.).

🧠 **Core Concepts**  
- Pattern catalog: Classified by Creational, Structural, Behavioral.  
- **Builder**: Bumuo ng complex object step by step.  
- **Chain of Responsibility**: Magpasa ng request sa chain ng handlers.  
- **Strategy** (na tackle na rin sa earlier chapters).  
- Lahat ng patterns ay may pros and cons.

✍️ **Pagsubok**  
- Pumili ng isang “leftover pattern” (Builder) at i-refactor ang isang Pizza creation mula sa Factory lesson para gamitin ito.

---

## 🧪 FINAL PROJECT (Kung Gusto mo ng Challenge)  
*Buuin ang isang Smart Home System na gumagamit ng:*
- Composite (Rooms -> Devices)
- Command (Remote Control)
- Observer (Status ng devices)
- State (Device states: On, Off, Standby)
- Singleton (HomeController instance)

---

## 📚 Lagi’t Laging Tandaan (Design Principles Recap)
1. Encapsulate what varies.  
2. Favor composition over inheritance.  
3. Program to interfaces, not implementations.  
4. Strive for loosely coupled designs.  
5. Classes should be open for extension, closed for modification.  
6. Depend on abstractions. Do not depend on concrete classes.  
7. Talk only to your immediate friends.  
8. Don’t call us, we’ll call you (Hollywood Principle).  
9. A class should have only one reason to change.

**Ngayon, kaya mo nang mag-design ng extensible at maintainable na OO software! 🚀**
```