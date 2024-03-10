import { createContext, useState } from "react";

export const StateContext = createContext({});

function StatesProvider({ children }) {

    const [log, setLog] = useState(false);
  


    const [itemCapinhaInfo, setItemCapinhaInfo] = useState([
        { img: "https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg" }
    ]);



    const [apiNovidade] = useState(
        [
            { id: 34546345, valor: 25, modelo: "Iphone 11", img: "https://ai4k.shop/wp-content/uploads/2023/01/tough-iphone-case-glossy-iphone-13-pro-front-63d7931aa8d85.png", desc: "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." },
            { id: 111244, valor: 25, modelo: "Iphone 12", img: "https://dcdn.mitiendanube.com/stores/001/023/497/products/01112_iphxs-d09066e3bb0dd2be0615637596524678-1024-1024.png", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 21245, valor: 25, modelo: "Iphone 13", img: "https://lakersalldayeveryday.com/cdn/shop/products/iphone-case-iphone-14-pro-max-case-on-phone-6376797bcec12_1024x1024@2x.png?v=1668708957", desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." },
            { id: 3564576, valor: 25, modelo: "Iphone 14", img: "https://heatwaveterrace.com/cdn/shop/products/iphone-case-iphone-11-pro-case-on-phone-6133ba31864bd_1024x1024@2x.png?v=1630779964", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut condimentum velit. In hac habitasse platea dictumst." },
            { id: 412354, valor: 25, modelo: "Iphone 15", img: "https://terribletiki.com/cdn/shop/products/iphone-case-iphone-11-pro-max-case-on-phone-6324cb41923c8_1024x1024@2x.png?v=1663355731", desc: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
            { id: 5124756, valor: 25, modelo: "Iphone 11 pro max", img: "https://heatwaveterrace.com/cdn/shop/products/iphone-case-iphone-11-case-on-phone-62bd3c4b54381_1024x1024@2x.png?v=1656568925", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { id: 62352341, valor: 25, modelo: "Iphone 11 pro", img: "https://mizzoxstyle.com/cdn/shop/products/iphone-case-iphone-12-case-on-phone-62f01603812a8_1024x1024@2x.png?v=1659901724", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { id: 71246456, valor: 25, modelo: "Iphone 14 pro max", img: "https://mizzoxstyle.com/cdn/shop/products/iphone-case-iphone-7-8-case-on-phone-61ef40e7676d9_1024x1024@2x.png?v=1643070067", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 8645723, valor: 25, modelo: "Iphone 15 pro max", img: "https://www.dannyduncan69.com/cdn/shop/products/vrblk_bfbb0131-0c1b-438a-949e-e347b1991a3d_1445x.png?v=1623259526", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." },
            { id: 94235465, valor: 25, modelo: "Iphone 13 pro", img: "https://cdn-stamplib.casetify.com/cms/image/db5f6a5d3d179778e0cfef327fc8e0c3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut condimentum velit. In hac habitasse platea dictumst." },
            { id: 102541, valor: 25, modelo: "Iphone 12 pro max", img: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-quack-hunt-stride-2-0-case-cover-for-iphone-11-images/DailyObjects-Quack-Hunt-Stride-2-0-Case-Cover-For-iPhone-11.png?tr=cm-pad_resize,v-2", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 1346545761, valor: 25, modelo: "Iphone xr", img: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-spider-whisperer-stride-2-0-case-cover-for-iphone-15-pro-max-images/DailyObjects-Spider-Whisperer-Stride-2-0-Case-Cover-For-iPhone-15-Pro-Max.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60", desc: "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." },
            { id: 1234242, valor: 25, modelo: "Iphone 12", img: "https://cdn-stamplib.casetify.com/cms/image/5142c13dea691d817ce456ed811edece.png", desc: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", },
            { id: 1564563, valor: 25, modelo: "Iphone 12", img: "https://cdn-stamplib.casetify.com/cms/image/bf13209c13b5eb14bb1824f5e7a887a3.png", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },

        ]
    );

    const [apiParaVoce] = useState(
        [
            { id: 1255675674, valor: 35, modelo: "Iphone 13", img: "https://cdn.awsli.com.br/600x450/443/443889/produto/213100651/smiles-cdr_iphone-13-a604v235lg.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut condimentum velit. In hac habitasse platea dictumst." },
            { id: 1676732455, valor: 25, modelo: "Iphone 13", img: "https://conteudos.meo.pt/catalogo/isell/acessorios/acessorios-iphone-13/capas-apple/capa-silicone-com-magsafe-para-iphone-13-preto-meia-noite-costas-meo.png", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
            { id: 16467578, valor: 30, modelo: "Iphone 13", img: "https://www.emoticover.com.br/image/cache/catalog/namorados-12-1000x1000.png", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { id: 17423456, valor: 35, modelo: "Iphone 13", img: "https://www.gospelcase.com.br/image/cache/catalog/R165%20NOVA%20FRONT-1000x1000.png", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." },
            { id: 18675856, valor: 35, modelo: "Iphone 13 pro max", img: "https://cdn.awsli.com.br/600x450/443/443889/produto/213100654/smiles-cdr_iphone-13-pro-max-khtts6v4uk.png", desc: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
            { id: 192345675, valor: 35, modelo: "Iphone 13 pro max", img: "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw3ece8d2b/images/large/52900017_1.png", desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." },
            { id: 21856735, valor: 25, modelo: "Iphone 13 pro max", img: "https://cdn.vxcase.com.br/media/catalog/product/cache/854413d9c7f0b6ee978707af8ce198f7/c/a/capa-defender-vx-case-magsafe-iphone-13-pro---preta.png", desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." },
            { id: 22234367, valor: 25, modelo: "Iphone 12 pro", img: "https://cdn.vxcase.com.br/media/amasty/webp/catalog/product/cache/854413d9c7f0b6ee978707af8ce198f7/2/5/25803-case-defender-preta_png.webp", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 232345424, valor: 30, modelo: "Iphone 12 pro", img: "https://images.yampi.me/assets/stores/datelamps/uploads/images/capinha-iphone-astronauta-flutuante-roxo-iphone-14-636ee8b50c727-large.png", desc: "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." }
        ]
    )

    const [capinhas] = useState(
        [
            { id: 1255675674, valor: 35, modelo: "Iphone 13", img: "https://cdn.awsli.com.br/600x450/443/443889/produto/213100651/smiles-cdr_iphone-13-a604v235lg.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut condimentum velit. In hac habitasse platea dictumst." },
            { id: 1676732455, valor: 25, modelo: "Iphone 13", img: "https://conteudos.meo.pt/catalogo/isell/acessorios/acessorios-iphone-13/capas-apple/capa-silicone-com-magsafe-para-iphone-13-preto-meia-noite-costas-meo.png", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
            { id: 16467578, valor: 30, modelo: "Iphone 13", img: "https://www.emoticover.com.br/image/cache/catalog/namorados-12-1000x1000.png", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { id: 17423456, valor: 35, modelo: "Iphone 13", img: "https://www.gospelcase.com.br/image/cache/catalog/R165%20NOVA%20FRONT-1000x1000.png", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." },
            { id: 18675856, valor: 35, modelo: "Iphone 13 pro max", img: "https://cdn.awsli.com.br/600x450/443/443889/produto/213100654/smiles-cdr_iphone-13-pro-max-khtts6v4uk.png", desc: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
            { id: 192345675, valor: 35, modelo: "Iphone 13 pro max", img: "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw3ece8d2b/images/large/52900017_1.png", desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." },
            { id: 21856735, valor: 25, modelo: "Iphone 13 pro max", img: "https://cdn.vxcase.com.br/media/catalog/product/cache/854413d9c7f0b6ee978707af8ce198f7/c/a/capa-defender-vx-case-magsafe-iphone-13-pro---preta.png", desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." },
            { id: 22234367, valor: 25, modelo: "Iphone 12 pro", img: "https://cdn.vxcase.com.br/media/amasty/webp/catalog/product/cache/854413d9c7f0b6ee978707af8ce198f7/2/5/25803-case-defender-preta_png.webp", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 232345424, valor: 30, modelo: "Iphone 12 pro", img: "https://images.yampi.me/assets/stores/datelamps/uploads/images/capinha-iphone-astronauta-flutuante-roxo-iphone-14-636ee8b50c727-large.png", desc: "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." },
            { id: 34546345, valor: 25, modelo: "Iphone 11", img: "https://ai4k.shop/wp-content/uploads/2023/01/tough-iphone-case-glossy-iphone-13-pro-front-63d7931aa8d85.png", desc: "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." },
            { id: 111244, valor: 25, modelo: "Iphone 12", img: "https://dcdn.mitiendanube.com/stores/001/023/497/products/01112_iphxs-d09066e3bb0dd2be0615637596524678-1024-1024.png", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 21245, valor: 25, modelo: "Iphone 13", img: "https://lakersalldayeveryday.com/cdn/shop/products/iphone-case-iphone-14-pro-max-case-on-phone-6376797bcec12_1024x1024@2x.png?v=1668708957", desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." },
            { id: 3564576, valor: 25, modelo: "Iphone 14", img: "https://heatwaveterrace.com/cdn/shop/products/iphone-case-iphone-11-pro-case-on-phone-6133ba31864bd_1024x1024@2x.png?v=1630779964", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut condimentum velit. In hac habitasse platea dictumst." },
            { id: 412354, valor: 25, modelo: "Iphone 15", img: "https://terribletiki.com/cdn/shop/products/iphone-case-iphone-11-pro-max-case-on-phone-6324cb41923c8_1024x1024@2x.png?v=1663355731", desc: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
            { id: 5124756, valor: 25, modelo: "Iphone 11 pro max", img: "https://heatwaveterrace.com/cdn/shop/products/iphone-case-iphone-11-case-on-phone-62bd3c4b54381_1024x1024@2x.png?v=1656568925", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { id: 62352341, valor: 25, modelo: "Iphone 11 pro", img: "https://mizzoxstyle.com/cdn/shop/products/iphone-case-iphone-12-case-on-phone-62f01603812a8_1024x1024@2x.png?v=1659901724", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." },
            { id: 71246456, valor: 25, modelo: "Iphone 14 pro max", img: "https://mizzoxstyle.com/cdn/shop/products/iphone-case-iphone-7-8-case-on-phone-61ef40e7676d9_1024x1024@2x.png?v=1643070067", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 8645723, valor: 25, modelo: "Iphone 15 pro max", img: "https://www.dannyduncan69.com/cdn/shop/products/vrblk_bfbb0131-0c1b-438a-949e-e347b1991a3d_1445x.png?v=1623259526", desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." },
            { id: 94235465, valor: 25, modelo: "Iphone 13 pro", img: "https://cdn-stamplib.casetify.com/cms/image/db5f6a5d3d179778e0cfef327fc8e0c3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut condimentum velit. In hac habitasse platea dictumst." },
            { id: 102541, valor: 25, modelo: "Iphone 12 pro max", img: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-quack-hunt-stride-2-0-case-cover-for-iphone-11-images/DailyObjects-Quack-Hunt-Stride-2-0-Case-Cover-For-iPhone-11.png?tr=cm-pad_resize,v-2", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
            { id: 1346545761, valor: 25, modelo: "Iphone xr", img: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-spider-whisperer-stride-2-0-case-cover-for-iphone-15-pro-max-images/DailyObjects-Spider-Whisperer-Stride-2-0-Case-Cover-For-iPhone-15-Pro-Max.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60", desc: "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness." },
            { id: 1234242, valor: 25, modelo: "Iphone 12", img: "https://cdn-stamplib.casetify.com/cms/image/5142c13dea691d817ce456ed811edece.png", desc: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", },
            { id: 1564563, valor: 25, modelo: "Iphone 12", img: "https://cdn-stamplib.casetify.com/cms/image/bf13209c13b5eb14bb1824f5e7a887a3.png", desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system." },
        ]

    )





    return (
        <StateContext.Provider value={{ log, setLog, apiNovidade, apiParaVoce, itemCapinhaInfo, setItemCapinhaInfo, capinhas}}>
            {children}
        </StateContext.Provider>
    )

}

export default StatesProvider;