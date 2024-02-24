import { ColumnsBlock, ImageBlock, TitleBlock } from "../classes/block";

import { RowSidebarBlock, TitleSidebarBlock } from "../classes/sidebarBlock";

const imageUrls = [
    './frame_of_fame/img/The Best of 2024/3 of Wands.jpg',
    '../img/The Best of 2024/10263573-MIFDERNS-7.jpg',
    '../img/The Best of 2024/August 15.jpg'
];

const tempStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum similique dolor consectetur ipsam repellat sed, voluptatem eos hic rem aliquid, sequi ad provident iure corrupti fugiat molestiae totam atque architecto.';
const title= 'Paintings'
const title1= 'Photography'
const title2= 'Drawings'
const title3= 'Sculpture'

export const model = [
    new ColumnsBlock([title,title1,title2,title3]),
    new TitleBlock("Best Sellers of 2024"),
    new ImageBlock(imageUrls[0]),
    new ImageBlock(imageUrls[1]),
    new ImageBlock(imageUrls[2]),
    new ImageBlock(imageUrls[3])
]

export const modelSidebar = [
    new TitleSidebarBlock("Frame of Fame"),
    new RowSidebarBlock([
        { text: "Home"},
        { text: "About"},
        { text: "Contact"}
    ]),
]



