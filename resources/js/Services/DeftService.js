
class DeftService {

    getResJSON = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getSearchBar = async () => {
        const res = await this.getResJSON('./searchBar.json');
        return res.searchBar;
    }

    getApartments = async () => {
        const res = await this.getResJSON('./cardsExample.json');
        return res.cardsExample;
    }
}

export default DeftService;
