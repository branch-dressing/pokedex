import Component from '../component.js';

class SearchOptions extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || '';
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            
            searchParams.set('page', 1);
            searchParams.set('pokemon', formData.get('search'));
            
            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/`
        <form class="options">
            </label>
                <input id="search" name="search">
        </form>
        `;
    }
}

export default SearchOptions;