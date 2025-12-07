const perfumesData = {
    feminino: [
        { nome: "212 VIP ROSE", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP ROSE LOVE NY", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP", preco100ml: 153, preco30ml: 95, preco50ml: 107 },
        { nome: "212 NYC", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "212 SEXY", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIOIA", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ALIEN", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGEL ELIXIR", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGEL", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGE OU DEMON", preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "ANI NISHANE", preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "BABYCAT", preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "BACCARAT ROUGE 540", preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "BIZANCE ROCHAS", preco100ml: 182, preco30ml: 95, preco50ml: 107 },
        { nome: "CHANEL 5", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "CHANCE EAU TENDRE", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "CH", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "CHEIROSA 62 - SOL DE JANEIRO", preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "CHLOE", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "CLASSIQUE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "COCO MADEMOISELLE", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "COCONUT PASSION VS Body Splash", preco100ml: 125, preco30ml: 95, preco50ml: 107 },
        { nome: "DELINA", preco100ml: 178, preco30ml: 95, preco50ml: 107 },
        { nome: "DELINA EXCLUSIVE", preco100ml: 185, preco30ml: 95, preco50ml: 107 },
        { nome: "DEVOTION", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "DKNY BE DELICIOUS", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "DOLCE GABANNA RED", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "EDEN", preco100ml: 148, preco30ml: 105, preco50ml: 117 },
        { nome: "ERBA PURA", preco100ml: 199, preco30ml: 105, preco50ml: 117 },
        { nome: "ETERNITY", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "EUPHORIA", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "FAME", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "FANTASY", preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "FLORA GORGEOUS MAGNÓLIA", preco100ml: 185, preco30ml: 105, preco50ml: 117 },
        { nome: "FLORA GORGEOUS GARDÊNIA", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "GABRIELA SABATINI", preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "GODESS", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "GOOD GIRL", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "GOOD GIRL BLUSH", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "GOOD GIRL BLUSH ELIXIR", preco100ml: 174, preco30ml: 95, preco50ml: 107 },
        { nome: "HER CODE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco100ml: 203, preco30ml: 95, preco50ml: 107 },
        { nome: "HYPNOSE", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "HYPNOTIC POISON", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "IDÔLE", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "ISSEY MIYAKE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "J'ADORE", preco100ml: 158, preco30ml: 105, preco50ml: 117 },
        { nome: "J MALONE ENGLISH PEAR & FREESIA", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "KENZO FLOWER", preco100ml: 151, preco30ml: 95, preco50ml: 107 },
        { nome: "KENZO AMOURE", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "LA BOMBA", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "LA BELLE", preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "LA BELLE LE PARFUM 2024", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE EST BELLE", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE EST BELLE L'EXTRAIT", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE EST BELLE ELIXIR", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE SOLEIL CRISTAL", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "LADY MILLION", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "LA NUIT TRESOR", preco100ml: 147, preco30ml: 95, preco50ml: 107 },
        { nome: "LIBRE", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "LIGHT BLUES", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "LILI", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "LINTERDIT", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "LINTERDIT EDP ROUGE", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "LOU LOU", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "LOVE IN WHITE 2005", preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "LUCKY CHARM", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "MISS DIO", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "MONOI VAGUE D'ETÉ", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "MONCLER POUR FEMME", preco100ml: 173, preco30ml: 105, preco50ml: 117 },
        { nome: "MONTBLANC SIGNATURE PREMIUM", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MY WAYS", preco100ml: 182, preco30ml: 95, preco50ml: 107 },
        { nome: "NARCISO FOR HER", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "OLYMPEA", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "OMNIA AMETHYSTE", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA PARADOXE MILANO", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA PARADOXE INTENSE", preco100ml: 193, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE XS FOR HER", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE MUSC FOR HER", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "QUEEN OF SILK", preco100ml: 191, preco30ml: 95, preco50ml: 107 },
        { nome: "ROLLING IN LOVE", preco100ml: 195, preco30ml: 95, preco50ml: 107 },
        { nome: "ROUGE ROYAL", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "ROYAL AMBER ORIENT", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "SABAH AL WARD LATTAFA", preco100ml: 157, preco30ml: 105, preco50ml: 117 },
        { nome: "SCANDAL", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL LE PARFUM", preco100ml: 175, preco30ml: 105, preco50ml: 117 },
        { nome: "SI", preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "THE ONE", preco100ml: 155, preco30ml: 105, preco50ml: 117 },
        { nome: "VALAYA PARFUMS MARLY", preco100ml: 203, preco30ml: 95, preco50ml: 107 },
        { nome: "VANILLE FATALE", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACE DYLAN TURQUOISE", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "WHITE TEA ELIZABETH ARD", preco100ml: 131, preco30ml: 95, preco50ml: 107 },
        { nome: "YARA LATTAFA", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "YARA ELIXIR - LATTAFA", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "YES I AM", preco100ml: 163, preco30ml: 105, preco50ml: 117 },
        { nome: "VANILLE FATALE", preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACE DYLAN TURQUOISE", preco30ml: 95, preco50ml: 107 },
        { nome: "WHITE TEA ELIZABETH ARD", preco30ml: 95, preco50ml: 107 },
        { nome: "YARA LATTAFA", preco30ml: 95, preco50ml: 107 },
        { nome: "YARA ELIXIR - LATTAFA", preco30ml: 95, preco50ml: 107 },
        { nome: "YES I AM", preco30ml: 95, preco50ml: 107 },
        { nome: "NAXOS XJ 1861", preco30ml: 105, preco50ml: 117 }
    ],
    
    masculino: [
        { nome: "212 MEN", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "212 HEROES", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "212 SEXYS MEN", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP MEN", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP BLACK", preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP BLACK ELIXIR", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "A* MEN", preco100ml: 155, preco30ml: 105, preco50ml: 117 },
        { nome: "ACQUA DI GIO PROFONDO", preco100ml: 157, preco30ml: 105, preco50ml: 117 },
        { nome: "ACQUA DI GIO ABSOLUT", preco100ml: 171, preco30ml: 105, preco50ml: 117 },
        { nome: "ACQUA DIO GIO PARFUM", preco100ml: 167, preco30ml: 105, preco50ml: 117 },
        { nome: "ACQUA DI GIO ELIXIR", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUAMARINE N POWDER", preco100ml: 191, preco30ml: 95, preco50ml: 107 },
        { nome: "BAL D' AFRIQUE", preco100ml: 164, preco30ml: 95, preco50ml: 107 },
        { nome: "AFTERNOON SWIM", preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "AFRICAN LEATHER", preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ÁGUA DI GIO PREMIUM", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "ALEXANDRIA II", preco100ml: 193, preco30ml: 95, preco50ml: 107 },
        { nome: "ALLURE H SPORT EXTREME", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "ALLURE HOMME SPORT", preco100ml: 169, preco30ml: 105, preco50ml: 117 },
        { nome: "ALLURE EDITION BLACHE", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "ALTHAIR PARFUMS", preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "AMBASS MEN", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGELS SHARE BY KIL", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGEL'S SHARE PARADIS", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ANIMALE", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "APEX ROJAS PARFUMS", preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "APPLE BRANDY OT ROCKS", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ARABIA TONK", preco100ml: 201, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE PARFUM", preco100ml: 185, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE ABSOLU GOLD", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE PROFUMO", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "ARTISAN J. VARV", preco100ml: 163, preco30ml: 105, preco50ml: 117 },
        { nome: "ASAD LATTAF", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "ASAD ELIXIR - LATTAFA", preco100ml: 179, preco30ml: 95, preco50ml: 107 },
        { nome: "AZZARO P HOMME PREMIUM", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "AZZARO THE MOST WANTED", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "AZZARO WANTED PREMIUM", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "BAD BOY PREMIUM", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "BAD BOY EXTREME", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "BAROLO", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "BLACK XS", preco100ml: 147, preco30ml: 95, preco50ml: 107 },
        { nome: "BLEU CHA", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "BOND N°9", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "BOSS BOTTLED", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "BOSS BOTTLED PARFUM", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "BOSS IN MOTION", preco100ml: 157, preco30ml: 105, preco50ml: 117 },
        { nome: "BULGARI BLACK", preco100ml: 163, preco30ml: 105, preco50ml: 117 },
        { nome: "BULGARI AQCUA POUR HOMME", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI MAN W ESSENCE", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI MAN IN BLACK", preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI POUR HOMME", preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "BY THE FIREPLACE", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "CACTUS GARDEN", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "CARNAL FLOWER", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "CH MEN PRIVE", preco100ml: 155, preco30ml: 105, preco50ml: 117 },
        { nome: "CK BE", preco100ml: 143, preco30ml: 105, preco50ml: 117 },
        { nome: "CK ONE", preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "COOL WATER", preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "COOL ELIXIR", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "CREED AVENTUS", preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "CREED IRISH", preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "DIOR HOMME INTENSE", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "DIOR HOMME PARFUM 2014", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "EGOIST PLATINUM", preco100ml: 185, preco30ml: 95, preco50ml: 107 },
        { nome: "EROS VERSACCE", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ETERNITY", preco100ml: 141, preco30ml: 95, preco50ml: 107 },
        { nome: "FAHRENHEIT", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "FIERCE ABERCROMBIE", preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "FLEUR DU MALE", preco100ml: 157, preco30ml: 105, preco50ml: 117 },
        { nome: "FOREVER WANTED ELIXIR AZZ", preco100ml: 169, preco30ml: 105, preco50ml: 117 },
        { nome: "GENTLEMANN", preco100ml: 149, preco30ml: 105, preco50ml: 117 },
        { nome: "GENTLEMAN RESERVE PRIVÉE", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "GENTLEMAN SOCIETY", preco100ml: 173, preco30ml: 105, preco50ml: 117 },
        { nome: "GOD OF FIRE", preco100ml: 195, preco30ml: 105, preco50ml: 117 },
        { nome: "HACIVAT NISHANE", preco100ml: 231, preco30ml: 95, preco50ml: 107 },
        { nome: "HALTANE PARFUMS", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "HEROD", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "IMAGINATION", preco100ml: 203, preco30ml: 95, preco50ml: 107 },
        { nome: "INITIO OUD FOR GREATNESS", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "INVICTUS", preco100ml: 157, preco30ml: 105, preco50ml: 117 },
        { nome: "INVICTUS PARFUM", preco100ml: 198, preco30ml: 95, preco50ml: 107 },
        { nome: "INVICTUS VICTORY", preco100ml: 179, preco30ml: 95, preco50ml: 107 },
        { nome: "INVICTUS VICTORY ELIXIR", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "ISSEY MIYAKE POUR HOMME", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "JAZZ CLUB REPLICA", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "JAZZ YSL", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "J MALONE VETIVER E VANILA", preco100ml: 153, preco30ml: 95, preco50ml: 107 },
        { nome: "JOOP HOMME", preco100ml: 149, preco30ml: 105, preco50ml: 117 },
        { nome: "JOOP NIGHTFLIGHT", preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "JUBILATION 40 MAN", preco100ml: 189, preco30ml: 105, preco50ml: 117 },
        { nome: "KENZO POUR HOMME EAU DE TOILETTE", preco100ml: 139, preco30ml: 105, preco50ml: 117 },
        { nome: "KENZO H. MARINE", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "LA NUIT DE L'HOMME", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "LAMAR KAJAL", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "LAYTON", preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "LAYTON EXCLUSIF", preco100ml: 193, preco30ml: 95, preco50ml: 107 },
        { nome: "LE BEAU LE PARFUM", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "LE BEAU PARADISE GARDEN", preco100ml: 195, preco30ml: 105, preco50ml: 117 },
        { nome: "LE MALE", preco100ml: 159, preco30ml: 105, preco50ml: 117 },
        { nome: "LE MALE ELIXIR", preco100ml: 179, preco30ml: 95, preco50ml: 107 },
        { nome: "LE MALE LE PARFUM", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "LIGHT BLUE POUR HOMME", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "L'IMMENSITÉ", preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "LV LOVERS", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "MALBEC", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "MEGAMARE", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "MERCEDES BENZ CLUB BLACK", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "MILLÉSIME IMPERIAL", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MONCLER POUR HOMME", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC LEGEND", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC EMBLEM", preco100ml: 155, preco30ml: 105, preco50ml: 117 },
        { nome: "MONTBLANC INDIVIDUEL", preco100ml: 163, preco30ml: 105, preco50ml: 117 },
        { nome: "MYSLF", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "Narciso FOR HIM BLEU NOIR PARFUM", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "NARCISO RODRIGUES FOR HIM", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "NAXOS XJ 1861", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "NEW LOOK 2024", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "NIO", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "NOUVEAU MONDE", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "OMBRE LEATHER", preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "OMBRE NOMADE", preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ONE MILLION", preco100ml: 167, preco30ml: 105, preco50ml: 117 },
        { nome: "ONE MILLION ELIXIR", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION GOLDEN OUD", preco100ml: 181, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION PARFUM", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION PRIVE", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION ROYAL", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "OUD MARACUJA", preco100ml: 203, preco30ml: 95, preco50ml: 107 },
        { nome: "PACIFIC CHILL", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "PEGASUS EXCLUSIF", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "PEGASUS PARFUMS", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "PHANTOM", preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "PHANTOM PARFUM", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "PI GIVENCHY", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO BLACK", preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO BLUE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO BLUE GOLD BLEND", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO VERDE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA L'HOMME", preco100ml: 183, preco30ml: 105, preco50ml: 117 },
        { nome: "PRADA L'HOMME INTENSE", preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA AMBER P.H INTENSE", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE MALTE", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE HAVANE A*MEN", preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE XS", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "REFLECTION MAN", preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "RENAISSANCE XJ 1861", preco100ml: 183, preco30ml: 105, preco50ml: 117 },
        { nome: "ROYAL OUD", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "SAUVAGE", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "SAUVAGE ELIXIR", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL POUR HOMME LE PARFUM", preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL POUR HOMME", preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "SILVER SCENTS INTENSE", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "SILVER SCENTS", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "SOSPIRO VIBRATO", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "SPICEBOMB", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "SPICEBOMB EXTREME", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "STALLION LEATHER CH", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "STRONGER WITH YOU AMBER", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "STRONGER W YOU ABSOLUTELLY", preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "TERRES D'HERMES", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "TERRE D'HERMES EAU GIVRE", preco100ml: 201, preco30ml: 95, preco50ml: 107 },
        { nome: "THE ONE", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "TOBACCO VANILLE", preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "TOY BOY", preco100ml: 155, preco30ml: 105, preco50ml: 117 },
        { nome: "TYGAR BULGARI", preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ULTRAMALLE", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "VALENTIN UOMO INTENSO", preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "VALENTINO UOMO BORN IN ROMA", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACCE MAN EAU FRAICHE", preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACE POUR HOMME PREMIUM", preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "X FOR MEN CLIVE CRIS", preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "XERYUS ROUGE", preco100ml: 193, preco30ml: 95, preco50ml: 107 },
        { nome: "Y YSLS", preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "Y LE PARFUM", preco100ml: 153, preco30ml: 95, preco50ml: 107 }
    ],
    
    body: [
        { nome: "BARE VANILLA VS Body Splash", preco: 100 },
        { nome: "COCONUT PASSION VS Body Splash", preco: 100 },
        { nome: "LOVE SPELL VS Body Splash", preco: 100 },
        { nome: "MANGO TEMPTATION VS Body Splash", preco: 100 },
        { nome: "VANILLA LACE VS Body Splash", preco: 100 },
        { nome: "WHITE CITRUS Body Splash", preco: 100 }
    ]
};

// Estado da aplicação
let cart = [];
let deliveryInfo = null;
let currentTab = 'feminino';

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    renderAllPerfumes();
    setupEventListeners();
    updateCartCount();
    updateQuickSummary();
    loadCart();
    loadDeliveryInfo();
}

function renderAllPerfumes() {
    renderPerfumeGrid('feminino', perfumesData.feminino);
    renderPerfumeGrid('masculino', perfumesData.masculino);
    renderBodySplashGrid('body', perfumesData.body);
    applyFilters();
}

function renderPerfumeGrid(genero, perfumes) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    perfumes.forEach((perfume, index) => {
        const card = createPerfumeCard(perfume, genero, index);
        grid.appendChild(card);
    });
}

function createPerfumeCard(perfume, genero, index) {
    const card = document.createElement('div');
    card.className = `perfume-card ${genero}`;
    card.dataset.id = `${genero}-${index}`;
    card.dataset.name = perfume.nome.toLowerCase();
    
    // Calcular preço mínimo para filtros
    const prices = [];
    if (perfume.preco100ml) prices.push(perfume.preco100ml);
    if (perfume.preco30ml) prices.push(perfume.preco30ml);
    if (perfume.preco50ml) prices.push(perfume.preco50ml);
    const minPrice = Math.min(...prices);
    card.dataset.minPrice = minPrice;
    
    const tem100ml = perfume.preco100ml !== undefined;
    const tem30ml = perfume.preco30ml !== undefined;
    const tem50ml = perfume.preco50ml !== undefined;
    
    // Determinar a fragrância original inspirada (removendo marca específica se presente)
    let originalName = perfume.nome;
    const brandMarkers = ['VS Body Splash', 'LATTAFA', 'NISHANE', 'ROCHAS', 'PARFUMS', 'XJ 1861', 'BY KIL', 'J MALONE'];
    
    brandMarkers.forEach(marker => {
        if (originalName.includes(marker)) {
            originalName = originalName.split(marker)[0].trim();
        }
    });
    
    let sizeOptionsHTML = '<div class="size-options">';
    
    if (tem100ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="100ml" data-price="${perfume.preco100ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="100ml">
                    100ml <span class="concentration-badge">33% Extract Parfum</span>
                </label>
                <span class="price">R$ ${perfume.preco100ml},00</span>
            </div>
        `;
    }
    
    if (tem30ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="30ml" data-price="${perfume.preco30ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="30ml">
                    30ml <span class="concentration-badge">33% Extract Parfum</span>
                </label>
                <span class="price">R$ ${perfume.preco30ml},00</span>
            </div>
        `;
    }
    
    if (tem50ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="50ml" data-price="${perfume.preco50ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="50ml">
                    50ml <span class="concentration-badge">20% Colônia</span>
                </label>
                <span class="price">R$ ${perfume.preco50ml},00</span>
            </div>
        `;
    }
    
    sizeOptionsHTML += '</div>';
    
    card.innerHTML = `
        <h3>${perfume.nome}</h3>
        <div class="inspired-info">
            <strong>Inspirado em:</strong> ${originalName}
        </div>
        ${sizeOptionsHTML}
        <button class="add-btn" disabled>
            <i class="fas fa-cart-plus"></i> Adicionar
        </button>
    `;
    
    // Eventos do card
    setupCardEvents(card, perfume, genero, originalName);
    
    return card;
}

function setupCardEvents(card, perfume, genero, originalName) {
    const sizeOptions = card.querySelectorAll('.size-option');
    const addBtn = card.querySelector('.add-btn');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            addBtn.disabled = false;
            addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar (R$ ${this.dataset.price},00)`;
        });
    });
    
    addBtn.addEventListener('click', function() {
        const selectedSizeOption = card.querySelector('.size-option.selected');
        if (selectedSizeOption) {
            const size = selectedSizeOption.dataset.size;
            const price = parseInt(selectedSizeOption.dataset.price);
            
            addToCart(perfume.nome, genero, size, price, originalName);
            openCartSidebar();
            
            // Feedback visual
            const originalText = addBtn.innerHTML;
            addBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
            addBtn.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                addBtn.innerHTML = originalText;
                addBtn.style.backgroundColor = '';
                
                // Reset selection
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                card.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
                addBtn.disabled = true;
                addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar`;
            }, 1500);
        }
    });
}

function renderBodySplashGrid(genero, items) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    items.forEach((item, index) => {
        // Determinar a fragrância original inspirada
        let originalName = item.nome.replace('VS Body Splash', '').replace('Body Splash', '').trim();
        
        const card = document.createElement('div');
        card.className = `perfume-card ${genero}`;
        card.dataset.id = `${genero}-${index}`;
        card.dataset.name = item.nome.toLowerCase();
        card.dataset.minPrice = item.preco;
        
        card.innerHTML = `
            <h3>${item.nome}</h3>
            <div class="inspired-info">
                <strong>Inspirado em:</strong> ${originalName}
            </div>
            <div class="size-options">
                <div class="size-option selected" data-size="Único" data-price="${item.preco}">
                    <label>
                        <input type="radio" name="${genero}-${index}" value="único" checked>
                        Tamanho Único <span class="concentration-badge">20%</span>
                    </label>
                    <span class="price">R$ ${item.preco},00</span>
                </div>
            </div>
            <button class="add-btn">
                <i class="fas fa-cart-plus"></i> Adicionar (R$ ${item.preco},00)
            </button>
        `;
        
        grid.appendChild(card);
        
        const addBtn = card.querySelector('.add-btn');
        
        addBtn.addEventListener('click', function() {
            addToCart(item.nome, 'body', 'Único', item.preco, originalName);
            openCartSidebar();
        });
    });
}

function setupEventListeners() {
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Busca global
    document.getElementById('global-search').addEventListener('input', function() {
        applyFilters();
    });
    
    // Buscas específicas
    document.getElementById('search-feminino').addEventListener('input', function() {
        applyFilters();
    });
    
    document.getElementById('search-masculino').addEventListener('input', function() {
        applyFilters();
    });
    
    document.getElementById('search-body').addEventListener('input', function() {
        applyFilters();
    });
    
    // Filtros
    document.getElementById('sort-by').addEventListener('change', function() {
        applyFilters();
    });
    
    document.getElementById('price-filter').addEventListener('change', function() {
        applyFilters();
    });
    
    // Carrinho
    document.getElementById('cart-toggle').addEventListener('click', openCartSidebar);
    document.getElementById('close-cart').addEventListener('click', closeCartSidebar);
    document.getElementById('cart-overlay').addEventListener('click', closeCartSidebar);
    document.getElementById('quick-view-cart').addEventListener('click', openCartSidebar);
    
    // Limpar carrinho
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    
    // Enviar pedido
    document.getElementById('cart-send-whatsapp').addEventListener('click', sendToWhatsApp);
    
    // Modal de entrega
    document.getElementById('delivery-info').addEventListener('click', openDeliveryModal);
    document.getElementById('go-home').addEventListener('click', goToHome);
    document.getElementById('close-delivery-modal').addEventListener('click', closeDeliveryModal);
    document.getElementById('delivery-modal-overlay').addEventListener('click', closeDeliveryModal);
    document.getElementById('save-delivery-info').addEventListener('click', saveDeliveryInfo);
    
    // Opções de entrega
    document.querySelectorAll('.delivery-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.delivery-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            const deliveryType = this.dataset.type;
            if (deliveryType === 'delivery') {
                document.getElementById('address-form').style.display = 'block';
                document.getElementById('pickup-info').style.display = 'none';
            } else {
                document.getElementById('address-form').style.display = 'none';
                document.getElementById('pickup-info').style.display = 'block';
            }
        });
    });
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) btn.classList.add('active');
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tab}-tab`) content.classList.add('active');
    });
    
    currentTab = tab;
    applyFilters();
}

function applyFilters() {
    const sortBy = document.getElementById('sort-by').value;
    const priceFilter = document.getElementById('price-filter').value;
    const globalSearch = document.getElementById('global-search').value.toLowerCase().trim();
    
    // Aplicar em cada categoria
    ['feminino', 'masculino', 'body'].forEach(genero => {
        const grid = document.getElementById(`${genero}-grid`);
        if (!grid) return;
        
        const cards = Array.from(grid.querySelectorAll('.perfume-card'));
        const tabSearch = document.getElementById(`search-${genero}`).value.toLowerCase().trim();
        
        let visibleCards = [];
        
        // Aplicar filtros a cada card
        cards.forEach(card => {
            const perfumeName = card.querySelector('h3').textContent.toLowerCase();
            const minPrice = parseFloat(card.dataset.minPrice);
            
            // Verificar busca global
            const matchesGlobalSearch = globalSearch === '' || perfumeName.includes(globalSearch);
            
            // Verificar busca da aba
            const matchesTabSearch = tabSearch === '' || perfumeName.includes(tabSearch);
            
            // Verificar filtro de preço
            let matchesPriceFilter = true;
            switch(priceFilter) {
                case 'all':
                    matchesPriceFilter = true;
                    break;
                case '0-100':
                    matchesPriceFilter = minPrice <= 100;
                    break;
                case '100-150':
                    matchesPriceFilter = minPrice > 100 && minPrice <= 150;
                    break;
                case '150-200':
                    matchesPriceFilter = minPrice > 150 && minPrice <= 200;
                    break;
                case '200+':
                    matchesPriceFilter = minPrice > 200;
                    break;
            }
            
            // Mostrar card se passar por todos os filtros
            const shouldShow = matchesGlobalSearch && matchesTabSearch && matchesPriceFilter;
            card.style.display = shouldShow ? 'block' : 'none';
            
            if (shouldShow) {
                visibleCards.push(card);
            }
        });
        
        // Ordenar cards visíveis
        visibleCards.sort((a, b) => {
            const nameA = a.querySelector('h3').textContent.toLowerCase();
            const nameB = b.querySelector('h3').textContent.toLowerCase();
            const priceA = parseFloat(a.dataset.minPrice);
            const priceB = parseFloat(b.dataset.minPrice);
            
            switch(sortBy) {
                case 'name-asc':
                    return nameA.localeCompare(nameB);
                case 'name-desc':
                    return nameB.localeCompare(nameA);
                case 'price-asc':
                    return priceA - priceB;
                case 'price-desc':
                    return priceB - priceA;
                default:
                    return 0;
            }
        });
        
        // Reordenar no DOM
        // Primeiro, remover todos os cards
        cards.forEach(card => {
            card.remove();
        });
        
        // Adicionar na ordem correta
        visibleCards.forEach(card => {
            grid.appendChild(card);
        });
        
        // Adicionar os cards ocultos no final
        cards.forEach(card => {
            if (card.style.display === 'none') {
                grid.appendChild(card);
            }
        });
    });
}

// Funções do Carrinho
function addToCart(name, genero, size, price, originalName) {
    const existingIndex = cart.findIndex(item => 
        item.name === name && item.size === size
    );
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            name,
            genero,
            size,
            price,
            originalName: originalName || name,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    updateQuickSummary();
    saveCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
    updateQuickSummary();
    saveCart();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function updateQuickSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('quick-items-count').textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    document.getElementById('quick-total-price').textContent = `Total: R$ ${totalPrice},00`;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-price');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        cartTotal.textContent = 'R$ 0,00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        // Adicionar informação de concentração baseada no tamanho
        let concentration = '';
        if (item.size === '100ml' || item.size === '30ml') {
            concentration = ' (33% Extract Parfum)';
        } else if (item.size === '50ml') {
            concentration = ' (20% Colônia)';
        } else if (item.size === 'Único') {
            concentration = ' (20% Body Splash)';
        }
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <small>${item.size}${concentration} | ${getGeneroName(item.genero)}</small>
                    <div class="price">R$ ${item.price},00</div>
                    <div class="inspired-cart">Inspirado em: ${item.originalName}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-index="${index}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                        <button class="quantity-btn plus" data-index="${index}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item-btn" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = `R$ ${total},00`;
    
    // Adicionar eventos aos controles de quantidade
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (this.classList.contains('plus')) {
                cart[index].quantity += 1;
            } else if (this.classList.contains('minus')) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                }
            }
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            saveCart();
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const index = parseInt(this.dataset.index);
            const newQuantity = parseInt(this.value) || 1;
            cart[index].quantity = Math.max(1, newQuantity);
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            saveCart();
        });
    });
    
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            removeFromCart(index);
        });
    });
}

function getGeneroName(genero) {
    switch(genero) {
        case 'feminino': return 'Feminino';
        case 'masculino': return 'Masculino';
        case 'body': return 'Body Splash';
        default: return genero;
    }
}

function openCartSidebar() {
    document.getElementById('cart-overlay').style.display = 'block';
    document.getElementById('cart-sidebar').classList.add('open');
}

function closeCartSidebar() {
    document.getElementById('cart-overlay').style.display = 'none';
    document.getElementById('cart-sidebar').classList.remove('open');
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Tem certeza que deseja limpar todos os itens do carrinho?')) {
        cart = [];
        updateCartCount();
        updateCartDisplay();
        updateQuickSummary();
        saveCart();
    }
}

function saveCart() {
    localStorage.setItem('perfume_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('perfume_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateQuickSummary();
    }
}

// Funções de Entrega
function openDeliveryModal() {
    document.getElementById('delivery-modal-overlay').style.display = 'block';
    document.getElementById('delivery-modal').style.display = 'block';
    
    // Carregar informações salvas
    if (deliveryInfo) {
        if (deliveryInfo.type === 'delivery') {
            document.querySelector('.delivery-option[data-type="delivery"]').click();
            document.getElementById('client-name').value = deliveryInfo.name || '';
            document.getElementById('client-phone').value = deliveryInfo.phone || '';
            document.getElementById('client-address').value = deliveryInfo.address || '';
            document.getElementById('client-complement').value = deliveryInfo.complement || '';
        } else {
            document.querySelector('.delivery-option[data-type="pickup"]').click();
            document.getElementById('pickup-name').value = deliveryInfo.name || '';
            document.getElementById('pickup-phone').value = deliveryInfo.phone || '';
        }
    }
}

function closeDeliveryModal() {
    document.getElementById('delivery-modal-overlay').style.display = 'none';
    document.getElementById('delivery-modal').style.display = 'none';
}

function saveDeliveryInfo() {
    const deliveryType = document.querySelector('.delivery-option.selected').dataset.type;
    
    let info = { type: deliveryType };
    
    if (deliveryType === 'delivery') {
        const name = document.getElementById('client-name').value.trim();
        const phone = document.getElementById('client-phone').value.trim();
        const address = document.getElementById('client-address').value.trim();
        const complement = document.getElementById('client-complement').value.trim();
        
        if (!name || !phone || !address) {
            alert('Por favor, preencha todos os campos obrigatórios para entrega.');
            return;
        }
        
        info = { ...info, name, phone, address, complement };
    } else {
        const name = document.getElementById('pickup-name').value.trim();
        const phone = document.getElementById('pickup-phone').value.trim();
        
        if (!name || !phone) {
            alert('Por favor, preencha seu nome e telefone para retirada.');
            return;
        }
        
        info = { ...info, name, phone };
    }
    
    deliveryInfo = info;
    localStorage.setItem('delivery_info', JSON.stringify(info));
    showNotification('Informações salvas com sucesso!');
    closeDeliveryModal();
}

function loadDeliveryInfo() {
    const savedInfo = localStorage.getItem('delivery_info');
    if (savedInfo) {
        deliveryInfo = JSON.parse(savedInfo);
    }
}

// Função para enviar para WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio. Adicione perfumes antes de enviar o pedido.');
        return;
    }
    
    if (!deliveryInfo) {
        openDeliveryModal();
        alert('Por favor, preencha as informações de entrega/retirada antes de enviar o pedido.');
        return;
    }
    
    let message = `*PEDIDO DE PERFUMES - CRAFTCARE STORE*\n\n`;
    message += `*Perfumes inspirados nas melhores fragrâncias do mercado*\n\n`;
    
    // Agrupar por gênero
    const grupos = {
        feminino: cart.filter(item => item.genero === 'feminino'),
        masculino: cart.filter(item => item.genero === 'masculino'),
        body: cart.filter(item => item.genero === 'body')
    };
    
    ['feminino', 'masculino', 'body'].forEach(genero => {
        if (grupos[genero].length > 0) {
            message += `*${getGeneroName(genero).toUpperCase()}:*\n`;
            grupos[genero].forEach(item => {
                // Adicionar informação de concentração
                let concentration = '';
                if (item.size === '100ml' || item.size === '30ml') {
                    concentration = ' (33% Extract Parfum)';
                } else if (item.size === '50ml') {
                    concentration = ' (20% Colônia)';
                } else if (item.size === 'Único') {
                    concentration = ' (20% Body Splash)';
                }
                
                message += `- ${item.name}${concentration}\n`;
                message += `  Tamanho: ${item.size} | Quantidade: ${item.quantity} | R$ ${item.price * item.quantity},00\n`;
            });
            message += '\n';
        }
    });
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*TOTAL: R$ ${total},00*\n\n`;
    
    // Informações de concentração
    message += `*INFORMAÇÕES TÉCNICAS:*\n`;
    message += `• 100ml e 30ml: 33% Extract Parfum\n`;
    message += `• 50ml: 20% Colônia\n`;
    message += `• Body Splash: 20%\n\n`;
    
    // Adicionar informações de entrega/retirada
    if (deliveryInfo.type === 'delivery') {
        message += `*DADOS PARA ENTREGA:*\n`;
        message += `Nome: ${deliveryInfo.name}\n`;
        message += `Telefone: ${deliveryInfo.phone}\n`;
        message += `Endereço: ${deliveryInfo.address}\n`;
        if (deliveryInfo.complement) {
            message += `Complemento: ${deliveryInfo.complement}\n`;
        }
        message += `\n*Frete: A combinar*\n`;
    } else {
        message += `*RETIRADA NO LOCAL:*\n`;
        message += `Nome: ${deliveryInfo.name}\n`;
        message += `Telefone: ${deliveryInfo.phone}\n`;
        message += `\n*Endereço para retirada será informado após confirmação.*\n`;
    }
    
    message += `\n*Obrigado pelo pedido!*\n`;
    
    // Número do WhatsApp
    const phoneNumber = "5519998978060"; // Formato internacional
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Funções auxiliares
function goToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switchTab('feminino');
}

function showNotification(message) {
    // Criar notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 2000;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar estilos para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .inspired-cart {
        font-size: 0.8rem;
        color: #666;
        margin-top: 5px;
        font-style: italic;
    }
`;
document.head.appendChild(style);