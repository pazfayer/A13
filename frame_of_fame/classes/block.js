import {row, col} from "../scripts/utils"

class Block{
    constructor(type,data){
        this.type = type
        this.data = data
    }
    toHTML(){
        throw('toHTML function must be implemented')
    }
}

 export class TitleBlock extends Block{
    constructor(data){
        super('title',data)
    }
    toHTML() {
        return `
            <section class="mb-16">
                <h2 class="font-bold pb-2 mt-12 border-b border-gray-200 text-3xl">${this.data}</h2>
            </section>
        `;
    }
}

export class ColumnsBlock extends Block{
    constructor(data){
        super('columns',data)
    }
    toHTML() {
        const columnsHTML = this.data
            .map(
                (item) => `
            <a href="#" class="btn btn-purple" style="font-size: 2rem; color: #718096; margin-right: 20px;">
                ${item}
            </a>
        `
            )
            .join("");

        return `<header class="container mx-auto mt-4 flex flex-wrap justify-start space-x-4" style="margin-left: -10px;">
            ${columnsHTML}
        </header>`;
    }
}

/** 
export class ImagesBlock extends Block {
    constructor(data) {
        super('images', data);
    }
    
    toHTML() {
        const imagesHTML = this.data.map(imageUrl => `
            <img src="${imageUrl}" class="max-w-full h-auto" />
        `).join('');

        return `
            <div class="flex flex-wrap justify-left gap-4">
                ${imagesHTML}
            </div>
        `;
    }
}*/

export class ImageBlock extends Block{
    constructor(data){
        super('image',data)
    }
    toHTML(){
        return row(col(`<img src="${this.data} class="img-fluid"/>`))
    }
}