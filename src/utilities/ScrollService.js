import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from "rxjs"

export default class ScrollServices{
    static scrollHandler = newScrollService();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact ME")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView( {behavior : "smooth"});
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView( {behavior : "smooth"});
    }

    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisble = elementTop < window.innerHeight && elementBottom >=0;
        let completelyVisble = elementTop >= 0 && elementBottom <= window.innerHeight;
    

        switch (type) {

        case "partial":
            return partiallyVisble;
        
        case "complete":
            return completelyVisble 

        default:    
            return false;
        }

    }

    checkCurrentScreenUnderViewport = (event)=>{
        if(!event || object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDom = document.getElementById(screen.screen_name)
            if(!screenFromDom)
            continue;

            let fullyVisible = this.isElementInView (screenFromDom , "complete")
            let partiallyVisble = this.isElementInView(screnFromDom, "partial")

            if (fullyVisible || partiallyVisble){
                if(partiallyVisble && !screen.alreadyRender)
                ScrollServices.currentScreenFadeIn.next({
                    fedeInScreen: screen.screen_name
                });
                screen['alreadyRender'] = true;
                break;
            }
            if(fullyVisible){
                ScrollServices.currentScreenBroadCaster.next({
                  screen_name
                });
                break
            }
        }
    }
}

