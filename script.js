// Dados dos perfumes
const perfumesData = {
    compartilhavel: [
        { nome: "212 VIP BLACK ELIXIR", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUAMARINE N POWDER EBK", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "AFTERNOON SWIM - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ALEXANDRIA II - XERJOF", preco200ml: 270, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "ANGELS' SHARE BY KILIAN", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGELS' SHARE PARADIS", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ANI NISHANE", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ASAD LATTAFA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "BABYCAT - YSL", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "BACCARAT ROUGE 540", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "BAL D'AFRIQUE BYREDO", preco200ml: 240, preco100ml: 160, preco30ml: 110, preco50ml: 120 },
        { nome: "BOND Nº 9", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BY THE FIREPLACE REPLICA", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CACTUS GARDEN - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CARNAL FLOWER", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "CHOCOLATE GREEDY", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "CK BE", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "CK ONE", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "COROMANDEL EDP - CHANEL", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ERBA PURA XERJOFF", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "GOD OF FIRE", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "HACIVAT NISHANE", preco200ml: 300, preco100ml: 230, preco30ml: 110, preco50ml: 120 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "INITIO OUD F GREATNESS", preco200ml: 250, preco100ml: 170, preco30ml: 110, preco50ml: 120 },
        { nome: "JAZZ CLUB - REPLICA", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "LAMAR KAJAL", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "LAYTON .PARFUMS", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "LV LOVERS - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "MEGAMARE - O.PARISI", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "MILLESIME IMPERIAL CREED", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "MONOI VAGUES D'ETE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "NAXOS XJ1861 - XERJOFF", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "NEW LOOK - DIOR 2024", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "NOUVEAU MONDE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "OMBRE LEATHER", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "OMBRE NOMADE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "OUD MARACUJA", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "PACIFIC CHILL - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "RENAISSANCE XJ1861 XERJOF", preco200ml: 250, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ROYAL OUD CREED", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "STRONGER WITH YOU AMBER", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "TOBACCO VANILLE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 }
    ],
    
    feminino: [
        { nome: "212 NYC", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "212 SEXY", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP", preco200ml: 220, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP BLACK ELIXIR", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP ROSE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP ROSE LOVE NY", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUA DI GIOIA", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUAMARINE N POWDER EBK", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "AFTERNOON SWIM - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ALEXANDRIA II - XERJOF", preco200ml: 270, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "ALIEN", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGE OU DEMON-EDP 2006", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGEL", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGEL ELIXIR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGELS' SHARE BY KILIAN", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGELS' SHARE PARADIS", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ANI NISHANE", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ASAD LATTAFA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "BABYCAT - YSL", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "BACCARAT ROUGE 540", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "BAL D'AFRIQUE BYREDO", preco200ml: 240, preco100ml: 160, preco30ml: 110, preco50ml: 120 },
        { nome: "BIZANCE ROCHAS DE PARIS", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "BONBON", preco200ml: 220, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "BOND Nº 9", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BY THE FIREPLACE REPLICA", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CACTUS GARDEN - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CARMINA CREED", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CARNAL FLOWER", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "CH - CAROLINA HERRERA", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "CHANCE EAU TENDRE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "CHANEL 5", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "CHLOE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "CHOCOLATE GREEDY", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "CK BE", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "CK ONE", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "CLASSIQUE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "COCO MADEMOISELLE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "COROMANDEL EDP - CHANEL", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "DELINA", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "DELINA EXCLUSIVE", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "DEVOTION D&G", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "DKNY BY DELICIOUS", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "DOLCE GABBANA RED", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "EDEN - CACHAREL", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "ERBA PURA XERJOFF", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ETERNITY - CK", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "EUPHORIA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "FAME - PACO RAB", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "FANTASY - B. SPEARS", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "FLORA GORGEOUS GARDENIA", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "FLORA GORGEOUS MAGNOLIA", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "GABRIELA SABATINI", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "GOD OF FIRE", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "GODDESS BUR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "GOOD GIRL", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "GOOD GIRL BLUSH", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "GOOD GIRL BLUSH ELIXIR", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "HACIVAT NISHANE", preco200ml: 300, preco100ml: 230, preco30ml: 110, preco50ml: 120 },
        { nome: "HER CODE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "HYPNOSE - LANCOME", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "HYPNOTIC POISON - DIOR", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "IDOLE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "INITIO OUD F GREATNESS", preco200ml: 250, preco100ml: 170, preco30ml: 110, preco50ml: 120 },
        { nome: "ISSEY MIYAKE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "J MALONE ENG PEAR E FRESIA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "JADORE - DIOR", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "JAZZ CLUB - REPLICA", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "KENZO AMOUR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "KENZO FLOWER", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "L'INTERDIT - GIVENCHY", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "L'INTERDIT EDP ROUGE", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "LA BELLE", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "LA BELLE LE PARFUM", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "LA BOMBA CH", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "LA NUIT TRESOR", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "LA VIE EST BELLE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "LA VIE EST BELLE ELIXIR", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LA VIE EST BELLE L'EXTRAIT", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "LA VIE SOLEIL CRISTAL", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LADY MILLION", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LAMAR KAJAL", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "LAYTON .PARFUMS", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "LIBRE - YSL", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "LIGHT BLUE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LILI", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LOULOU - CACHAREL", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "LOVE IN WHITE 2005 - CREED", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "LUCKY CHARM CH", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "LV LOVERS - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "MEGAMARE - O.PARISI", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "MILLESIME IMPERIAL CREED", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "MISS DIOR", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MONCLER POUR FEMME", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "MONOI VAGUES D'ETE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MONTBLANC SIGNATURE PREMIUM", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "MY WAY", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "NARCISO FOR HER", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "NAXOS XJ1861 - XERJOFF", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "NEW LOOK - DIOR 2024", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "NOUVEAU MONDE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "OLYMPEA", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "OMBRE LEATHER", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "OMBRE NOMADE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "OMNIA AMETHYSTE BULGARI", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "OUD MARACUJA", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "PACIFIC CHILL - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "PRADA PARADOXE INTENSE", preco200ml: 260, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "PRADA PARADOXE MILANO", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "PURE MUSC FOR HER - NARCISO", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "PURE XS FOR HER", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "QUEEN OF SILK CREED", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "RENAISSANCE XJ1861 XERJOF", preco200ml: 250, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ROLLING IN LOVE", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ROUGE ROYAL", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ROYAL AMBER ORIENT", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ROYAL OUD CREED", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "SABAH AL WARD LATTAFA", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SCANDAL", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SCANDAL LE PARFUM", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "SI - ARMANI", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO BEIJOS DE SOL", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO CARIOCA CRUSH", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO CHEIROSA 59", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO CHEIROSA 62", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO CHEIROSA 68", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO RIO RADIANCE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "SOL DE JANEIRO SUMMER E AMOR", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "STRONGER WITH YOU AMBER", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "THE ONE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "TOBACCO VANILLE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "VALAYA PARFUMS", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "VANILLE FATALE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "VERSACE DYLAN TURQUOISE", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "VIBRATO SOSPIRO", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "WHITE TEA ELIZABET ARD EDT", preco200ml: 190, preco100ml: 130, preco30ml: 100, preco50ml: 110 },
        { nome: "YARA ELIXIR LATTAFA", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "YARA LATTAFA", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "YES I AM", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 }
    ],
    
    masculino: [
        { nome: "212 HEROES", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "212 MEN", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "212 SEXY MEN", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP BLACK", preco200ml: 250, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP BLACK (ELIXIR)", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "212 VIP MEN PREMIUM", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "A* MEN (ANGEL MEN)", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUA DI GIO ABSOLU", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUA DI GIO ELIXIR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUA DI GIO PARFUMS", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUA DI GIO PREMIUM", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUA DI GIO PROFONDO", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ACQUAMARINE N POWDER EBK", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "AFRICAN LEATHER", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "AFTERNOON SWIM - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ALEXANDRIA II - XERJOF", preco200ml: 270, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "ALLURE EDITION BLANCHE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ALLURE HOMBRE SPORT EXTREME", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ALLURE HOMME SPORT", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ALTHAIR PARFUMS", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "AMBASSADOR MEN", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ANGELS' SHARE BY KILIAN", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ANGELS' SHARE PARADIS", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ANI NISHANE", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ANIMALE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "APEX ROJA PARFUMS", preco200ml: 260, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ARABIANS TONKA MONTALE", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ARMANI CODE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ARMANI CODE ABSOLU GOLD", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ARMANI CODE PARFUM", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ARMANI CODE PROFUMO", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ARTISAN J. VARVATOS", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ASAD ELIXIR LATTAFA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ASAD LATTAFA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "AZZARO POUR HOMME", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "AZZARO THE MOST WANTED", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "AZZARO WANTED PREMIUM", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "BABYCAT - YSL", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "BACCARAT ROUGE 540", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "BAD BOY EXTREME CH", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BAD BOY PREMIUM", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BAL D'AFRIQUE BYREDO", preco200ml: 240, preco100ml: 160, preco30ml: 110, preco50ml: 120 },
        { nome: "BAROLO", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BLACK XS", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "BLEU CHANEL", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BOND Nº 9", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BOSS BOTTLED", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "BOSS BOTTLED PARFUM", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BOSS IN MOTION", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BULGARI AQUA P. HOMME", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "BULGARI BLACK", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BULGARI GARANAT", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "BULGARI MAN IN BLACK", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BULGARI MAN W. ESSENCE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "BULGARI POUR HOMME", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "BY THE FIREPLACE REPLICA", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CACTUS GARDEN - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "CARNAL FLOWER", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "CH MEN PRIVE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "CHOCOLATE GREEDY", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "CK BE", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "CK ONE", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "COOL ELIXIR", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "COOL WATER", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "COROMANDEL EDP - CHANEL", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "CREED AVENTUS", preco200ml: 280, preco100ml: 210, preco30ml: 120, preco50ml: 130 },
        { nome: "CREED IRISH", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "DIOR HOMME INTENSE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "DIOR HOMME PARFUM 2014", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "EGOIST PLATINUM", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "ERBA PURA XERJOFF", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "EROS VERSACE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ETERNITY CK", preco200ml: 200, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "FAHRENHEIT", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "FERRARI BLACK", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "FIERCE ABERCROMBIE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "FLEUR DU MALE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "FOREVER WANTED ELIXIR AZZARO", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "GENTLEMAN", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "GENTLEMAN PARFUM RES PRIVE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "GENTLEMAN SOCIETY", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "GOD OF FIRE", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "HACIVAT NISHANE", preco200ml: 300, preco100ml: 230, preco30ml: 110, preco50ml: 120 },
        { nome: "HALTANE PARFUMS", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "HEROD", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "IMAGINATION LV", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "INITIO OUD F GREATNESS", preco200ml: 250, preco100ml: 170, preco30ml: 110, preco50ml: 120 },
        { nome: "INVICTUS", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "INVICTUS PARFUM", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "INVICTUS VICTORY ELIXIR", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ISSEY MIYAKE POUR HOMME", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "J MALONE VETIVER E VAN", preco200ml: 220, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "JAZZ - YSL", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "JAZZ CLUB - REPLICA", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "JOOP HOMME", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "JOOP NIGHTFLIGHT", preco200ml: 210, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "JUBILATION", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "KENZO H. MARINE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "KENZO P. HOMME", preco200ml: 200, preco100ml: 140, preco30ml: 100, preco50ml: 110 },
        { nome: "L'IMMENSITE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "LA NUIT DE L'HOMME", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LAMAR KAJAL", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "LAYTON .PARFUMS", preco200ml: 260, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "LAYTON EXCLUSIF", preco200ml: 270, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "LE BEAU", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "LE BEAU LE PARFUM", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "LE BEAU PARADISE GARDEN", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "LE MALE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "LE MALE ELIXIR", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "LE MALE LE PARFUM", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "LIGHT BLUE POUR HOMME", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "LV LOVERS - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "MALBEC", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MEGAMARE - O.PARISI", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "MERCEDES BENZ CLUB BLACK", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "MILLESIME IMPERIAL CREED", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "MONCLER POUR HOMME", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "MONOI VAGUES D'ETE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MONTBLANC EMBLEM", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MONTBLANC EXPLORER", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "MONTBLANC INDIVIDUEL", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MONTBLANC LEGEND", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "MYSLF - YSL", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "MYSLF LE PARFUM", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "N1 CLIVE CHRISTIAN", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "NARCISO FOR HIM BLEU NOIR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "NARCISO ROD FOR HIM", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "NAXOS XJ1861 - XERJOFF", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "NEW LOOK - DIOR 2024", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "NIO XERJOF", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "NOUVEAU MONDE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "OMBRE LEATHER", preco200ml: 250, preco100ml: 180, preco30ml: 110, preco50ml: 120 },
        { nome: "OMBRE NOMADE - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "ONE MILLION", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ONE MILLION ELIXIR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "ONE MILLION GOLDEN OUD", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ONE MILLION PARFUM", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "ONE MILLION PRIVE", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ONE MILLION ROYAL", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "OUD MARACUJA", preco200ml: 280, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "PACIFIC CHILL - LV", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "PEGASUS EXCLUSIF", preco200ml: 250, preco100ml: 170, preco30ml: 110, preco50ml: 120 },
        { nome: "PEGASUS PARFUMS", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "PHANTOM", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "PHANTOM PARFUM", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "PI GIVENCHY", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "POLO BLACK", preco200ml: 210, preco100ml: 150, preco30ml: 100, preco50ml: 110 },
        { nome: "POLO BLUE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "POLO BLUE GOLD BLEND", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "POLO VERDE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "PRADA AMBER P.HOMME INTENSE", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "PRADA L'HOMME", preco200ml: 250, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "PRADA L'HOMME INTENSE", preco200ml: 240, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "PURE HAVANE A*MEN", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "PURE MALT A*MEN", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "PURE XS", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "REFLECTION MAN", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "RENAISSANCE XJ1861 XERJOF", preco200ml: 250, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "ROYAL OUD CREED", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "SAUVAGE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SAUVAGE ELIXIR", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "SCANDAL P HOMME", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SCANDAL P. HOMME LE PARFUM", preco200ml: 250, preco100ml: 190, preco30ml: 100, preco50ml: 110 },
        { nome: "SILVER SCENT", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SILVER SCENT INTENSE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "SPICEBOMB", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "SPICEBOMB EXTREME", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "STALLION LEATHER CH", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "STRONGER W YOU ABSOL", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "STRONGER WITH YOU AMBER", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "TERRE D'HERMES", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "TERRE D'HERMES EAU GIVRE", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "THE ONE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "TOBACCO VANILLE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "TOY BOY MOSCHINO", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "TYGAR BVLGARI", preco200ml: 260, preco100ml: 200, preco30ml: 100, preco50ml: 110 },
        { nome: "ULTRAMALLE", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "VALENTINO UOMO BORN IN ROMA", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "VALENTINO UOMO INTENSE", preco200ml: 220, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "VERSACE MAN EAU FRAICHE", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "VERSACE POUR HOMME PREMIUM", preco200ml: 240, preco100ml: 180, preco30ml: 100, preco50ml: 110 },
        { nome: "VIBRATO SOSPIRO", preco200ml: 270, preco100ml: 200, preco30ml: 110, preco50ml: 120 },
        { nome: "X FOR MEN CLIVE CHRISTIAN", preco200ml: 230, preco100ml: 160, preco30ml: 100, preco50ml: 110 },
        { nome: "XERYUS ROUGE", preco200ml: 270, preco100ml: 190, preco30ml: 110, preco50ml: 120 },
        { nome: "Y - YSL", preco200ml: 230, preco100ml: 170, preco30ml: 100, preco50ml: 110 },
        { nome: "Y LE PARFUM", preco200ml: 220, preco100ml: 150, preco30ml: 100, preco50ml: 110 }
    ],
    
    body: [
        { nome: "BARE VANILLA", preco: 100 },
        { nome: "COCONUT", preco: 100 },
        { nome: "LOVE SPELL", preco: 100 },
        { nome: "MANGO TEMPTATION", preco: 100 },
        { nome: "VANILLA LACE", preco: 100 },
        { nome: "WHITE CITRUS B B WORKS", preco: 100 }
    ]
};

// Estado da aplicação
let cart = [];
let deliveryInfo = null;
let currentTab = 'compartilhavel';
let cardInstances = new Map();
let searchTimeout;
let allPerfumes = [];
let cartEventListeners = [];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando app...');
    initApp();
});

function initApp() {
    console.log('Inicializando aplicação...');
    prepareSearchData();
    renderAllPerfumes();
    setupEventListeners();
    updateCartCount();
    updateQuickSummary();
    loadCart();
    loadDeliveryInfo();
    console.log('Aplicação inicializada com sucesso!');
}

function prepareSearchData() {
    allPerfumes = [];
    
    // Adicionar todos os perfumes com referências consistentes
    const addPerfumes = (perfumeArray, genero) => {
        perfumeArray.forEach((perfume, index) => {
            allPerfumes.push({
                id: `${genero}-${index}`,
                nome: perfume.nome,
                originalName: perfume.nome,
                genero: genero,
                originalIndex: index,
                minPrice: Math.min(
                    perfume.preco200ml || Infinity,
                    perfume.preco100ml || Infinity,
                    perfume.preco30ml || Infinity,
                    perfume.preco50ml || Infinity,
                    perfume.preco || Infinity
                ),
                maxPrice: Math.max(
                    perfume.preco200ml || 0,
                    perfume.preco100ml || 0,
                    perfume.preco30ml || 0,
                    perfume.preco50ml || 0,
                    perfume.preco || 0
                )
            });
        });
    };
    
    addPerfumes(perfumesData.compartilhavel, 'compartilhavel');
    addPerfumes(perfumesData.feminino, 'feminino');
    addPerfumes(perfumesData.masculino, 'masculino');
    addPerfumes(perfumesData.body, 'body');
    
    console.log(`Preparados ${allPerfumes.length} perfumes para busca`);
}

function renderAllPerfumes() {
    console.log('Renderizando todos os perfumes...');
    
    renderPerfumeGrid('compartilhavel', perfumesData.compartilhavel);
    renderPerfumeGrid('feminino', perfumesData.feminino);
    renderPerfumeGrid('masculino', perfumesData.masculino);
    renderBodySplashGrid('body', perfumesData.body);
    
    applyFilters();
    
    console.log('Perfumes renderizados com sucesso!');
}

function renderPerfumeGrid(genero, perfumes) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) {
        console.error(`Grid não encontrado: ${genero}-grid`);
        return;
    }
    
    console.log(`Renderizando ${perfumes.length} perfumes ${genero}`);
    grid.innerHTML = '';
    
    perfumes.forEach((perfume, index) => {
        const card = createPerfumeCard(perfume, genero, index);
        grid.appendChild(card);
        
        const cardId = `${genero}-${index}`;
        cardInstances.set(cardId, {
            card: card,
            perfume: perfume,
            genero: genero,
            originalName: perfume.nome,
            index: index
        });
    });
}

function createPerfumeCard(perfume, genero, index) {
    const card = document.createElement('div');
    card.className = `perfume-card ${genero}`;
    card.dataset.id = `${genero}-${index}`;
    card.dataset.name = perfume.nome.toLowerCase();
    card.dataset.originalName = perfume.nome;
    
    const prices = [];
    if (perfume.preco200ml !== undefined) prices.push(perfume.preco200ml);
    if (perfume.preco100ml !== undefined) prices.push(perfume.preco100ml);
    if (perfume.preco30ml !== undefined) prices.push(perfume.preco30ml);
    if (perfume.preco50ml !== undefined) prices.push(perfume.preco50ml);
    
    if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        card.dataset.minPrice = minPrice;
        card.dataset.maxPrice = maxPrice;
    } else {
        card.dataset.minPrice = 0;
        card.dataset.maxPrice = 0;
    }
    
    const tem200ml = perfume.preco200ml !== undefined;
    const tem100ml = perfume.preco100ml !== undefined;
    const tem30ml = perfume.preco30ml !== undefined;
    const tem50ml = perfume.preco50ml !== undefined;
    
    const originalName = perfume.nome;
    
    let sizeOptionsHTML = '<div class="size-options">';
    
    if (tem200ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="200ml" data-price="${perfume.preco200ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="200ml">
                    200ml <span class="concentration-badge">30% Parfum</span>
                </label>
                <span class="price">R$ ${perfume.preco200ml},00</span>
            </div>
        `;
    }
    
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
        <h3>Inspirado em: ${originalName}</h3>
        ${sizeOptionsHTML}
        <button class="add-btn" disabled>
            <i class="fas fa-cart-plus"></i> Adicionar
        </button>
    `;
    
    // Configurar eventos para este card
    const sizeOptions = card.querySelectorAll('.size-option');
    const addBtn = card.querySelector('.add-btn');
    
    // Eventos para seleção de tamanho
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remover seleção de todas as opções
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Selecionar esta opção
            this.classList.add('selected');
            
            // Marcar o radio button correspondente
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            // Habilitar o botão de adicionar
            addBtn.disabled = false;
            addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar (R$ ${this.dataset.price},00)`;
        });
    });
    
    // Evento para adicionar ao carrinho
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
                
                // Resetar seleção
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                card.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
                addBtn.disabled = true;
                addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar`;
            }, 1500);
        }
    });
    
    return card;
}

function renderBodySplashGrid(genero, items) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) {
        console.error(`Grid não encontrado: ${genero}-grid`);
        return;
    }
    
    console.log(`Renderizando ${items.length} body splashes`);
    grid.innerHTML = '';
    
    items.forEach((item, index) => {
        const originalName = item.nome;
        
        const card = document.createElement('div');
        card.className = `perfume-card ${genero}`;
        card.dataset.id = `${genero}-${index}`;
        card.dataset.name = item.nome.toLowerCase();
        card.dataset.originalName = item.nome;
        card.dataset.minPrice = item.preco;
        card.dataset.maxPrice = item.preco;
        
        card.innerHTML = `
            <h3>Inspirado em: ${originalName}</h3>
            <div class="size-options">
                <div class="size-option selected" data-size="200ml" data-price="${item.preco}">
                    <label>
                        <input type="radio" name="${genero}-${index}" value="200ml" checked>
                        200ml <span class="concentration-badge">20% Body Splash</span>
                    </label>
                    <span class="price">R$ ${item.preco},00</span>
                </div>
            </div>
            <button class="add-btn">
                <i class="fas fa-cart-plus"></i> Adicionar (R$ ${item.preco},00)
            </button>
        `;
        
        grid.appendChild(card);
        
        const cardId = `${genero}-${index}`;
        cardInstances.set(cardId, {
            card: card,
            perfume: item,
            genero: genero,
            originalName: originalName,
            index: index
        });
        
        // Configurar evento para body splash (já vem com tamanho selecionado)
        const addBtn = card.querySelector('.add-btn');
        addBtn.addEventListener('click', function() {
            addToCart(item.nome, 'body', '200ml', item.preco, originalName);
            openCartSidebar();
            
            // Feedback visual
            const originalText = addBtn.innerHTML;
            addBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
            addBtn.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                addBtn.innerHTML = originalText;
                addBtn.style.backgroundColor = '';
            }, 1500);
        });
    });
}

function setupEventListeners() {
    console.log('Configurando event listeners...');
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Busca global
    const globalSearchForm = document.getElementById('global-search-form');
    const globalSearchInput = document.getElementById('global-search');
    
    globalSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        applyFilters();
        showSearchResults(globalSearchInput.value);
        highlightSearchTerm(globalSearchInput.value);
    });
    
    globalSearchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            applyFilters();
            showSearchResults(this.value);
            highlightSearchTerm(this.value);
        }, 300);
    });
    
    // Fechar dropdown quando clicar fora
    document.addEventListener('click', function(e) {
        const searchBox = document.querySelector('.search-box');
        const dropdown = document.getElementById('search-results-dropdown');
        
        if (dropdown && searchBox && !searchBox.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // Botão de busca global
    document.getElementById('global-search-btn').addEventListener('click', function() {
        applyFilters();
        showSearchResults(globalSearchInput.value);
        highlightSearchTerm(globalSearchInput.value);
    });
    
    // Buscas específicas
    ['compartilhavel', 'feminino', 'masculino', 'body'].forEach(genero => {
        const searchInput = document.getElementById(`search-${genero}`);
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    applyFilters();
                    highlightSearchTerm(globalSearchInput.value);
                }, 300);
            });
        }
    });
    
    // Filtros
    document.getElementById('sort-by').addEventListener('change', function() {
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
    document.getElementById('delivery-info-top').addEventListener('click', openDeliveryModal);
    document.getElementById('delivery-action-btn').addEventListener('click', openDeliveryModal);
    document.getElementById('delivery-info-footer').addEventListener('click', openDeliveryModal);
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
    
    console.log('Event listeners configurados!');
}

function showSearchResults(searchTerm) {
    const dropdown = document.getElementById('search-results-dropdown');
    const searchInput = document.getElementById('global-search');
    
    if (!searchTerm || searchTerm.trim() === '') {
        dropdown.classList.remove('show');
        return;
    }
    
    const term = searchTerm.toLowerCase().trim();
    const results = allPerfumes.filter(perfume => 
        perfume.originalName.toLowerCase().includes(term) || 
        perfume.nome.toLowerCase().includes(term)
    ).slice(0, 10);
    
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum perfume encontrado para "${searchTerm}"</p>
            </div>
        `;
    } else {
        let html = '';
        results.forEach((perfume, resultIndex) => {
            const categoryName = getGeneroName(perfume.genero);
            const categoryClass = perfume.genero;
            const categoryIcon = getCategoryIcon(perfume.genero);
            
            html += `
                <div class="search-result-item" data-id="${perfume.id}" data-original-name="${perfume.originalName}">
                    <div class="search-result-info">
                        <div class="search-result-name">${perfume.originalName}</div>
                        <div class="search-result-category">
                            <span class="category-badge ${categoryClass}">
                                <i class="${categoryIcon}"></i>
                                ${categoryName}
                            </span>
                        </div>
                    </div>
                    <div class="search-result-price">
                        R$ ${perfume.minPrice},00
                    </div>
                </div>
            `;
        });
        
        dropdown.innerHTML = html;
        
        dropdown.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const perfumeId = this.dataset.id;
                const originalName = this.dataset.originalName;
                const [genero, indexStr] = perfumeId.split('-');
                const index = parseInt(indexStr);
                
                // Limpar busca
                searchInput.value = '';
                dropdown.classList.remove('show');
                
                // Ir para a aba correta
                switchTab(genero);
                
                // Aguardar renderização
                setTimeout(() => {
                    // Buscar o card específico
                    const card = document.querySelector(`.perfume-card[data-id="${perfumeId}"]`);
                    
                    if (card) {
                        // Garantir que o card esteja visível
                        card.style.display = 'block';
                        
                        // Fazer scroll suave até o card
                        card.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                        
                        // Efeito visual de destaque
                        card.style.boxShadow = '0 0 0 3px #2575fc, 0 0 20px rgba(37, 117, 252, 0.5)';
                        card.style.transition = 'box-shadow 0.3s';
                        card.style.zIndex = '10';
                        
                        setTimeout(() => {
                            card.style.boxShadow = '';
                            card.style.zIndex = '';
                        }, 3000);
                    } else {
                        // Se o card não foi encontrado, tentar uma busca alternativa
                        const cards = document.querySelectorAll(`#${genero}-grid .perfume-card`);
                        const foundCard = Array.from(cards).find(c => 
                            c.dataset.originalName === originalName
                        );
                        
                        if (foundCard) {
                            foundCard.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center' 
                            });
                            
                            foundCard.style.boxShadow = '0 0 0 3px #2575fc, 0 0 20px rgba(37, 117, 252, 0.5)';
                            foundCard.style.transition = 'box-shadow 0.3s';
                            foundCard.style.zIndex = '10';
                            
                            setTimeout(() => {
                                foundCard.style.boxShadow = '';
                                foundCard.style.zIndex = '';
                            }, 3000);
                        }
                    }
                    
                    // Reaplicar filtros
                    applyFilters();
                }, 350);
            });
        });
    }
    
    dropdown.classList.add('show');
}

function getCategoryIcon(genero) {
    switch(genero) {
        case 'compartilhavel': return 'fas fa-users';
        case 'feminino': return 'fas fa-venus';
        case 'masculino': return 'fas fa-mars';
        case 'body': return 'fas fa-spray-can';
        default: return 'fas fa-perfume-bottle';
    }
}

function highlightSearchTerm(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
        document.querySelectorAll('.perfume-card h3').forEach(title => {
            const originalText = title.textContent;
            title.innerHTML = originalText;
        });
        return;
    }
    
    document.querySelectorAll('.perfume-card[style*="display: block"] h3').forEach(title => {
        const originalText = title.textContent;
        const regex = new RegExp(`(${term})`, 'gi');
        const highlighted = originalText.replace(regex, '<span class="highlight">$1</span>');
        title.innerHTML = highlighted;
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
    const globalSearch = document.getElementById('global-search').value.toLowerCase().trim();
    
    ['compartilhavel', 'feminino', 'masculino', 'body'].forEach(genero => {
        const grid = document.getElementById(`${genero}-grid`);
        if (!grid) return;
        
        const cards = Array.from(grid.querySelectorAll('.perfume-card'));
        const tabSearch = document.getElementById(`search-${genero}`)?.value.toLowerCase().trim() || '';
        const feedback = document.getElementById(`${genero}-feedback`);
        
        let visibleCards = [];
        let hasVisibleCards = false;
        
        cards.forEach(card => {
            const perfumeName = card.querySelector('h3').textContent.toLowerCase();
            
            let shouldShow = true;
            
            if (globalSearch) {
                shouldShow = perfumeName.includes(globalSearch);
            } else if (tabSearch) {
                shouldShow = perfumeName.includes(tabSearch);
            }
            
            card.style.display = shouldShow ? 'block' : 'none';
            
            if (shouldShow) {
                visibleCards.push(card);
                hasVisibleCards = true;
            }
        });
        
        if (feedback) {
            if (globalSearch || tabSearch) {
                if (hasVisibleCards) {
                    feedback.textContent = `Encontrados ${visibleCards.length} resultado(s)`;
                    feedback.classList.add('show');
                } else {
                    feedback.textContent = 'Nenhum resultado encontrado';
                    feedback.classList.add('show');
                }
            } else {
                feedback.classList.remove('show');
            }
        }
        
        visibleCards.sort((a, b) => {
            const nameA = a.querySelector('h3').textContent.toLowerCase();
            const nameB = b.querySelector('h3').textContent.toLowerCase();
            
            let priceA, priceB;
            
            if (sortBy === 'price-desc') {
                priceA = parseFloat(a.dataset.maxPrice) || 0;
                priceB = parseFloat(b.dataset.maxPrice) || 0;
                return priceB - priceA;
            } else if (sortBy === 'price-asc') {
                priceA = parseFloat(a.dataset.minPrice) || 0;
                priceB = parseFloat(b.dataset.minPrice) || 0;
                return priceA - priceB;
            } else if (sortBy === 'name-desc') {
                return nameB.localeCompare(nameA);
            } else {
                return nameA.localeCompare(nameB);
            }
        });
        
        const fragment = document.createDocumentFragment();
        
        visibleCards.forEach(card => {
            fragment.appendChild(card);
        });
        
        cards.forEach(card => {
            if (card.style.display === 'none') {
                fragment.appendChild(card);
            }
        });
        
        grid.innerHTML = '';
        grid.appendChild(fragment);
    });
    
    if (!globalSearch) {
        document.querySelectorAll('.perfume-card h3').forEach(title => {
            const originalText = title.textContent;
            title.innerHTML = originalText;
        });
    }
}

// Funções do Carrinho
function addToCart(name, genero, size, price, originalName) {
    const existingIndex = cart.findIndex(item => 
        item.name === name && item.size === size && item.genero === genero
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
    updateDiscountInfo();
    updatePromotionVisibility();
    saveCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
    updateQuickSummary();
    updateDiscountInfo();
    updatePromotionVisibility();
    saveCart();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function updateQuickSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { subtotal, discount, total } = calculateTotals();
    
    document.getElementById('quick-items-count').textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    document.getElementById('quick-total-price').textContent = `Total: R$ ${total},00`;
    document.getElementById('cart-total-price').textContent = `R$ ${total},00`;
}

function updateDiscountInfo() {
    const { subtotal, discount, total, discountDetails } = calculateTotals();
    const discountInfo = document.getElementById('discount-info');
    const subtotalElement = document.getElementById('cart-subtotal-price');
    const discountElement = document.getElementById('cart-discount-amount');
    const totalElement = document.getElementById('cart-total-price');
    
    if (subtotalElement) subtotalElement.textContent = `R$ ${subtotal},00`;
    if (discountElement) discountElement.textContent = `-R$ ${discount},00`;
    if (totalElement) totalElement.textContent = `R$ ${total},00`;
    
    if (discount > 0) {
        let html = '<div class="discount-details">';
        discountDetails.forEach(detail => {
            html += `<div class="discount-detail">${detail}</div>`;
        });
        html += '</div>';
        discountInfo.innerHTML = html;
        discountInfo.style.display = 'block';
    } else {
        discountInfo.style.display = 'none';
    }
}

function updatePromotionVisibility() {
    const promotionInfo = document.getElementById('promotion-info');
    const hasPromotion = checkForActivePromotion();
    
    if (hasPromotion) {
        promotionInfo.style.display = 'block';
    } else {
        promotionInfo.style.display = 'none';
    }
}

function checkForActivePromotion() {
    const itemsByGenero = {};
    cart.forEach(item => {
        if (!itemsByGenero[item.genero]) {
            itemsByGenero[item.genero] = [];
        }
        itemsByGenero[item.genero].push(item);
    });
    
    for (let genero in itemsByGenero) {
        const items = itemsByGenero[genero];
        const perfumes100ml = items.filter(item => item.size === '100ml');
        
        if (perfumes100ml.length >= 3) {
            let totalQuantity100ml = 0;
            perfumes100ml.forEach(item => {
                totalQuantity100ml += item.quantity;
            });
            
            if (totalQuantity100ml >= 3) {
                return true;
            }
        }
    }
    
    return false;
}

function calculateTotals() {
    let subtotal = 0;
    let discount = 0;
    let discountDetails = [];
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    const itemsByGenero = {};
    cart.forEach(item => {
        if (!itemsByGenero[item.genero]) {
            itemsByGenero[item.genero] = [];
        }
        itemsByGenero[item.genero].push(item);
    });
    
    Object.keys(itemsByGenero).forEach(genero => {
        const items = itemsByGenero[genero];
        const perfumes100ml = items.filter(item => item.size === '100ml');
        
        if (perfumes100ml.length > 0) {
            let totalQuantity100ml = 0;
            perfumes100ml.forEach(item => {
                totalQuantity100ml += item.quantity;
            });
            
            if (totalQuantity100ml >= 3) {
                let all100mlItems = [];
                perfumes100ml.forEach(item => {
                    for (let i = 0; i < item.quantity; i++) {
                        all100mlItems.push({
                            price: item.price,
                            name: item.name,
                            originalName: item.originalName
                        });
                    }
                });
                
                all100mlItems.sort((a, b) => a.price - b.price);
                
                const threeCheapest = all100mlItems.slice(0, 3);
                let totalPriceForDiscount = 0;
                threeCheapest.forEach(item => {
                    totalPriceForDiscount += item.price;
                });
                
                const generoDiscount = Math.floor(totalPriceForDiscount * 0.10);
                discount += generoDiscount;
                
                const generoName = getGeneroName(genero);
                const savings = generoDiscount.toFixed(2).replace('.', ',');
                discountDetails.push(`<strong>${generoName}:</strong> 10% de desconto em 3 perfumes de 100ml (economia de R$ ${savings})`);
            }
        }
    });
    
    const total = subtotal - discount;
    
    return {
        subtotal,
        discount,
        total,
        discountDetails
    };
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const { subtotal, discount, total } = calculateTotals();
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        
        let concentration = '';
        if (item.genero === 'body') {
            concentration = ' (20% Body Splash)';
        } else if (item.size === '200ml') {
            concentration = ' (30% Parfum)';
        } else if (item.size === '100ml' || item.size === '30ml') {
            concentration = ' (33% Extract Parfum)';
        } else if (item.size === '50ml') {
            concentration = ' (20% Colônia)';
        }
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.originalName}</h4>
                    <small>${item.size}${concentration} | ${getGeneroName(item.genero)}</small>
                    <div class="price">R$ ${item.price},00 cada</div>
                    <div class="item-total">Total: R$ ${itemTotal},00</div>
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
    
    removeCartEventListeners();
    
    const handleCartClick = function(e) {
        const minusBtn = e.target.closest('.quantity-btn.minus');
        const plusBtn = e.target.closest('.quantity-btn.plus');
        const removeBtn = e.target.closest('.remove-item-btn');
        
        if (minusBtn) {
            const index = parseInt(minusBtn.dataset.index);
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                updateCartCount();
                updateCartDisplay();
                updateQuickSummary();
                updateDiscountInfo();
                updatePromotionVisibility();
                saveCart();
            }
        } else if (plusBtn) {
            const index = parseInt(plusBtn.dataset.index);
            cart[index].quantity += 1;
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            updateDiscountInfo();
            updatePromotionVisibility();
            saveCart();
        } else if (removeBtn) {
            const index = parseInt(removeBtn.dataset.index);
            removeFromCart(index);
        }
    };
    
    const handleCartChange = function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const index = parseInt(e.target.dataset.index);
            let newQuantity = parseInt(e.target.value);
            
            if (isNaN(newQuantity) || newQuantity < 1) {
                newQuantity = 1;
                e.target.value = 1;
            }
            
            cart[index].quantity = newQuantity;
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            updateDiscountInfo();
            updatePromotionVisibility();
            saveCart();
        }
    };
    
    cartItems.addEventListener('click', handleCartClick);
    cartItems.addEventListener('change', handleCartChange);
    
    cartEventListeners.push({
        element: cartItems,
        type: 'click',
        handler: handleCartClick
    });
    
    cartEventListeners.push({
        element: cartItems,
        type: 'change',
        handler: handleCartChange
    });
    
    updatePromotionVisibility();
}

function removeCartEventListeners() {
    cartEventListeners.forEach(listener => {
        listener.element.removeEventListener(listener.type, listener.handler);
    });
    cartEventListeners = [];
}

function getGeneroName(genero) {
    switch(genero) {
        case 'compartilhavel': return 'Compartilhável';
        case 'feminino': return 'Feminino';
        case 'masculino': return 'Masculino';
        case 'body': return 'Body Splash';
        default: return genero;
    }
}

function openCartSidebar() {
    document.getElementById('cart-overlay').style.display = 'block';
    document.getElementById('cart-sidebar').classList.add('open');
    updateDiscountInfo();
    updatePromotionVisibility();
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
        updateDiscountInfo();
        updatePromotionVisibility();
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
    
    if (deliveryInfo) {
        if (deliveryInfo.type === 'delivery') {
            document.querySelector('.delivery-option[data-type="delivery"]').click();
            document.getElementById('client-name').value = deliveryInfo.name || '';
            document.getElementById('client-address').value = deliveryInfo.address || '';
            document.getElementById('client-complement').value = deliveryInfo.complement || '';
            document.getElementById('client-phone').value = deliveryInfo.phone || '';
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
        const address = document.getElementById('client-address').value.trim();
        const complement = document.getElementById('client-complement').value.trim();
        const phone = document.getElementById('client-phone').value.trim();
        
        if (!name || !address) {
            alert('Por favor, preencha seu nome e endereço para entrega.');
            return;
        }
        
        const phoneDigits = phone.replace(/\D/g, '');
        if (!phoneDigits || phoneDigits.length !== 11) {
            alert('Por favor, preencha um telefone válido com DDD (11 dígitos).');
            document.getElementById('client-phone').focus();
            return;
        }
        
        info = { ...info, name, address, complement, phone: phoneDigits };
    } else {
        const name = document.getElementById('pickup-name').value.trim();
        const phone = document.getElementById('pickup-phone').value.trim();
        
        if (!name) {
            alert('Por favor, preencha seu nome para retirada.');
            return;
        }
        
        const phoneDigits = phone.replace(/\D/g, '');
        if (!phoneDigits || phoneDigits.length !== 11) {
            alert('Por favor, preencha um telefone válido com DDD (11 dígitos).');
            document.getElementById('pickup-phone').focus();
            return;
        }
        
        info = { ...info, name, phone: phoneDigits };
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
    
    if (deliveryInfo.type === 'pickup' && (!deliveryInfo.name || !deliveryInfo.phone)) {
        openDeliveryModal();
        document.querySelector('.delivery-option[data-type="pickup"]').click();
        alert('Para retirada no local, é necessário informar seu nome e telefone.');
        return;
    }
    
    if (deliveryInfo.type === 'delivery' && (!deliveryInfo.name || !deliveryInfo.address || !deliveryInfo.phone)) {
        openDeliveryModal();
        document.querySelector('.delivery-option[data-type="delivery"]').click();
        alert('Para entrega, é necessário informar seu nome, endereço e telefone.');
        return;
    }
    
    if (deliveryInfo.phone.length !== 11) {
        openDeliveryModal();
        alert('O telefone informado é inválido. Deve ter exatamente 11 dígitos (com DDD).');
        if (deliveryInfo.type === 'delivery') {
            document.querySelector('.delivery-option[data-type="delivery"]').click();
            document.getElementById('client-phone').value = deliveryInfo.phone;
            document.getElementById('client-phone').focus();
        } else {
            document.querySelector('.delivery-option[data-type="pickup"]').click();
            document.getElementById('pickup-phone').value = deliveryInfo.phone;
            document.getElementById('pickup-phone').focus();
        }
        return;
    }
    
    const { subtotal, discount, total } = calculateTotals();
    
    let message = `*PEDIDO DE PERFUMES - CRAFTCARE STORE*\n\n`;
    message += `*Perfumes inspirados nas melhores fragrâncias do mercado*\n\n`;
    
    const grupos = {
        compartilhavel: cart.filter(item => item.genero === 'compartilhavel'),
        feminino: cart.filter(item => item.genero === 'feminino'),
        masculino: cart.filter(item => item.genero === 'masculino'),
        body: cart.filter(item => item.genero === 'body')
    };
    
    ['compartilhavel', 'feminino', 'masculino', 'body'].forEach(genero => {
        if (grupos[genero].length > 0) {
            message += `*${getGeneroName(genero).toUpperCase()}:*\n`;
            grupos[genero].forEach(item => {
                let concentration = '';
                if (item.genero === 'body') {
                    concentration = ' (20% Body Splash)';
                } else if (item.size === '200ml') {
                    concentration = ' (30% Parfum)';
                } else if (item.size === '100ml' || item.size === '30ml') {
                    concentration = ' (33% Extract Parfum)';
                } else if (item.size === '50ml') {
                    concentration = ' (20% Colônia)';
                }
                
                message += `- ${item.originalName}${concentration}\n`;
                message += `  Tamanho: ${item.size} | Quantidade: ${item.quantity} | R$ ${item.price * item.quantity},00\n`;
            });
            message += '\n';
        }
    });
    
    message += `*RESUMO FINANCEIRO:*\n`;
    message += `Subtotal: R$ ${subtotal},00\n`;
    if (discount > 0) {
        message += `Desconto: -R$ ${discount},00\n`;
        message += `*Total com desconto: R$ ${total},00*\n\n`;
    } else {
        message += `*TOTAL: R$ ${total},00*\n\n`;
    }
    
    message += `*INFORMAÇÕES TÉCNICAS:*\n`;
    message += `• 200ml: 30% Parfum\n`;
    message += `• 100ml e 30ml: 33% Extract Parfum\n`;
    message += `• 50ml: 20% Colônia\n`;
    message += `• Body Splash: 20%\n\n`;
    
    message += `*PROMOÇÃO APLICADA:*\n`;
    if (discount > 0) {
        message += `✓ 10% de desconto na compra de 3 perfumes de 100ml do mesmo tipo\n`;
        message += `  (Desconto aplicado nos 3 perfumes de 100ml mais baratos do mesmo tipo)\n\n`;
    } else {
        message += `Compre 3 perfumes de 100ml do mesmo tipo e ganhe 10% de desconto!\n\n`;
    }
    
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
    
    const phoneNumber = "5519998978060";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    const newWindow = window.open(whatsappURL, '_blank');
    
    if (newWindow) {
        setTimeout(() => {
            cart = [];
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            updateDiscountInfo();
            updatePromotionVisibility();
            saveCart();
            
            closeCartSidebar();
            
            showNotification('Pedido enviado! O carrinho foi limpo.');
        }, 500);
    } else {
        alert('Não foi possível abrir o WhatsApp. Verifique se o WhatsApp está instalado e tente novamente.');
    }
}

function goToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switchTab('compartilhavel');
}

function showNotification(message) {
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

// Adicionar estilo CSS para a notificação
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyle);