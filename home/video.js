import Component from '../component.js';

class Video extends Component {
    renderHTML() {
        return /*html*/`
            <div id="iframe-box">
                <iframe src="https://www.youtube.com/embed/C19O5xm51dk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay></iframe>
            </div>
            `;
    }
}

export default Video;
