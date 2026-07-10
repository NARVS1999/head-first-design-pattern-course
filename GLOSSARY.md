# Head First Design Patterns Glossary

Lahat ng terms na ginagamit sa course na ito, may consistent na definition.

## Core Concepts

**Design Pattern**:
Isang tested na solusyon sa paulit-ulit na problema sa software design. Hindi ito code na copy-paste; ito ay isang template o idea na pwedeng i-adapt sa iba't ibang sitwasyon.

**OO Basics**:
Ang mga fundamento ng object-oriented programming: inheritance, encapsulation, polymorphism, at abstraction.

**Loose Coupling**:
Ang pagdesign ng mga object na hindi masyadong nakadepende sa isa't isa. Kapag maluwag ang koneksyon, pwedeng baguhin ang isa nang hindi masyadong naapektuhan ang iba.

**Encapsulation**:
Ang pagbalot ng data at behavior sa loob ng isang object, at pagtatago ng internal details mula sa outside.

**Polymorphism**:
Ang kakayahan ng isang object na mag-behave differently depende sa context, gamit ang parehong interface.

## Patterns

**Observer Pattern**:
Isang pattern na nagbibigay-daan sa isang object (Subject) na automatic na mag-notify sa maraming dependent objects (Observers) kapag nagbago ang state nito. One-to-many relationship.

**Decorator Pattern**:
Isang pattern na nagdadagdag ng behavior sa objects nang hindi gumagamit ng inheritance. Binebalot (wrap) ang isang object sa loob ng isa pang object na may parehong interface.

**Factory Pattern**:
Isang pattern na nag-encapsulate ng object creation. May tatlong variants: Simple Factory, Factory Method, at Abstract Factory.

**Simple Factory**:
Isang klase na may paraan para gumawa ng objects, parang isang helper na nagde-decide kung anong concrete class ang gagamitin.

**Factory Method**:
Isang pattern na nagbibigay-daan sa mga subclass na mag-decide kung anong object ang gagawin. Ang base class ay nagde-define ng algorithm, pero ang mga subclass ang nagpopopulate ng mga specific steps.

**Abstract Factory**:
Isang interface para sa creating families of related objects nang hindi tinutukoy ang mga concrete classes.

**Singleton Pattern**:
Isang pattern na tiniyak na iisa lang ang instance ng isang klase sa buong application. May private constructor at static getInstance() method.

**Command Pattern**:
Isang pattern na nag-encapsulate ng isang request bilang isang object, na nagbibigay-daan sa pag-decouple ng sender at receiver ng request.

**Adapter Pattern**:
Isang pattern na nag-convert ng interface ng isang class para maging compatible sa iba pang interface. Parang power plug converter.

**Facade Pattern**:
Isang pattern na nagbibigay ng simpleng interface para sa isang komplikadong subsystem. Hindi binabawasan ang functionality; nagbibigay lang ng mas madaling paraan ng paggamit.

**Template Method Pattern**:
Isang pattern na nagde-define ng skeleton ng algorithm sa isang method, na nagbibigay-daan sa mga subclass na mag-override ng ilang steps.

**Iterator Pattern**:
Isang pattern na nagbibigay ng paraan para ma-access ang elements ng collection nang hindi ini-expose ang underlying structure nito.

**Composite Pattern**:
Isang pattern na nagbibigay-daan sa pagtreat ng individual objects at groups ng objects bilang iisang entity. Ginagamit para sa tree structures.

**State Pattern**:
Isang pattern na nagbibigay-daan sa isang object na baguhin ang behavior kapag nagbago ang internal state nito. Nag-iwas sa maraming if-else o switch statements.

**Proxy Pattern**:
Isang pattern na nagbibigay ng surrogate o placeholder para sa ibang object para kontrolin ang access dito. May tatlong uri: Remote, Virtual, at Protection proxy.

**Strategy Pattern**:
Isang pattern na nagbibigay-daan sa pag-switch ng algorithm ng isang object sa runtime. Ang mga family of algorithms ay naka-encapsulate sa iba't ibang classes.

## Design Principles

**Encapsulate What Varies**:
Ihiwalay ang mga bahagi ng code na madalas magbago mula sa mga stable na bahagi.

**Favor Composition Over Inheritance**:
Mas mainam na mag-compose ng mga objects kaysa umasa sa inheritance hierarchy.

**Program to Interfaces, Not Implementations**:
Ang code ay dapat nakadepende sa abstract types, hindi sa mga concrete classes.

**Open/Closed Principle**:
Ang mga klase ay dapat open for extension pero closed for modification.

**Dependency Inversion Principle**:
Ang mga high-level modules ay hindi dapat depend sa mga low-level modules. Parehong dapat nakadepende sa abstractions.

**Principle of Least Knowledge**:
Makipag-usap lang sa mga direktang kaibigan mong objects. Huwag makipag-usap sa kaibigan ng kaibigan.

**Hollywood Principle**:
"Don't call us, we'll call you." Hayaan mong ang high-level components ang tumawag sa low-level components, hindi baliktad.

**Single Responsibility Principle**:
Dapat iisa lang ang dahilan para baguhin ang isang klase — isang responsibilidad lang.
