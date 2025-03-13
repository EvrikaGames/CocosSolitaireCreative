import { _decorator, Component, Node } from 'cc';
import super_html_playable from './super_html_playable';
const { ccclass, property } = _decorator;

@ccclass('StoreController')
export class StoreController extends Component {

    start() {
        const googlePlay = 'https://play.google.com/store/apps/details?id=com.trivia.knowledgeispower';
        const appstore = 'https://apps.apple.com/us/app/power-of-knowledge-trivia/id6453888129';

        super_html_playable.set_google_play_url(googlePlay);
        super_html_playable.set_app_store_url(appstore);
    }
    
}

