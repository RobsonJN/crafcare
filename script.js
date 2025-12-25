const perfumesData = {
    compartilhavel: [
        { nome: "212 VIP BLACK ELIXIR", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUAMARINE N POWDER EBK", preco200ml: 263, preco100ml: 191, preco30ml: 105, preco50ml: 117 },
        { nome: "AFTERNOON SWIM - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ALEXANDRIA II - XERJOF", preco200ml: 265, preco100ml: 193, preco30ml: 105, preco50ml: 117 },
        { nome: "ANGELS' SHARE BY KILIAN", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGELS' SHARE PARADIS", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ANI NISHANE", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ASAD LATTAFA", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "BABYCAT - YSL", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "BACCARAT ROUGE 540", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "BAL D'AFRIQUE BYREDO", preco200ml: 236, preco100ml: 164, preco30ml: 105, preco50ml: 117 },
        { nome: "BOND Nº 9", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "BY THE FIREPLACE REPLICA", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "CACTUS GARDEN - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "CARNAL FLOWER", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "CHOCOLATE GREEDY", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "CK BE", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "CK ONE", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "COROMANDEL EDP - CHANEL", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "ERBA PURA XERJOFF", preco200ml: 271, preco100ml: 199, preco30ml: 105, preco50ml: 117 },
        { nome: "GOD OF FIRE", preco200ml: 267, preco100ml: 195, preco30ml: 105, preco50ml: 117 },
        { nome: "HACIVAT NISHANE", preco200ml: 303, preco100ml: 231, preco30ml: 105, preco50ml: 117 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "INITIO OUD F GREATNESS", preco200ml: 245, preco100ml: 173, preco30ml: 105, preco50ml: 117 },
        { nome: "JAZZ CLUB - REPLICA", preco200ml: 261, preco100ml: 189, preco30ml: 105, preco50ml: 117 },
        { nome: "LAMAR KAJAL", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "LAYTON .PARFUMS", preco200ml: 259, preco100ml: 187, preco30ml: 105, preco50ml: 117 },
        { nome: "LV LOVERS - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "MEGAMARE - O.PARISI", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "MILLESIME IMPERIAL CREED", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MONOI VAGUES D'ETE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "NAXOS XJ1861 - XERJOFF", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "NEW LOOK - DIOR 2024", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "NOUVEAU MONDE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "OMBRE LEATHER", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "OMBRE NOMADE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "OUD MARACUJA", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "PACIFIC CHILL - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "RENAISSANCE XJ1861 XERJOF", preco200ml: 245, preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "ROYAL OUD CREED", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "STRONGER WITH YOU AMBER", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "TOBACCO VANILLE", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 }
    ],
    
    feminino: [
        { nome: "212 NYC", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "212 SEXY", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP", preco200ml: 215, preco100ml: 153, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP BLACK ELIXIR", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP ROSE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP ROSE LOVE NY", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIOIA", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUAMARINE N POWDER EBK", preco200ml: 263, preco100ml: 191, preco30ml: 105, preco50ml: 117 },
        { nome: "AFTERNOON SWIM - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ALEXANDRIA II - XERJOF", preco200ml: 265, preco100ml: 193, preco30ml: 105, preco50ml: 117 },
        { nome: "ALIEN", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGE OU DEMON-EDP 2006", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGEL", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGEL ELIXIR", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGELS' SHARE BY KILIAN", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGELS' SHARE PARADIS", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ANI NISHANE", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ASAD LATTAFA", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "BABYCAT - YSL", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "BACCARAT ROUGE 540", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "BAL D'AFRIQUE BYREDO", preco200ml: 236, preco100ml: 164, preco30ml: 105, preco50ml: 117 },
        { nome: "BIZANCE ROCHAS DE PARIS", preco200ml: 244, preco100ml: 182, preco30ml: 95, preco50ml: 107 },
        { nome: "BONBON", preco200ml: 215, preco100ml: 153, preco30ml: 95, preco50ml: 107 },
        { nome: "BOND Nº 9", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "BY THE FIREPLACE REPLICA", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "CACTUS GARDEN - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "CARMINA CREED", preco200ml: 270, preco100ml: 198, preco30ml: 105, preco50ml: 117 },
        { nome: "CARNAL FLOWER", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "CH - CAROLINA HERRERA", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "CHANCE EAU TENDRE", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "CHANEL 5", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "CHLOE", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "CHOCOLATE GREEDY", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "CK BE", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "CK ONE", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "CLASSIQUE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "COCO MADEMOISELLE", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "COROMANDEL EDP - CHANEL", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "DELINA", preco200ml: 250, preco100ml: 178, preco30ml: 105, preco50ml: 117 },
        { nome: "DELINA EXCLUSIVE", preco200ml: 257, preco100ml: 185, preco30ml: 105, preco50ml: 117 },
        { nome: "DEVOTION D&G", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "DKNY BY DELICIOUS", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "DOLCE GABBANA RED", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "EDEN - CACHAREL", preco200ml: 210, preco100ml: 148, preco30ml: 95, preco50ml: 107 },
        { nome: "ERBA PURA XERJOFF", preco200ml: 271, preco100ml: 199, preco30ml: 105, preco50ml: 117 },
        { nome: "ETERNITY - CK", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "EUPHORIA", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "FAME - PACO RAB", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "FANTASY - B. SPEARS", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "FLORA GORGEOUS GARDENIA", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "FLORA GORGEOUS MAGNOLIA", preco200ml: 247, preco100ml: 185, preco30ml: 95, preco50ml: 107 },
        { nome: "GABRIELA SABATINI", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "GOD OF FIRE", preco200ml: 267, preco100ml: 195, preco30ml: 105, preco50ml: 117 },
        { nome: "GODDESS BUR", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "GOOD GIRL", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "GOOD GIRL BLUSH", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "GOOD GIRL BLUSH ELIXIR", preco200ml: 236, preco100ml: 174, preco30ml: 95, preco50ml: 107 },
        { nome: "HACIVAT NISHANE", preco200ml: 303, preco100ml: 231, preco30ml: 105, preco50ml: 117 },
        { nome: "HER CODE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "HYPNOSE - LANCOME", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "HYPNOTIC POISON - DIOR", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "IDOLE", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "INITIO OUD F GREATNESS", preco200ml: 245, preco100ml: 173, preco30ml: 105, preco50ml: 117 },
        { nome: "ISSEY MIYAKE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "J MALONE ENG PEAR E FRESIA", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "JADORE - DIOR", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "JAZZ CLUB - REPLICA", preco200ml: 261, preco100ml: 189, preco30ml: 105, preco50ml: 117 },
        { nome: "KENZO AMOUR", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "KENZO FLOWER", preco200ml: 213, preco100ml: 151, preco30ml: 95, preco50ml: 107 },
        { nome: "L'INTERDIT - GIVENCHY", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "L'INTERDIT EDP ROUGE", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "LA BELLE", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "LA BELLE LE PARFUM", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "LA BOMBA CH", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "LA NUIT TRESOR", preco200ml: 209, preco100ml: 147, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE EST BELLE", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE EST BELLE ELIXIR", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE EST BELLE L'EXTRAIT", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "LA VIE SOLEIL CRISTAL", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "LADY MILLION", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "LAMAR KAJAL", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "LAYTON .PARFUMS", preco200ml: 259, preco100ml: 187, preco30ml: 105, preco50ml: 117 },
        { nome: "LIBRE - YSL", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "LIGHT BLUE", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "LILI", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "LOULOU - CACHAREL", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "LOVE IN WHITE 2005 - CREED", preco200ml: 259, preco100ml: 187, preco30ml: 105, preco50ml: 117 },
        { nome: "LUCKY CHARM CH", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "LV LOVERS - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "MEGAMARE - O.PARISI", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "MILLESIME IMPERIAL CREED", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MISS DIOR", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "MONCLER POUR FEMME", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "MONOI VAGUES D'ETE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC SIGNATURE PREMIUM", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MY WAY", preco200ml: 244, preco100ml: 182, preco30ml: 95, preco50ml: 107 },
        { nome: "NARCISO FOR HER", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "NAXOS XJ1861 - XERJOFF", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "NEW LOOK - DIOR 2024", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "NOUVEAU MONDE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "OLYMPEA", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "OMBRE LEATHER", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "OMBRE NOMADE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "OMNIA AMETHYSTE BULGARI", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "OUD MARACUJA", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "PACIFIC CHILL - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "PRADA PARADOXE INTENSE", preco200ml: 255, preco100ml: 193, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA PARADOXE MILANO", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE MUSC FOR HER - NARCISO", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE XS FOR HER", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "QUEEN OF SILK CREED", preco200ml: 263, preco100ml: 191, preco30ml: 105, preco50ml: 117 },
        { nome: "RENAISSANCE XJ1861 XERJOF", preco200ml: 245, preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "ROLLING IN LOVE", preco200ml: 267, preco100ml: 195, preco30ml: 105, preco50ml: 117 },
        { nome: "ROUGE ROYAL", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "ROYAL AMBER ORIENT", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ROYAL OUD CREED", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "SABAH AL WARD LATTAFA", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL LE PARFUM", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "SI - ARMANI", preco200ml: 220, preco100ml: 158, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO BEIJOS DE SOL", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO CARIOCA CRUSH", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO CHEIROSA 59", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO CHEIROSA 62", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO CHEIROSA 68", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO RIO RADIANCE", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "SOL DE JANEIRO SUMMER E AMOR", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "STRONGER WITH YOU AMBER", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "THE ONE", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "TOBACCO VANILLE", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "VALAYA PARFUMS", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "VANILLE FATALE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACE DYLAN TURQUOISE", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "VIBRATO SOSPIRO", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "WHITE TEA ELIZABET ARD EDT", preco200ml: 193, preco100ml: 131, preco30ml: 95, preco50ml: 107 },
        { nome: "YARA ELIXIR LATTAFA", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "YARA LATTAFA", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "YES I AM", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 }
    ],
    
    masculino: [
        { nome: "212 HEROES", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "212 MEN", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "212 SEXY MEN", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP BLACK", preco200ml: 245, preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP BLACK (ELIXIR)", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "212 VIP MEN PREMIUM", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "A* MEN (ANGEL MEN)", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIO ABSOLU", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIO ELIXIR", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIO PARFUMS", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIO PREMIUM", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUA DI GIO PROFONDO", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "ACQUAMARINE N POWDER EBK", preco200ml: 263, preco100ml: 191, preco30ml: 105, preco50ml: 117 },
        { nome: "AFRICAN LEATHER", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "AFTERNOON SWIM - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ALEXANDRIA II - XERJOF", preco200ml: 265, preco100ml: 193, preco30ml: 105, preco50ml: 117 },
        { nome: "ALLURE EDITION BLANCHE", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "ALLURE HOMBRE SPORT EXTREME", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "ALLURE HOMME SPORT", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "ALTHAIR PARFUMS", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "AMBASSADOR MEN", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ANGELS' SHARE BY KILIAN", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "ANGELS' SHARE PARADIS", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ANI NISHANE", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "ANIMALE", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "APEX ROJA PARFUMS", preco200ml: 255, preco100ml: 183, preco30ml: 105, preco50ml: 117 },
        { nome: "APPLE BRANDY ON THE ROCKS BY KILIAN", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ARABIANS TONKA MONTALE", preco200ml: 273, preco100ml: 201, preco30ml: 105, preco50ml: 117 },
        { nome: "ARMANI CODE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE ABSOLU GOLD", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE PARFUM", preco200ml: 247, preco100ml: 185, preco30ml: 95, preco50ml: 107 },
        { nome: "ARMANI CODE PROFUMO", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "ARTISAN J. VARVATOS", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "ASAD ELIXIR LATTAFA", preco200ml: 241, preco100ml: 179, preco30ml: 95, preco50ml: 107 },
        { nome: "ASAD LATTAFA", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "AZZARO POUR HOMME", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "AZZARO THE MOST WANTED", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "AZZARO WANTED PREMIUM", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "BABYCAT - YSL", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "BACCARAT ROUGE 540", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "BAD BOY EXTREME CH", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "BAD BOY PREMIUM", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "BAL D'AFRIQUE BYREDO", preco200ml: 236, preco100ml: 164, preco30ml: 105, preco50ml: 117 },
        { nome: "BAROLO", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "BLACK XS", preco200ml: 209, preco100ml: 147, preco30ml: 95, preco50ml: 107 },
        { nome: "BLEU CHANEL", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "BOND Nº 9", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "BOSS BOTTLED", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "BOSS BOTTLED PARFUM", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "BOSS IN MOTION", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI AQUA P. HOMME", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI BLACK", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI GARANAT", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI MAN IN BLACK", preco200ml: 221, preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI MAN W. ESSENCE", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "BULGARI POUR HOMME", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "BY THE FIREPLACE REPLICA", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "CACTUS GARDEN - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "CARNAL FLOWER", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "CH MEN PRIVE", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "CHOCOLATE GREEDY", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "CK BE", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "CK ONE", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "COOL ELIXIR", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "COOL WATER", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "COROMANDEL EDP - CHANEL", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "CREED AVENTUS", preco200ml: 279, preco100ml: 207, preco30ml: 115, preco50ml: 127 },
        { nome: "CREED IRISH", preco200ml: 259, preco100ml: 187, preco30ml: 105, preco50ml: 117 },
        { nome: "DIOR HOMME INTENSE", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "DIOR HOMME PARFUM 2014", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "EGOIST PLATINUM", preco200ml: 247, preco100ml: 185, preco30ml: 95, preco50ml: 107 },
        { nome: "ERBA PURA XERJOFF", preco200ml: 271, preco100ml: 199, preco30ml: 105, preco50ml: 117 },
        { nome: "EROS VERSACE", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ETERNITY CK", preco200ml: 203, preco100ml: 141, preco30ml: 95, preco50ml: 107 },
        { nome: "FAHRENHEIT", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "FERRARI BLACK", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "FIERCE ABERCROMBIE", preco200ml: 221, preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "FLEUR DU MALE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "FOREVER WANTED ELIXIR AZZARO", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "GENTLEMAN", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "GENTLEMAN PARFUM RES PRIVE", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "GENTLEMAN SOCIETY", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "GOD OF FIRE", preco200ml: 267, preco100ml: 195, preco30ml: 105, preco50ml: 117 },
        { nome: "HACIVAT NISHANE", preco200ml: 303, preco100ml: 231, preco30ml: 105, preco50ml: 117 },
        { nome: "HALTANE PARFUMS", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "HEROD", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "HUNDRED SILENT WAYS - NISHANE", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "IMAGINATION LV", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "INITIO OUD F GREATNESS", preco200ml: 245, preco100ml: 173, preco30ml: 105, preco50ml: 117 },
        { nome: "INVICTUS", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "INVICTUS PARFUM", preco200ml: 260, preco100ml: 198, preco30ml: 95, preco50ml: 107 },
        { nome: "INVICTUS VICTORY ELIXIR", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "ISSEY MIYAKE POUR HOMME", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "J MALONE VETIVER E VAN", preco200ml: 215, preco100ml: 153, preco30ml: 95, preco50ml: 107 },
        { nome: "JAZZ - YSL", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "JAZZ CLUB - REPLICA", preco200ml: 261, preco100ml: 189, preco30ml: 105, preco50ml: 117 },
        { nome: "JOOP HOMME", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "JOOP NIGHTFLIGHT", preco200ml: 205, preco100ml: 143, preco30ml: 95, preco50ml: 107 },
        { nome: "JUBILATION", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "KENZO H. MARINE", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "KENZO P. HOMME", preco200ml: 201, preco100ml: 139, preco30ml: 95, preco50ml: 107 },
        { nome: "L'IMMENSITE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "LA NUIT DE L'HOMME", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "LAMAR KAJAL", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "LAYTON .PARFUMS", preco200ml: 259, preco100ml: 187, preco30ml: 105, preco50ml: 117 },
        { nome: "LAYTON EXCLUSIF", preco200ml: 265, preco100ml: 193, preco30ml: 105, preco50ml: 117 },
        { nome: "LE BEAU", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "LE BEAU LE PARFUM", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "LE BEAU PARADISE GARDEN", preco200ml: 257, preco100ml: 195, preco30ml: 95, preco50ml: 107 },
        { nome: "LE MALE", preco200ml: 221, preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "LE MALE ELIXIR", preco200ml: 241, preco100ml: 179, preco30ml: 95, preco50ml: 107 },
        { nome: "LE MALE LE PARFUM", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "LIGHT BLUE POUR HOMME", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "LV LOVERS - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "MALBEC", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "MEGAMARE - O.PARISI", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "MERCEDES BENZ CLUB BLACK", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "MILLESIME IMPERIAL CREED", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MONCLER POUR HOMME", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "MONOI VAGUES D'ETE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC EMBLEM", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC EXPLORER", preco200ml: 213, preco100ml: 151, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC INDIVIDUEL", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "MONTBLANC LEGEND", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "MYSLF - YSL", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "MYSLF LE PARFUM", preco200ml: 249, preco100ml: 187, preco30ml: 95, preco50ml: 107 },
        { nome: "N1 CLIVE CHRISTIAN", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "NARCISO FOR HIM BLEU NOIR", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "NARCISO ROD FOR HIM", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "NAXOS XJ1861 - XERJOFF", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "NEW LOOK - DIOR 2024", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "NIO XERJOF", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "NOUVEAU MONDE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "OMBRE LEATHER", preco200ml: 249, preco100ml: 177, preco30ml: 105, preco50ml: 117 },
        { nome: "OMBRE NOMADE - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "ONE MILLION", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION ELIXIR", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION GOLDEN OUD", preco200ml: 243, preco100ml: 181, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION PARFUM", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION PRIVE", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "ONE MILLION ROYAL", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "OUD MARACUJA", preco200ml: 275, preco100ml: 203, preco30ml: 105, preco50ml: 117 },
        { nome: "PACIFIC CHILL - LV", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "PEGASUS EXCLUSIF", preco200ml: 245, preco100ml: 173, preco30ml: 105, preco50ml: 117 },
        { nome: "PEGASUS PARFUMS", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "PHANTOM", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "PHANTOM PARFUM", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "PI GIVENCHY", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO BLACK", preco200ml: 211, preco100ml: 149, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO BLUE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO BLUE GOLD BLEND", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "POLO VERDE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA AMBER P.HOMME INTENSE", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA L'HOMME", preco200ml: 245, preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "PRADA L'HOMME INTENSE", preco200ml: 235, preco100ml: 173, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE HAVANE A*MEN", preco200ml: 237, preco100ml: 175, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE MALT A*MEN", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "PURE XS", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "REFLECTION MAN", preco200ml: 227, preco100ml: 165, preco30ml: 95, preco50ml: 107 },
        { nome: "RENAISSANCE XJ1861 XERJOF", preco200ml: 245, preco100ml: 183, preco30ml: 95, preco50ml: 107 },
        { nome: "ROYAL OUD CREED", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "SAUVAGE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "SAUVAGE ELIXIR", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL P HOMME", preco200ml: 223, preco100ml: 161, preco30ml: 95, preco50ml: 107 },
        { nome: "SCANDAL P. HOMME LE PARFUM", preco200ml: 251, preco100ml: 189, preco30ml: 95, preco50ml: 107 },
        { nome: "SILVER SCENT", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "SILVER SCENT INTENSE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "SPICEBOMB", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "SPICEBOMB EXTREME", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "STALLION LEATHER CH", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "STRONGER W YOU ABSOL", preco200ml: 221, preco100ml: 159, preco30ml: 95, preco50ml: 107 },
        { nome: "STRONGER WITH YOU AMBER", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "TERRE D'HERMES", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "TERRE D'HERMES EAU GIVRE", preco200ml: 263, preco100ml: 201, preco30ml: 95, preco50ml: 107 },
        { nome: "THE ONE", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "TOBACCO VANILLE", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        { nome: "TOY BOY MOSCHINO", preco200ml: 217, preco100ml: 155, preco30ml: 95, preco50ml: 107 },
        { nome: "TYGAR BVLGARI", preco200ml: 259, preco100ml: 197, preco30ml: 95, preco50ml: 107 },
        { nome: "ULTRAMALLE", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "VALENTINO UOMO BORN IN ROMA", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "VALENTINO UOMO INTENSE", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACE MAN EAU FRAICHE", preco200ml: 229, preco100ml: 167, preco30ml: 95, preco50ml: 107 },
        { nome: "VERSACE POUR HOMME PREMIUM", preco200ml: 239, preco100ml: 177, preco30ml: 95, preco50ml: 107 },
        { nome: "VIBRATO SOSPIRO", preco200ml: 269, preco100ml: 197, preco30ml: 105, preco50ml: 117 },
        { nome: "X FOR MEN CLIVE CHRISTIAN", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        { nome: "XERYUS ROUGE", preco200ml: 265, preco100ml: 193, preco30ml: 105, preco50ml: 117 },
        { nome: "Y - YSL", preco200ml: 231, preco100ml: 169, preco30ml: 95, preco50ml: 107 },
        { nome: "Y LE PARFUM", preco200ml: 215, preco100ml: 153, preco30ml: 95, preco50ml: 107 }
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
    initApp();
});

function initApp() {
    prepareSearchData();
    renderAllPerfumes();
    setupEventListeners();
    updateCartCount();
    updateQuickSummary();
    loadCart();
    loadDeliveryInfo();
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
}

function renderAllPerfumes() {
    renderPerfumeGrid('compartilhavel', perfumesData.compartilhavel);
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
    
    setupCardEvents(card, genero, index);
    
    return card;
}

function setupCardEvents(card, genero, index) {
    const sizeOptions = card.querySelectorAll('.size-option');
    const addBtn = card.querySelector('.add-btn');
    
    card.addEventListener('click', function(e) {
        if (e.target.closest('.size-option')) {
            const sizeOption = e.target.closest('.size-option');
            const sizeOptions = card.querySelectorAll('.size-option');
            
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            sizeOption.classList.add('selected');
            
            const radio = sizeOption.querySelector('input[type="radio"]');
            radio.checked = true;
            
            addBtn.disabled = false;
            addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar (R$ ${sizeOption.dataset.price},00)`;
        }
        
        if (e.target.closest('.add-btn')) {
            const selectedSizeOption = card.querySelector('.size-option.selected');
            if (selectedSizeOption) {
                const cardInstance = cardInstances.get(`${genero}-${index}`);
                if (!cardInstance) return;
                
                const size = selectedSizeOption.dataset.size;
                const price = parseInt(selectedSizeOption.dataset.price);
                
                addToCart(cardInstance.perfume.nome, genero, size, price, cardInstance.originalName);
                openCartSidebar();
                
                const originalText = addBtn.innerHTML;
                addBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
                addBtn.style.backgroundColor = '#2ecc71';
                
                setTimeout(() => {
                    addBtn.innerHTML = originalText;
                    addBtn.style.backgroundColor = '';
                    
                    const sizeOptions = card.querySelectorAll('.size-option');
                    sizeOptions.forEach(opt => opt.classList.remove('selected'));
                    card.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
                    addBtn.disabled = true;
                    addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar`;
                }, 1500);
            }
        }
    });
}

function renderBodySplashGrid(genero, items) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) return;
    
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
        
        card.addEventListener('click', function(e) {
            if (e.target.closest('.add-btn')) {
                const cardInstance = cardInstances.get(cardId);
                if (!cardInstance) return;
                
                addToCart(item.nome, 'body', '200ml', item.preco, originalName);
                openCartSidebar();
            }
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
    
    if (discount > 0) {
        discountInfo.innerHTML = `
            <div class="discount-details">
                <p>Subtotal: R$ ${subtotal},00</p>
                <p style="color: #27ae60;">Desconto aplicado: -R$ ${discount},00</p>
                ${discountDetails.map(detail => 
                    `<p style="font-size: 0.8rem; color: #666;">${detail}</p>`
                ).join('')}
            </div>
        `;
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
                
                discountDetails.push(`${getGeneroName(genero)}: 10% de desconto em 3 perfumes de 100ml (economia de R$ ${generoDiscount},00)`);
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
                    <div class="price">R$ ${item.price},00</div>
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