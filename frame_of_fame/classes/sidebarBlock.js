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

export class TitleSidebarBlock extends Block {
    constructor(data) {
        super('title', data);
    }
    toHTML() {
        return `<div class="flex justify-between items-center">
                <h1 class="font-bold uppercase p-2 border-b border-gray-100"> <!-- Increase text size -->
                  <a href="/" class="hover:text-gray-700 tracking-widest text-xl text-white" style="text-decoration: none;">${this.data}</a>
                </h1>
              </div>`;
    }
}
export class RowSidebarBlock extends Block {
    constructor(data) {
        super('row', data);
    }
    toHTML() {
        return `<div>${this.data.map(item => `
            <div class="my-2">
                <a href="#" class="flex items-center justify-end text-lg text-white hover:text-gray-400" style="text-decoration: none;">
                    ${item.text}
                    ${this.getIcon(item.text)}
                </a>
            </div>
        `).join('')}</div>`;
    }

    getIcon(text) {
        switch (text.toLowerCase()) {
            case 'home':
                return `
                    <svg class="w-8 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <!-- Icon for home -->
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>`;
            case 'about':
                return `
                    <svg class="w-8 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <!-- Icon for about -->
                      <path
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                    </path>
                    </svg>`;
            case 'contact':
                return `
                    <svg class="w-8 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <!-- Icon for contact -->
                      <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                    </path>
                    </svg>`;
            default:
                return ''; // Default to empty string if no matching text
        }
    }
}


/**export class ImageBlock extends Block{
    constructor(data){
        super('image',data)
    }
    toHTML(){
        return row(col(`<img src="${this.data} class="img-fluid"/>`))
    }
}*/