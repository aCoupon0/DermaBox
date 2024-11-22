
infoLimpiadores = [
    //Espuma 4 en 1 de Carvenchy
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        queEs: `
    <p class="title">¿QUÉ ES?</p>
    <p class="info-description">Espuma limpiadora multipropósito. Contiene ingredientes emolientes e hidratantes, exfoliantes, antioxidantes, antiinflamatorios y protectores.</p>   
    <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
    <!-- Ingredientes para Control y Reducción de Acné -->
    <p class="subtitle">Para Reducir Acné</p>
    <p class="ingrediente"> <i class="fa-solid fa-o circle"></i>Ácido Salicílico</p>
    <p class="info-txt">Limpia profundamente los poros, eliminando grasa, impurezas y células muertas. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4554394/" target="_blank">PMC</a></p>
    <p class="ingrediente"> <i class="fa-solid fa-o circle"></i>Gluconolactona</p>
    <p class="info-txt">Exfoliante suave, elimina bacterias y acelera la cicatrización y curación. <a href="https://kajo-cosmetics.com/en/blogs/journal/the-gentle-exfoliation-of-gluconolactone-a-pha-for-sensitive-skin" target="_blank">KAJO</a></p>
    <p class="ingrediente"> <i class="fa-solid fa-o circle"></i>Niacinamida</p>
    <p class="info-txt">Reduce la inflamación de los brotes y equilibra la cantidad de sebo en los poros. <a href="https://www.struthealth.com/blog/niacinamide-acne-how-this-essential-skin-vitamin-helps-acne" target="_blank">STRUT</a></p>
`,
        HS: `
    <p class="subtitle">Para Hidratar y Sanar</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
    <p class="info-txt">Atrae y retiene la humedad en la piel. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
    <p class="info-txt">Atrae agua hasta las capas más profundas de la piel. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Centella Asiática</p>
    <p class="info-txt">Acelera la curación y cicatrización correcta de la piel. <a href="https://www.mdpi.com/2218-1989/13/2/276" target="_blank">MDPI</a></p>
`,
        A: `   
    <p class="subtitle">Para Antienvejecimiento</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Vitamina C</p>
    <p class="info-txt">Antioxidante que combate los radicales libres y mejora la luminosidad de la piel. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Láctico</p>
    <p class="info-txt">Exfoliante suave que acelera la producción de colágeno y reduce la apariencia de arrugas. <a href="https://academic.oup.com/asj/article-abstract/27/4/402/257852?redirectedFrom=fulltext&login=false" target="_blank">Oxford</a></p>
`,
        TCM: `   
    <p class="subtitle">Para Suavizar Textura y Manchas</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Glicólico</p>
    <p class="info-txt">Exfolia la piel, ayudando a reducir las manchas oscuras y a destapar comedones cerrados. <a href="https://miiskin.com/mx/acne-espinillas/medicamentos/acido-glicolico/" target="_blank">Miiskin</a></p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Regaliz</p>
    <p class="info-txt">Ayuda a disminuir la hiperpigmentación y suaviza la apariencia de manchas. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6826613/" target="_blank">PMC</a></p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Flor de Camomila</p>
    <p class="info-txt">Tiene propiedades calmantes que ayudan a suavizar asperezas y mejorar la textura general de la piel. <a href="https://www.hilarispublisher.com/open-access/exploring-the-antiinflammatory-properties-of-german-chamomile-mechanisms-and-therapeutic-uses.pdf" target="_blank">Hilaris</a></p>
`,
        BC: `   
    <p class="title">BENEFICIOS CLAVE</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Reducción de Acné</p>
    <p class="info-txt">El ácido salicílico, el ácido glicólico, la gluconolactona y la niacinamida trabajan juntos para exfoliar los poros, reducir brotes y mejorar la textura de la piel.</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control del Sebo</p>
    <p class="info-txt">La niacinamida ayuda a equilibrar la producción de grasa, manteniendo los poros limpios.</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Suavizado de Manchas y Textura</p>
    <p class="info-txt">El ácido glicólico y el extracto de regaliz trabajan en conjunto para reducir manchas oscuras y mejorar la textura desigual, eliminando comedones cerrados y suavizando asperezas.</p>
    <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Ligera</p>
    <p class="info-txt">La glicerina y el ácido hialurónico aportan hidratación sin sensación pesada, manteniendo la piel suave y fresca.</p>
`,
        queEsperar: `   
    <p class="title">QUÉ ESPERAR</p>
    <p class="info-txt">1. Ligera irritación en zonas sensibles como los pómulos.</p>
    <p class="info-txt">2. Tal vez los primeros días veas que tu piel se ve un poco más grasosa. No te asustes,
    es normal y después de unos 3 días deja de pasar.</p>
    <p class="info-txt">3. Un poco de descamación, también normal, mientras seca el acné que tienes.</p>

    <p class="title">CUÁNDO USARLO</p>
    <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
    productos.</p>

    <!-- Modo de Uso -->
    <p class="title">MODO DE USO</p>
    <p class="ingrediente">Tiempo aproximado de uso</p>
    <p class="info-txt">1 minuto y 30 segundos</p>
    <p class="info-txt">1. Masajea suavemente sobre la piel húmeda durante 1 minuto.</p>
    <p class="info-txt">2. Enjuaga con un poco de agua.</p>
`,

    },

    //Hydrating Cleanser de CeraVe
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Es un limpiador hidratante que remueve las impurezas y potencia la protección natural de la piel. Su fórmula ayuda a mantener la hidratación y a reforzar su función protectora.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
        `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Fitosfingosina</p>
        <p class="info-txt">Inhibe el crecimiento de Propionibacterium acne, la bacteria que causa el acné. <a href="https://read.qxmd.com/read/18489348/anti-microbial-and-inflammatory-activity-and-efficacy-of-phytosphingosine-an-in-vitro-and-in-vivo-study-addressing-acne-vulgaris" target="_blank">Medscape</a></p>
    `,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Atrae y retiene agua en las capas externas, asegurando que la piel se mantenga hidratada durante el día. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Proporciona hidratación intensa al atraer agua hacia las capas más profundas de la piel. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas (NP, AP, EOP)</p>
        <p class="info-txt">Forman una barrera en la piel que ayuda a retener la humedad y protegerla de la sequedad. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
    `,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas y Colesterol</p>
        <p class="info-txt">Ayudan a fortalecer la piel y protegerla del daño y desgaste diario. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Tocoferol (Vitamina E)</p>
        <p class="info-txt">Antioxidante que ayuda a proteger la piel de daños que aceleran el envejecimiento. <a href="https://lpi.oregonstate.edu/mic/health-disease/skin-health/vitamin-E" target="_blank">LPI</a></p>
    `,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas</p>
        <p class="info-txt">Mantienen la cohesión y fortaleza de los componentes de la piel, lo que contribuye a una superficie más suave y lisa. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Retiene agua en la capa externa para mantener la piel flexible y evitar áreas secas que generan textura irregular. <a href="https://academic.oup.com/bjd/article/189/Supplement_1/i17/7333865?login=false" target="_blank">British Journal</a></p>
    `,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación y Sanación Profundas</p>
        <p class="info-txt">La glicerina y el el ácido hialurónico capturan y retienen el agua, mientras las ceramidas refuerzan la barrera natural de la piel para que no se deshidrate.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Anti-edad</p>
        <p class="info-txt">Las ceramidas y el tocoferol ayudan a fortalecer la piel y protegerla de daños que aceleran el envejecimiento.</p>
    `,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>
    
        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>
    
        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">1 minuto y 30 segundos</p>
        <p class="info-txt">1. Masajea suavemente sobre la piel húmeda durante 1 minuto.</p>
        <p class="info-txt">2. Enjuaga con un poco de agua tibia.</p>
    `,

    },

    //La Roche Posay Effaclar Puryfing 
    {
        nombre: 'La Roche-Posay Effaclar Puryfing',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Limpiador purificante diseñado para piel grasa. Reduce impurezas y proporciona una limpieza profunda mientras es amable y suave con la piel.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
        `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Zinc PCA</p>
        <p class="info-txt">Regula el exceso de grasa y actúa contra bacterias relacionadas con el acné, como Propionibacterium acnes. <a href="https://www.clinikally.com/blogs/news/the-power-of-zinc-pca-in-acne-management-2023" target="_blank">Clinikally</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Granada</p>
        <p class="info-txt">Contiene propiedades antiinflamatorias y antioxidantes que ayudan a reducir la inflamación y el enrojecimiento en áreas propensas a brotes​. <a href="https://www.mdpi.com/2072-6643/15/12/2709" target="_blank">MDPI</a></p>
    `,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Humectante ligero que ayuda a mantener la hidratación en la piel sin obstruir los poros​. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Caprililglicol</p>
        <p class="info-txt">Ofrece propiedades humectantes y antimicrobianas suaves que contribuyen a mantener la piel hidratada y protegida de contaminantes externos​. <a href="https://www.mdpi.com/2079-9284/9/3/61" target="_blank">MDPI</a></p>
    `,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Tocoferol (Vitamina E)</p>
        <p class="info-txt">Un antioxidante que protege la piel de los radicales libres y previene el envejecimiento prematuro al reducir el daño oxidativo​. <a href="https://lpi.oregonstate.edu/mic/health-disease/skin-health/vitamin-E" target="_blank">LPI</a></p>
    `,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Zinc PCA</p>
        <p class="info-txt">No solo regula el sebo, sino que también ayuda a minimizar el tamaño de los poros y alisar la piel al reducir los comedones cerrados​. <a href="https://www.clinikally.com/blogs/news/the-power-of-zinc-pca-in-acne-management-2023" target="_blank">Clinikally</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Cítrico</p>
        <p class="info-txt">Exfoliante suave que ayuda a refinar la textura de la piel, minimizando comedones y mejorando la apariencia de poros y manchas de acné​. <a href="https://cosmotality.com/ingredients/citric-acid-skin-benefits/" target="_blank">Cosmotality</a></p>
    `,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control y Reducción de Brotes</p>
        <p class="info-txt">El Zinc PCA y el extracto de granada actúan en conjunto para regular la grasa y reducir la acumulación de bacterias, ayudando a disminuir así el riesgo de brotes.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Equilibrada</p>
        <p class="info-txt">La glicerina y el caprililglicol aportan hidratación ligera, manteniendo la piel equilibrada y sin sensación de sequedad.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Antioxidante</p>
        <p class="info-txt">El tocoferol protege la piel contra radicales libres, previniendo el envejecimiento prematuro.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Refinada</p>
        <p class="info-txt">El Zinc PCA y el ácido cítrico colaboran para exfoliar suavemente, reduciendo comedones y suavizando la textura de la piel para una superficie uniforme y libre de manchas.</p>
    `,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>
    
        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>
    
        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">1 minuto y 30 segundos</p>
        <p class="info-txt">1. Masajea suavemente sobre la piel húmeda durante 1 minuto.</p>
        <p class="info-txt">2. Enjuaga con un poco de agua tibia.</p>
    `,

    },

    //Smooothing SA Cleanser de CeraVe
    {
        nombre: 'Smoothing SA Cleanser de CeraVe',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Un limpiador exfoliante completo que controla el acné, suaviza la textura de la piel y restaura la barrera protectora sin causar resequedad, apto para múltiples tipos de piel.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
        `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Salicílico</p>
        <p class="info-txt">Exfolia y desobstruye los poros, ayudando a prevenir y reducir los brotes al eliminar células muertas y grasa.  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4554394/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Reduce la inflamación y controla el exceso de grasa, además de calmar la piel y restaurar la barrera protectora de la piel. <a href="https://www.struthealth.com/blog/niacinamide-acne-how-this-essential-skin-vitamin-helps-acne" target="_blank">STRUT</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Gluconolactona</p>
        <p class="info-txt">Exfoliante suave que elimina impurezas sin irritar, ayudando a prevenir obstrucciones en los poros. <a href="https://kajo-cosmetics.com/en/blogs/journal/the-gentle-exfoliation-of-gluconolactone-a-pha-for-sensitive-skin" target="_blank">KAJO</a></p>
    `,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Humectante ligero que ayuda a mantener la hidratación en la piel sin obstruir los poros. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico Hidrolizado</p>
        <p class="info-txt">Aporta hidratación profunda y refuerza la elasticidad en la capa superficial de la piel. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
    `,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas (NP, AP, EOP)</p>
        <p class="info-txt">Restauran la barrera natural de la piel, evitando la pérdida de agua y manteniendo la firmeza y elasticidad que evitan la formación de nuevas y más profundas arrugas. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Colesterol</p>
        <p class="info-txt">No te dejes asustar por el nombre. Trabaja junto con las ceramidas para mejorar la barrera cutánea y preservar la hidratación y firmeza de la piel. <a href="https://academic.oup.com/bjd/article/189/Supplement_1/i17/7333865?login=false" target="_blank">British Journal</a></p>
    `,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Salicílico</p>
        <p class="info-txt">Su acción exfoliante ayuda a suavizar la textura y reducir comedones y poros dilatados. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4554394/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Calcio Gluconato</p>
        <p class="info-txt">Aporta suavidad a la piel y promueve la regeneración celular para mejorar la textura​. <a href="https://academic.oup.com/jbcr/article-abstract/27/6/889/4605472?redirectedFrom=fulltext&login=false" target="_blank">Oxford</a><</p>
    `,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control del Acné y Limpieza Profunda</p>
        <p class="info-txt">El ácido salicílico y la niacinamida eliminan células muertas y regulan el exceso de grasa, previniendo brotes.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación y Reparación de la Barrera</p>
        <p class="info-txt">La glicerina y las ceramidas proporcionan hidratación, manteniendo la piel fuerte y equilibrada sin resecar.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Fortalecimiento y Protección</p>
        <p class="info-txt">Las ceramidas, el colesterol y el ácido hialurónico refuerzan la barrera de la piel, protegiéndola de factores externos.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Refinada y Suavidad</p>
        <p class="info-txt">El ácido salicílico y el calcio gluconato suavizan la textura, eliminan comedones y reducen la apariencia de poros para una superficie uniforme.</p>
    `,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Ligera irritación en zonas sensibles como los pómulos.</p>
        <p class="info-txt">2. Tal vez los primeros días veas que tu piel se ve un poco más grasosa. No te asustes,
        es normal y después de unos 3 días deja de pasar.</p>
        <p class="info-txt">3. Un poco de descamación, también normal, mientras seca el acné que tienes.</p>
    
        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>
    
        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">1 minuto y 30 segundos</p>
        <p class="info-txt">1. Masajea suavemente sobre la piel húmeda durante 1 minuto.</p>
        <p class="info-txt">2. Enjuaga con un poco de agua tibia.</p>
    `,

    },

    //Limpiador Milk Hidrolizada de Sadoer
    {
        nombre: 'Limpiador Milk Hidrolizada de Sadoer',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Leche nutritiva y restauradora formulada con ceramidas. Enfocado en hidratar y nutrir profundamente, reforzando su barrera y suavizando la textura para una piel más saludable.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
        `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Benzalkonium</p>
        <p class="info-txt">Agente antimicrobiano que ayuda a limpiar la piel, controlando bacterias e impurezas. <a href="https://www.drugs.com/cdi/benzalkonium-chloride.html" target="_blank">Drugs.com</a></p>
    `,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Leche</p>
        <p class="info-txt">Fuente de proteínas y lípidos que nutren intensamente la piel y la hidratan, promoviendo su elasticidad y suavidad. <a href="https://www.mdpi.com/2076-3417/14/7/2862" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramida NP</p>
        <p class="info-txt">Fortalece la barrera cutánea y retiene la humedad, promoviendo una hidratación duradera y la reparación profunda de la piel. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Carbomer</p>
        <p class="info-txt">Mejora la distribución, absorción y efecto de los ingredientes hidratantes mencionados arriba. <a href="https://www.mdpi.com/1999-4923/16/8/1001/xml" target="_blank">MDPI</a></p>
    `,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas (NP)</p>
        <p class="info-txt"> Ayuda a mantener la integridad de la barrera cutánea, previniendo la pérdida de hidratación y contribuyendo a la firmeza de la piel. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
    `,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Sílice hidratada</p>
        <p class="info-txt">Exfolia suavemente la piel, ayudando a reducir la textura áspera y las impurezas sin causar irritación. <a href="https://jnanobiotechnology.biomedcentral.com/articles/10.1186/s12951-024-02471-y" target="_blank">JNAN</a></p>
    `,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Nutrición e Hidratación Profundas</p>
        <p class="info-txt">Las proteínas del extracto de leche y las ceramidas restauran la humedad y los lípidos esenciales, nutriendo la piel y manteniéndola suave y elástica.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Refuerzo de la Barrera Cutánea</p>
        <p class="info-txt">Las ceramidas fortalecen la barrera protectora de la piel, ayudando a mantener la hidratación y la integridad de la piel..</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Reparación y Suavidad</p>
        <p class="info-txt">El extracto de leche proporciona lípidos y nutrientes que apoyan la recuperación y suavidad de la piel, ideales para pieles secas o sensibilizadas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Refinada y Suave</p>
        <p class="info-txt">La sílica hidratada ayuda a alisar la piel, eliminando células muertas y favoreciendo una textura más uniforme.</p>
    `,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>
    
        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>
    
        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">1 minuto y 30 segundos</p>
        <p class="info-txt">1. Masajea suavemente sobre la piel húmeda durante 1 minuto.</p>
        <p class="info-txt">2. Enjuaga con un poco de agua tibia.</p>
    `,

    },
]

infoHidratantes = [
    //Tónico de Centella Asiatica
    {
        nombre: 'Tónico Centella Asiatica',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Agua hidratante diseñada para favorecer la regeneración celular. Su fórmula ligera con centella asiatica permite una rápida absorción y efectos cicatrizantes e hidratantes.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Centella Asiatica</p>
        <p class="info-txt">Con propiedades antiinflamatorias y antimicrobianas, ayuda a reducir los brotes, acelerar la cicatrización y a calmar la piel irritada. <a href="https://www.mdpi.com/2076-3417/11/18/8475" target="_blank">MDPI</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Actúa como un humectante que atrae y retiene la humedad en la piel, ayudando a mantener su elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Propilenglicolo</p>
        <p class="info-txt">Mejora la hidratación de la piel al aumentar su capacidad de retener agua y suavizar la textura. <a href="https://www.mdpi.com/2079-9284/11/4/113" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Alantoína</p>
        <p class="info-txt">Promueve la regeneración celular y tiene propiedades calmantes que ayudan en la recuperación de la piel. <a href="https://www.metrin.com/blog/allantoin-skin-care-products/" target="_blank">Metrin</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Rhamnosa</p>
        <p class="info-txt">Acelera la producción de colágeno y mejora la elasticidad de la piel, contribuyendo a un aspecto más juvenil. <a href="https://www.mdpi.com/1420-3049/28/4/1728" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Su efecto hidratante ayuda a prevenir la sequedad, una causa común del envejecimiento prematuro. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Centella Asiatica</p>
        <p class="info-txt">Además de sus propiedades regeneradoras, ayuda a atenuar manchas y mejorar la textura de la piel al promover la renovación celular. <a href="https://www.mdpi.com/2076-3417/11/18/8475" target="_blank">MDPI</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Profunda</p>
        <p class="info-txt">La combinación de glicerina y propilenglicol asegura que la piel se mantenga hidratada y suave.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Regeneración y Curación</p>
        <p class="info-txt">El extracto de Centella Asiatica y la alantoína trabajan para acelerar la recuperación de la piel dañada y calma irritaciones.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Prevención del Envejecimiento Prematuro</p>
        <p class="info-txt">Ingredientes como la rhamnosa y la glicerina ayudan a mantener la piel elástica y reducen la aparición de arrugas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Uniforme</p>
        <p class="info-txt">La formulación suave contribuye a alisar la piel y a mejorar su apariencia.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco del líquido en la palma de tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Crema Hidratante de CeraVe
    {
        nombre: 'Crema Hidratante de Cerave',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">crema hidratante rica y reparadora, formulada para pieles secas. Su mezcla de ingredientes altamente hidratantes ayuda a suavizar y restaurar la barrera cutánea, proporcionando una hidratación duradera.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Fitoesfingosina</p>
        <p class="info-txt">Tiene propiedades antimicrobianas y antiinflamatorias que pueden ayudar a controlar las bacterias en la piel, reduciendo el riesgo de brotes. <a href="https://read.qxmd.com/read/18489348/anti-microbial-and-inflammatory-activity-and-efficacy-of-phytosphingosine-an-in-vitro-and-in-vivo-study-addressing-acne-vulgaris" target="_blank">Medscape</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Actúa como un humectante que atrae y retiene la humedad en la piel, ayudando a mantener su elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hialuronato de Sodio</p>
        <p class="info-txt">Su capacidad para retener grandes cantidades de agua proporciona una hidratación intensa, ayudando a mantener la piel flexible y elástica. <a href="https://inclinicaltrials.com/sodium-hyaluronate/" target="_blank">ClinicalTrials</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas (NP, AP, EOP)</p>
        <p class="info-txt">Estas ceramidas restauran y mantienen la barrera cutánea, evitando la pérdida de humedad y contribuyendo a la reparación de la piel. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Colesterol</p>
        <p class="info-txt">Ayuda a fortalecer la barrera cutánea y también juega un papel crucial en la hidratación de la piel. <a href="https://academic.oup.com/bjd/article/189/Supplement_1/i17/7333865?login=false" target="_blank">British Journal</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Tocoferol (Vitamina E)</p>
        <p class="info-txt">Un antioxidante que protege la piel del daño ambiental, contribuyendo a mantener una apariencia juvenil y saludable. <a href="https://lpi.oregonstate.edu/mic/health-disease/skin-health/vitamin-E" target="_blank">LPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Su efecto hidratante ayuda a prevenir la sequedad, una causa común del envejecimiento prematuro. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Dimeticona</p>
        <p class="info-txt">Suaviza la piel y ayuda a mejorar la textura, creando una sensación de suavidad y reduciendo la aspereza. <a href="https://www.byrdie.com/dimethicone-for-skin-4706516" target="_blank">Byrdie</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Triglicérido Caprílico/Cáprico</p>
        <p class="info-txt"> Actúa como emoliente, proporcionando una textura suave y contribuyendo a la mejora de la apariencia de la piel. <a href="https://www.ipsy.com/blog/caprylic-capric-triglyceride-in-skincare" target="_blank">IPSY</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Profunda</p>
        <p class="info-txt">La combinación de glicerina y hialuronato de sodio proporciona una hidratación intensa y duradera, ideal para pieles secas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Reparación de la Barrera Cutánea</p>
        <p class="info-txt">Las ceramidas y el colesterol ayudan a restaurar y proteger la barrera de la piel, promoviendo su capacidad para sanar.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Suavidad</p>
        <p class="info-txt">La acción conjunta de la dimeticona y los triglicéridos proporciona suavidad y una textura lisa en la piel.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Antioxidante</p>
        <p class="info-txt">El tocoferol contribuye a proteger la piel de factores ambientales, prolongando su salud y juventud.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
            <p class="info-txt">1. Retira un poco de crema con los dedos y aplícala en forma circular.</p>
            <p class="info-txt">2. Espera a que se absorba.</p>
`,
    },

    //Neutrogena Hydroboost
    {
        nombre: 'Neutrogena Hydroboost',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Gel hidratante ligero y versátil, concentrado en proporcionar una hidratación potente y profunda.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Atrae y retiene la humedad, manteniendo la piel hidratada y ayudando a reducir la producción de sebo/grasa. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Dimeticona</p>
        <p class="info-txt">Proporciona una barrera protectora que puede ayudar a suavizar la piel y a reducir la irritación, lo que contribuye a disminuir la inflamación asociada con el acné. <a href="https://www.byrdie.com/dimethicone-for-skin-4706516" target="_blank">Byrdie</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Actúa como un humectante que atrae y retiene la humedad en la piel, ayudando a mantener su elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hialuronato de Sodio</p>
        <p class="info-txt">Su capacidad para retener grandes cantidades de agua proporciona una hidratación intensa, ayudando a mantener la piel flexible y elástica. <a href="https://inclinicaltrials.com/sodium-hyaluronate/" target="_blank">ClinicalTrials</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Dimeticona</p>
        <p class="info-txt">Su efecto suavizante ayuda a reducir la apariencia de líneas finas y arrugas al crear una barrera que mantiene la piel hidratada. <a href="https://www.byrdie.com/dimethicone-for-skin-4706516" target="_blank">Byrdie</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina y Hialuronato de Sodio</p>
        <p class="info-txt">Juntos, estos ingredientes ofrecen una hidratación intensa que infla la piel, ayudando a reducir los signos visibles de envejecimiento y mejorando la elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Dimeticona</p>
        <p class="info-txt">Proporciona una sensación sedosa y suave, contribuyendo a una piel de aspecto más uniforme. <a href="https://www.byrdie.com/dimethicone-for-skin-4706516" target="_blank">Byrdie</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Potente</p>
        <p class="info-txt">La combinación de glicerina y sodio hialuronato ofrece una hidratación intensa y duradera.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ligereza y Versatilidad</p>
        <p class="info-txt">Su textura ligera permite una fácil aplicación y rápida absorción, adecuada para cualquier tipo de piel.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Suavidad</p>
        <p class="info-txt">Ingredientes como la dimeticona y la glicerina contribuyen a una sensación sedosa.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
            <p class="info-txt">1. Retira un poco de gel con los dedos y aplícalo en forma circular.</p>
            <p class="info-txt">2. Espera a que se absorba.</p>
`,
    },

    //PM Lotion de Cerave
    {
        nombre: 'Facial Moisturising Lotion PM',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Loción hidratante nocturna. Actúa mientras duermes para reparar, nutrir e hidratar la piel. Su fórmula ligera y rica en ceramidas ayuda a restaurar la barrera cutánea y a dar una sensación sedosa a la piel.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Potente activo que equilibra la producción de grasa y calma la inflamación, ayudando a mantener los poros despejados y minimizando el acné. <a href="https://www.struthealth.com/blog/niacinamide-acne-how-this-essential-skin-vitamin-helps-acne" target="_blank">STRUT</a></p>

`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Actúa como un humectante que atrae y retiene la humedad en la piel, ayudando a mantener su elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Su capacidad para retener grandes cantidades de agua proporciona una hidratación intensa. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas (NP, AP, EOP)</p>
        <p class="info-txt">Estas ceramidas restauran y mantienen la barrera cutánea, evitando la pérdida de humedad y contribuyendo a la reparación de la piel. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Colesterol</p>
        <p class="info-txt">No te dejes asustar por el nombre. Refuerza la elasticidad y firmeza de la piel, combatiendo los signos de envejecimiento y manteniendo una apariencia juvenil. <a href="https://academic.oup.com/bjd/article/189/Supplement_1/i17/7333865?login=false" target="_blank">British Journal</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Además de sus propiedades antiacné, actúa como un potente antioxidante que ayuda a reducir la apariencia de arrugas y mejorar la firmeza de la piel. <a href="https://karger.com/spp/article-abstract/27/6/311/295788/Niacinamide-Mechanisms-of-Action-and-Its-Topical?redirectedFrom=fulltext" target="_blank">Karger</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">También actúa como un unificador del tono, reduciendo manchas y mejorando la textura para una piel más clara y uniforme. <a href="https://karger.com/spp/article-abstract/27/6/311/295788/Niacinamide-Mechanisms-of-Action-and-Its-Topical?redirectedFrom=fulltext" target="_blank">Karger</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Dimeticona</p>
        <p class="info-txt">Proporciona una sensación suave, sirviendo como una capa sedosa que protege la piel y rellena imperfecciones y líneas finas. <a href="https://www.byrdie.com/dimethicone-for-skin-4706516" target="_blank">Byrdie</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Triglicéridos Caprílicos/Cápricos</p>
        <p class="info-txt">Emolientes que suavizan la piel y mejoran su textura, dejando un acabado sedoso. <a href="https://www.ipsy.com/blog/caprylic-capric-triglyceride-in-skincare" target="_blank">IPSY</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Regeneración Nocturna</p>
        <p class="info-txt">Formulada para trabajar durante la noche, esta loción repara y nutre la piel mientras duermes, promoviendo una apariencia fresca al despertar.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control del Acné</p>
        <p class="info-txt">La niacinamida regula la producción de grasa, minimiza poros dilatados y previene brotes, dejando la piel más equilibrada y clara.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Duradera</p>
        <p class="info-txt">La combinación de glicerina y ácido hialurónico proporciona una hidratación continua que ayuda a mantener la piel suave y flexible.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Suavizada</p>
        <p class="info-txt">Ingredientes como la niacinamida y los triglicéridos caprílicos/cápricos ayudan a suavizar la piel y a crear un cutis más uniforme.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Exprime un poco de crema en tu mano y aplícalo en forma circular.</p>
        <p class="info-txt">2. Espera a que se absorba.</p>
`,
    },

    //Sea Fennel
    {
        nombre: 'Tónico de Hinojo Marino',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Agua revitalizante que proporciona hidratación profunda. Formulada para mejorar la elasticidad y firmeza de la piel, ayuda a prevenir los signos visibles del envejecimiento y a suavizar la superficie de la piel.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Rhamnosa</p>
        <p class="info-txt">Este azúcar natural no solo proporciona hidratación, sino que también apoya la función de la barrera cutánea, lo que ayuda a mantener la piel equilibrada y más protegida contra brotes. <a href="https://www.mdpi.com/1420-3049/28/4/1728" target="_blank">MDPI</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Allantoína</p>
        <p class="info-txt">Conocida por sus propiedades calmantes, ayuda a sanar la piel irritada. <a href="https://ijcrt.org/papers/IJCRT2308524.pdf" target="_blank">IJCRT</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Su capacidad para retener grandes cantidades de agua proporciona una hidratación intensa. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hinojo Marino</p>
        <p class="info-txt">Extracto marino repleto de antioxidantes que ayudan a proteger la piel del daño ambiental y a mantener su firmeza, previniendo así la formación de arrugas y otros signos de envejecimiento. <a href="https://www.mdpi.com/2223-7747/7/4/92" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Refuerza y potencia la elasticidad de la piel, ayudando a reducir la apariencia de líneas finas. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Rhamnosa</p>
        <p class="info-txt">Acelera la producción de colágeno y mejora la elasticidad de la piel, contribuyendo a un aspecto más juvenil. <a href="https://www.mdpi.com/1420-3049/28/4/1728" target="_blank">MDPI</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Propilenglicol</p>
        <p class="info-txt">Con su capacidad para atraer y retener la humedad, ayuda a mejorar la textura de la piel, dejándola más suave y sedosa. <a href="https://www.mdpi.com/2079-9284/11/4/113" target="_blank">MDPI</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Elasticidad y Firmeza</p>
        <p class="info-txt">Gracias al extracto de Hinojo Marino y la Rhamnosa, esta agua hidratante ayuda a mejorar la elasticidad y firmeza, dejando la piel más tonificada.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Duradera</p>
        <p class="info-txt">La combinación de glicerina y ácido hialurónico proporciona hidratación continua que ayuda a mantener la piel suave y flexible.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Prevención del Envejecimiento</p>
        <p class="info-txt">Con su acción antioxidante, el extracto de Hinojo Marino protege la piel del daño ambiental y combate los signos del envejecimiento.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco del líquido en la palma de tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },
]

infoProtectores = [
    //Aloe Vera Sunscreen FPS+60 de Bioaqua
    {
        nombre: 'Aloe Vera Sunscreen FPS+60 de Bioaqua',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Protector solar en spray; Su fórmula es ligera y de rápida absorción, y además de proteger químicamente contra el sol, calma e hidrata la piel.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="info-txt">No contiene ingredientes específicos para tratar el acné.</p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Actúa como un humectante que atrae y retiene la humedad en la piel, ayudando a mantener su elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/ target="_blank"">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Aloe Vera</p>
        <p class="info-txt">Conocido por sus propiedades calmantes, el aloe vera proporciona una hidratación profunda y ayuda a sanar la piel. <a href="https://www.ijsr.net/archive/v6i4/ART20172331.pdf" target="_blank">IJSR</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Solar</p>
        <p class="info-txt">Los filtros químicos presentes protegen la piel de los dañinos efectos del sol, previniendo la aparición de manchas y ralentizando la formación de arrugas. <a href="https://www.cmaj.ca/content/192/50/E1802" target="_blank">CMAJ</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Aloe Vera</p>
        <p class="info-txt">Su capacidad para hidratar y calmar la piel ayuda a mantenerla joven, mientras combate los efectos del envejecimiento prematuro causados por la exposición solar. <a href="https://www.ijsr.net/archive/v6i4/ART20172331.pdf" target="_blank">IJSR</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Dióxido de Titanio</p>
        <p class="info-txt">Además de ser un protector solar físico, ayuda a mejorar la textura de la piel al proporcionar un acabado suave y uniforme. <a href="https://academic.oup.com/toxsci/article-abstract/123/1/264/1644613?redirectedFrom=fulltext&login=false" target="_blank">Oxford</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Aluminio Estearato</p>
        <p class="info-txt">Este emoliente ayuda a suavizar la piel, mejorando la sensación y alisando la apariencia. <a href="https://atlasofscience.org/screening-sunscreens-protecting-the-biomechanical-barrier-of-skin-from-ultraviolet-radiation-damage/" target="_blank">Atlas</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Eficaz</p>
        <p class="info-txt">Ofrece defensa contra los rayos UV, protegiendo la piel sensible y ayudando a prevenir daños a largo plazo.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Efectiva</p>
        <p class="info-txt">Gracias al aloe vera y la glicerina, este protector solar hidrata mientras protege.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Suave</p>
        <p class="info-txt">La combinación de ingredientes emolientes e hidratantes proporciona un acabado suave, dejando la piel con una sensación sedosa.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco del producto en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Eucerin Oil Control FPS+50
    {
        nombre: 'Eucerin Oil Control FPS+50',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Protector solar ultraligero diseñado para pieles grasas y mixtas. Controla el brillo, su efecto matizante suaviza visualmente la textura, y además ofrece una protección potente contra los rayos del sol.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Carnitina</p>
        <p class="info-txt">Regula la producción de grasa, reduciendo el riesgo de brotes. <a href="https://www.dermatologytimes.com/view/anti-sebum-cream-efficacious-in-sebum-reduction-improved-skin-hydration" target="_blank">DermatologyTimes</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Aloe Vera</p>
        <p class="info-txt">Potente antiinflamatorio que calma la piel irritada y ayuda a desinflamar brotes actuales. <a href="https://www.ijsr.net/archive/v6i4/ART20172331.pdf" target="_blank">IJSR</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Actúa como un humectante que atrae y retiene la humedad en la piel, ayudando a mantener su elasticidad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Licochalcona</p>
        <p class="info-txt">Antioxidante que calma rojeces e irritaciones, suaviza las imperfecciones en la textura y protege contra los radicales libres. <a href="https://www.intechopen.com/chapters/71036" target="_blank">INTECHOPEN</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Licochalcona</p>
        <p class="info-txt">Además de calmar la piel irritada, este antioxidante protege a la piel del daño celular, causado por el sol y por otros factores externos. <a href="https://www.intechopen.com/chapters/71036" target="_blank">INTECHOPEN</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Solar</p>
        <p class="info-txt">Su extraordinaria pureza aporta una potente protección contra el sol, factor clave para ralentizar el envejecimiento de la piel. <a href="https://www.cmaj.ca/content/192/50/E1802" target="_blank">CMAJ</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Sílica</p>
        <p class="info-txt">Proporciona un acabado mate al absorber el exceso de grasa y reducir el brillo, logrando una piel de textura suave y aspecto uniforme. <a href="https://jnanobiotechnology.biomedcentral.com/articles/10.1186/s12951-024-02471-y" target="_blank">JNAN</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Solar Completa</p>
        <p class="info-txt">Ayuda a prevenir manchas y arrugas gracias a su mayor potencia en la defensa contra el sol.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Reduce Brotes y Rojeces</p>
        <p class="info-txt">Calma y equilibra la piel, ayudando a controlar el acné y a mejorar la apariencia de zonas irritadas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Piel Suave y Uniforme</p>
        <p class="info-txt">Su efecto matificante reduce el brillo, dejando una textura suave y uniforme en toda la piel.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ligero y de Absorción Rápida</p>
        <p class="info-txt">Su textura liviana se absorbe al instante y deja una sensación fresca y cómoda que dura todo el día.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco del producto en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //ISDIN Fusion Water Light SPF 50
    {
        nombre: 'ISDIN Fusion Water Magic SPF 50',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Protector solar facial ultraligero de rápida absorción y acabado sedoso, ideal para pieles secas. Profundamente y aporta un efecto antioxidante que protege del sol y del paso del tiempo.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="info-txt">No contiene ingredientes específicos para tratar el acné.</p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido hialurónico</p>
        <p class="info-txt">Atrae y retiene la humedad, proporcionando una hidratación intensa que suaviza y refuerza la piel, especialmente en áreas secas. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Alga Mediterránea</p>
        <p class="info-txt">Rico en antioxidantes marinos, refuerza la barrera de la piel y mejora su capacidad para retener agua, manteniéndola hidratada y revitalizada. <a href="https://www.mdpi.com/1660-3397/16/11/459" target="_blank">MDPI</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Solar</p>
        <p class="info-txt">Su extraordinaria pureza aporta una potente protección contra el sol, factor clave para ralentizar el envejecimiento de la piel. <a href="https://www.cmaj.ca/content/192/50/E1802" target="_blank">CMAJ</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Vitamina E</p>
        <p class="info-txt">Antioxidante clave que combate los radicales libres, previniendo los daños que aceleran el envejecimiento y ayudando a preservar una piel más joven y elástica. <a href="https://lpi.oregonstate.edu/mic/health-disease/skin-health/vitamin-E" target="_blank">LPI</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Sílica</p>
        <p class="info-txt">Aporta un acabado sedoso y uniforme, dejando una sensación de suavidad. <a href="https://jnanobiotechnology.biomedcentral.com/articles/10.1186/s12951-024-02471-y" target="_blank">JNAN</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Protección Solar Completa</p>
        <p class="info-txt">Ayuda a prevenir manchas y arrugas gracias a su mayor potencia en la defensa contra el sol.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Profunda y Duradera</p>
        <p class="info-txt">El ácido hialurónico y la glicerina mantienen la piel seca nutrida y confortable durante todo el día.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Antioxidantes Naturales</p>
        <p class="info-txt">La vitamina E y el extracto de alga mediterránea fortalecen la piel frente a los radicales libres y el estrés ambiental.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Sedosa y Suave</p>
        <p class="info-txt">De rápida absorción, deja la piel con una textura suave y tersa.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco del producto en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },
]

infoPotenciadores = [
    //Sérum Hialurónico de Bioaqua
    {
        nombre: 'Sérum Hialurónico de Bioaqua',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Potente hidratante diseñado para ser profundo y duradero. Su fórmula ligera se absorbe rápidamente, dejando la piel suave y revitalizada.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="info-txt">No contiene ingredientes específicos para tratar el acné.</p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Atrae y retiene el agua en la piel, proporcionando una hidratación profunda que suaviza y revitaliza. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Potente humectante que retiene la humedad, manteniendo la piel hidratada durante horas. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Sclerotium Rolfsii</p>
        <p class="info-txt">Agente hidratante natural que contribuye a la elasticidad y suavidad de la piel. <a href="https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2021.748213/full" target="_blank">Frontiers</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramide 3</p>
        <p class="info-txt">Repara y fortalece la barrera cutánea, esencial para conservar la hidratación y prevenir la deshidratación. <a href="https://www.mdpi.com/2079-9284/6/3/52" target="_blank">MDPI</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="info-txt">No contiene ingredientes específicos para antiage.</p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="info-txt">No contiene ingredientes específicos para mejorar la textura.</p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente">Protección Eficaz</p>
        <p class="info-txt">Ofrece defensa contra los rayos UV, protegiendo la piel sensible y ayudando a prevenir daños a largo plazo.</p>
        <p class="ingrediente">Hidratación Efectiva</p>
        <p class="info-txt">Gracias al aloe vera y la glicerina, este protector solar hidrata mientras protege.</p>
        <p class="ingrediente">Textura Suave</p>
        <p class="info-txt">La combinación de ingredientes emolientes e hidratantes proporciona un acabado suave, dejando la piel con una sensación sedosa.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Sérum Vitamina C de Bioaqua
    {
        nombre: 'Sérum de Vitamina C Bioaqua',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Sérum concentrado de vitamina C, capaz de iluminar hasta las pieles más sensibles, aportando hidratación intensa, potentes efectos antioxidantes y una reducción visible de las manchas y la textura desigual.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Propylene Glycol</p>
        <p class="info-txt">Retiene la hidratación sin obstruir poros, manteniendo la piel equilibrada y reduciendo el riesgo de brotes. <a href="https://skinkraft.com/blogs/articles/propylene-glycol-for-skin" target="_blank">SkinKraft</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Allantoin</p>
        <p class="info-txt">Tiene efectos antiinflamatorios, calmando y reduciendo la inflamación que causan los brotes. <a href="https://ijcrt.org/papers/IJCRT2308524.pdf" target="_blank">IJCRT</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Atrae y retiene el agua en la piel, proporcionando una hidratación profunda que suaviza y revitaliza. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Potente humectante que retiene la humedad, manteniendo la piel hidratada durante horas. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>3-O-Ethyl Ascorbic Acid</p>
        <p class="info-txt">Un derivado estable de la vitamina C que aporta un potente efecto antioxidante, previniendo signos visibles de envejecimiento prematuro. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>3-O-Ethyl Ascorbic Acid</p>
        <p class="info-txt">Su acción antioxidante inhibe la producción de melanina y minimiza la hiperpigmentación, suavizando la apariencia de manchas y, por lo tanto, el tono. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extractos Cítricos</p>
        <p class="info-txt">Ricos en antioxidantes, ayudan a iluminar y mejorar el tono desigual. <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2023.1232229/full" target="_blank">Frontiers</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Antioxidantes Suaves</p>
        <p class="info-txt">La vitamina C y el extracto de cítricos proporcionan una potente protección antioxidante, que sigue siendo apta para pieles sensibles.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Mejora de la Textura</p>
        <p class="info-txt">La vitamina C ayuda a reducir las imperfecciones y suavizar la superficie de la piel.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Profunda</p>
        <p class="info-txt">La glicerina y el ácido hialurónico mantienen la piel hidratada, calmada y flexible.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica en el rostro de forma circular.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Differin Adapalene 0.1%
    {
        nombre: 'Differin Adapalene 0.1%',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Gel de alta potencia con una fórmula avanzada de adapaleno. Aborda directamente las causas del acné al limpiar profundamente los poros, reducir la inflamación y acelerar la renovación celular.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Adapaleno</p>
        <p class="info-txt">Un retinoide que acelera la renovación celular, desobstruye los poros y reduce la inflamación. Es muy eficaz para tratar el acné comedogénico y el acné inflamatorio. <a href="https://jddonline.com/articles/adapalene-01-lotion-in-the-treatment-of-acne-vulgaris-results-from-two-placebo-controlled-multicente-S1545961610P0639X/" target="_blank">JDD</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="info-txt">No contiene ingredientes específicos para hidratar y sanar.</p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Adapaleno</p>
        <p class="info-txt">Además de su acción antiacné, el adapaleno estimula la producción de colágeno y promueve la renovación celular, lo que resulta en una reducción visible de líneas finas y un aumento en la flexibilidad de la piel. <a href="https://jddonline.com/articles/adapalene-01-lotion-in-the-treatment-of-acne-vulgaris-results-from-two-placebo-controlled-multicente-S1545961610P0639X/" target="_blank">JDD</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Adapaleno</p>
        <p class="info-txt">Actúa desobstruyendo los poros y suavizando la piel, disminuyendo la apariencia de grumos y comedones cerrados. Su eficacia en la renovación celular también ayuda a reducir manchas, proporcionando un cutis más uniforme y refinado. <a href="https://jddonline.com/articles/adapalene-01-lotion-in-the-treatment-of-acne-vulgaris-results-from-two-placebo-controlled-multicente-S1545961610P0639X/" target="_blank">JDD</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente">Potente Acción Antiacné</p>
        <p class="info-txt">El adapaleno aborda las causas fundamentales del acné, logrando una reducción notable de brotes y manchas.</p>
        <p class="ingrediente">Suaviza la Textura y Reduce Manchas</p>
        <p class="info-txt">El adapaleno favorece una renovación celular constante, lo que minimiza la grumosidad en la piel y promueve una superficie más uniforme, al tiempo que ayuda a desvanecer manchas y marcas visibles.</p>
        <p class="ingrediente">Efectos Antienvejecimiento</p>
        <p class="info-txt">Al estimular la producción de colágeno y la renovación celular, el adapaleno ayuda a disminuir la apariencia de líneas finas y a mejorar la elasticidad de la piel.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es un producto potente. Ten precaución e inicia el tratamiento monitoreando cada una de las aplicaciones.</p>
        <p class="info-txt">2. Es común experimentar una fase inicial de purga, donde los brotes pueden aumentar antes de mejorar. Es importante ser paciente y continuar el tratamiento según las indicaciones.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco de gel en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica solo en las zonas donde hay acné.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //CeraVe Skin Renewing Vitamin C Serum
    {
        nombre: 'CeraVe Skin Renewing Vitamin C Serum',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Un serum concentrado que destaca por su pureza y calidad, formulado con un 10% de ácido ascórbico, aporta un potente efecto aclarador y antioxidante.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ceramidas (NP, AP, EOP)</p>
        <p class="info-txt">Aportan propiedades antiinflamatorias que ayudan a calmar la piel y reducir la irritación, reduciendo el riesgo de brotes. <a href="https://www.dermatologytimes.com/view/ceramide-containing-skin-care-may-improve-prescription-acne-treatment-adherence" target="_blank">DermatologyTimes</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Potente humectante que retiene la humedad, manteniendo la piel hidratada durante horas. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Hialurónico</p>
        <p class="info-txt">Atrae y retiene el agua en la piel, proporcionando una hidratación profunda que suaviza y revitaliza. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Ascórbico</p>
        <p class="info-txt">Actúa como un potente antioxidante, ralentizando la aparición de arrugas y manchas. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Tocoferol Acetato (Vitamina E)</p>
        <p class="info-txt">Refuerza la acción antioxidante, protegiendo la piel aún más del daño causado por radicales libres. <a href="https://lpi.oregonstate.edu/mic/health-disease/skin-health/vitamin-E" target="_blank">LPI</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Ascórbico</p>
        <p class="info-txt">Es conocido por su capacidad para reducir manchas y unificar el tono de la piel. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efecto antiedad</p>
        <p class="info-txt">La Vitamina C y las ceramidas se combinan para restaurar la luminosidad de la piel, difuminando las líneas de expresión y brindando un aspecto juvenil y revitalizado.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Reducción de Manchas</p>
        <p class="info-txt">La vitamina C promueve un tono uniforme, minimizando la apariencia de manchas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Propiedades Antiinflamatorias</p>
        <p class="info-txt">Las ceramidas ayudan a calmar la piel y a reducir la aparición de brotes.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es un producto potente. Ten precaución e inicia el tratamiento monitoreando cada una de las aplicaciones.</p>
        <p class="info-txt">2. Es común experimentar una fase inicial de purga, donde los brotes pueden aumentar antes de mejorar. Es importante ser paciente y continuar el tratamiento según las indicaciones.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un poco de crema en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica solo en las zonas donde hay acné.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Pads Ácido Glicólico de Elaimei
    {
        nombre: 'Pads Ácido Glicólico de Elaimei',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Pads impregnados con una mezcla de ácido glicólico que exfolia y renueva suavemente la piel</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Glicólico</p>
        <p class="info-txt">Exfoliante que desobstruye los poros, reduciendo la formación de brotes. <a href="https://miiskin.com/mx/acne-espinillas/medicamentos/acido-glicolico/" target="_blank">Miiskin</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hamamelis</p>
        <p class="info-txt">Tiene propiedades astringentes que minimizan los poros y controlan el exceso de grasa. <a href="https://www.health.com/witch-hazel-benefits-6833567" target="_blank">Health</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Té Verde</p>
        <p class="info-txt">Sus propiedades antimicrobianas eliminan a las bacterias causantes del acné. <a href="https://www.pharmatutor.org/pdf_download/pdf/Vol.%206,%20Issue%201,%20January%202018,%20PharmaTutor,%20Paper-3.pdf" target="_blank">PharmaTutor</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina Vegetal</p>
        <p class="info-txt">Atrae y retiene la humedad en la piel. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Calendula</p>
        <p class="info-txt">Con propiedades calmantes y antiinflamatorias, ayuda a mantener la piel hidratada y nutrida. <a href="https://relatablesci.com/calendula-for-skin-the-science-behind-its-marketed-benefits/" target="_blank">RelatableSci</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Vitamina B5</p>
        <p class="info-txt">Contribuye a la regeneración de la piel, mejorando su elasticidad y firmeza, y ayudando a suavizar las líneas de expresión. <a href="https://www.mdpi.com/2079-9284/8/1/18" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Vitamina C</p>
        <p class="info-txt">Potente antioxidante que protege a la piel de los signos del envejecimiento prematuro. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Glicólico</p>
        <p class="info-txt">Su acción exfoliante elimina las células muertas, alisando la textura y atenuando las manchas oscuras. <a href="https://miiskin.com/mx/acne-espinillas/medicamentos/acido-glicolico/" target="_blank">Miiskin</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Té Verde</p>
        <p class="info-txt">Rico en antioxidantes, mejora la textura de la piel al reducir la inflamación y atenúar las manchas oscuras. <a href="https://www.pharmatutor.org/pdf_download/pdf/Vol.%206,%20Issue%201,%20January%202018,%20PharmaTutor,%20Paper-3.pdf" target="_blank">PharmaTutor</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Allantoína</p>
        <p class="info-txt">Promueve la renovación celular, suavizando la superficie de la piel y minimizando la grumosidad. <a href="https://ijcrt.org/papers/IJCRT2308524.pdf" target="_blank">IJCRT</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Renovación Celular</p>
        <p class="info-txt">Acelera la exfoliación y la eliminación de células muertas, mejorando notablemente la textura de la piel.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efecto Antienvejecimiento</p>
        <p class="info-txt">Ayuda a reducir las líneas de expresión y mejora la firmeza de la piel, dándole un aspecto más joven y saludable.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Luminosidad</p>
        <p class="info-txt">Contribuye a una piel más brillante, suave y con un tono más uniforme, realzando la belleza natural.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es un producto potente. Ten precaución e inicia el tratamiento monitoreando cada una de las aplicaciones.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">1 minuto y 30 segundos</p>
        <p class="info-txt">1. Retira uno de los Pads embebidos en la fórmula.</p>
        <p class="info-txt">2. Con la otra mano, aplica de forma circular en el rotro.</p>
        <p class="info-txt">3. Deja absorber durante un minuto.</p>
        <p class="info-txt">3. Enjuaga el rostro con agua tibia.</p>
`,
    },

    //Serum Niacinamida de Bioaqua
    {
        nombre: 'Serum Niacinamida de Bioaqua',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Suero concentrado de niacinamida, un ingrediente versátil y multifuncional, despigmenta, suaviza, controla los brotes de acné, entre muchas otras cosas.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Conocida por sus propiedades antiinflamatorias, ayuda a reducir la aparición de brotes y minimizar la visibilidad de poros. <a href="https://www.struthealth.com/blog/niacinamide-acne-how-this-essential-skin-vitamin-helps-acne" target="_blank">STRUT</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerol</p>
        <p class="info-txt">Este humectante natural atrae y retiene la humedad en la piel. <a href="https://academic.oup.com/bjd/article-abstract/159/1/23/6641450?login=false" target="_blank">Oxford</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Betaína</p>
        <p class="info-txt">Con su capacidad para equilibrar la humedad, mejora y potencia la hidratación. <a href="https://www.skincarelab.org/betaine/" target="_blank">SkinCareLab</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Mejora la elasticidad de la piel y reduce las líneas finas. <a href="https://health.clevelandclinic.org/niacinamide" target="_blank">Cleveland</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Vitamina C</p>
        <p class="info-txt">Potente antioxidante que protege a la piel de los signos del envejecimiento prematuro. <a href="https://jcadonline.com/february-2019-vitamin-c/" target="_blank">JCAD</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Alisan la superficie de la piel y reduce el tamaño de grumos y manchas. <a href="https://health.clevelandclinic.org/niacinamide" target="_blank">Cleveland</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control del Acné</p>
        <p class="info-txt">Reduce la aparición de brotes y minimiza los poros.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efecto Antienvejecimiento</p>
        <p class="info-txt">Ayuda a reducir las líneas de expresión y mejora la firmeza de la piel, dándole un aspecto más joven y saludable.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Luminosidad</p>
        <p class="info-txt">Contribuye a una piel más brillante, suave y con un tono más uniforme, realzando la belleza natural.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica solo en las zonas donde hay acné.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //The Ordinary Ácido Glicólico 7% Toning Solution
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Tónico con potente acción exfoliante. Elimina impurezas, purifica los poros de suciedad y células muertas, reduce las manchas superficiales y suaviza la superficie de la piel.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Glicólico</p>
        <p class="info-txt">Exfolia suavemente la piel, ayudando a desobstruir los poros y a reducir la formación de comedones cerrados. <a href="https://miiskin.com/mx/acne-espinillas/medicamentos/acido-glicolico/" target="_blank">Miiskin</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Raíz de Panax Ginseng</p>
        <p class="info-txt">Con propiedades antiinflamatorias, ayuda a calmar la piel y a reducir el enrojecimiento asociado con el acné. <a href="https://www.mdpi.com/1420-3049/28/9/3863" target="_blank">MDPI</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Humectante natural que atrae y retiene la humedad en la piel. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Aminoácidos</p>
        <p class="info-txt">Esenciales para la síntesis de colágeno, contribuyen a una piel más firme y elástica. <a href="https://www.mdpi.com/2079-9284/10/2/54" target="_blank">MDPI</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Glicólico</p>
        <p class="info-txt">Su acción exfoliante elimina las células muertas, alisando la textura y atenuando las manchas oscuras. <a href="https://miiskin.com/mx/acne-espinillas/medicamentos/acido-glicolico/" target="_blank">Miiskin</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Agua de Rosa Damascena</p>
        <p class="info-txt">Con propiedades tonificantes y aclaradoras, ayuda a equilibrar la piel y a mejorar su luminosidad. <a href="https://www.glooshi.com/damask-rose-water/" target="_blank">Glooshi</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Exfoliación Profunda</p>
        <p class="info-txt">Elimina células muertas y desobstruye los poros, reduciendo el acné y los comedones.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efecto Antienvejecimiento</p>
        <p class="info-txt">Promueve la renovación celular y mejora la firmeza.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Mejora de Textura</p>
        <p class="info-txt">Aporta una superficie más suave y uniforme, disminuyendo la visibilidad de manchas y grumosidad.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es un producto potente. Ten precaución e inicia el tratamiento monitoreando cada una de las aplicaciones.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica de forma circular en el rostro.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Sérum Hialurónico 2% + B5 The Ordinary
    {
        nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Un serum potente que combina múltiples formas de ácido hialurónico con vitamina B5 para proporcionar una hidratación intensa y duradera.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="info-txt">No contiene ingredientes específicos para tratar el acné.</p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Sodium Hyaluronate</p>
        <p class="info-txt">Una forma de ácido hialurónico que retiene la humedad y proporciona hidratación profunda. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" target="_blank">PMC</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Panthenol</p>
        <p class="info-txt">También conocido como provitamina B5, ayuda a suavizar y calmar la piel, promoviendo una hidratación adicional. <a href="https://www.mdpi.com/2079-9284/8/1/18" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ahnfeltia Concinna</p>
        <p class="info-txt">Un extracto marino que mejora la capacidad de la piel para retener agua, fortaleciendo la barrera cutánea. <a href="https://inci.guide/marine-extracts/ahnfeltia-concinna-extract" target="_blank">INCI</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="info-txt">No contiene ingredientes específicos para antiage.</p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="info-txt">No contiene ingredientes específicos para mejorar la textura.</p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente">Hidratación Profunda</p>
        <p class="info-txt">Su fórmula de múltiples formas de ácido hialurónico garantiza una hidratación intensa.</p>
        <p class="ingrediente">Efecto Reparador</p>
        <p class="info-txt">La combinación de ingredientes fortalece la barrera cutánea y mejora la salud general de la piel, dejándola visiblemente más radiante.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica solo en las zonas donde hay acné.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Ácido Láctico 10% de The Ordinary
    {
        nombre: 'Ácido Láctico 10% de The Ordinary',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Serum de ácido láctico con una mezcla de ingredientes hidratantes. Suave y eficaz, mejora la textura de la piel, proporciona hidratación intensa y ofrece beneficios antienvejecimiento, siendo ideal para pieles sensibles.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Láctico</p>
        <p class="info-txt">Exfoliante suave que limpia los poros, ayuda a reducir comedones cerrados. <a href="https://www.acne.org/how-lactic-acid-helps-with-acne" target="_blank">ACNE.ORG</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hojas de Tasmannia Lanceolata</p>
        <p class="info-txt">Con propiedades antimicrobianas, eliminan a las bacterias causantes del acné. <a href="https://www.mdpi.com/2304-8158/7/11/179" target="_blank">MDPI</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hialuronato de Sodio</p>
        <p class="info-txt">Potente hidratante que ayuda a mantener la piel firme y flexible. <a href="https://inclinicaltrials.com/sodium-hyaluronate/" target="_blank">ClinicalTrials</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Humectante que atrae y retiene la humedad. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Láctico</p>
        <p class="info-txt">Además de su función exfoliante, promueve la renovación celular y suaviza la apariencia de líneas finas y arrugas. <a href="https://academic.oup.com/asj/article-abstract/27/4/402/257852?redirectedFrom=fulltext&login=false" target="_blank">Oxford</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ácido Láctico</p>
        <p class="info-txt">Al exfoliar, renueva la superficie de la piel, minimizando la apariencia de grumos, mejorando la luminosidad y suavizando las manchas. <a href="https://www.acne.org/how-lactic-acid-helps-with-acne" target="_blank">ACNE.ORG</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Mejora de la Textura</p>
        <p class="info-txt">Suaviza la piel y su textura, reduciendo la apariencia de las irregularidades y de comedones cerrados.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efectos Antienvejecimiento</p>
        <p class="info-txt">Promueve la renovación celular y reduce los signos visibles del envejecimiento.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Hidratación Profunda</p>
        <p class="info-txt">Proporciona una intensa y duradera hidratación, ideal para mantener la piel suave y flexible.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica solo en las zonas donde hay acné.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //The Ordinary Niacinamida 10% + Zinc 1%
    {
        nombre: 'The Ordinary Niacinamida 10% + Zinc 1%',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Un serum de alto rendimiento que combina niacinamida y zinc para abordar múltiples preocupaciones, siendo aún ideal para pieles sensibles.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida (10%)</p>
        <p class="info-txt">Regula la producción de sebo, minimiza poros y reduce la inflamación. <a href="https://www.struthealth.com/blog/niacinamide-acne-how-this-essential-skin-vitamin-helps-acne" target="_blank">STRUT</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Zinc PCA (1%)</p>
        <p class="info-txt">Con propiedades antimicrobianas y siendo capaz de reducir el exceso de grasa, es excelente para pieles con acné. <a href="https://www.clinikally.com/blogs/news/the-power-of-zinc-pca-in-acne-management-2023" target="_blank">Clinikally</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Glicerina</p>
        <p class="info-txt">Humectante que aporta y retiene la humedad, manteniendo la piel hidratada y flexible. <a href="https://borealisderm.com/in-the-news/a-guide-to-glycerin-for-skin-according-to-dermatologists/" target="_blank">Borealis</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida</p>
        <p class="info-txt">Además de sus propiedades anti-acné, atenúa las líneas finas y promueve una apariencia más juvenil y luminosa. <a href="https://health.clevelandclinic.org/niacinamide" target="_blank">Cleveland</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Niacinamida (10%)</p>
        <p class="info-txt">Destapa comedones cerrados, suaviza la textura de la piel y ayuda a desvanecer las manchas. <a href="https://health.clevelandclinic.org/niacinamide" target="_blank">Cleveland</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Tamarindo Indica</p>
        <p class="info-txt">Exfolia, hidrata, ilumina, y controla la grasa, mejorando la textura y el tono de la piel. <a href="https://www.researchgate.net/publication/342736524_International_Journal_of_Research_FORMULATION_AND_EVALUATION_OF_HERBAL_SCRUB_USING_TAMARIND_PEEL" target="_blank">ResearchGate</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Multifuncional</p>
        <p class="info-txt">Un solo producto que combate el acné, mejora la textura y atenúa las manchas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Ideal para Pieles Sensibles</p>
        <p class="info-txt">Con una formulación suave que minimiza el riesgo de irritación.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es poco probable que genere irritación, pero no imposible. Monitorea las primeras aplicaciones para evitar reacciones adversas.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica solo en las zonas donde hay acné.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //The Ordinary Retinol 0.2% in Squalane
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Serum concentrado de retinol que renueva la superficie de la piel, estimula la producción de colágeno, suaviza manchas y desobstruye los poros.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Retinol</p>
        <p class="info-txt">Desobstruye poros y acelera la renovación celular, ayudando a reducir los brotes y a purificar la piel. <a href="https://www.mdpi.com/2218-273X/13/11/1614" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Romero</p>
        <p class="info-txt">Con propiedades antibacterianas y antiinflamatorias, aborda las dos causas principales de acné. <a href="https://www.mdpi.com/2223-7747/12/1/90" target="_blank">MDPI</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Escualano</p>
        <p class="info-txt">Proporciona una hidratación ligera pero profunda, suavizando la fórmula y disminuyendo la irritación. <a href="https://cosmotality.com/ingredients/squalane-skin-benefits/" target="_blank">Cosmotality</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Aceite de semilla de jojoba</p>
        <p class="info-txt">Retiene la humedad y mantiene la piel suave. <a href="https://www.luckymag.com/beauty/skin/jojoba-oil-skin-benefits/" target="_blank">LUCKY</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Retinol</p>
        <p class="info-txt">Potente derivado de la vitamina A que acelera la renovación celular, promueve la producción de colágeno y ayuda a reducir las arrugas y las manchas. <a href="https://www.mdpi.com/2218-273X/13/11/1614" target="_blank">MDPI</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Retinol</p>
        <p class="info-txt">Al acelerar el recambio celular, el retinol difumina las manchas oscuras y purifica la superficie de la piel, lo que también suaviza la “grumosidad” y reduce los comedones cerrados. <a href="https://www.mdpi.com/2218-273X/13/11/1614" target="_blank">MDPI</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control de Acné</p>
        <p class="info-txt">Sus ingredientes purifican los poros, reducen la inflamación y atacan, uno a uno, a los causantes del acné.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efecto Antiedad</p>
        <p class="info-txt">El retinol aumenta la producción de colágeno, lo que potencia a la renovación celular para reducir arrugas, manchas y líneas finas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Refinada</p>
        <p class="info-txt">Destapa poros y elimina la grumosidad de la piel, característica de los comedones cerrados. Además, elimina las manchas al acelerar la renovación celular.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es un producto potente. Ten precaución e inicia el tratamiento monitoreando cada una de las aplicaciones.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica de forma circular en el rostro.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },

    //Sérum Retinol de Vibrant Glamoúr
    {
        nombre: 'Sérum Retinol de Vibrant Glamoúr',
        queEs: `
        <p class="title">¿QUÉ ES?</p>
        <p class="info-description">Serum de retinol que renueva la superficie de la piel, estimula la producción de colágeno, suaviza manchas y desobstruye los poros.</p>   
        <p class="title">INGREDIENTES RELEVANTES</p>
    `,
        RA: `
        <!-- Ingredientes para Control y Reducción de Acné -->
        <p class="subtitle">Para Control y Reducción de Acné</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Retinol</p>
        <p class="info-txt">Desobstruye poros y acelera la renovación celular, ayudando a reducir los brotes y a purificar la piel. <a href="https://www.mdpi.com/2218-273X/13/11/1614" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Centella Asiática</p>
        <p class="info-txt">Antiinflamatorio natural, ayuda a calmar brotes y reduce enrojecimientos. <a href="https://www.mdpi.com/2076-3417/11/18/8475" target="_blank">MDPI</a></p>
`,
        HS: `
        <p class="subtitle">Para Hidratar y Sanar</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Escualano</p>
        <p class="info-txt">Proporciona una hidratación ligera pero profunda, suavizando la fórmula y disminuyendo la irritación. <a href="https://cosmotality.com/ingredients/squalane-skin-benefits/" target="_blank">Cosmotality</a></p>
`,
        A: `   
        <p class="subtitle">Para Antienvejecimiento</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Retinol</p>
        <p class="info-txt">Potente derivado de la vitamina A que acelera la renovación celular, promueve la producción de colágeno y ayuda a reducir las arrugas y las manchas. <a href="https://www.mdpi.com/2218-273X/13/11/1614" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Vitamina E (Tocoferol)</p>
        <p class="info-txt">Antioxidante poderoso que combate el daño de radicales libres y previene el envejecimiento prematuro. <a href="https://lpi.oregonstate.edu/mic/health-disease/skin-health/vitamin-E" target="_blank">LPI</a></p>
`,
        TCM: `   
        <p class="subtitle">Para Suavizar Textura y Manchas</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Retinol</p>
        <p class="info-txt">Al acelerar el recambio celular, el retinol difumina las manchas oscuras y purifica la superficie de la piel, lo que también suaviza la “grumosidad” y reduce los comedones cerrados. <a href="https://www.mdpi.com/2218-273X/13/11/1614" target="_blank">MDPI</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Extracto de Alga Focus Vesiculosus</p>
        <p class="info-txt">Promueve la regeneración celular, disminuyendo manchas y dejando la piel más uniforme. <a href="https://www.basf.com/global/en/media/news-releases/2021/08/p-21-280" target="_blank">BASF</a></p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Raíz de Paeonia Albiflora</p>
        <p class="info-txt">Ilumina y unifica el tono, atenuando la apariencia de manchas. <a href="https://www.kiehls.com/skincare-advice/peony-root-extract.html" target="_blank">KIEHLS</a></p>
`,
        BC: `   
        <p class="title">BENEFICIOS CLAVE</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Control de Acné</p>
        <p class="info-txt">Sus ingredientes purifican los poros, reducen la inflamación y atacan, uno a uno, a los causantes del acné.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Efecto Antiedad</p>
        <p class="info-txt">El retinol aumenta la producción de colágeno, lo que potencia a la renovación celular para reducir arrugas, manchas y líneas finas.</p>
        <p class="ingrediente"><i class="fa-solid fa-o circle"></i>Textura Refinada</p>
        <p class="info-txt">Destapa poros y elimina la grumosidad de la piel, característica de los comedones cerrados. Además, elimina las manchas al acelerar la renovación celular.</p>
`,
        queEsperar: `   
        <p class="title">QUÉ ESPERAR</p>
        <p class="info-txt">1. Es un producto potente. Ten precaución e inicia el tratamiento monitoreando cada una de las aplicaciones.</p>

        <p class="title">CUÁNDO USARLO</p>
        <p class="info-txt">Te mostraremos tu rutina completa y cómo aplicarla cuando hayas seleccionado todos los
        productos.</p>

        <!-- Modo de Uso -->
        <p class="title">MODO DE USO</p>
        <p class="ingrediente">Tiempo aproximado de uso</p>
        <p class="info-txt">30 segundos</p>
        <p class="info-txt">1. Vierte un par de gotas en tu mano.</p>
        <p class="info-txt">2. Con la otra mano, aplica de forma circular en el rostro.</p>
        <p class="info-txt">3. Deja absorber.</p>
`,
    },
]