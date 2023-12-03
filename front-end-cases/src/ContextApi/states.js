import { createContext, useState } from "react";

export const StateContext = createContext({});

function StatesProvider({ children }){

    const [log, setLog] = useState(false);

    const [ apiNovidade ] = useState(
        [
        { id: 0, img: "https://ai4k.shop/wp-content/uploads/2023/01/tough-iphone-case-glossy-iphone-13-pro-front-63d7931aa8d85.png" },
        { id: 1, img: "https://desbraveofertas.com.br/cdn/shop/products/image-removebg-preview_800x.png?v=1696049637" },
        { id: 2, img: "https://lakersalldayeveryday.com/cdn/shop/products/iphone-case-iphone-14-pro-max-case-on-phone-6376797bcec12_1024x1024@2x.png?v=1668708957" },
        { id: 3, img: "https://heatwaveterrace.com/cdn/shop/products/iphone-case-iphone-11-pro-case-on-phone-6133ba31864bd_1024x1024@2x.png?v=1630779964" },
        { id: 4, img: "https://terribletiki.com/cdn/shop/products/iphone-case-iphone-11-pro-max-case-on-phone-6324cb41923c8_1024x1024@2x.png?v=1663355731" },
        { id: 5, img: "https://heatwaveterrace.com/cdn/shop/products/iphone-case-iphone-11-case-on-phone-62bd3c4b54381_1024x1024@2x.png?v=1656568925" },
        { id: 6, img: "https://mizzoxstyle.com/cdn/shop/products/iphone-case-iphone-12-case-on-phone-62f01603812a8_1024x1024@2x.png?v=1659901724" },
        { id: 7, img: "https://mizzoxstyle.com/cdn/shop/products/iphone-case-iphone-7-8-case-on-phone-61ef40e7676d9_1024x1024@2x.png?v=1643070067" },
        { id: 8, img: "https://www.dannyduncan69.com/cdn/shop/products/vrblk_bfbb0131-0c1b-438a-949e-e347b1991a3d_1445x.png?v=1623259526" },
        { id: 9, img: "https://cdn-stamplib.casetify.com/cms/image/db5f6a5d3d179778e0cfef327fc8e0c3.png" },
        { id: 10, img: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-quack-hunt-stride-2-0-case-cover-for-iphone-11-images/DailyObjects-Quack-Hunt-Stride-2-0-Case-Cover-For-iPhone-11.png?tr=cm-pad_resize,v-2" },
        { id: 11, img: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-spider-whisperer-stride-2-0-case-cover-for-iphone-15-pro-max-images/DailyObjects-Spider-Whisperer-Stride-2-0-Case-Cover-For-iPhone-15-Pro-Max.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60" },
        { id: 12, img: "https://cdn-stamplib.casetify.com/cms/image/5142c13dea691d817ce456ed811edece.png" },
        { id: 13, img: "https://cdn-stamplib.casetify.com/cms/image/bf13209c13b5eb14bb1824f5e7a887a3.png" },


        ]
    );

    return (
        <StateContext.Provider value={{ log, setLog, apiNovidade }}>
            { children }
        </StateContext.Provider>
    )

} 

export default StatesProvider;