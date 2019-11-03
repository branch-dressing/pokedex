import Component from '../component.js';

class Video extends Component {
    renderHTML() {
        return /*html*/`
            <div id="iframe-box">
                <img src="http://static1.squarespace.com/static/56dab9c786db438d71cfecf9/586544c637c58187118586d3/5c77316c9140b7d87f05127a/1551315408806/92MKc.gif?format=1500w">
            </div>
            `;
    }
}

export default Video;
