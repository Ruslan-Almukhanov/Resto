export default class RestoService {
    _apiBase = 'http://localhost:3000';
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}`);
        } else {
            return await res.json();
        }
    }
    async getMenuItems() {
        return await this.getResource('/menu/')
    }

    async getMenuCart(id) {
        const res = await this.getResource(`/menu/`);
        const item = res.find( (el) => {
            return el.id === +id
        })
        return item;
    }
}