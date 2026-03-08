# ✊✌️✋ Rock Paper Scissors (Kámen, nůžky, papír)

Jednoduchá a interaktivní webová hra postavená na čistém JavaScriptu, HTML5 a CSS3. Hráč soupeří proti náhodně generovaným tahům robota.
## 🚀 Funkce

    Interaktivní Scoreboard: Digitální tabule, která v reálném čase sleduje skóre hráče i robota.

    Vizuální odezva: Hra zobrazuje ikony (FontAwesome) pro volbu hráče i robota přímo v tabulce výsledků.

    Náhodný algoritmus: Robot generuje své tahy pomocí náhodného generátoru čísel.

    Responzivní design: Herní prvky jsou stylovány pomocí Flexboxu pro dobrou čitelnost.

## 🕹️ Jak hrát

    V sekci "Vyber si" klikni na jednu ze tří ikon:

        ✂️ Nůžky (Scissors)

        📄 Papír (Paper)

        🪨 Kámen (Rock)

    Robot okamžitě provede svůj tah.

    V horní tabulce uvidíš oba tahy a uprostřed se aktualizuje skóre.

    Pod ikonami se zobrazí verdikt (výhra, prohra nebo remíza).

## 🛠️ Technické řešení

Hra využívá jednoduchý číselný systém pro vyhodnocování vítěze:

    0: Nůžky

    1: Papír

    2: Kámen

Logika vítězství

Vítěz je určen funkcí evaluateWinner, která porovnává indexy voleb.

    Pravidlo: Hráč vyhrává, pokud (Hráč: Nůžky vs Robot: Papír) NEBO (Hráč: Papír vs Robot: Kámen) NEBO (Hráč: Kámen vs Robot: Nůžky).

## 🎨 Design (CSS)

Projekt používá moderní tmavé téma s neonovými prvky:

    Neonová barva: aquamarine slouží pro text skóre a hlavní nadpisy.

    Scoreboard: Stylizován jako digitální sportovní tabule s využitím text-shadow pro efekt záření.

    Ikony: Použití knihovny FontAwesome 6.5.1.

## 📝 Instalace

    Naklonuj nebo stáhni tento repozitář.

    Ujisti se, že máš v adresáři soubory index.html, style.css a script.js.

    Otevři index.html v libovolném moderním prohlížeči.
