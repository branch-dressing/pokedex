import Component from '../component.js';

class Paging extends Component {

    onRender(el) {
        const prevPage = el.querySelector('#left');
        const nextPage = el.querySelector('#right');

        if (!prevPage) return;

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            } else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevPage.addEventListener('click', () => {
            updatePage(-1);
        });

        nextPage.addEventListener('click', () => {
            updatePage(1);
        });


    }
    renderHTML() {
        //const perPage = 20;
        //const count = this.props.count;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1; 
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        } else {
            page = parsedPage;
        }

        // if (!count) {
        //     return /*html*/`
        //     <h1 class="paging">No Results</h1>
        //     `;
        // }

        return /*html*/`
            <div id="controls">
                <button class="buttons" id="up">Prev Poke</button>
                <button class="buttons" id="left">${page === 1 ? 'Prev' : ''}</button>
                <button class="buttons" id="right">Next Page</button>
                <button class="buttons" id="down">Next Poke</button>
            </div>
            `;
    }
}

export default Paging;